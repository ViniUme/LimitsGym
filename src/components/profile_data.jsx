import EditForm from './edit_form';
import { useState } from 'react';
import styles from '../styles/profile_data.module.scss';

export default function ProfileData({data}){
    
    const info = [['city', 'Cidade'], ['road', 'Rua'], ['num', 'Número'], ['email', 'Email'], ['dist', 'Bairro'], ['tel', 'Telefone'], ['rg', 'RG'], ['date', 'Data de criação']]

    const [display, setDisplay] = useState('read');

    function GoEdit(){
        if(display == 'read'){
            setDisplay('write');
        }
    }

    if(display == 'read'){
        return( 
            <section className={styles.profile}>
                <h1 className={styles.name}>{data.name}</h1>
                <div className={styles.profile_item}>
                    <h1 className={styles.item_title}>meus dados</h1>
                    {info && info.map((item, key) => {
                        if(item[0] == 'num'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={`${styles.input} ${styles.input_read}`} placeholder=" " type="text" value={eval(`data.${item[0]}`)} readOnly />
                                    <label className={styles.label} >{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )    
                        }
                        if(item[0] == 'rg'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={styles.input} placeholder=" " type="text" value={eval(`data.${item[0]}`)} readOnly />
                                    <label className={styles.label} >{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )    
                        }
                        if(item[0] == 'tel'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={styles.input} placeholder=" " type="text" value={eval(`data.${item[0]}`)} readOnly />
                                    <label className={styles.label} >{item[1]}</label>
                                    <span className={styles.line} />
                                </div>
                            )
                        }
                        if(item[0] == 'pass'){
                            return(
                                <div className={styles.div_input} key={key}>
                                    <input className={`${styles.input}`} placeholder=" " type='password' value={eval(`data.${item[0]}`)} readOnly />
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
                    <button className={styles.edit_button} onClick={() => GoEdit()}>editar informações</button>
                </div>
            </section>
        )
    }
    if(display == 'write'){
        return(
            <EditForm user={data} />
        )
    }
}