import {useCallback} from 'react';
import styles from '../styles/movieSort.module.scss';
import {SORTPOINTS} from '../mocks/mocks';
// import {useDispatch} from "react-redux";
// import {getMoviesSortingList} from "../../actions/actions";


const MovieSort = () => {
    // TODO: add react-redux
    // const dispatch = useDispatch();
    // TODO fix getting property from select options
    const item = 'release_date';
    const sortOrder = 'desc';
    const getSortedList = useCallback((e) => {
        const item = e.target.value;
        // TODO: add react-redux
        // dispatch(getMoviesSortingList(1, 40, item, sortOrder));
    }, [
        // dispatch
    ]);
    return (
        <>
            <label className={styles.label} onClick={() => getSortedList(item)}>sort by</label>
            <select className={styles.select} onChange={getSortedList}>
                {SORTPOINTS.map((item, index) => (
                    <option
                        key={index}
                        className={styles.item}
                    >{item}</option>
                ))}
            </select>
        </>
    )
};

export default MovieSort;
