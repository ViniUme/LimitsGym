import styles from '../styles/calendar.module.scss';

export default function Calendar(){
    return(
        <div className={styles.align}>
        <h2 className={styles.title}>Horários de Atendimento</h2>
        <section className={styles.calendar}>

            <div className={styles.day_div_1}>
                <h3 className={styles.day_title}>Segunda, Quarta e Sexta</h3>
                <div className={styles.hours_div}>
                    <div>
                        05:30 À 09:00 <span className={styles.coache_name}>Gabriel</span><br/>
                        09:00 À 12:00 <span className={styles.coache_name}>Max</span><br/>
                        14:00 À 17:00 <span className={styles.coache_name}>Juliano</span><br/>
                        17:00 À 20:30 <span className={styles.coache_name}>Max</span><br/>
                        17:00 À 20:30 <span className={styles.coache_name}>Marcos</span><br/>
                        18:00 À 20:30 <span className={styles.coache_name}>Juliano</span>
                    </div>
                </div>
            </div>

            <div className={styles.day_div_2}>
                <h3 className={styles.day_title}>Terça e Quinta</h3>
                <div className={styles.hours_div}>
                    <div>
                        05:30 À 09:00 <span className={styles.coache_name}>Marcos</span><br/>
                        09:00 À 12:00 <span className={styles.coache_name}>Max</span><br/>
                        14:00 À 16:00 <span className={styles.coache_name}>Juliano</span><br/>
                        16:00 À 21:30 <span className={styles.coache_name}>Marcos</span><br/>
                        17:00 À 20:30 <span className={styles.coache_name}>Max</span><br/>
                        18:00 À 20:30 <span className={styles.coache_name}>Juliano</span>
                    </div>
                </div>
            </div>

            <div className={styles.day_div_3}>
                <h3 className={styles.day_title}>Sábado</h3>
                <div className={styles.hours_div}>
                    <div>
                        09:00 À 11:00 <span className={styles.coache_name}>Gabriel</span>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}