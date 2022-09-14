import Page from '../components/page';
import Loading from '../components/loading';
import styles from '../styles/cadastro.module.scss';
import InputMask from 'react-input-mask';
import { CreateUser, VerifyUser } from '../utils/functions';
import { parseCookies } from 'nookies';
import { useState } from 'react';

export function getServerSideProps(context){
    const cookies = parseCookies(context);

    return{
        props: {
            cookies: cookies
        }
    }
}

export default function SignRoute(props){

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

    async function Submit(e){
        e.preventDefault();

        for(let item in data){
            let real_item = eval(`data.${item}`);
            if(real_item == ''){
                setMessage('preencha todos os campos')
                return
            }
        }
        
        if((data.email.indexOf(' ') || data.tel.indexOf(' ') || data.rg.indexOf(' ') || data.pass.indexOf(' ')) >= 0){
            setMessage('não use espaços nos campos de emai, celular, RG e senha');
            return
        }
        if(data.pass.length < 6){
            setMessage('digite uma senha com ao menos 6 caracteres')
            return
        }
        if(data.pass != verify){
            setMessage('comfirme sua senha corretamente');
            return
        }
        
        const date = `${new Date()}`;
        const client = {...data, "date": date, "wish": []};

        setMessage('loading');

        const verify_user = await VerifyUser(client);

        if(verify_user === true){
            setMessage('usuário já existente');
        }
        else{
            const response = await CreateUser(client);
            
            if(response.message === true){
                window.location.href = '/entrar?created=true';
            }
            else{
                setMessage('algo deu errado')
            }
        }
    }
    if(message != 'loading'){
        return(
            <Page title="Faça seu cadastro na Limits Gym" description="Tela para criação de usuário e efetuação do seu cadastro no banco de dados" cookies={props.cookies}>

                <h1 className={styles.header}>preencha o formulário com seus dados para se cadastrar na acamedia limits gym</h1>

                <form className={styles.sign_on} onSubmit={(e) => Submit(e)}>

                    {info && info.map((item, key) => {
                        if(item[0] == 'rg'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <InputMask className={styles.input} id={item[0]} mask='99.999.999-9' placeholder=" " onChange={(e) => InputEdit(e)} />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )    
                        }
                        if(item[0] == 'tel'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <InputMask className={styles.input} id={item[0]} mask='(99) 99999-9999' placeholder=' ' onChange={(e) => InputEdit(e)} />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )
                        }
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

            </Page>
        )
    }

    return(
        <>
            {Loading()}
        </>
    )
}