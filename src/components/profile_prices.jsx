import styles from '../styles/profile_data.module.scss';

export default function ProfilePrices({data}){

    console.log
    const date_start = new Date(data.plan.date_start);
    const date_end = new Date(data.plan.date_end);

    function CheckTime(date){
        if((date === 'Quinzenal') || (date === 'Semanal') || (date === 'Diário')){
            return 'dia'
        }
        else{
            return 'mês'
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
                    <h3 className={`${styles.grid_item} ${styles.right}`}>{date_start.toDateString('pt-BR', {timeZone: 'UTC'})}</h3>
                    <h3 className={`${styles.grid_item} ${styles.left}`}>Termino do plano:</h3>
                    <h3 className={`${styles.grid_item} ${styles.right}`}>{date_end.toDateString('pt-BR', {timeZone: 'UTC'})}</h3>
                </div>
                <h2 className={styles.days_miss}></h2>
            </div>
        )
    }    
    
    return <></>
}