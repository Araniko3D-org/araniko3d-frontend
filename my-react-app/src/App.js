// App.js
import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./content/header.js";
import Main from "./content/main.js";
import MapPage from "./components/MapPage.js";
import DescriptionPage from "./components/DescriptionPage.js";
import "./App.css";

import ContactUs from "./ContactUs.js";

const App = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useLayoutEffect(() => {
    const delay = 5000; // 5 seconds

    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, delay);

    // Cleanup the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header color={""} visible={headerVisible} />
                <Main />
              </>
            }
          />
          <Route
            path="/map"
            element={
              <>
                <Header visible={headerVisible} />
                <MapPage />
              </>
            }
          />
          <Route
            path="/description-page"
            element={
              <>
                <Header visible={headerVisible} />
                <DescriptionPage />
              </>
            }
          />

          <Route
            path="/description-page/:title"
            element={
              <>
                <Header visible={headerVisible} />
                <DescriptionPage />
              </>
            }
          />

          <Route
            path="/contactus"
            element={
              <>
                <Header visible={headerVisible} />
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
