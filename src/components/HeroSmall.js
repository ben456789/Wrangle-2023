import styles from './heroSmall.module.scss'

const HeroSmall = (props) => {
  return(
    <section className={styles.heroSmall}>
        <div ></div>
        <div>
            <div className="container">
                <h1>{props.title}  </h1>
                
            </div> 
        </div>
    </section> 
  )
} 

export default HeroSmall;