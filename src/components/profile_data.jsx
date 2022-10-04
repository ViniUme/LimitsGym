import EditForm from './edit_form';
import EditPass from './edit_pass';
import ProfilePrices from './profile_prices';
import { useState } from 'react';
import { destroyCookie } from 'nookies'
import styles from '../styles/profile_data.module.scss';

export default function ProfileData({data}){
    
    const info = [['city', 'Cidade'], ['road', 'Rua'], ['num', 'Número'], ['email', 'Email'], ['dist', 'Bairro'], ['tel', 'Telefone'], ['rg', 'RG'], ['date', 'Data de criação']]
    
    const [display, setDisplay] = useState('read');
    
    function GoEdit(func){
        setDisplay(func);
    }
    
    function ShowPlan(){
        if((data.plan != null) && (data.plan != undefined)){
            return <ProfilePrices data={data} />
        }
        else{
            return <></>
        }
    }

    function LogOff(){
        destroyCookie(null, 'USER_LOGIN');
        window.location.href = '/';
    }

    if(display == 'read'){
        return( 
            <section className={styles.profile}>
                <h1 className={styles.name}>{data.name}</h1>
                <div className={styles.profile_item}>
                    <h1 className={styles.item_title}>meus dados</h1>
                    {info && info.map((item, key) => {
                        if(item[0] == 'pass'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={`${styles.input}`} placeholder=" " type='password' value={eval(`data.${item[0]}`)} readOnly />
                                    <label className={styles.label} >{item[1]}</label>
                                    <span className={`${styles.line}`} />
                                </div>
                            )
                        }
                        if(item[0] == 'date'){
                            const date = new Date(eval(`data.${item[0]}`));
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={`${styles.input}`} placeholder=" " type='text' value={date.toLocaleString('pt-BR', {timeZone: 'UTC'})} readOnly />
                                    <label className={styles.label} >{item[1]}</label>
                                    <span className={`${styles.line}`} />
                                </div>
                            )
                        }
                        return(
                            <div className={styles.div_input} key={key}>
                                <input className={styles.input} placeholder=" " type="text" value={eval(`data.${item[0]}`)} readOnly />
                                <label className={styles.label} >{item[1]}</label>
                                <span className={styles.line} />
                            </div>
                        )
                    })}
                    <button className={styles.edit_button} onClick={() => GoEdit('edit_profile')}>editar informações</button>
                    <button className={styles.pass_button} onClick={() => GoEdit('edit_pass')}>redefinir senha</button>
                </div>

                {ShowPlan()}

                <div className={styles.profile_item}>
                    <h1 className={styles.item_title}>Deseja sair da sua conta</h1>
                    <h2 className={styles.log_off} onClick={() => LogOff()}>sair</h2>
                </div>

            </section>
        )
    }
    if(display == 'edit_profile'){
        return(
            <EditForm user={data} />
        )
    }
    if(display == 'edit_pass'){
        return(
            <EditPass user={data} />
        )
    }
}