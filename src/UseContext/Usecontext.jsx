import { createContext, useReducer } from "react";

export let BookmarkContext = createContext();

let BookmarkData = {
  name: "movies",
  bookmarks: [],
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setBookmark":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };

    case "remove":
      let filteredData = state.bookmarks.filter((item) => {
        return item.id !== action.payload.id;
      });
      return {
        ...state,
        bookmarks: filteredData,
      };

    default:
      return state;
  }
};

export let UseContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, BookmarkData);
  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
};
