import React from "react";
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./content/header.js";
import Main from "./content/main.js";
// import MapPage from "./components/MapPage.js"
import "./App.css";
const App = () => {
  return (
    <div className="App"> 
      <Main/>
      <Header /> 
    </div>
  );
}


export default App;
