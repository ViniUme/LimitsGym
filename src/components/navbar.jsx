import { useState } from 'react';
import Link from 'next/link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from '../styles/navbar.module.scss';

export default function Navbar({cookies}){

    const [activate, setActivate] = useState(styles.navbar);

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
            <Link href="/entrar"><a className={styles.nav_link}>entrar</a></Link>
            <Link href="/cadastro"><a className={styles.nav_link}>cadastrar</a></Link>
          </div>
        )
      }
      else{
        return(
          <div className={styles.sign_on_in}>
            <Link href="/perfil"><a className={styles.nav_link}>perfil</a></Link>
            <Link href="/carrinho"><a className={`${styles.nav_link} ${styles.shopping_cart}`}><ShoppingCartOutlinedIcon/></a></Link>
          </div>
        )
      }
    }

    return(
        <nav className={activate}>

          <div className={styles.mobile_menu} onClick={() => SwitchNavbar()}>
            <div className={styles.menu_line_1}></div>
            <div className={styles.menu_line_2}></div>
            <div className={styles.menu_line_3}></div>
          </div>

          <div className={styles.link_menu}>
            <Link href="/"><a className={styles.nav_link_main}>início</a></Link>
            <Link href="/contatos"><a className={styles.nav_link}>contatos</a></Link>
            <Link href="/precos"><a className={styles.nav_link}>preços</a></Link>
          </div>

          {UserLinks()}

      </nav>
    )
}