import {useCallback} from 'react';

// import Dropdown from '../../Dropdown';
// import EditModal from '../../Modals/EditModal';
// import DeleteModal from '../../Modals/DeleteModal';
import styles from '../styles/movieItem.module.scss';
// import {useDispatch} from "react-redux";
// import {setDeleteModalVisibility, setEditModalVisibility} from "../../../actions/modal-actions";
// import {setMovieSelected} from "../../../actions/actions";

// import { Link} from "react-router-dom";

export default function MovieItem({ onClick, movie }) {
    const {id, title, poster_path, release_date, overview,} = movie;
    // const dispatch = useDispatch();

    // const handleClickEdit = useCallback(() => {
    //     dispatch(setEditModalVisibility(true))
    // },[
    //     dispatch
    // ]);
    
    // const handleClickDelete = useCallback(() => {
    //     dispatch(setDeleteModalVisibility(true))
    // },[dispatch]);

    const handleOnClick = useCallback(() => {
        // dispatch(setMovieSelected(movie));
        onClick(id);
    }, [
        // dispatch,
         movie
    ]);

    return (
    //    <Link className={styles.wrapper} to={`/film/${id}`} onClick={handleOnClick}>
               <div className={styles.wrapper} to={`/film/${id}`} onClick={handleOnClick}>
            <div className={styles.imgWrapper}>
                <img src={poster_path}/>
            </div>
            <div className={styles.info}>
                <span>{title}</span>
                <span>{release_date}</span>
            </div>
            <div>{overview}</div>
            {/* <Dropdown
                className={styles.dropdown}
                onClick={() => handleClickEdit(true)}
                onClickDelete={() => handleClickDelete(true)}
            />
            <EditModal id={id}/>
            <DeleteModal  id={id}/> */}
         {/* </Link> */}
        </div>
    )
}
