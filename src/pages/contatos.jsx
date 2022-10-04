import Page from '../components/page';
import Contacts from '../components/contact';
import Coaches from '../components/coaches';
import { VerifyUser } from '../utils/functions';
import { parseCookies } from 'nookies';
import styles from '../styles/contatos.module.scss';

export function getServerSideProps(context){
    const cookies = parseCookies(context);
    const data = await VerifyUser(cookies.USER_LOGIN, context.req.rawHeaders[1]);

    return {
        props: {
            cookies: cookies,
            data: data
        }
    }
}

export default function Contatos(props){
    return(
        <Page title="Contatos Limits Gym" description="Página com todos contatos da Limits Gym" cookies={props.cookies} name={props.data.name}>
            <section className={styles.contatos}>
                <Contacts/>
                <Coaches/>
            </section>
        </Page>
    )
}