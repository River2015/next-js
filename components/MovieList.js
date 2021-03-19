// import {useEffect} from 'react';
import { MOVIES } from '../mocks/mocks';
// import {useDispatch, useSelector} from 'react-redux';
import styles from '../styles/movieList.module.scss';
import MovieItem from './MovieItem'
// import {getMoviesList, getMoviesSearchList} from "../../actions/actions";
// import {moviesSelector} from "../../selectors/selectors";
// import NotFound from "../NotFound";
// import * as qs from 'query-string';


export function MovieList ({onClick,  movies}) {
    // const movies = useSelector(moviesSelector);
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

    return (
        <div className={styles.wrapper}>
            {movies.data.map((movie) => (
                <MovieItem
                    movie={movie}
                    key={movie.id}
                    onClick={onClick}
                />
            ))}
        </div>
    )
};


//MovieList.getInitialProps = async (ctx) => {
    // return fetch(`http://localhost:4000/movies?search=${search}&searchBy=${searchBy}filter=${filter}?sortBy=${sortBy}&sortOrder=${sortOrder}?offset=${offset}&limit=${limit}`)
    //         .then(response => response.json())
    //         .then(json => {
    //             dispatch(getMoviesSuccess(json.data));
    //         })
    // 
    //console.log(ctx)       

//   const res = await fetch(`http://localhost:4000/movies`)
//   const movies = await res.json()
//   return {  }
// }


export async function getServerSideProps() {
    const res = await fetch(`http://localhost:4000/movies`)

    const data = await res.json()

    return { props: { data } }
}


export default MovieList;