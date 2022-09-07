import Page from '../components/page';
import { useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

export default function SignRoute(props){

    const info = [
        ['nome', 'Nome'],
        ['cid', 'Cidade'],
        ['rua', 'Rua'],
        ['email', 'E-mail'],
        ['tel', 'Telefone/Celular'],
        ['bair', 'Bairro'],
        ['rg', 'RG'],
        ['senha', 'Senha'],
        ['senha', 'Comfirmar senha']
    ]
    const json = {
        "nome": "",
        "cid": "",
        "rua": "",
        "email": "",
        "tel": "",
        "bair": "",
        "rg": "",
        "senha": ""
    }
    const [data, setData] = useState(json);

    function Try(){
        setCookie(null, 'USER_LOGIN', email, {
            maxAge: 86400 * 7,
            path: '/'
        });
    }

    function InputValue(e){
        setEmail(e.target.value);
    }

    return(
        <Page title="Faça seu cadastro na Limits Gym" context="Tela para criação de usuário e efetuação do seu cadastro no banco de dados">
            <section>
                <input type="text" value={email} onChange={(e) => InputValue(e)} />
                <button onClick={() => Try()}>Show</button>
            </section>
        </Page>
    )
}

export async function getServerSideProps(context){
    const res = parseCookies(context)

    return {
        props: {
            res: res
        }
    }
}