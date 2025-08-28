import { Header } from '../Header/Header'
import Welcome from '../Welcome/Welcome'
import '../../index.scss'

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Welcome />
      </main>
    </>
  )
}
