import React from "react";
import "./Home.css";
import Topbar from "../../Componets/Topbar/Topbar";
import Comedymovie from "../../Componets/MovieCategories/Comedy/Comedymovie";
import Horrormovie from "../../Componets/MovieCategories/Horror/Horrormovie";
import { Searchmodal } from "../../Componets/Searchmodal/Searchmodal";
import { useDisclosure } from "@chakra-ui/react";

const Frontend = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="homeContainer">
      <Topbar />
      <div className="bodyContainer">

      <Comedymovie />
      <Horrormovie />
      </div>
    </div>
  );
};

export default Frontend;
