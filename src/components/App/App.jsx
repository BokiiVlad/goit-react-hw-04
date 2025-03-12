import { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import queryServer from "../api";

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  // const [filter, setFilter] = useState("");

  const handleFilter = async (findWord) => {
    try {
      setError(false);
      const dataImg = await queryServer(findWord);
      setImages(dataImg);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleFilter} />
      {images && <ImageGallery value={images} />}
      {error && <ErrorMessage />}
    </>
  );
}

export default App;
