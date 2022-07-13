import style from '../styles/index.module.scss'
import Link from 'next/link';
import { useState } from 'react';

export default function Index() {

  const [activate, setActivate] = useState(style.navbar);

  const SwitchNavbar = () => {
    if(activate == style.navbar){
      setActivate(style.navbar_activate);
    }
    else{
      setActivate(style.navbar);
    }
  }

  return(
    <div className={style.container}>

      <nav className={activate}>

        <div className={style.mobile_menu} onClick={() => SwitchNavbar()}>
          <div className={style.menu_line_1}></div>
          <div className={style.menu_line_2}></div>
          <div className={style.menu_line_3}></div>
        </div>

        <Link href="/"><a className={style.nav_link_main}>início</a></Link>
        <Link href="#"><a className={style.nav_link}>sobre nós</a></Link>
        <Link href="#"><a className={style.nav_link}>aula</a></Link>
        <Link href="#"><a className={style.nav_link}>contatos</a></Link>

      </nav>

      <section className={style.section_main}>
        <div className={style.wallpaper}></div>
        <h1 className={style.titles}>
          <span className={style.title_sub}>exceda seus limites</span>
          <span className={style.title_header}>academia limits</span>
          
          <Link href="#"><a className={style.link_button}><button className={style.title_shadow}><span className={style.title_button}>junte-se a nós</span></button></a></Link>

        </h1>
        <div class="container gym-class mb-5">
          <div class="row px-3">
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i class="flaticon-six-pack"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i class="flaticon-bodybuilding"></i>
                    <h3 class="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                        Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                        sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                    </p>
                    <a href="" class="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
          </div>
      </div>
      </section>

    </div>
  )
}