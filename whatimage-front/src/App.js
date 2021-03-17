import React from "react";
import "./App.css";
// import Classifier from "./components/classifier/classifier.js";
import ImageList from "./components/ImageList/ImageList.js";
import Navigation from "./components/Navigation/Navigation.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Classifier /> */}
      <ImageList />
    </div>
  );
}

export default App;
