import styles from '../styles/primary.module.scss';
import MovieList from './MovieList';
import MovieCounter from './MovieCounter';
import MovieFilter from './MovieFilter';
import MovieSort from './MovieSort';

export default function Primary({onClick, movies }) {
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <MovieFilter/>
                <MovieSort/>
            </div>
            <MovieCounter  movies={movies}/>
            <MovieList onClick={onClick} movies={movies}/>
        </div>
        </>
    )
};