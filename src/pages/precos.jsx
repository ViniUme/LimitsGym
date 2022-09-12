import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Prices from '../components/prices'
import Page from '../components/page';

export default function Precos(){
    return(
        <Page title="Preços dos Planos" context="Página que mostra o preço dos planos">
            <Prices/>
        </Page>
    )
}