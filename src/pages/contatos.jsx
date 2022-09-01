import Page from '../components/page';
import Navbar from '../components/navbar';
import Contacts from '../components/contacts';
import Coaches from '../components/coaches';
import styles from '../styles/contatos.module.scss';

export default function Contatos(){
    return(
        <Page title="Contatos Limits Gym" description="Página com todos contatos da Limits Gym">
            <Navbar/>
            <section className={styles.contatos}>
                <Contacts/>
                <Coaches/>
            </section>
        </Page>
    )
}