import styles from './HeroSmall.module.scss'

const HeroSmall = (props) => {
  return(
    <section className={styles.hero}>
        <div className={styles.hero__image}></div>
        <div className={styles.hero__content}>
            <div className="container">
                <h1 className={styles.hero__title}>{props.title}</h1>
            </div> 
        </div>
    </section> 
  )
} 

export default HeroSmall;