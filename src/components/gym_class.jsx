import style from '../styles/gym_class.module.scss';
import Link from 'next/link';

export default function GymClass() {
    return (
        <div className={style.gym_class}>

            <div className={style.body}>
                <h1 className={style.title}>Musculação</h1>
                <h2 className={style.description}>
                    Venha treinar para manter saldável tanto seu físico quanto seu psicológico. A musculação nos traz vários vantagens como uma maior qualidade do sono, melhora do humor, prevenção do diabetes, ajuda a emagrecer, entre muitos outros.
                </h2>
                <Link href="#"><a className={style.link_join}><button className={style.button_join}>Junte-se agora</button></a></Link>
            </div>
            <div className={style.muscle}>
                <h1 className={style.title}>Construção de Músculos</h1>
                <h2 className={style.description}>
                    Treine conosco para ganhar mais massa muscular para ter a definição que tanto quer. Aqui você encontra os melhores aparelhos para seu treino mesmo se você esta começando ou se já é de nível avançado.
                </h2>
                <Link href="#"><a className={style.link_join}><button className={style.button_join}>Junte-se agora</button></a></Link>
            </div>
        </div>
    )
}
