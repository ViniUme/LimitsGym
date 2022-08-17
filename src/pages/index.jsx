import Navbar from '../components/navbar';
import FrontCover from '../components/front_cover';
import GymClass from '../components/gym_class';
import GymFeature from '../components/gym_feature';
import Calendar from '../components/calendar';
import Page from '../components/page';
import style from '../styles/index.module.scss';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Index() {

  const { data: session } = useSession();

  return(
    <Page title="Academia Limits - Exceda seus limites" description="Compra de produtos">
      <div className={style.container} lang="pt-BR">

        <Navbar/>
        <FrontCover/>
        <GymClass/>
        <GymFeature/>
        <Calendar/>
        <button onClick={() => signIn('google')}>Sign in</button>
      </div>
    </Page>
  )
}