import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div>
      <img
        className={css.divCard}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
