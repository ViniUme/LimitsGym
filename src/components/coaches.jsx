import styles from '../styles/coaches.module.scss';

export default function Coaches(){
    return(
        <section className={styles.coaches_section}>
            <div className={styles.img_div}>
                <div className={styles.image_coach_1} />
                <div className={styles.coache_text}><span>Gabriel Tardivo</span></div>
            </div>
            <div className={styles.img_div}>
                <div className={styles.image_coach_2} />
                <div className={styles.coache_text}><span>Max Marlon</span></div>
            </div>
            <div className={styles.img_div}>
                <div className={styles.image_coach_3} />
                <div className={styles.coache_text}><span>Marcos kasa</span></div>
            </div>
            <div className={styles.img_div}>
                <div className={styles.image_coach_4} />
                <div className={styles.coache_text}><span>Juliano Cruz</span></div>
            </div>
        </section>
    )
}