// import { useEffect} from 'react';
import styles from '../styles/details.module.scss';
import Logo from './Logo';
import IconButton from './BaseComponents/IconButton';
//import {useDispatch, useSelector} from "react-redux";
// import { selectedMovieRequestSelector} from "../../selectors/selectors";
// import {useParams, Link} from "react-router-dom";

export default function Details ({data, movies}) {
    console.log(movies);
    const movieInfo = data[0];
   // console.log(data.data[0])
    // const movieId = useParams().id;
    // const dispatch = useDispatch();

    // useEffect(() => {
// TODO : get in pages
       // dispatch(getMovieById(movieId));
   // },[
       // dispatch, movieId
    //] );

    // const movieInfo = useSelector(selectedMovieRequestSelector);

    return (
        <div >
            <div className={styles.header}>
                <Logo/>
            {/* <Link to="/"> */}
                <IconButton  size='sm'  icon='search'/>
                {/* </Link> */}
            </div>
            <div className={styles.content}>
                <div>
                    <img src={movieInfo?.poster_path}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.row}>
                        <h1 className={styles.title}>{movieInfo?.title}</h1>
                        <span className={styles.rate}>{movieInfo?.vote_average}</span>
                    </div>
                    <div>{movieInfo?.overview}</div>
                    <div className={styles.time}>
                        <span>{movieInfo?.release_date}</span>
                        <span className={styles.duration}>{movieInfo?.runtime} min</span>
                    </div>
                    <div>{movieInfo?.tagline}</div>
                </div>
            </div>
        </div>
    )
};
