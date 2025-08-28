import styles from './Header.module.scss'

export const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className={styles.navBar}>
            <div className={styles.logo}>Louvre</div>
            <menu>
              <ul className={styles.items}>
                <li className={styles.item}>
                  <a href="#" className={styles.active}>
                    Visiting
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="">Explore</a>
                </li>
                <li className={styles.item}>
                  <a href="">Video</a>
                </li>
                <li className={styles.item}>
                  <a href="">Gallery</a>
                </li>
                <li className={styles.item}>
                  <a href="">Tickets</a>
                </li>
                <li className={styles.item}>
                  <a href="">Contacts</a>
                </li>
              </ul>
            </menu>
          </div>
        </div>
      </header>
    </>
  )
}
