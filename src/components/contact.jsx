import Link from 'next/link';
import styles from '../styles/contatos.module.scss';

export default function Contact(){
    return(
        <>
            <h1 className={styles.companies_title}>Instagram das empresas</h1>
            <section className={styles.companies}>
                <div className={styles.contacts}>
                    <div className={`${styles.image} ${styles.image_1}`}/>
                    <h2 className={styles.text}>Siga nossa academia nas redes sociais para acompanhar as novidades.</h2>
                    <Link href="https://www.instagram.com/limitsgym/"><a target="_blank" className={styles.profile}>Seguir limits gym</a></Link>
                </div>

                <div className={styles.contacts}>
                    <div className={`${styles.image} ${styles.image_2}`}/>
                    <h2 className={styles.text}>Maior rede de lojas de suplementos e produtos naturais do Oeste Paulista.</h2>
                    <Link href="https://www.instagram.com/nutripointocz/"><a target="_blank" className={styles.profile}>seguir nutripoint</a></Link>
                </div>
            </section>
        </>
    )
}