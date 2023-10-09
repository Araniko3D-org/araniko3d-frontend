import React from "react";
import Header from "./content/header.js";
import Main from "./content/main.js";
import Scene0 from "./Scenes/Scene0.js";
import Scene1 from "./Scenes/Scene1.js";
const App = () => {
  return (
    <div className ="App">
      <Scene0/>
      <Header />
      <Main />
    </div>
  )
}

export default App;

