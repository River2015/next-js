import {useState, useCallback, Children} from 'react';
import Details from '../../components/Details';
import Layout from '../../components/Layout';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesList, getMovieById} from "../../store/actions/actions";
import { wrapper } from "../../store/index";

export default function HomeDetails(props) {
    const {query} = useRouter();
    
  const [headerContent, setHeaderContent] = useState(null);

    const handleClick = useCallback((headerContent) => {
        setHeaderContent(headerContent);
    }, [headerContent]);
//     const dispatch = useDispatch();
//     useEffect(() => {
      
//         dispatch(getMoviesList(1, 40));
// }, [dispatch]);
    // const movies = useSelector(state => state.moviesReducer.movies);
    
    const {movies, movie} = props;

    
  return (
    <Layout movies = {movies}>
        <Details data={movies} onClick={handleClick}/>
    </Layout>   
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }, context) => {
  await store.dispatch(getMoviesList(4, 80));
  await store.dispatch(getMovieById(88));
  const movies = store.getState().moviesReducer.movies;
  const movie = store.getState().moviesReducer.movies.filter(movie => movie.id == query);
  
  return {
  props: {
  movies,
  movie
  },
  };
  }
 );
