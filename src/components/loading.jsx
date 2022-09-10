import styles from "../styles/loading.module.scss";

export default function Loading(){
    return(
        <section className={styles.load_section}>
            <div className={styles.load_obj}></div>
        </section>
    )
}