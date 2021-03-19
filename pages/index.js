import SearchBox from '../components/SearchBox';
import {useState, useCallback, Children} from 'react';
import Layout from '../components/Layout';

export default function Home(props) {
  const [headerContent, setHeaderContent] = useState(null);

    const handleClick = useCallback((headerContent) => {
        setHeaderContent(headerContent);
    }, [headerContent]);
  return (
    <Layout data = {props.data}>
        <SearchBox headerContent = {headerContent} onClick={handleClick}/>
    </Layout>   
  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4000/movies`)
  const data = await res.json()
  return { props: { data } }
}
