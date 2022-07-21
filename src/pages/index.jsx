import Navbar from '../components/navbar';
import GymClass from '../components/gym_class'
import Page from '../components/page';
import style from '../styles/index.module.scss';
import Link from 'next/link';

export default function Index() {

  return(
    <Page title="Academia Limits - Exceda seus limites" description="Compra de produtos">
      <div className={style.container}>

        <Navbar/>

        <section className={style.front_cover}>
            <div className={style.wallpaper}>
                <span className={style.title_sub}>exceda seus limites</span>
                <span className={style.title_header}>academia limits</span>
                
                <Link href="#">
                    <a className={style.link_button}>
                        <button className={style.title_shadow}><span className={style.title_button}>junte-se a nós</span></button>
                    </a>
                </Link>
            </div>
        </section>

        <GymClass/>
        
      </div>
    </Page>
  )
}