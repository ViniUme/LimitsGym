import styles from '../styles/prices.module.scss';

export default function Prices(){
    return(
        <section className={styles.prices}>

            <h1 className={styles.title}>Planos individuais</h1>
            <div className={styles.different_prices}>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Diário</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>20,00<span className={styles.month}>/dia</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por dia é R$ 20,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Semanal</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>7,00<span className={styles.month}>/dia</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por semana é R$ 49,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Quinzenal</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>5,00<span className={styles.month}>/dia</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por quinzena é R$ 75,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Mensal</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>120,00<span className={styles.month}>/mês</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por mês é R$ 120,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Trimestral</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>115,00<span className={styles.month}>/mês</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por trimestre é R$ 345,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Semestral</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>110,00<span className={styles.month}>/mês</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por semestre é R$ 660,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Anual</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>105,00<span className={styles.month}>/mês</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por ano é R$ 1260,00.</h3>
                    <button className={styles.button}>assinar</button>
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
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Trimestral</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>110,00<span className={styles.month}>/mês</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por trimestre é R$ 330,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Semestral</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>105,00<span className={styles.month}>/mês</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por semestre é R$ 630,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

                <div className={styles.price_div}>
                    <h1 className={styles.price_title}>Plano Anual</h1>
                    <h2 className={styles.price_string}>
                        <span className={styles.dollar_sign}>R$ </span>100,00<span className={styles.month}>/mês</span>
                    </h2>
                    <h3 className={styles.text}>Total pago por ano é R$ 120,00.</h3>
                    <button className={styles.button}>assinar</button>
                </div>

            </div>
        </section>
    )
}