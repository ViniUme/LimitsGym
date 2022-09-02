import Navbar from '../components/navbar';
import FrontCover from '../components/front_cover';
import GymClass from '../components/gym_class';
import GymFeature from '../components/gym_feature';
import Calendar from '../components/calendar';
import Page from '../components/page';
import Coaches from '../components/coaches';
import Footer from '../components/footer';
import style from '../styles/index.module.scss';

export default function Index() {
  return(
    <Page title="Academia Limits - Exceda seus limites" description="Compra de produtos">
      <div className={style.container} lang="pt-BR">

        <Navbar/>
        <FrontCover/>
        <GymClass/>
        <GymFeature/>
        <Coaches/>
        <Calendar/>
        <Footer/>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </Page>
  )
}