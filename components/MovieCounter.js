import styles from '../styles/counter.module.scss';
// import {useSelector} from "react-redux";
// import {moviesSelector} from "../../selectors/selectors";


export default function MovieCounter({movies}) {
  
    return <div className={styles.wrapper}>{movies.length} movies found</div>;
}