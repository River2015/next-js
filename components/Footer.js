import styles from '../styles/footer.module.scss';

export default function Footer(props) {
    return (
        <div className={styles.wrapper}>{props.children}</div>
    )
}
