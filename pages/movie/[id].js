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
  const {movies, movie} = props;  
  const [headerContent, setHeaderContent] = useState(null);

    const handleClick = useCallback((headerContent) => {
        setHeaderContent(headerContent);
    }, [headerContent]);

  return (
    <Layout movies = {movies}>
        <Details movieInfo={movie} onClick={handleClick}/>
    </Layout>   
  )
}
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
  console.log(query);
  await store.dispatch(getMoviesList(3, 50));
  await store.dispatch(getMovieById(88));
  const movies = store.getState().moviesReducer.movies;
  const movie = store.getState().moviesReducer.movie;
  
  return {
    props: {
          movies,
          movie
        },
      };
  }
 );
