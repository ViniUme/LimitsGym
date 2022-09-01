import Link from 'next/link';
import styles from '../styles/contatos.module.scss';

export default function Contact(){
    return(
        <Link href="https://www.instagram.com/limitsgym/"><a className={styles.contacts} target="_blank">
            <h1 className={styles.name}>instagram limits</h1>
            <div className={styles.image} src="/img/logo.jpeg" width="200" height="200" alt="" />
            <span className={styles.profile}>@limitsgym</span>
        </a></Link>
    )
}