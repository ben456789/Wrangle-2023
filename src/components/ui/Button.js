import styles from './Button.module.scss'

const Button = (props) => {
  return(
    <a target={props.target} className={`${styles.button} ${props.margin}`} href={props.link}>Join us today</a>
  );
};

export default Button;