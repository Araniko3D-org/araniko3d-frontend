import React from "react";
import "./App.css";
import Avatar from "./components/Avatars/Avatar.js";
import Navbar from "./components/Layout/Navbar.js";

function App() {
  return (

    <div className="App">
      <Navbar/>
      <h1>Avatar Testing</h1>

      {/* Render avatars with different sizes and images */}
      <Avatar src="avatar1.jpg" initials="AB" mode="small" size="small" />
      <Avatar src="avatar2.jpg" initials="CD" mode="default" size="medium" />

      {/* Render multiple avatars with overlapping profiles */}
      <ul className="avatar-list">
        <li>
          <Avatar src="my-react-app/public/images/avatar.jpg" initials="EF" mode="large" size="large" />
        </li>
        <li>
          <Avatar src="avatar4.jpg" initials="GH" mode="large" size="large" />
        </li>
        <li>
          <Avatar src="avatar4.jpg" initials="GH" mode="large" size="large" />
        </li>
        <li>
          <Avatar src="avatar4.jpg" initials="GH" mode="large" size="large" />
        </li>
      </ul>
    </div>
  );
}

export default App;
