import Page from '../components/page';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/cadastro.module.scss';
import { useState } from 'react';

export default function SignRoute(){

    const info = [
        ['name', 'Nome'],
        ['city', 'Cidade'],
        ['road', 'Rua'],
        ['email', 'E-mail'],
        ['tel', 'Celular'],
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
            setMessage('comfirme sua senha corretamente');
            return
        }

        const date = `${new Date()}`;
        const client = {...data, "date": date};
        console.log(client);
    }

    return(
        <Page title="Faça seu cadastro na Limits Gym" context="Tela para criação de usuário e efetuação do seu cadastro no banco de dados">
            <Navbar/>

            <h1 className={styles.header}>preencha o formulário com seus dados para se cadastrar na acamedia limits gym</h1>

            <form className={styles.sign_on} onSubmit={(e) => Submit(e)}>

                {info && info.map((item, key) => {
                    return(
                        <div className={styles.div_input} key={key}>
                            <input className={styles.input} placeholder=" " type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' />
                            <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                            <span className={styles.line} />
                        </div>
                    )
                })}

                <div className={styles.div_input}>
                    <input className={styles.input} placeholder=" " type="text" id='verify' value={verify} onChange={(e) => setVerify(e.target.value)} autoComplete='off' />
                    <label className={styles.label} htmlFor='verify'>Confirmar Senha</label>
                    <span className={styles.line} />
                </div>

                <span className={styles.message}>{message}</span>
                <input className={styles.button} type='submit' />
                
            </form>

            <Footer/>
        </Page>
    )
}