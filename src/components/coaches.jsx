import styles from '../styles/coaches.module.scss';
import Image from 'next/image';

export default function Coaches(){
    return(
        <section className={styles.coaches_section}>
            <div className={styles.img_div}>
                <Image src="/img/teste.png" alt="" width={250} height={416} /><br/>
                <div className={styles.coache_text}><span>Gabriel Tardivo</span></div>
            </div>
            <div className={styles.img_div}>
                <Image src="/img/teste.png" alt="" width={250} height={416} /><br/>
                <div className={styles.coache_text}><span>Juliano Cruz</span></div>
            </div>
            <div className={styles.img_div}>
                <Image src="/img/teste.png" alt="" width={250} height={416} /><br/>
                <div className={styles.coache_text}><span>Marcos kasa</span></div>
            </div>
            <div className={styles.img_div}>
                <Image src="/img/teste.png" alt="" width={250} height={416} /><br/>
                <div className={styles.coache_text}><span>Max Marlon</span></div>
            </div>
        </section>
    )
}