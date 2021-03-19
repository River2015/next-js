import {useCallback} from 'react';
import styles from '../styles/searchBox.module.scss';
import Logo from './Logo';
import Button from './BaseComponents/Button';
import Search from './BaseComponents/Search';
// import AddModal from '../Modals/AddModal';
// import {useDispatch} from "react-redux";
// import {setAddModalVisibility} from "../../actions/modal-actions";

export default function SearchBox () {
    // const dispatch = useDispatch();

    const handleClickAdd = useCallback(() => {
        // dispatch(setAddModalVisibility(true))
        console.log('close')
    },[
        // dispatch
    ]);

   return (
        <div data-test-id='container'>
            <Logo/>
            <Button
                children='+ add movie'
                color='transparent'
                className={styles.button}
                onClick={handleClickAdd}
            />
            <h1 className='title' onClick={handleClickAdd}>find your movie</h1>
            <Search className={styles.search}/>
            {/* <AddModal /> */}
        </div>
   )
};
