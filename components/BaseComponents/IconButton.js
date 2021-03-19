import classnames from 'classnames';
import styles from '../../styles/IconButton.module.scss';

export default function IconButton (props) {
    const {
        onClick,
        size,
        icon,
    } = props;

    const className = classnames(
        styles.button,
        styles[`size-${size}`],
        styles[`icon-${icon}`],
        props.className
    );

    return (
        <button
            onClick={onClick}
            className={className}
        />
    );
};

