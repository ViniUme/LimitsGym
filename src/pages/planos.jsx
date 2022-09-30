import Prices from '../components/prices'
import Page from '../components/page';
import { parseCookies } from 'nookies';

export function getServerSideProps(context){
    const cookies = parseCookies(context);

    return {
        props: {
            cookies: cookies
        }
    }
}

export default function Precos(props){
    return(
        <Page title="Preços dos Planos" context="Página que mostra o preço dos planos" cookies={props.cookies}>
            <Prices user={props.cookies} />
        </Page>
    )
}