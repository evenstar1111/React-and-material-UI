import React, { Component } from "react";
import { ImageList, ImageListItem } from "@material-ui/core";
import images from "../../assets/images";

export class ImageListExample extends Component {
  render() {
    return (
      <ImageList>
        {images &&
          images.map((img, index) => (
            <ImageListItem key={index}>
              <img src={img.url} alt="" />
            </ImageListItem>
          ))}
      </ImageList>
    );
  }
}

export default ImageListExample;
