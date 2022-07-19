import Navbar from '../components/navbar';
import FrontCover from '../components/front_cover';
import GymClass from '../components/gym_class';
import style from '../styles/index.module.scss';

export default function Index() {

  return(
    <div className={style.container}>

      <Navbar/>
      <FrontCover/>
      <GymClass/>
      
    </div>
  )
}