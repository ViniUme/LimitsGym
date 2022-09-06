import styles from '../styles/coaches.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Coaches(){
    return(
        <section className={styles.coaches_section}>
            <h3 className={styles.title}>TREINADORES</h3>
            <Link href="https://www.instagram.com/gabrieltardivo/"><a target="_blank" className={styles.img_div}>
                <div className={styles.image_coach_1} />
                <div className={styles.coache_text}>
                    <span>Gabriel Tardivo</span>
                    <a className={styles.insta}><Image src="/img/instagram.webp" width={30} height={30} alt="" /> <span className={styles.insta_id}>gabrieltardivo</span></a>
                </div>
            </a></Link>
            <Link href="https://www.instagram.com/maaxmarlon/"><a target="_blank" className={styles.img_div}>
                <div className={styles.image_coach_2} />
                <div className={styles.coache_text}>
                    <span>Max Marlon</span>
                    <a className={styles.insta}><Image src="/img/instagram.webp" width={30} height={30} alt="" /> <span className={styles.insta_id}>maaxmarlon</span></a>
                </div>
            </a></Link>
            <Link href="https://www.instagram.com/treinador_kasa/"><a target="_blank" className={styles.img_div}>
                <div className={styles.image_coach_3} />
                <div className={styles.coache_text}>
                    <span>Marcos Kasa</span>
                    <a className={styles.insta}><Image src="/img/instagram.webp" width={30} height={30} alt="" /> <span className={styles.insta_id}>treinador_kasa</span></a>
                </div>
            </a></Link>
            <Link href="https://www.instagram.com/julianocruz889/"><a target="_blank" className={styles.img_div}>
                <div className={styles.image_coach_4} />
                <div className={styles.coache_text}>
                    <span>Juliano Ricardo</span>
                    <a className={styles.insta}><Image src="/img/instagram.webp" width={30} height={30} alt="" /> <span className={styles.insta_id}>julianocruz889</span></a>
                </div>
            </a></Link>
        </section>
    )
}
