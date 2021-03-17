import React from "react";
import "./App.css";
// eslint-disable-next-line
import Classifier from "./components/classifier/classifier.js";
import ImageList from "./components/ImageList/ImageList";

function App() {
  return (
    <div className="App">
      {/* <Classifier /> */}
      <ImageList />
    </div>
  );
}

export default App;
