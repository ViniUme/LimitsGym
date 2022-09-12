import Page from '../components/page';
import Contacts from '../components/contact';
import Coaches from '../components/coaches';
import styles from '../styles/contatos.module.scss';

export default function Contatos(){
    return(
        <Page title="Contatos Limits Gym" description="Página com todos contatos da Limits Gym">
            <section className={styles.contatos}>
                <Contacts/>
                <Coaches/>
            </section>
        </Page>
    )
}