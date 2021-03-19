import {useCallback} from 'react';
import styles from '../styles/movieFilter.module.scss';
import {GENRE} from '../mocks/mocks';
// import {useDispatch} from "react-redux";
// import {getMoviesFilterList, getMoviesList} from "../../actions/actions";


export default function MovieFilter() {
    // TODO: add react-redux
    // const dispatch = useDispatch();

    const getFilltredList = useCallback((item) => {
        // TODO: add react-redux
        // if (item !== "all") {
        //     dispatch(getMoviesFilterList(1, 40, item));
        // } else dispatch(getMoviesList(1, 40));
        console.log('dispatch action', item);
    }, []);
    return (
        <ul className={styles.wrapper}>
            {GENRE.map((item, index) => (
                <li key={index} className={styles.item} onClick={() => getFilltredList(item)}
                >{item}</li>
            ))}
        </ul>
    )
};