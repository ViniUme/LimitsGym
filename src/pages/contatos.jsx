import Page from '../components/page';
import Contacts from '../components/contact';
import Coaches from '../components/coaches';
import { parseCookies } from 'nookies';
import styles from '../styles/contatos.module.scss';

export function getServerSideProps(context){
    const cookies = parseCookies(context);

    return {
        props: {
            cookies: cookies
        }
    }
}

export default function Contatos(props){
    return(
        <Page title="Contatos Limits Gym" description="Página com todos contatos da Limits Gym" cookies={props.cookies}>
            <section className={styles.contatos}>
                <Contacts/>
                <Coaches/>
            </section>
        </Page>
    )
}