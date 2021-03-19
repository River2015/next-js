import classnames from 'classnames';
import styles from '../../styles/button.module.scss';

export default function Button (props) {
    const {
        onClick,
        disabled,
        type,
        children,
        color,
    } = props;

    const className = classnames(
        styles.button,
        styles[`color-${color}`],
        props.className
    );

    return (
        <button
            onClick={onClick}
            className={className}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

