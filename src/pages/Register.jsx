import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import avatar from "../images/addAvatar.png";
import { auth, db, storage } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, `images/${file.name}`);
      const metadata = {
        contentType: "image/jpeg",
      };

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(result.user, {
              displayName: name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", result.user.uid), {
              uid: result.user.uid,
              displayName: name,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", result.user.uid), {});

            navigate("/home");
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Abek Chat</span>
        <span className="title">Register</span>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <input type="file" name="img" id="file" />
          <label htmlFor="file">
            <img src={avatar} alt="avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {error && <span style={{ color: "red" }}>Something went wrong</span>}
        </form>
        Do you have an account? <a href="/login">Log In</a>
      </div>
    </div>
  );
};

export default Register;
