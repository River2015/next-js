// import Head from 'next/head'
import styles from '../styles/home.module.scss';
import Footer from './Footer';
import Logo from './Logo';
import Primary from './Primary';
import {useState, useCallback} from 'react';

export default function Layout({children, movies}) {
  const [headerContent, setHeaderContent] = useState(null);

    const handleClick = useCallback((headerContent) => {
        setHeaderContent(headerContent);
    }, [headerContent]);
  return (
  <div className={styles.wrapper}>
      <div>{children}</div>            
              <Primary onClick={handleClick} movies={movies}/>             
              <Footer>
                  <Logo/>
              </Footer>
  </div>
  )
}
