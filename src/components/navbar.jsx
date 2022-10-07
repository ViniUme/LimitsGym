/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';

export default function Navbar({cookies, name, link}){

    const [activate, setActivate] = useState(styles.navbar);
    const [main_link, setMain] = useState({
      login: styles.nav_link,
      signin: styles.nav_link,
      profile: styles.nav_link,
      index: styles.nav_link,
      contacts: styles.nav_link,
      plan: styles.nav_link,
    })

    useEffect(() => {
      setMain({...main_link, [link]: `${styles.nav_link} ${styles.nav_link_main}`});
    }, [])

    const SwitchNavbar = () => {
        if(activate == styles.navbar){
        setActivate(styles.navbar_activate);
        }
        else{
        setActivate(styles.navbar);
        }
    }

    function UserLinks(){
      if(cookies.USER_LOGIN == undefined){
        return(
          <div className={styles.sign_on_in}>
            <Link href="/entrar"><a className={main_link.login}>entrar</a></Link>
            <Link href="/cadastro"><a className={main_link.signin}>cadastrar</a></Link>
          </div>
        )
      }
      else{
        const first_name = name.split(" ");
        return(
          <div className={styles.sign_on_in}>
            <Link href="/perfil"><a className={main_link.profile}>{first_name[0]}</a></Link>
          </div>
        )
      }
    }

    return(
        <nav className={activate} id="navbar">

          <div className={styles.mobile_menu} onClick={() => SwitchNavbar()}>
            <div className={styles.menu_line_1}></div>
            <div className={styles.menu_line_2}></div>
            <div className={styles.menu_line_3}></div>
          </div>

          <div className={styles.link_menu}>
            <Link href="/"><a className={main_link.index}>início</a></Link>
            <Link href="/contatos"><a className={main_link.contacts}>contatos</a></Link>
            <Link href="/planos"><a className={main_link.plan}>planos</a></Link>
          </div>

          {UserLinks()}

      </nav>
    )
}