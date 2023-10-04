import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating.js";

// if another component uses StarRating component and needs certain state from it
function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="green" maxRating={8} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating />
    <StarRating defaultRating={3} />
    <StarRating
      size={24}
      color="red"
      messages={["Terrible :(", "Bad", "Okay :|", "Good", "Amazing!"]}
    />
    <StarRating size={30} color="blue" maxRating={10} className="test" />
    <Test />
  </React.StrictMode>
);
