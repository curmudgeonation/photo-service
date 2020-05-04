import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import App from "./App.jsx";

const PhotoDisplay = function () {
  let { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/listings/${id}/photos`)
      .then((res) => res.json())
      .then(
        (result) => {
          setPhotos(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <div class="photo-container">
      <ul>
        {photos.length > 0 ? (
          photos.map((photo) => {
            return (
              <li key={photo._id} class="photo">
                <img src={photo.url} alt={photo.description} />
              </li>
            );
          })
        ) : (
          <li>No photos</li>
        )}
      </ul>
      <Link to="/listings/:id/photos/details">Todo: Details Page </Link>
    </div>
  );
};

export default PhotoDisplay;
