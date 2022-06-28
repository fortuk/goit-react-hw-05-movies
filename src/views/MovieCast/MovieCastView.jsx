import { useState, useEffect } from 'react';
import * as api from '../../services/api';
import propTypes from 'prop-types';
import s from './MovieCastView.module.css';
import noImage from '../../images/noImage.jpg';

export default function MovieCastView({ movieId }) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        api.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
    }, [movieId]);

    return (
        <ul className={s.list}>
            {cast.map((item) => (
                <li key={item.id}>
                    <img
                        src={
                            item.profile_path
                                ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                                : noImage
                        }
                        alt={item.name}
                        width='100'
                        height='150'
                    />
                    <p className={s.name}>{item.name}</p>
                </li>
            ))}
        </ul>
    );
}

MovieCastView.propTypes = {
    movieId: propTypes.string.isRequired,
};