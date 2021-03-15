import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { Spinner } from "react-bootstrap";
import "./classifier.css";

class Classifier extends Component {
  state = {
    files: [],
    isLoading: false,
  };

  onDrop = (files) => {
    this.setState({ isLoading: true });
    this.loadImage(files);
  };

  loadImage = (files) => {
    setTimeout(() => {
      this.setState({
        files,
        isLoading: false,
      });
    }, 1000);
  };

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop} accept="image/png, image/jpg">
        {({ isDragActive, getRootProps, getInputProps }) => (
          <section className="container">
            <div {...getRootProps({ className: "dropzone back" })}>
              <input {...getInputProps()} />
              <i
                className="far fa-image mb-2 text-muted"
                style={{ fontSize: 100 }}
              ></i>
              <p className="text-muted">
                {isDragActive
                  ? "Drop some images"
                  : "Drag and drop some files here, or click to select files"}
              </p>
            </div>
            <aside>{files}</aside>
            {this.state.isLoading && (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )}
          </section>
        )}
      </Dropzone>
    );
  }
}

export default Classifier;
