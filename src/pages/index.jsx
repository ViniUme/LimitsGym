import style from '../styles/index.module.scss'
import Link from 'next/Link';
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

        <div className={style.hamburguer_menu} onClick={() => SwitchNavbar()}>
          <div className={style.menu_line_1}></div>
          <div className={style.menu_line_2}></div>
          <div className={style.menu_line_3}></div>
        </div>

        <Link href=""><a className={style.nav_link_main}>início</a></Link>
        <Link href=""><a className={style.nav_link}>sobre nós</a></Link>
        <Link href=""><a className={style.nav_link}>aula</a></Link>
        <Link href=""><a className={style.nav_link}>contatos</a></Link>

      </nav>

      <section className={style.section_main}>
        <div className={style.wallpaper}></div>
        <h1 className={style.titles}>
          <span className={style.title_sub}>exceda seus limites</span>
          <span className={style.title_header}>academia limits</span>
          
          <Link href=""><a><button className={style.title_shadow}><span className={style.title_button}>junte-se a nós</span></button></a></Link>

        </h1>
      </section>

    </div>
  )
}