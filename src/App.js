import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Form from "./components/form/form.js";
import Analysis from "./components/analyze/analysis";
import Home from "./components/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
        sssss
        <Route
          path="/analysis"
          element={
            <div>
              <Analysis />
            </div>
          }
        />
        <Route
          path="/form"
          element={
            <div>
              <Form />
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
