import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BookmarkContext } from "../../UseContext/Usecontext";
import { Searchmodal } from "../Searchmodal/Searchmodal";

const Navbar = () => {
  let { state, dispatch } = useContext(BookmarkContext);

  return (
    <div className="navContainer">
      <Link to="/">
        <img
          className="logoImg"
          src="https://desicinemas.tv/wp-content/uploads/2020/06/dc.png"
          alt="logoImg"
        />
      </Link>
      <div>
        <Searchmodal>
          <input className="inputBox" placeholder="search movie" type="text" />
        </Searchmodal>
      </div>
      <Link to="/Bookmark">
        <button className="bookmarkBtn">bookmarks</button>
      </Link>
    </div>
  );
};

export default Navbar;
