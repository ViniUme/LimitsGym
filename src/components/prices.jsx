import { useState } from 'react';
import Modal from 'react-modal';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from '../styles/prices.module.scss';
import { EditUser } from '../utils/functions';

Modal.setAppElement('#__next');

export default function Prices({user, data}){

    const [gym_plan, setGymPlan] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    function Buy(price, total, time, plan, type){
        if(user.USER_LOGIN == (undefined || null)){
            window.location.href = '/entrar';
        }
        else{
            setGymPlan({
                price: price,
                total: total,
                time: time,
                plan: plan,
                type: type
            })
            window.scroll(0,0)
        }
    }

    if(gym_plan == null){
        return(
            <section className={styles.prices}>

                <h1 className={styles.title}>Planos individuais</h1>
                <div className={styles.different_prices}>
                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Quinzenal</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>5,00<span className={styles.month}>/dia</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por quinzena é R$ 75,00.</h3>
                        <button className={styles.button} onClick={() => Buy('5', 'por quinzena é R$ 75,00', 'dia', 'Quinzenal', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Semanal</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>7,00<span className={styles.month}>/dia</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por semana é R$ 49,00.</h3>
                        <button className={styles.button} onClick={() => Buy('7', 'por semana é R$ 49,00', 'dia', 'Semanal', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Diário</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>20,00<span className={styles.month}>/dia</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por dia é R$ 20,00.</h3>
                        <button className={styles.button} onClick={() => Buy('20', 'por dia é R$ 20,00', 'dia', 'Diário', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Mensal</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>120,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por mês é R$ 120,00.</h3>
                        <button className={styles.button} onClick={() => Buy('120', 'por mês é R$ 120,00', 'mês', 'Mensal', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Trimestral</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>115,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por trimestre é R$ 345,00.</h3>
                        <button className={styles.button} onClick={() => Buy('115', 'por trimestre é R$ 345,00', 'mês', 'Trimestral', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Semestral</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>110,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por semestre é R$ 660,00.</h3>
                        <button className={styles.button} onClick={() => Buy('110', 'por semestre é R$ 660,00', 'mês', 'Semestral', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Anual</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>105,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por ano é R$ 1.260,00.</h3>
                        <button className={styles.button} onClick={() => Buy('105', 'por Ano é R$ 1.260,00', 'mês', 'Anual', 'Individual')}>assinar</button>
                    </div>

                </div>

                <h1 className={styles.title}>Planos familiares</h1>
                <div className={styles.different_prices}>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Mensal</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>115,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por mês é R$ 115,00.</h3>
                        <button className={styles.button} onClick={() => Buy('115', 'por mês é R$ 115,00', 'mês', 'Mensal', 'Familiar')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Trimestral</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>110,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por trimestre é R$ 330,00.</h3>
                        <button className={styles.button} onClick={() => Buy('110', 'por trimestre é R$ 330,00', 'mês', 'Trimestral', 'Familiar')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Semestral</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>105,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por semestre é R$ 630,00.</h3>
                        <button className={styles.button} onClick={() => Buy('105', 'por semestre é R$ 630,00', 'mês', 'Semestral', 'Familiar')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Anual</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>100,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por ano é R$ 1.200,00.</h3>
                        <button className={styles.button} onClick={() => Buy('100', 'por Ano é R$ 1.200,00', 'mês', 'Anual', 'Familiar')}>assinar</button>
                    </div>

                </div>
            </section>
        )
    }
    else{
        function OpenModal(){
            setIsOpen(true);
        }
        
        function CloseModal(){
            setIsOpen(false);
        }
        
        function CheckPlan(){
            if((data.plan == undefined) || (data.plan == null)){
                Sign();
            }
            else{
                OpenModal();
            }
        }

        function List(){
            const benefits_var = []
            if((gym_plan.plan == 'Anual') && (gym_plan.type == 'Individual')){
                benefits_var.push('Conan;');
            }
            if((gym_plan.price == '20') || (gym_plan.price == '7') || (gym_plan.price == '5')){
                benefits_var.push('Apenas experimentar;', 'Preço acessível;');
            }
            if((gym_plan.plan == 'Mensal') || (gym_plan.plan == 'Trimestral') || (gym_plan.plan == 'Semestral') || (gym_plan.plan == 'Anual')){
                benefits_var.push('Preço acessível;', 'Rótina saudável;', 'Resultados visíveis;');
            }
            if((gym_plan.plan == 'Semestral') || (gym_plan.plan == 'Anual')){
                benefits_var.push('Transformação do corpo;');
            }
            if(gym_plan.type == 'Familiar'){
                benefits_var.push('Desconto para toda família;');
            }

            return benefits_var
        }

        function DayCalc(){
            if(gym_plan.plan == 'Quinzenal'){
                return 15
            }
            if(gym_plan.plan == 'Semanal'){
                return 7
            }
            if(gym_plan.plan == 'Diário'){
                return 0
            }
            if(gym_plan.plan == 'Mensal'){
                return 30
            }
            if(gym_plan.plan == 'Trimestral'){
                return 92
            }
            if(gym_plan.plan == 'Semestral'){
                return 183
            }
            if(gym_plan.plan == 'Anual'){
                return 365
            }
        }

        async function Sign(){
            const date = new Date();
            const date_start = new Date();
            let date_end = new Date(date.setHours(date_start.getHours() + (24 * DayCalc())));

            const set_plan = {
                "price": gym_plan.price,
                "time": gym_plan.plan,
                "type": gym_plan.type,
                "date_start": date_start,
                "date_end": date_end
            }

            const response = await EditUser(user.USER_LOGIN, {"plan": set_plan});

            if(response.message.acknowledged === true){
                window.location.href = "/perfil";
            }
            else{
                console.log(response);
            }
        }

        function Phrase(){
            const phrases = ['Claro que é difícil. Deve ser difícil. Se fosse fácil, todos fariam. Difícil é o que o torna ótimo.', 'Sem dor, sem ganho. Cale a boca e treine.', 'Seu corpo pode suportar quase tudo. É a sua mente que você tem que convencer.', '']
        }

        return(
            <section className={styles.buy}>
                <h1 className={styles.title}>{gym_plan.plan} {gym_plan.type}</h1>
                <h2 className={styles.price_string}>
                    <span className={styles.dollar_sign}>R$ </span>{gym_plan.price},00<span className={styles.month}>/{gym_plan.time}</span>
                </h2>

                <h3 className={styles.text}>Total pago {gym_plan.total}.</h3>
                
                <h3 className={styles.benefits_title}>Benefícios</h3>
                <div className={styles.benefits}>
                    {List().map((item, key) => {
                        return(
                            <div className={styles.item_list} key={key}>
                                <FiberManualRecordIcon className={styles.circle} />
                                <span className={styles.benefits_item}>{item}</span>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.div_buttons}>
                    <button className={`${styles.button} ${styles.return}`} onClick={() => {setGymPlan(null); window.scroll(0,0)}}>Voltar</button>
                    <button className={`${styles.button} ${styles.sign}`} onClick={() => CheckPlan()}>Assinar</button>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={CloseModal} className={styles.modal}>
                    <section className={styles.pop_up}>
                        <h1 className={styles.title}>trocar de plano</h1>
                        <h2 className={styles.sub}>
                            Ao trocar de plano, você acaba cancelando seu plano atual, perdendo os dias restantes que você pode ir à academia. Tem certeza que quer mesmo trocar de plano ?
                        </h2>
                        <div className={styles.div_buttons_reverse}>
                            <button className={`${styles.button} ${styles.renew}`} onClick={() => Sign()}>trocar de plano</button>
                            <button className={`${styles.button} ${styles.return}`} onClick={() => CloseModal('renew')}>voltar</button>
                        </div>
                    </section>
                </Modal>
            </section>
        )
    }
}