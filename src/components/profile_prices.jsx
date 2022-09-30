import Modal from 'react-modal';
import { useState } from 'react';
import styles from '../styles/profile_data.module.scss';

Modal.setAppElement('#__next');

export default function ProfilePrices({data}){

    const date_start = new Date(data.plan.date_start);
    const date_end = new Date(data.plan.date_end);
    const date_now = new Date();
    const [modalIsOpoen, setIsOpen] = useState(false);
    const [render, setRender] = useState({
        today: <span className={styles.color_red}>Você tem apenas hoje para ir à Academia</span>,
        finished: <>Parece que seu plano <span className={styles.color_red}>já acabou</span>, renove seu plano para continuar na limits</> 
    })

    function OpenModal(){
        setIsOpen(true);
    }

    function CloseModal(){
        setIsOpen(false);
    }

    function CheckTime(date){
        if((date === 'Quinzenal') || (date === 'Semanal') || (date === 'Diário')){
            return 'dia'
        }
        else{
            return 'mês'
        }
    }

    function DaysMissing(){
        
        if(date_end.getDay() === date_now.getDay()){
            return render.today
        }
        if(date_now > date_end){
            return render.finished
        }
        
        const date_difernce = Math.round(Math.abs(date_now - date_end) / (1000 * 60 * 60 * 24));
        
        if(date_difernce == 1){
            return <>Você ainda tem <span className={styles.color_red}>até amanhã</span> para ir à Academia</>
        }
        else{
            return <>Você ainda tem <span className={styles.color_red}>{date_difernce} dias</span> para ir à Academia</>
        }
    }

    function ReturnButton(){
        if(date_now > date_end){
            return <button className={`${styles.button} ${styles.renew}`}>renovar</button>
        }
    }

    function CancelButton(){
        setIsOpen(true);
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
                    <h3 className={`${styles.grid_item} ${styles.right}`}>{date_start.toLocaleDateString()}</h3>
                    <h3 className={`${styles.grid_item} ${styles.left}`}>Termino do plano:</h3>
                    <h3 className={`${styles.grid_item} ${styles.right}`}>{date_end.toLocaleDateString()}</h3>
                </div>

                <h2 className={styles.days_miss}>{DaysMissing()}</h2>

                <div className={styles.div_buttons}>
                    <button className={`${styles.button} ${styles.cancel}`} onClick={() => CancelButton()}>cancelar</button>
                    <button className={`${styles.button} ${styles.trade}`}>trocar</button>
                    {ReturnButton()}
                </div>

                <Modal isOpen={modalIsOpoen} onRequestClose={CloseModal} className={styles.modal}>
                    <section className={styles.pop_up}>
                        <h1 className={styles.title}>cancelar plano ?</h1>
                        <h2 className={styles.sub}>
                            Você quer cancelar o seu plano atual da academia ? E perder dia de treino, os benefícios à saúde e o shape ? Você tem certeza disso ?
                        </h2>
                        <div className={styles.div_buttons}>
                            <button className={`${styles.button} ${styles.false}`} onClick={() => CloseModal()}>não, voltar atrás</button>
                            <button className={`${styles.button} ${styles.true}`} onClick={() => window.location.href = '/planos'}>sim, certeza</button>
                        </div>
                    </section>
                </Modal>

            </div>
        )
    }    
    
    return <></>
}