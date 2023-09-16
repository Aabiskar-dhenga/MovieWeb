import React, { useEffect, useState } from "react";
import "./Bookmark.css";
// import { useContext } from "react";
import { BookmarkContext } from "../../UseContext/Usecontext";
import Card from "../../Componets/Card/Card";
import Navbar from "../../Componets/Navbar/Navbar";
import { GetStorage } from "../../utils/LocalStorage";

const Bookmark = () => {
  let [lsData, setLsdata] = useState([]);
  let sdata = GetStorage();
  // let { state, dispatch } = useContext(BookmarkContext);
  useEffect(() => {
    tobeMapped();
  }, []);
  let tobeMapped = () => {
    let data = GetStorage();
    setLsdata(data);
    console.log("b", data.length);
  };
  return (
    <div className="bookmarkContainer">
      <Navbar />
      <div className="cardHolder">
        {sdata.length > 0 ? (
          lsData.map((item) => {
            return <Card setLsdata={setLsdata} isBookMark={true} item={item} />;
          })
        ) : (
          <div className="ifnotBookmarked">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/3d-plastilina/69/delete-sign--v2.png"
              alt="delete-sign--v2"
            />
            <h1 className="notifyTitle">Nothing is Bookmarked</h1>
          </div>
        )}

        {/* {   lsData.map((item) => {
          return <Card isBookMark={true} item={item} />;
        })} */}
      </div>
    </div>
  );
};

export default Bookmark;
