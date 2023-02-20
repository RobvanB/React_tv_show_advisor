import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({ TVShow }) {
  const rating = TVShow.vote_average / 2;
  return (
    <div>
      <div className={s.title}>{TVShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating} /5 </span>
      </div>
      <div className={s.overview}>{TVShow.overview}</div>
    </div>
  );
}
