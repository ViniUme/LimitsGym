import Page from '../components/page';
import { VerifyUser } from '../utils/functions';
import { parseCookies } from 'nookies';
import styles from '../styles/profile.module.scss';

export async function getServerSideProps(context){
    const cookies = parseCookies(context);
    const user_data = await VerifyUser({email: cookies.USER_LOGIN});

    return{
        props: {
            cookies: cookies,
            data: user_data.user
        }
    }
}

export default function Profile({cookies, data}){
    
    const info = [['city', 'Cidade'], ['road', 'Rua'], ['num', 'Número'], ['email', 'Email'], ['dist', 'Bairro'], ['tel', 'Telefone'], ['rg', 'RG'], ['date', 'Data de criação']]

    return(
        <Page title='Perfil do usuário' description='Página onde mostra todos os dados sobre o usuário' cookies={cookies}>
            <section className={styles.profile}>
                <h1 className={styles.name}>{data.name}</h1>
                <div className={styles.profile_item}>
                    <h1 className={styles.item_title}>meus dados</h1>
                    {info && info.map((item, key) => {
                        if(item[0] == 'num'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={`${styles.input} ${styles.input_read}`} placeholder=" " type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' maxLength={5} inputMode='numeric' readOnly />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )    
                        }
                        if(item[0] == 'rg'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={styles.input} placeholder=" " type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' inputMode='numeric' readOnly />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )    
                        }
                        if(item[0] == 'tel'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={styles.input} placeholder=" " type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' readOnly />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )
                        }
                        if(item[0] == 'pass'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={`${styles.input}`} placeholder=" " type='password' id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' readOnly />
                                    <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                    <span className={`${styles.line}`} />
                                </div>
                            )
                        }
                        return(
                            <div className={styles.div_input} key={key}>
                                <input className={styles.input} placeholder=" " type="text" id={item[0]} value={eval(`data.${item[0]}`)} onChange={(e) => InputEdit(e)} autoComplete='off' readOnly />
                                <label className={styles.label} htmlFor={item[0]}>{item[1]}</label>
                                <span className={styles.line} />
                            </div>
                        )
                    })}
                    <button className={styles.edit_button}>editar informações</button>
                </div>
            </section>
        </Page>
    )
}