import Modal from 'react-modal';
import { EditUser } from '../utils/functions';
import { useState } from 'react';
import styles from '../styles/profile_data.module.scss';

Modal.setAppElement('#__next');

export default function ProfilePrices({data}){

    const render = {
        today: <span className={styles.color_red}>Você tem apenas hoje para ir à Academia</span>,
        finished: <>Parece que seu plano <span className={styles.color_red}>já acabou</span>, renove seu plano para continuar na Limits</> 
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
        const convert = 1000 * 60 * 60 * 24;
        const date_difernce = Math.round(Math.abs(date_now - date_end) / convert);

        if(date_difernce == 0){
            return render.today
        }
        if(date_now > date_end){
            return render.finished
        }
        if(date_difernce == 1){
            return <>Você ainda tem <span className={styles.color_red}>até amanhã</span> de acesso à Academia</>
        }
        else{
            return <>Você ainda tem <span className={styles.color_red}>{date_difernce} dias</span> restantes de acesso à Academia</>
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

        function Phrase(){
            const phrases = ['Claro que é difícil. Deve ser difícil. Se fosse fácil, todos fariam. Difícil é o que o torna ótimo.', 'Sem dor, sem ganho. Cale a boca e treine.', 'Seu corpo pode suportar quase tudo. É a sua mente que você tem que convencer.', 'O sucesso nem sempre tem a ver com grandeza. É uma questão de consistência. O trabalho árduo consistente obtém sucesso. A grandeza virá.', 'Treine insano ou permaneça o mesmo.', 'Definição de um treino realmente bom: quando você odeia fazer, mas adora terminá-lo.', 'Empurre-se porque ninguém mais vai fazer isso por você.', 'Vou vencê-la. Vou treinar mais forte. Vou comer mais limpo. Eu conheço seus pontos fortes. Já perdi para ela antes, mas não desta vez. Ela está caindo. Tenho a vantagem porque a conheço bem. Ela é a velha eu.', 'Coisas boas vêm para aqueles que suam.', 'Motivação é o que você começa. Hábito é o que te mantém indo.', 'Um treino de uma hora é 4% do seu dia. Sem desculpas.', 'O corpo alcança o que a mente acredita.', 'O que parece impossível hoje um dia se tornará o seu aquecimento.', 'Nunca desista de um sonho só por causa do tempo que levará para realizá-lo. O tempo vai passar de qualquer maneira.', 'Alguém mais ocupado do que você está trabalhando agora.']
            
            const chose_phrase = Math.round(Math.random() * (phrases.length - 1));

            return phrases[chose_phrase];
        }

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
                            Em pleno 2022, e você está querendo sair da academia ? Conhece o Paulo Muzy ? Ta gigante e trincado, e você aí, querendo sair da academia. Tem certeza que quer cancelar o seu plano da academia ?
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
                        <h2 className={styles.sub}>{Phrase()}</h2>
                        <div className={styles.div_buttons_reverse}>
                            <button className={`${styles.button} ${styles.renew}`} onClick={() => RenewPlan()}>renovar plano</button>
                            <button className={`${styles.button} ${styles.return}`} onClick={() => CloseModal('renew')}>voltar</button>
                        </div>
                    </section>
                </Modal>

            </div>
        )
    }    
    
    return <></>
}