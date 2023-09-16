import React from "react";
import "./SearchMovieItem.css";
import { Link } from "react-router-dom";

const SearchMovieItem = ({ item }) => {
  console.log("this is item", item);
  return (
    <Link target="_blank" to={`/movies/${item.id}`}>
      <div className="searchMovieContainer">
        <div className="searchImgbannerWrapper">
          <img className="searchImgbanner" src={item.img} alt="bannner img" />
        </div>
        <div className="SearchMovieDes">
          <h1 className="specialHeadingTitle">{item.title}</h1>
          <p className="specialItemDesc">{item.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchMovieItem;
