import "./input.css";
import React from "react";
import searchIcon from "../assets/search.svg";
import DevInfo from "./devInfo";

export default function InputBox() {
  const [userInfo, setUserInfo] = React.useState([]);
  const [input, setInput] = React.useState("");
  const handleClick = function (event) {
    setInput(event.target.value);
  };
  const handleSubmit = function (event) {
    event.preventDefault();

    fetch(`https://api.github.com/users/${input}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data));
  };
  console.log(input);
  console.log(userInfo);
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <img className="searchIcon" src={searchIcon} alt="" />
        <input
          type="text"
          name="usersName"
          value={input}
          onChange={handleClick}
        />
        <button type="submit" className="searchButton">
          search
        </button>
      </form>
      <DevInfo
        name={userInfo.name}
        userName={userInfo.login}
        joinDate={userInfo.created_at}
        bio={userInfo.bio}
        repos={userInfo.public_repos}
        followers={userInfo.followers}
        following={userInfo.following}
        location={userInfo.location}
        links={userInfo.blog}
        twiter={userInfo.twitter_username}
        company={userInfo.company}
      />
    </main>
  );
}
