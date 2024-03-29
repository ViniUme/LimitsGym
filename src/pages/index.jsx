import FrontCover from '../components/front_cover';
import GymClass from '../components/gym_class';
import GymFeature from '../components/gym_feature';
import Calendar from '../components/calendar';
import Page from '../components/page';
import Coaches from '../components/coaches';
import { VerifyUser } from '../utils/functions';
import { parseCookies } from 'nookies';
import style from '../styles/index.module.scss';

export async function getServerSideProps(context){
  let cookies = parseCookies(context);
  if(cookies.USER_LOGIN != undefined){
    let data = await VerifyUser(cookies.USER_LOGIN, context.req.rawHeaders[1]);

    return {
        props: {
            cookies: cookies,
            data: data.user
        }
    }
  }
  else{
    return {
      props: {
        cookies: cookies,
        data: {name: null}
      }
    }
  }
}

export default function Index(props) {
  
  return(
    <Page title="Academia Limits - Exceda seus limites" description="Assinatura da academia" cookies={props.cookies} name={props.data.name} link="index">
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