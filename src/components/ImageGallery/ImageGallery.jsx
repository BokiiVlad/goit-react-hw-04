import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ value }) {
  return (
    <ul className={css.imageField}>
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
