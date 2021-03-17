import React, { Component } from "react";
import axios from "axios";
import Image from "./image.js";

class ImageList extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    axios
      .get("http://127.0.0.1:8000/api/images/", {
        headers: { accept: "application/json" },
      })
      .then((resp) => {
        this.setState({ images: resp.data });
        console.log(resp);
      });
  };
  render() {
    const images = this.state.images.map((img) => {
      return <Image key={img.id} picture={img.picture} name={img.classified} />;
    });
    return (
      <div>
        <h1>ImageList here</h1>
        {images}
      </div>
    );
  }
}

export default ImageList;
