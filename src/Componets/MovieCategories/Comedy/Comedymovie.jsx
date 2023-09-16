import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Card/Card";
import "./Comedymovie.css";

const Comedymovie = () => {
  let [comedyData, setComedyData] = useState([]);
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
    let data = response.data.message.comedy;
    setComedyData(data);
  };
  return (
    <div className="comedyWrapper">
      <h1 className="headingTitle">Comedy</h1>
      <div className="comedyCard">
        {comedyData.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Comedymovie;
