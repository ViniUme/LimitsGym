import Page from '../components/page';
import { useState } from 'react';
import { setCookie, parseCookies } from 'nookies';

export default function SignRoute(props){

    const [email, setEmail] = useState(props.res.USER_LOGIN);

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