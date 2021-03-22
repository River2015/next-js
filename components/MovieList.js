import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles/movieList.module.scss';
import MovieItem from './MovieItem'
import NotFound from "./NotFound";


export function MovieList ({onClick, movies}) {

    if (!movies) return <NotFound/>;

    return (
         <div className={styles.wrapper}>
             {movies  && movies.map((movie) => (
                <MovieItem
                    movie={movie}
                    key={movie.id}
                    onClick={onClick}
                />
            ))}
        </div>
    )
};


export default MovieList;