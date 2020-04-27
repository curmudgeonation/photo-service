import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import PhotoGallery from "./PhotoGallery.jsx";

const API_URL = "http://localhost:5000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentDidMount() {
    this.getPhotos(id);
  }

  getPhotos(id) {
    axios
      .get(`${API_URL}/listings/${id}/photos`)
      .then((res) => {
        if (res.data) {
          this.setState({
            photos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <PhotoGallery photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
