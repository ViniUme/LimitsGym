import Page from '../components/page';
import { useState } from 'react';

export default function SignRoute(){

    const info = [
        ['name', 'Nome'],
        ['city', 'Cidade'],
        ['road', 'Rua'],
        ['email', 'E-mail'],
        ['tel', 'Telefone/Celular'],
        ['dist', 'Bairro'],
        ['rg', 'RG'],
        ['pass', 'Senha']
    ]
    const json = {
        "name": "",
        "city": "",
        "road": "",
        "email": "",
        "tel": "",
        "dist": "",
        "rg": "",
        "pass": ""
    }

    const [data, setData] = useState(json);
    const [message, setMessage] = useState('');
    const [verify, setVerify] = useState('');

    function InputEdit(e){
        const {id, value} = e.target;
        setData({...data, [id]: value});
    }

    function Submit(e){
        e.preventDefault();
        
        if(data.pass != verify){
            setMessage('Suas senha estão diferentes');
            return
        }

        console.table(data);
    }

    return(
        <Page title="Faça seu cadastro na Limits Gym" context="Tela para criação de usuário e efetuação do seu cadastro no banco de dados">
            <section>
                <form onSubmit={(e) => Submit(e)}>
                    {info && info.map((item, key) => {
                        return(
                            <div key={key}>
                                <label htmlFor={info[0]}>{item[1]}</label>
                                <input type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' />
                            </div>
                        )
                    })}
                    <div>
                        <label htmlFor='verify'>Confirmar Senha</label>
                        <input type="text" id='verify' value={verify} onChange={(e) => setVerify(e.target.value)} autoComplete='off' />
                    </div>
                    <span>{message}</span>
                    <input type='submit' />
                </form>
            </section>
        </Page>
    )
}