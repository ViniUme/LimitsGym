import Page from '../components/page';
import Loading from '../components/loading';
import { LoginUser, VerifyUser } from '../utils/functions';
import Link from 'next/link';
import { parseCookies, setCookie } from 'nookies';
import { useState, useEffect } from 'react';
import styles from '../styles/entrar.module.scss';

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

export default function Login(props){

    const json = {
        email: '',
        pass: ''
    }
    const pass_visible = {
        type: 'password',
        className: styles.eye_svg,
    }
    const [data, setData] = useState(json);
    const [visible, setVisible] = useState(pass_visible);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const url_var = new URLSearchParams(window.location.search);
        const msg = url_var.get('created');
        
        if(msg == 'true'){
            setMessage('usuario criado com sucesso')
        }
    }, [])

    function HiddenPassword(){
        if(visible.type == 'password'){
            setVisible({
                    type: 'text',
                    className: `${styles.eye_svg} ${styles.eye_svg_red}`,
            });
        }
        else{
            setVisible({
                    type: 'password',
                    className: styles.eye_svg
            });
        }
    }

    function InputEdit(e){
        const {id, value} = e.target;
        setData({...data, [id]: value});
    }

    async function Submit(e){
        e.preventDefault();
        
        setMessage('loading');
        const response = await LoginUser(data);
        
        if(response.message == true){
            setCookie(null, 'USER_LOGIN', `${response.user}`, {
                maxAge: 86400 * 365,
                path: '/'
            });
            window.location.href = '/';
        }
        else{
            setMessage('seu e-mail ou senha estão incorretos');
        }
    }

    if((message != 'loading') && (props.cookies.USER_LOGIN == undefined)){
        return(
            <Page title='Entre com sua conta na Limits Gym' description='Tela para acessar a conta do cliente da academia' cookies={props.cookies} name={props.data.name}>
                <form className={styles.login} onSubmit={(e) => Submit(e)}>
                    <h1 className={styles.title}>entre com seu email</h1>
                    <div className={styles.input_div}>
                        <input className={styles.input} placeholder=" " type='text' id='email' value={data.email} onChange={(e) => InputEdit(e)} autoComplete='off'/>
                        <label className={styles.label} htmlFor='pass'>Email</label>
                        <span className={styles.line} />
                    </div>
                    <div className={styles.input_div}>
                        <div className={styles.eye_pass} onClick={() => HiddenPassword()}>
                            <svg className={visible.className} version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                                    <path d="M2385 3904 c-320 -35 -568 -96 -850 -209 -477 -192 -984 -531 -1387 -926 -144 -141 -162 -173 -139 -251 21 -74 327 -359 616 -574 528 -392 1066 -630 1612 -711 162 -24 484 -24 646 0 468 70 914 247 1372 545 259 169 507 367 717 573 144 141 162 173 139 252 -21 73 -327 358 -616 573 -525 390 -1070 631 -1605 709 -103 15 -426 27 -505 19z m318 -305 c518 -77 907 -522 907 -1039 0 -571 -479 -1050 -1050 -1050 -628 0 -1131 578 -1039 1193 86 574 621 980 1182 896z m-1267 -294 c-99 -151 -161 -302 -202 -495 -26 -119 -26 -381 0 -500 41 -194 102 -343 203 -497 16 -25 6 -21 -109 39 -134 70 -329 191 -462 286 -182 132 -496 398 -496 422 0 14 231 218 356 315 125 98 303 221 419 290 73 44 295 164 304 165 2 0 -4 -11 -13 -25z m2611 -185 c158 -101 252 -169 402 -288 130 -104 301 -259 301 -272 0 -14 -231 -218 -356 -315 -204 -159 -451 -319 -643 -415 -82 -41 -84 -41 -67 -16 99 152 161 303 202 496 26 119 26 381 0 500 -41 194 -102 343 -203 497 -16 25 -6 21 109 -39 70 -37 185 -103 255 -148z"/>
                                    <path d="M2465 3304 c-11 -2 -45 -9 -75 -15 -217 -44 -429 -224 -522 -444 -41 -97 -53 -162 -53 -285 0 -123 12 -188 53 -285 93 -219 290 -387 522 -446 71 -18 269 -18 340 0 232 59 429 227 522 446 41 97 53 162 53 285 0 65 -6 139 -14 170 -68 269 -277 482 -546 557 -51 14 -243 26 -280 17z m176 -304 c235 -45 399 -275 361 -506 -32 -196 -180 -344 -376 -376 -289 -48 -556 219 -508 508 42 252 277 420 523 374z"/>
                                </g>
                            </svg>
                        </div>
                        <input className={`${styles.input} ${styles.input_pass}`} placeholder=" " type={visible.type} id='pass' value={data.pass} onChange={(e) => InputEdit(e)} autoComplete='off' />
                        <label className={styles.label} htmlFor='pass'>Senha</label>
                        <span className={`${styles.line} ${styles.line_pass}`} />
                    </div>

                    <span className={styles.message}>{message}</span>

                    <input className={styles.button} type='submit' value="entrar" />

                    <span className={styles.sign_on}>Não tem uma conta ? <Link href='/cadastro'><a className={styles.sign_in}>Cadastrar-se</a></Link></span>
                </form>               
            </Page>
        )
    }
    if(message == 'loading'){
        return(
            <>
                {Loading()}
            </>
        )
    }
}