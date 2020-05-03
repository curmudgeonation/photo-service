import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import PhotoDisplay from "./PhotoDisplay.jsx";
// import { PhotoCarousel } from "./PhotoCarousel.jsx";

const App = function () {
  return (
    <div>
      <Switch>
        <Route path="/:id" children={<PhotoDisplay />} />
      </Switch>
    </div>
  );
};
export default App;
