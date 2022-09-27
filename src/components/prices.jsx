import { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from '../styles/prices.module.scss';
import { SignLanguage } from '@mui/icons-material';

export default function Prices({user}){

    const [gym_plan, setGymPlan] = useState(null);

    function Buy(price, time, plan, type){
        if(user.USER_LOGIN == (undefined || null)){
            window.location.href = '/entrar';
        }
        else{
            setGymPlan({
                price: price,
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
                        <button className={styles.button} onClick={() => Buy('5', 'dia', 'Quinzenal', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Semanal</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>7,00<span className={styles.month}>/dia</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por semana é R$ 49,00.</h3>
                        <button className={styles.button} onClick={() => Buy('7', 'dia', 'Semanal', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Diário</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>20,00<span className={styles.month}>/dia</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por dia é R$ 20,00.</h3>
                        <button className={styles.button} onClick={() => Buy('20', 'dia', 'Diário', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Mensal</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>120,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por mês é R$ 120,00.</h3>
                        <button className={styles.button} onClick={() => Buy('120', 'mês', 'Mensal', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Trimestral</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>115,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por trimestre é R$ 345,00.</h3>
                        <button className={styles.button} onClick={() => Buy('115', 'mês', 'Trimestral', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Semestral</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>110,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por semestre é R$ 660,00.</h3>
                        <button className={styles.button} onClick={() => Buy('110', 'mês', 'Semestral', 'Individual')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Anual</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>105,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por ano é R$ 1260,00.</h3>
                        <button className={styles.button} onClick={() => Buy('105', 'mês', 'Anual', 'Individual')}>assinar</button>
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
                        <button className={styles.button} onClick={() => Buy('115', 'mês', 'Mensal', 'Familiar')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Trimestral</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>110,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por trimestre é R$ 330,00.</h3>
                        <button className={styles.button} onClick={() => Buy('110', 'mês', 'Trimestral', 'Familiar')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Semestral</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>105,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por semestre é R$ 630,00.</h3>
                        <button className={styles.button} onClick={() => Buy('105', 'mês', 'Semestral', 'Familiar')}>assinar</button>
                    </div>

                    <div className={styles.price_div}>
                        <h1 className={styles.price_title}>Plano Anual</h1>
                        <h2 className={styles.price_string}>
                            <span className={styles.dollar_sign}>R$ </span>100,00<span className={styles.month}>/mês</span>
                        </h2>
                        <h3 className={styles.text}>Total pago por ano é R$ 120,00.</h3>
                        <button className={styles.button} onClick={() => Buy('100', 'mês', 'Anual', 'Familiar')}>assinar</button>
                    </div>

                </div>
            </section>
        )
    }
    else{
        function List(){
            const benefits_var = []
            if((gym_plan.plan == 'Anual') && (gym_plan.type == 'Individual')){
                benefits_var.push('Conan;');
            }
            if((gym_plan.plan == 'Anual') && (gym_plan.type == 'Familiar')){
                benefits_var.push('Barbaros Lendários;');
            }
            if((gym_plan.price == '20') || (gym_plan.price == '7') || (gym_plan.price == '5')){
                benefits_var.push('Mais acessível para o bolso;', 'Ter apenas uma experiência;');
            }
            if((gym_plan.plan == 'Mensal') || (gym_plan.plan == 'Trimestral') || (gym_plan.plan == 'Semestral') || (gym_plan.plan == 'Anual')){
                benefits_var.push('Desenvolva uma rótina de treino;', 'Mais barato à longo prazo;', 'Perfeito para quem gosta de malhar;');
            }
            if((gym_plan.plan == 'Semestral') || (gym_plan.plan == 'Anual')){
                benefits_var.push('Quanto mais tempo treinando, melhor;');
            }
            if(gym_plan.type == 'Familiar'){
                benefits_var.push('Para a família é mais barato;');
            }
            if((gym_plan.plan == 'Anual') && (gym_plan.type == 'Familiar')){
                benefits_var.push('O plano mais custo-benefício;');
            }

            return benefits_var
        }

        function Sign(){
            
        }

        return(
            <section className={styles.buy}>
                <h1 className={styles.title}>plano {gym_plan.plan} {gym_plan.type}</h1>
                <h2 className={styles.price_string}>
                    <span className={styles.dollar_sign}>R$ </span>{gym_plan.price},00<span className={styles.month}>/{gym_plan.time}</span>
                </h2>
                
                <h3 className={styles.benefits_title}>Benefícios deste plano</h3>
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
                    <button className={`${styles.button} ${styles.sign}`} onClick={() => Sign()}>Assinar</button>
                </div>
            </section>
        )
    }
}