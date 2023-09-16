import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmark from "./Pages/Bookmark/Bookmark.jsx";
import { UseContextProvider } from "./UseContext/Usecontext.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UseContextProvider>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/movies/:id" element={<Movies />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </UseContextProvider>
);
