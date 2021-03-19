import styles from '../styles/counter.module.scss';
// import {useSelector} from "react-redux";
// import {moviesSelector} from "../../selectors/selectors";


export default function MovieCounter() {
    // const movies = useSelector(moviesSelector);

    // TODO: mocked data reworck
    
    const movies = [1,2,3.45,6,7]

    return <div className={styles.wrapper}>{movies.length} movies found</div>;
}