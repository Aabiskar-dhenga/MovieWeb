import { useEffect, useState } from "react";
import "./Searchmodal.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import SearchMovieItem from "../SearchmovieItem/SearchMovieItem";

export const Searchmodal = ({ children }) => {
  let [searchQuery, setSearchQuery] = useState();
  let [showResult, setShowResult] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  let handleChange = (e) => {
    let value = e.target.value;
    setSearchQuery(value);
    console.log("this is what we are searhing", value);
  };

  useEffect(() => {
    fetched();
  }, [searchQuery]);

  let apiLink = `https://movieapi-fj4i.onrender.com/api/movie/search?name=${searchQuery}`;

  let fetched = async () => {
    let response = await axios.get(apiLink, {
      headers: {
        movieapi: "dhenga",
      },
    });
    let data = response.data.message;
    setShowResult(data);
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input
              onChange={handleChange}
              className="movieSearchBox"
              placeholder="search movie"
              type="text"
            />
            <div className="movieWraper">
              {showResult.map((item) => {
                return <SearchMovieItem item={item} />;
              })}
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
