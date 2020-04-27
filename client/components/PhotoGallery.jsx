import React, { useEffect, useState } from "react";

const PhotoGallery = ({ photos }) => {
  return (
    <ul>
      {photos && photos.length > 0 ? (
        photos.map((photo) => {
          return <li key={photo._id}>{photo.action}</li>;
        })
      ) : (
        <li>No photos</li>
      )}
    </ul>
  );
};

export default PhotoGallery;
