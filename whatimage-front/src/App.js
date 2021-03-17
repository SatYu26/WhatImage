import React from "react";
import "./App.css";
import Classifier from "./components/classifier/classifier.js";
import ImageList from "./components/ImageList/ImageList.js";
import Navigation from "./components/Navigation/Navigation.js";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Classifier} />
          <Route exact path="/list" component={ImageList} />
          <Route exact path="*" component={Classifier} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
