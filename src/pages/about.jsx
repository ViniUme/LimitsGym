import Navbar from '../components/navbar';
import Page from '../components/page';
import styles from '../styles/about.module.scss';

export default function About(){
    return(
        <Page title="Sobre a Limits Gym" content="">
            <Navbar/>
            <section className={styles.about}>

            </section>
        </Page>
    )
}