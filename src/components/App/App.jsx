import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import queryServer from "../api";
import PacmanLoader from "react-spinners/PacmanLoader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleFilter = (queryValue) => {
    setQuery(queryValue);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    const updateData = async () => {
      if (!query) {
        return;
      }

      try {
        setLoader(true);
        setError(false);
        const dataImg = await queryServer(query, page);
        setImages((prevData) => [...prevData, ...dataImg]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    updateData();
  }, [query, page]);

  const pageUp = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleFilter} />
      {images.length > 0 && <ImageGallery value={images} />}
      {loader && <PacmanLoader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loader && <LoadMoreBtn pageUp={pageUp} />}
    </>
  );
}

export default App;
