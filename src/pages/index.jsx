import FrontCover from '../components/front_cover';
import GymClass from '../components/gym_class';
import GymFeature from '../components/gym_feature';
import Calendar from '../components/calendar';
import Page from '../components/page';
import Coaches from '../components/coaches';
import { parseCookies } from 'nookies';
import style from '../styles/index.module.scss';

export async function getServerSideProps(context){
  let cookies = parseCookies(context);

  return {
      props: {
          cookies: cookies
      }
  }
}

export default function Index(props) {
  
  return(
    <Page title="Academia Limits - Exceda seus limites" description="Assinatura da academia" cookies={props.cookies}>
      <div className={style.container} lang="pt-BR">

        <FrontCover cookies={props.cookies}/>
        <GymClass cookies={props.cookies}/>
        <GymFeature/>
        <Coaches/>
        <Calendar/>

      </div>
    </Page>
  )
}