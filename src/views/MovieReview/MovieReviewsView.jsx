import { useState, useEffect } from 'react';
import * as api from '../../services/api';
import propTypes from 'prop-types';
import s from './MovieReviewsView.module.css';

export default function MovieReview({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.fetchMovieReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <>
          <ul className={s.list}>
            {reviews.map((item, id) => (
              <li key={id} className={s.item}>
                <p className={s.title}>{item.author}</p>
                <p className={s.desc}>{item.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No Reviews</p>
      )}
    </div>
  );
}
MovieReview.propTypes = {
  movieId: propTypes.string.isRequired,
};