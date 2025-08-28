import styles from './Welcome.module.scss'
import monaLisa from '../../assets/mona-lisa.png'

const Welcome = () => {
  return (
    <>
      <section className={styles.welcomeSection}>
        <div className="container">
          <div className={styles.welcomeBloc}>
            <div className="text">
              <div className="title">Welcome to the Louvre</div>
              <div className="text">From the castle to the museum</div>
            </div>
            <div className={styles.img}>
              <img
                src={monaLisa}
                alt="Mona Lisa"
                width="1000px"
                height="850px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Welcome
