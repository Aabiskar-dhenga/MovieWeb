import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Card/Card";
import "./Horrormovie.css";

const Horrormovie = () => {
  let [horrorData, setHorrorData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);
  let apiLink = "https://movieapi-fj4i.onrender.com/api/movie";
  let fetch = async () => {
    let response = await axios.get(apiLink, {
      headers: {
        movieapi: "dhenga",
      },
    });
    let data = response.data.message.horror;
    setHorrorData(data);
  };
  return (
    <div className="horrorWrapper">
      <h1 className="headingTitle">Horror</h1>
      <div className="horrorCard">
        {horrorData.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Horrormovie;
