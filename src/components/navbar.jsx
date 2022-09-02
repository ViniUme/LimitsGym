import Link from 'next/link';
import style from '../styles/navbar.module.scss';
import { useState } from 'react';

export default function Navbar({type}){

    const [activate, setActivate] = useState(style.navbar);

    const SwitchNavbar = () => {
        if(activate == style.navbar){
        setActivate(style.navbar_activate);
        }
        else{
        setActivate(style.navbar);
        }
    }

    function ChoseColor(){
      if(type == 1){
        return "linear-gradient(180deg, #101010df 50%, #00000000 100%)"
      }
      else{
        return "#101010"
      }
    }

    return(
        <nav className={activate} style={{background: ChoseColor()}}>

        <div className={style.mobile_menu} onClick={() => SwitchNavbar()}>
          <div className={style.menu_line_1}></div>
          <div className={style.menu_line_2}></div>
          <div className={style.menu_line_3}></div>
        </div>

        <Link href="/"><a className={style.nav_link_main}>início</a></Link>
        <Link href="/contatos"><a className={style.nav_link}>contatos</a></Link>

      </nav>
    )
}