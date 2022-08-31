import styles from '../styles/footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){
    return(
        <section className={styles.footer}>
            <div className={styles.contact}>
                <h3 className={styles.div_title}>Entrar em contato</h3>
                <span className={styles.div_item}><Image src="/img/local.webp" width={25} height={25} alt="" />R. Armando Sales, 489 - Osvaldo Cruz - SP</span>
                <span className={styles.div_item}><Image src="/img/tel.webp" width={25} height={25} alt="" />(41) 99674-8137</span>
                <Link href=""><a className={`${styles.div_item} ${styles.item_link}`}><Image src="/img/instagram.webp" width={25} height={25} alt="" />@limitsgym</a></Link>
            </div>
            <div className={styles.links}>
                <h3 className={styles.div_title}>Links Rápidos</h3>
                <Link href=""><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Sobre Nós</a></Link>
                <Link href=""><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Contatos</a></Link>
            </div>
        </section>
    )
}