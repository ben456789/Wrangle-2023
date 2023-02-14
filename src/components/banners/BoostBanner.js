import Button from "../ui/Button";

import styles from "./BoostBanner.module.scss"

const BoostBanner = () => {
  return(
    <section className={`${styles.boostBanner} white-bg shadow`}>
      <div className="container wide">
        <div className="row align-items-center">
          <div className="col">
            <h3>Lets boost your audience, reduce your costs and drive more business, together.</h3>
            <Button 
              link="/merchant#joinnow"
              margin="m-small-button"
            /> 
            <p className={styles.boostBanner__text}>Got a question? Call us on <a href="tel:+03301332544">0330 133 2544</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoostBanner;