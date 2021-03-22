import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles/movieList.module.scss';
import MovieItem from './MovieItem'
// import {getMoviesList, getMoviesSearchList} from "../../actions/actions";
// import {moviesSelector} from "../../selectors/selectors";
import NotFound from "./NotFound";
// import * as qs from 'query-string';


export function MovieList ({onClick, movies}) {
   
    // const {Search} = qs.parse(location.search);

    // const movies = MOVIES;
    // useEffect(() => {
    //     (Search)
    //         ? dispatch(getMoviesSearchList(Search))
    //         : dispatch(getMoviesList(1, 40));
    // }, [dispatch]);



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