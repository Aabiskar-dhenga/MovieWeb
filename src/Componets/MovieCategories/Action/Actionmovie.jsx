import React from "react";
import "./Actionmovie.css";
import { Moviedata } from "../../../utils/Moviedata";
import Card from "../../Card/Card";

const Actionmovie = () => {
  return (
    <div className="actionMovieContainer">
      <h3 className="headingTitle">Action Movie</h3>

      <div className="movieWrapper">
        {Moviedata.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Actionmovie;
