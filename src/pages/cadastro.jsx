/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Page from '../components/page';
import Loading from '../components/loading';
import { mask } from 'remask';
import { CreateUser, VerifyUser } from '../utils/functions';
import { parseCookies } from 'nookies';
import { RegEx, Patterns, TestTel, TestRG } from '../utils/variables';
import { useState } from 'react';
import styles from '../styles/cadastro.module.scss';

export async function getServerSideProps(context){
    let cookies = parseCookies(context);
    if(cookies.USER_LOGIN != undefined){
        let data = await VerifyUser(cookies.USER_LOGIN, context.req.rawHeaders[1]);

        return {
            props: {
                cookies: cookies,
                data: data.user
            }
        }
    }
    else{
        return {
            props: {
                cookies: cookies,
                data: {name: null}
            }
        }
    }
}

export default function SignRoute(props){

    const test_tel = TestTel();
    const test_rg = TestRG();
    const info = [
        ['name', 'Nome'],
        ['city', 'Cidade'],
        ['dist', 'Bairro'],
        ['road', 'Rua'],
        ['num', 'Número'],
        ['email', 'E-mail'],
        ['tel', 'Celular'],
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
    const pattern = Patterns();
    const reg_ex = RegEx();

    const [data, setData] = useState(json);
    const [message, setMessage] = useState('');
    const [verify, setVerify] = useState('');
    const [visible, setVisible] = useState(pass_visible);


    function InputEdit(e){
        const {id, value} = e.target;
        const check_space = value.split('');

        if((check_space[check_space.length - 1] == ' ') && (check_space[check_space.length - 2] == ' ')){
            return
        }
        if(id == 'tel'){
            const save_tel = value.replace(reg_ex.tel, '');
            const masked_tel = mask(save_tel, pattern.tel);
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
        
        setMessage('loading');
        
        for(let item of info){
            let real_item = eval(`data.${item[0]}`);
            if(real_item == ''){
                setMessage('preencha todos os campos');
                return
            }
        }

        if(!reg_ex.name.test(data.name)){
            setMessage('o seu nome deve ter de 3 a 60 caracteres');
        }
        if((data.city.length < 3) || (data.city.length > 30)){
            setMessage('o nome da cidade deve ter de 3 a 30 caracteres');
            return
        }
        if((data.dist.length < 3) || (data.dist.length > 30)){
            setMessage('o nome da bairro deve ter de 3 a 30 caracteres');
            return
        }
        if((data.road.length < 3) || (data.road.length > 30)){
            setMessage('o nome da rua deve ter de 3 a 30 caracteres');
            return
        }
        if(isNaN(parseInt(data.num))){
            setMessage('digite o número de sua casa corretamente');
            return
        }
        if(!reg_ex.email.test(data.email)){
            setMessage('digite um e-mail válido');
            return
        }

        const save_tel = data.tel.replace(reg_ex.tel, '');
        const tel_split = save_tel.split('');
        for(let item of test_tel){
            if(save_tel == item){
                setMessage('número de celular inválido');
                return
            }
        }
        if(tel_split[2] == 0){
            setMessage('número de celular inválido');
            return
        }
        if(save_tel.length < 10){
            setMessage('número de celular inválido');
            return
        }

        const save_rg = data.rg.replace(reg_ex.rg, '');
        const rg_split = data.rg.split('');
        for(let item of test_rg){
            if(save_rg == item){
                setMessage('número de rg inválido');
                return
            }
        }
        if(rg_split[0] == 0){
            setMessage('número de rg inválido');
            return
        }
        if(save_rg.length < 9){
            setMessage('digite um rg válido');
            return
        }

        if(reg_ex.space.test(data.pass)){
            setMessage('não use espaços na senha');
            return
        }
        if(!reg_ex.password.test(data.pass)){
            setMessage('a senha deve ter no mínimo 8 caracteres, sendo obrigatório 1 numero e 1 letra maiuscula');
            return
        }
        if(data.pass != verify){
            setMessage('comfirme sua senha corretamente');
            return
        }
        
        const date = new Date();
        const client = {...data, "date": date, "wish": [], 'tel': save_tel, 'rg': save_rg};
        
        const verify_user = await VerifyUser(client.email, null);
        
        if(verify_user.message === true){
            setMessage('usuário já existente');
        }
        else if(verify_user.message === false){
            const response = await CreateUser(client);
            
            if(response.message === true){
                window.location.href = '/entrar?created=true';
            }
            else{
                setMessage('erro ao tentar criar usuário');
                console.error('erro ao tentar criar usuário');
            }
        }
        else{
            console.error(verify_user);
            setMessage(verify_user);
        }
    }
    
    if(message != 'loading'){
        return(
            <Page title="Faça seu cadastro na Limits Gym" description="Tela para criação de usuário e efetuação do seu cadastro no banco de dados" cookies={props.cookies} name={props.data.name}>

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
                                    <div className={styles.eye_pass} onClick={() => HiddenPassword('pass')}>
                                        <svg className={visible.pass.className} version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                                <path d="M2385 3904 c-320 -35 -568 -96 -850 -209 -477 -192 -984 -531 -1387 -926 -144 -141 -162 -173 -139 -251 21 -74 327 -359 616 -574 528 -392 1066 -630 1612 -711 162 -24 484 -24 646 0 468 70 914 247 1372 545 259 169 507 367 717 573 144 141 162 173 139 252 -21 73 -327 358 -616 573 -525 390 -1070 631 -1605 709 -103 15 -426 27 -505 19z m318 -305 c518 -77 907 -522 907 -1039 0 -571 -479 -1050 -1050 -1050 -628 0 -1131 578 -1039 1193 86 574 621 980 1182 896z m-1267 -294 c-99 -151 -161 -302 -202 -495 -26 -119 -26 -381 0 -500 41 -194 102 -343 203 -497 16 -25 6 -21 -109 39 -134 70 -329 191 -462 286 -182 132 -496 398 -496 422 0 14 231 218 356 315 125 98 303 221 419 290 73 44 295 164 304 165 2 0 -4 -11 -13 -25z m2611 -185 c158 -101 252 -169 402 -288 130 -104 301 -259 301 -272 0 -14 -231 -218 -356 -315 -204 -159 -451 -319 -643 -415 -82 -41 -84 -41 -67 -16 99 152 161 303 202 496 26 119 26 381 0 500 -41 194 -102 343 -203 497 -16 25 -6 21 109 -39 70 -37 185 -103 255 -148z"/>
                                                <path d="M2465 3304 c-11 -2 -45 -9 -75 -15 -217 -44 -429 -224 -522 -444 -41 -97 -53 -162 -53 -285 0 -123 12 -188 53 -285 93 -219 290 -387 522 -446 71 -18 269 -18 340 0 232 59 429 227 522 446 41 97 53 162 53 285 0 65 -6 139 -14 170 -68 269 -277 482 -546 557 -51 14 -243 26 -280 17z m176 -304 c235 -45 399 -275 361 -506 -32 -196 -180 -344 -376 -376 -289 -48 -556 219 -508 508 42 252 277 420 523 374z"/>
                                            </g>
                                        </svg>
                                    </div>
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
                        <div className={styles.eye_pass} onClick={() => HiddenPassword('verify')}>
                            <svg className={visible.verify.className} version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                    <path d="M2385 3904 c-320 -35 -568 -96 -850 -209 -477 -192 -984 -531 -1387 -926 -144 -141 -162 -173 -139 -251 21 -74 327 -359 616 -574 528 -392 1066 -630 1612 -711 162 -24 484 -24 646 0 468 70 914 247 1372 545 259 169 507 367 717 573 144 141 162 173 139 252 -21 73 -327 358 -616 573 -525 390 -1070 631 -1605 709 -103 15 -426 27 -505 19z m318 -305 c518 -77 907 -522 907 -1039 0 -571 -479 -1050 -1050 -1050 -628 0 -1131 578 -1039 1193 86 574 621 980 1182 896z m-1267 -294 c-99 -151 -161 -302 -202 -495 -26 -119 -26 -381 0 -500 41 -194 102 -343 203 -497 16 -25 6 -21 -109 39 -134 70 -329 191 -462 286 -182 132 -496 398 -496 422 0 14 231 218 356 315 125 98 303 221 419 290 73 44 295 164 304 165 2 0 -4 -11 -13 -25z m2611 -185 c158 -101 252 -169 402 -288 130 -104 301 -259 301 -272 0 -14 -231 -218 -356 -315 -204 -159 -451 -319 -643 -415 -82 -41 -84 -41 -67 -16 99 152 161 303 202 496 26 119 26 381 0 500 -41 194 -102 343 -203 497 -16 25 -6 21 109 -39 70 -37 185 -103 255 -148z"/>
                                    <path d="M2465 3304 c-11 -2 -45 -9 -75 -15 -217 -44 -429 -224 -522 -444 -41 -97 -53 -162 -53 -285 0 -123 12 -188 53 -285 93 -219 290 -387 522 -446 71 -18 269 -18 340 0 232 59 429 227 522 446 41 97 53 162 53 285 0 65 -6 139 -14 170 -68 269 -277 482 -546 557 -51 14 -243 26 -280 17z m176 -304 c235 -45 399 -275 361 -506 -32 -196 -180 -344 -376 -376 -289 -48 -556 219 -508 508 42 252 277 420 523 374z"/>
                                </g>
                            </svg>
                        </div>
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