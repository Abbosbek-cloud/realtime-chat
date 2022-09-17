import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="user"
        />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello Jane</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
