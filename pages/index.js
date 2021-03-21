import SearchBox from '../components/SearchBox';
import {useState, useCallback, Children} from 'react';
import Layout from '../components/Layout';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesList} from "../store/actions/actions";
import withRedux from "next-redux-wrapper";
import {wrapper} from '../store/index';

export default function Home(props) {
  const [headerContent, setHeaderContent] = useState(null);

    const handleClick = useCallback((headerContent) => {
        setHeaderContent(headerContent);
    }, [headerContent]);
//     const dispatch = useDispatch();
//     useEffect(() => {
      
//       dispatch(getMoviesList(1, 40));
// }, [dispatch]);

    // const movies = useSelector(state => state.moviesReducer.movies);
    console.log(props);
    const movies = props.movies
   
    

  return (
    <Layout movies = {movies}>
        <SearchBox headerContent = {headerContent} onClick={handleClick}/>
    </Layout>   
  )
}

Home.getInitialProps = ({store, isServer, pathname, query}) => {
  // component will read from store's state when rendered

  store.dispatch(getMoviesList(1, 40));
  // pass some custom props to component from here
  console.log(store, isServer, pathname, query);
  return {value: ''}; 
};

//Home = withRedux(makeStore, (state) => state.moviesReducer.movies)(Page);

Home = wrapper.withRedux(Home);
// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:4000/movies`)
//   const data = await res.json()
//   return { props: { data } }
// }
