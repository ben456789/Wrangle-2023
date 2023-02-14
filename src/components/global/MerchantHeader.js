import Button from "../ui/Button"

import styles from './MerchantHeader.module.scss'

export default function MerchantHeader() {
  return(
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <a href="/"><img className="logo" /></a>
          <div className="burger-menu-toggle">
              <span className="burger-icon">Menu</span>
          </div>
          <div className="mobile-nav-wrapper">
              <nav className={styles.header__nav}>
                  <a href="/merchant#how-we-help">Why Wrangle</a>
                  <a href="/merchant#how-it-works">How it Works</a>
                  <a href="https://help.joinwrangle.com/merchant/" className="wide-left">Help</a>
                  <a href="https://merchant.joinwrangle.com/" target="_blank" className="button white">Log in</a>
                  <Button 
                    link="https://merchant.joinwrangle.com/"
                    target="_blank"
                    margin="nav-margin"
                  />
                  <Button 
                    link="#joinnow"
                    margin="nav-margin"
                  />
              </nav>
          </div>
        </div>
      </div>
    </header>
  )
}


