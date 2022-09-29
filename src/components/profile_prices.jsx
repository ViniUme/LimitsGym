import { useState } from 'react';
import { CancelPlan } from '../components/pop_ups';
import styles from '../styles/profile_data.module.scss';

export default function ProfilePrices({data}){

    const date_start = new Date(data.plan.date_start);
    const date_end = new Date(data.plan.date_end);
    const date_now = new Date();
    const [render, setRender] = useState({
        "days_message": {
            "today": <span className={styles.color_red}>Você tem apenas hoje para ir à Academia</span>,
            "finished": <>Parece que seu plano <span className={styles.color_red}>já acabou</span>, renove seu plano para continuar na limits</>
        },
        "pop_up": null
    })

    function CheckTime(date){
        if((date === 'Quinzenal') || (date === 'Semanal') || (date === 'Diário')){
            return 'dia'
        }
        else{
            return 'mês'
        }
    }

    function DaysMissing(){
        
        console.log(date_end.getDay(), date_start.getDay())
        console.log(date_end.getDay() == date_start.getDay())
        if(date_end.getDay() === date_now.getDay()){
            return render.days_message.today
        }
        if(date_now > date_end){
            return render.days_message.finished
        }
        
        const date_difernce = Math.round(Math.abs(date_now - date_end) / (1000 * 60 * 60 * 24));
        return <>Você ainda tem <span className={styles.color_red}>{date_difernce} dias</span> para ir à Academia</>
    }

    function ReturnButton(){
        if(date_now > date_end){
            return <button className={`${styles.button} ${styles.renew}`}>renovar</button>
        }
    }

    function CancelButton(){
        
    }
    
    if(data.plan != undefined){
        return(
            <div className={styles.plan}>
                <h1 className={styles.title}>Seu Plano</h1>
                <div className={styles.price_grid}>
                    <h3 className={`${styles.grid_item} ${styles.left}`}>Preço:</h3>
                    <h3 className={`${styles.grid_item} ${styles.right}`}>{`R$ ${data.plan.price},00/${CheckTime(data.plan.time)}`}</h3>
                    <h3 className={`${styles.grid_item} ${styles.left}`}>Tipo & Tempo:</h3>
                    <h3 className={`${styles.grid_item} ${styles.right}`}>{data.plan.time} {data.plan.type}</h3>
                    <h3 className={`${styles.grid_item} ${styles.left}`}>Início do plano:</h3>
                    <h3 className={`${styles.grid_item} ${styles.right}`}>{date_end.toLocaleDateString()}</h3>
                    <h3 className={`${styles.grid_item} ${styles.left}`}>Termino do plano:</h3>
                    <h3 className={`${styles.grid_item} ${styles.right}`}>{date_end.toLocaleDateString()}</h3>
                </div>

                <h2 className={styles.days_miss}>{DaysMissing()}</h2>

                <div className={styles.div_buttons}>
                    <button className={`${styles.button} ${styles.cancel}`} onClick={() => CancelButton()}>cancelar</button>
                    <button className={`${styles.button} ${styles.trade}`}>trocar</button>
                    {ReturnButton()}
                </div>
                {render.pop_up}
            </div>
        )
    }    
    
    return <></>
}