// import css from "./ImageGallery.modal.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ value }) {
  return (
    <ul>
      {value.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
}
