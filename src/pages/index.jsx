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
    <Page title="Academia Limits - Exceda seus limites" description="Assinatura da academia">
      <div className={style.container} lang="pt-BR">

        <Navbar type="1"/>
        <FrontCover/>
        <GymClass/>
        <GymFeature/>
        <Coaches/>
        <Calendar/>
        <Footer/>

      </div>
    </Page>
  )
}