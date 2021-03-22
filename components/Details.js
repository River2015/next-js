import styles from '../styles/details.module.scss';
import Logo from './Logo';
import IconButton from './BaseComponents/IconButton';
import Link from 'next/link';

export default function Details ({movieInfo}) {

    return (
        <div >
            <div className={styles.header}>
                <Logo/>
                <Link href="/">
                    <IconButton className={styles.iconButton} size='xlg'  icon='search'/>
                </Link>
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
