import Modal from 'react-modal';
import { EditUser } from '../utils/functions';
import { useState } from 'react';
import styles from '../styles/profile_data.module.scss';

Modal.setAppElement('#__next');

export default function ProfilePrices({data}){

    const render = {
        today: <span className={styles.color_red}>Você tem apenas hoje para ir à Academia</span>,
        finished: <>Parece que seu plano <span className={styles.color_red}>já acabou</span>, renove seu plano para continuar na limits</> 
    }
    const date_start = new Date(data.plan.date_start);
    const date_end = new Date(data.plan.date_end);
    const date_now = new Date();
    const [modalIsOpen, setIsOpen] = useState({
        cancel: false,
        renew: false
    });

    function DayCalc(){
        if(data.plan.time == 'Quinzenal'){
            return 15
        }
        if(data.plan.time == 'Semanal'){
            return 7
        }
        if(data.plan.time == 'Diário'){
            return 1
        }
        if(data.plan.time == 'Mensal'){
            return 30
        }
        if(data.plan.time == 'Trimestral'){
            return 92
        }
        if(data.plan.time == 'Semestral'){
            return 183
        }
        if(data.plan.time == 'Anual'){
            return 365
        }
    }

    function OpenModal(id){
        const modal = {...modalIsOpen, [id]: true};
        setIsOpen(modal);
    }

    function CloseModal(id){
        const modal = {...modalIsOpen, [id]: false};
        setIsOpen(modal);
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
            return <>Você ainda tem <span className={styles.color_red}>até amanhã</span> de acesso à Academia</>
        }
        else{
            return <>Você ainda tem <span className={styles.color_red}>{date_difernce} dias</span> para ir à Academia</>
        }
    }

    function ReturnButton(){
        if(date_now > date_end){
            return <button className={`${styles.button} ${styles.renew}`} onClick={() => OpenModal('renew')}>renovar</button>
        }
    }

    async function CancelPlan(){
        await EditUser(data.email, {plan: null});
        window.location.reload();
    }

    async function RenewPlan(){
        const date = new Date();
        const date_start = new Date();
        let date_end = new Date(date.setHours(date_start.getHours() + (24 * DayCalc())));

        const response = await EditUser(data.email, {plan: {...data.plan, date_start: date_start, date_end: date_end}});

        if(response.message.acknowledged === true){
            window.location.reload();
        }
        else{
            return
        }
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
                    <button className={`${styles.button} ${styles.cancel}`} onClick={() => OpenModal('cancel')}>cancelar</button>
                    <button className={`${styles.button} ${styles.trade}`} onClick={() => window.location.href = '/planos'}>trocar</button>
                    {ReturnButton()}
                </div>

                <Modal isOpen={modalIsOpen.cancel} className={styles.modal}>
                    <section className={styles.pop_up}>
                        <h1 className={styles.title}>cancelar plano ?</h1>
                        <h2 className={styles.sub}>
                            Em pleno 2022, e você está querendo sair da academia ? Conhece o Paulo Muzy ? Ta gigante e trincado, e você aí, querendo sair da academia.
                        </h2>
                        <div className={styles.div_buttons}>
                            <button className={`${styles.button} ${styles.false}`} onClick={() => CloseModal('cancel')}>não, voltar atrás</button>
                            <button className={`${styles.button} ${styles.true}`} onClick={() => CancelPlan()}>sim, certeza</button>
                        </div>
                    </section>
                </Modal>

                <Modal isOpen={modalIsOpen.renew} className={styles.modal}>
                    <section className={styles.pop_up}>
                        <h1 className={styles.title}>renovar plano</h1>
                        <h2 className={styles.sub}>
                            {`"Porque sou eu que conheço os planos que tenho para vocês", diz o Senhor, "planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro."`}
                        </h2>
                        <span className={styles.chapter}>- Jeremias 29:11</span>
                        <div className={styles.div_buttons_reverse}>
                            <button className={`${styles.button} ${styles.renew}`} onClick={() => RenewPlan()}>amém, renovar plano</button>
                            <button className={`${styles.button} ${styles.return}`} onClick={() => CloseModal('renew')}>voltar</button>
                        </div>
                    </section>
                </Modal>

            </div>
        )
    }    
    
    return <></>
}