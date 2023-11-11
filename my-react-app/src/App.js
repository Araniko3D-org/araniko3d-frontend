import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./content/header.js";
import Main from "./content/main.js";
import MapPage from "./components/MapPage.js";
import DescriptionPage from "./components/DescriptionPage.js";
import "./App.css";

import ContactUs from "./ContactUs.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header color={""} />
                <Main />
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <Header />
                <MapPage />
              </>
            }
          />
          <Route
            path="/description-page"
            element={
              <>
                <Header />
                <DescriptionPage />
              </>
            }
          />

          <Route
            path="/contactus"
            element={
              <>
                <Header />
                <ContactUs />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
