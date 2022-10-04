import Prices from '../components/prices'
import { VerifyUser } from '../utils/functions';
import Page from '../components/page';
import { parseCookies } from 'nookies';

export async function getServerSideProps(context){
    const cookies = parseCookies(context);
    const data = await VerifyUser(cookies.USER_LOGIN, context.req.rawHeaders[1]);

    return {
        props: {
            cookies: cookies,
            data: data
        }
    }
}

export default function Precos(props){
    return(
        <Page title="Preços dos Planos" context="Página que mostra o preço dos planos" cookies={props.cookies} name={props.data.name}>
            <Prices user={props.cookies} data={props.data.user} />
        </Page>
    )
}