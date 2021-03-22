import SearchBox from "../components/SearchBox";
import { useState, useCallback, Children } from "react";
import Layout from "../components/Layout";
import React from "react";
import { getMoviesList, getMoviesSearchList } from "../store/actions/actions";
import { wrapper } from "../store/index";
import {useRouter} from 'next/router';
import Link from 'next/link';
 
export default function Home({ movies }) {
  const {query} = useRouter();
  console.log(query);
  const [headerContent, setHeaderContent] = useState(null);
 
  const handleClick = useCallback(
  (headerContent) => {
    setHeaderContent(headerContent);
  },
    [headerContent]
  );
 
 return (
        <Layout movies={movies}>
            <SearchBox headerContent={headerContent} onClick={handleClick} />
        </Layout>
 );
}
 
export const getServerSideProps = wrapper.getServerSideProps(
 async ({ store, query }) => {
 await store.dispatch(getMoviesSearchList(query.Search));
 const movies = store.getState().moviesReducer.movies;
 
 return {
  props: {
    movies,
    },
  };
 }
);
