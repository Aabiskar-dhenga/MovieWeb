import React, { useEffect, useState } from "react";
import "./Movies.css";
import axios from "axios";
import { useParams } from "react-router";
import Navbar from "../../Componets/Navbar/Navbar";
import { useContext } from "react";
import { BookmarkContext } from "../../UseContext/Usecontext";

const Movies = () => {
  let { state, dispatch } = useContext(BookmarkContext);
  let [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchedData();
  }, []);

  let apiLink = `https://movieapi-fj4i.onrender.com/api/movie/${id}`;
  let fetchedData = async () => {
    let response = await axios.get(apiLink, {
      headers: {
        movieapi: "dhenga",
      },
    });
    console.log("this is movie response", response.data.message);
    let data = response.data.message;
    setItem(data);
  };

  useEffect(() => {
    console.log("this is item ", item);
  }, [item]);

  let handleBookmark = () => {
    dispatch({ type: "setBookmark", payload: item });
    alert("this page is added to the bookmark");
  };

  return (
    <div className="moviesContainer">
      <Navbar />
      <div className="bannerWrapper">
        <img className="movieBanner" src={item.img} alt="movieBanner" />
        <div className="movieInfo">
          <h1 className="movieTitle">{item.title}</h1>
          <p className="movieDescriptions">{item.desc}</p>
          <div className="watchMovieWrapper">
            <button onClick={handleBookmark} className="movieLinkBtn">
              BookMark
            </button>
            <a target="_blank" href={item.url}>
              <button className="movieLinkBtn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
