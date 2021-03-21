import {useState, useCallback, Children} from 'react';
import Details from '../../components/Details';
import Layout from '../../components/Layout';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesList} from "../../store/actions/actions";

export default function HomeDetails(props) {
    const {query} = useRouter();
    console.log(props);
  const [headerContent, setHeaderContent] = useState(null);

    const handleClick = useCallback((headerContent) => {
        setHeaderContent(headerContent);
    }, [headerContent]);
    const dispatch = useDispatch();
    useEffect(() => {
      
        dispatch(getMoviesList(1, 40));
}, [dispatch]);
    const movies = useSelector(state => state.moviesReducer.movies);
    
    console.log(movies);
    
  return (
    <Layout movies = {movies}>
        <Details data={movies} onClick={handleClick}/>
    </Layout>   
  )
}
// export async function getServerSideProps(ctx) {
//     const {query} = ctx;
//     console.log(ctx);
//   const res = await fetch(`http://localhost:4000/movies`)
//   const data = await res.json()
//   return { props: { data } }
// }

// export async function getStaticProps(context) {
//     const res = await fetch('http://localhost:4000/movies')
//     const json = await res.json()
//     return { props: { data } }
//   }

// export async function getServerSideProps(ctx) {
//     const {query} = ctx;
//     console.log(ctx);
//   const res = await fetch(`http://localhost:4000/movies/${query}`)
//   const dataId = await res.json()
//   return { props: { dataId } }
// }
