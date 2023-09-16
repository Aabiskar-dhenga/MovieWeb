import React from "react";
import "./Card.css";
import { useContext } from "react";
import { BookmarkContext } from "../../UseContext/Usecontext";
import { Link } from "react-router-dom";
import { BsBookmarkCheck } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useAlert } from "../../Hooks/Usealert";
import {
  DeleteFunctionality,
  GetStorage,
  SetStorage,
} from "../../utils/LocalStorage";

const Card = ({ item, setLsdata, isBookMark }) => {
  let { state, dispatch } = useContext(BookmarkContext);
  const { alert } = useAlert();
  const handleRemoveBookMark = (deletingId) => {
    // dispatch({ type: "remove", payload: item });
    DeleteFunctionality(deletingId);
    let data = GetStorage();
    setLsdata(data);
    alert("Bookmarked Removed", "error");
  };
  let handleBookmark = () => {
    // dispatch({ type: "setBookmark", payload: item });
    SetStorage(item);
    alert("Bookmarked successfully", "success");
  };

  return (
    <div className="CardWrapper">
      <div className="cardImgWrapper">
        <img className="cardImg" src={item.img} alt="cardImg" />
        {isBookMark ? (
          <button
            onClick={() => {
              handleRemoveBookMark(item.id);
            }}
            className="hover-button "
          >
            <AiOutlineDelete />
          </button>
        ) : (
          <button onClick={handleBookmark} className="hover-button ">
            <BsBookmarkCheck />
          </button>
        )}
      </div>
      <div className="cardBtnWrapper">
        <Link to={`/movies/${item.id}`}>
          <button className="readmoreBtn">Readmore</button>
        </Link>
        <a target="_blank" href={item?.url}>
          <button className="watchBtn">WatchNow</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
