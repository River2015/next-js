// import {useEffect} from 'react';
import { MOVIES } from '../mocks/mocks';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles/movieList.module.scss';
import MovieItem from './MovieItem'
// import {getMoviesList, getMoviesSearchList} from "../../actions/actions";
// import {moviesSelector} from "../../selectors/selectors";
// import NotFound from "../NotFound";
// import * as qs from 'query-string';


export function MovieList ({onClick}) {
    const movies = useSelector(state => state.moviesReducer.movies);
    console.log(movies);
    // const dispatch = useDispatch();
    // const {Search} = qs.parse(location.search);

    // const movies = MOVIES;
    // useEffect(() => {
    //     (Search)
    //         ? dispatch(getMoviesSearchList(Search))
    //         : dispatch(getMoviesList(1, 40));
    // }, [dispatch]);

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [movies]);

    // if (movies.length === 0) return <NotFound/>;

    if (!movies) {
        return
    }
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