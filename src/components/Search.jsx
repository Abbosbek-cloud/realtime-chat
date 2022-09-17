import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Find a user"
        />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="user"
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
