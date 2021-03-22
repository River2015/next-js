import {useState} from 'react';
import Button from './Button';
import classnames from 'classnames';

import styles from '../../styles/search.module.scss';
import Link from 'next/link';


export default function Search(props) {
    const {classNames} = props;
    const className = classnames(
        styles.wrapper,
        props.className
    );
    const [value, setValue] = useState('');

    const handleChange = (event) =>  {
        setValue(event.target.value);
    };

    const onHandleClick = (event) => {
        event.preventDefault();      
    };
    return (
            <form className={className} onSubmit={onHandleClick}>
                <input className={styles.input}  value={value} onChange={handleChange}/>
                <Link href={`/search/?Search=${value}`}>
                    <Button children='search' className={styles.button} type='submite'/>
                </Link>
                
            </form>
    )
};
