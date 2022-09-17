import React from "react";
import attach from "../images/attach.png";
import image from "../images/img.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={attach} alt="attach" />
        <input type="file" id="file" />
        <label htmlFor="file">
          <img src={image} alt="image" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
