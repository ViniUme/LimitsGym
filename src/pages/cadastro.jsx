import Page from '../components/page';
import Loading from '../components/loading';
import { mask } from 'remask';
import { CreateUser, VerifyUser } from '../utils/functions';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import styles from '../styles/cadastro.module.scss';

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
        ['num', 'Número'],
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
        "num": "",
        "email": "",
        "tel": "",
        "dist": "",
        "rg": "",
        "pass": ""
    }
    const input_mask = {
        tel: ['(99) 99999-9999', '(99) 9999-9999'],
        rg: '99.999.999-9'
    }

    const [data, setData] = useState(json);
    const [message, setMessage] = useState('');
    const [verify, setVerify] = useState('');
    const [pattern, setPattern] = useState(input_mask);
    const [visible, setVisible] = useState({
        pass: 'password',
        verify: 'password'
    });


    function InputEdit(e){
        const {id, value} = e.target;

        if(id == 'tel'){
            const masked_tel = mask(value, pattern.tel);
            setData({...data, [id]: masked_tel})
            return
        }
        if(id == 'rg'){
            const masked_rg = mask(value, pattern.rg);
            setData({...data, [id]: masked_rg});
            return
        }

        setData({...data, [id]: value});
    }

    function HiddenPassword(id){
        if(visible[id] == 'password'){
            setVisible({...visible, [id]: 'text'});
        }
        else{
            setVisible({...visible, [id]: 'password'})
        }
    }

    async function Submit(e){
        e.preventDefault();
        
        /*
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
        */
    }
    if(message != 'loading'){
        return(
            <Page title="Faça seu cadastro na Limits Gym" description="Tela para criação de usuário e efetuação do seu cadastro no banco de dados" cookies={props.cookies}>

                <h1 className={styles.header}>preencha o formulário com seus dados para se cadastrar na acamedia limits gym</h1>

                <form className={styles.sign_on} onSubmit={(e) => Submit(e)}>

                    {info && info.map((item, key) => {
                        if(item[0] == 'num'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={styles.input} placeholder=" " type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' maxLength={5} inputMode='numeric' />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )    
                        }
                        if(item[0] == 'rg'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={styles.input} placeholder=" " type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' inputMode='numeric' />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )    
                        }
                        if(item[0] == 'tel'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={styles.input} placeholder=" " type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )
                        }
                        if(item[0] == 'pass'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <button className={styles.eye_pass} onClick={() => HiddenPassword('pass')}></button>
                                    <input className={styles.input} placeholder=" " type={visible.pass} id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' />
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
                        <button className={styles.eye_pass} onClick={() => HiddenPassword('verify')}></button>
                        <input className={styles.input} placeholder=" " type={visible.verify} id='verify' value={verify} onChange={(e) => setVerify(e.target.value)} autoComplete='off' />
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