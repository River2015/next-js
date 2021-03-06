// import Head from 'next/head'
import styles from '../styles/home.module.scss';
import Footer from './Footer';
import Logo from './Logo';
import Primary from './Primary';
import {useState, useCallback} from 'react';

export default function Layout({children, data}) {
  const [headerContent, setHeaderContent] = useState(null);

    const handleClick = useCallback((headerContent) => {
        setHeaderContent(headerContent);
    }, [headerContent]);
  return (
  <div className={styles.wrapper}>
      <div>{children}</div>
              {/* <Header headerContent = {headerContent} onClick={handleClick}/> */}
               {/* <ErrorBoundary> */}
                  <Primary onClick={handleClick} movies={data}/>
              {/* </ErrorBoundary> */}
              <Footer>
                  <Logo/>
              </Footer>
  </div>
  )
}
