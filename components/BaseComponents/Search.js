import {useState} from 'react';
import Button from './Button';
import classnames from 'classnames';

import styles from '../../styles/search.module.scss';
// import {useDispatch} from "react-redux";
// import {getMoviesSearchList} from "../../../actions/actions";
// import { useHistory } from "react-router-dom";

export default function Search(props) {
   // const routerHistory = useHistory();
    const {classNames} = props;
    const className = classnames(
        styles.wrapper,
        props.className
    );
    // const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (event) =>  {
        setValue(event.target.value);
    };

    const onHandleClick = (event) => {
        event.preventDefault();
       //  dispatch(getMoviesSearchList(value))

      //  TODO: replace in pages!!!
       //  routerHistory.push(`/search/?Search=${value}`);
      
    };
    return (
            <form className={className} onSubmit={onHandleClick}>
                <input className={styles.input}  value={value} onChange={handleChange}/>
                <Button children='search' className={styles.button} type='submite'/>
            </form>
    )
};
