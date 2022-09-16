/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
    const pass_visible = {
        pass: {
            type: 'password',
            className: styles.eye_svg,
        },
        verify: {
            type: 'password',
            className: styles.eye_svg
        }
    }

    const [data, setData] = useState(json);
    const [message, setMessage] = useState('');
    const [verify, setVerify] = useState('');
    const [pattern, setPattern] = useState(input_mask);
    const [visible, setVisible] = useState(pass_visible);


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
        console.log(id)
        if(visible[id].type == 'password'){
            setVisible({
                ...visible,
                [id]: {
                    type: 'text',
                    className: `${styles.eye_svg} ${styles.eye_svg_red}`,
                }
            });
        }
        else{
            setVisible({
                ...visible,
                [id]: {
                    type: 'password',
                    className: styles.eye_svg
                }
            })

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
                            console.log(visible.pass)
                            return(
                                <div className={styles.div_input} key={key}>
                                    <button className={styles.eye_pass} onClick={() => HiddenPassword('pass')}>
                                        <svg className={visible.pass.className} version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                                <path d="M2385 3904 c-320 -35 -568 -96 -850 -209 -477 -192 -984 -531 -1387 -926 -144 -141 -162 -173 -139 -251 21 -74 327 -359 616 -574 528 -392 1066 -630 1612 -711 162 -24 484 -24 646 0 468 70 914 247 1372 545 259 169 507 367 717 573 144 141 162 173 139 252 -21 73 -327 358 -616 573 -525 390 -1070 631 -1605 709 -103 15 -426 27 -505 19z m318 -305 c518 -77 907 -522 907 -1039 0 -571 -479 -1050 -1050 -1050 -628 0 -1131 578 -1039 1193 86 574 621 980 1182 896z m-1267 -294 c-99 -151 -161 -302 -202 -495 -26 -119 -26 -381 0 -500 41 -194 102 -343 203 -497 16 -25 6 -21 -109 39 -134 70 -329 191 -462 286 -182 132 -496 398 -496 422 0 14 231 218 356 315 125 98 303 221 419 290 73 44 295 164 304 165 2 0 -4 -11 -13 -25z m2611 -185 c158 -101 252 -169 402 -288 130 -104 301 -259 301 -272 0 -14 -231 -218 -356 -315 -204 -159 -451 -319 -643 -415 -82 -41 -84 -41 -67 -16 99 152 161 303 202 496 26 119 26 381 0 500 -41 194 -102 343 -203 497 -16 25 -6 21 109 -39 70 -37 185 -103 255 -148z"/>
                                                <path d="M2465 3304 c-11 -2 -45 -9 -75 -15 -217 -44 -429 -224 -522 -444 -41 -97 -53 -162 -53 -285 0 -123 12 -188 53 -285 93 -219 290 -387 522 -446 71 -18 269 -18 340 0 232 59 429 227 522 446 41 97 53 162 53 285 0 65 -6 139 -14 170 -68 269 -277 482 -546 557 -51 14 -243 26 -280 17z m176 -304 c235 -45 399 -275 361 -506 -32 -196 -180 -344 -376 -376 -289 -48 -556 219 -508 508 42 252 277 420 523 374z"/>
                                            </g>
                                        </svg>
                                    </button>
                                    <input className={`${styles.input} ${styles.input_pass}`} placeholder=" " type={visible.pass.type} id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={`${styles.line} ${styles.line_pass}`} />
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
                        <button className={styles.eye_pass} onClick={() => HiddenPassword('verify')}>
                            <svg className={visible.verify.className} version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                    <path d="M2385 3904 c-320 -35 -568 -96 -850 -209 -477 -192 -984 -531 -1387 -926 -144 -141 -162 -173 -139 -251 21 -74 327 -359 616 -574 528 -392 1066 -630 1612 -711 162 -24 484 -24 646 0 468 70 914 247 1372 545 259 169 507 367 717 573 144 141 162 173 139 252 -21 73 -327 358 -616 573 -525 390 -1070 631 -1605 709 -103 15 -426 27 -505 19z m318 -305 c518 -77 907 -522 907 -1039 0 -571 -479 -1050 -1050 -1050 -628 0 -1131 578 -1039 1193 86 574 621 980 1182 896z m-1267 -294 c-99 -151 -161 -302 -202 -495 -26 -119 -26 -381 0 -500 41 -194 102 -343 203 -497 16 -25 6 -21 -109 39 -134 70 -329 191 -462 286 -182 132 -496 398 -496 422 0 14 231 218 356 315 125 98 303 221 419 290 73 44 295 164 304 165 2 0 -4 -11 -13 -25z m2611 -185 c158 -101 252 -169 402 -288 130 -104 301 -259 301 -272 0 -14 -231 -218 -356 -315 -204 -159 -451 -319 -643 -415 -82 -41 -84 -41 -67 -16 99 152 161 303 202 496 26 119 26 381 0 500 -41 194 -102 343 -203 497 -16 25 -6 21 109 -39 70 -37 185 -103 255 -148z"/>
                                    <path d="M2465 3304 c-11 -2 -45 -9 -75 -15 -217 -44 -429 -224 -522 -444 -41 -97 -53 -162 -53 -285 0 -123 12 -188 53 -285 93 -219 290 -387 522 -446 71 -18 269 -18 340 0 232 59 429 227 522 446 41 97 53 162 53 285 0 65 -6 139 -14 170 -68 269 -277 482 -546 557 -51 14 -243 26 -280 17z m176 -304 c235 -45 399 -275 361 -506 -32 -196 -180 -344 -376 -376 -289 -48 -556 219 -508 508 42 252 277 420 523 374z"/>
                                </g>
                            </svg>
                        </button>
                        <input className={`${styles.input} ${styles.input_pass}`} placeholder=" " type={visible.verify.type} id='verify' value={verify} onChange={(e) => setVerify(e.target.value)} autoComplete='off' />
                        <label className={styles.label} htmlFor='verify'>Confirmar Senha</label>
                        <span className={`${styles.line} ${styles.line_pass}`} />
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