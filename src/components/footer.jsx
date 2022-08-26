import styles from '../styles/footer.module.scss'
import Image from 'next/image';

export default function Footer(){
    return(
        <section className={styles.footer}>
            <div className={styles.contact}>
                <h3 className={styles.div_title}>Entrar em contato</h3>
                <span><Image src="/img/local.webp" width={20} height={20} alt="" />R. Armando Sales, 489 - Centro, Osvaldo Cruz - SP, 17700-000</span>
            </div>
            <div className={styles.links}>
                <h3 className={styles.div_title}>Links Rápidos</h3>
            </div>
        </section>
    )
}