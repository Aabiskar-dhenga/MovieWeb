import React, { useEffect, useState } from "react";
import "./Topbar.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Topbar = () => {
  let [thumnail, setThumnail] = useState([]);
  let [showMovie, setshowMovie] = useState({});

  useEffect(() => {
    apiFetch();
  }, []);

  let apiLink = "https://movieapi-fj4i.onrender.com/api/thumbnail";
  let apiFetch = async () => {
    let response = await axios.get(apiLink, {
      headers: {
        movieapi: "dhenga",
      },
    });

    let fuckingMovie = response.data.message;

    setThumnail(fuckingMovie);
  };

  useEffect(() => {
    updatingData();
  }, [thumnail]);

  let updatingData = () => {
    if (thumnail.length > 0) {
      let randomNumber = Math.round(Math.random() * 5);
      let randomMovie = thumnail[randomNumber];
      setshowMovie(randomMovie);
    }
  };

  return (
    <div
      className="topContainer"
      style={{
        backgroundImage: `url(${showMovie.img})`,
      }}
    >
      <Navbar />
      <div className="movieInfo">
        <h1 className="headingssTitle">{showMovie.title}</h1>
        <div className="buttonWrappper">
          <a target="_blank" href={showMovie.url}>
            <button className="playBtn commonBtn">Play</button>
          </a>
          <button className="listBtn commonBtn">My List</button>
        </div>
        <p className="movieDescription">{showMovie.desc}</p>
      </div>
    </div>
  );
};

export default Topbar;
