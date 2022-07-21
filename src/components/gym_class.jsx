import style from '../styles/gym_class.module.scss';
import Link from 'next/link';

export default function GymClass() {
    return (
        <div className={style.gym_class}>

            <div className={style.body}>
                <h1 className={style.title}>Musculação</h1>
                <h2 className={style.description}>
                    Venha treinar para se manter saldável fisicamente e psicologicamente. A musculação traz vários benefícios como maior qualidade do sono, melhora do humor, prevenção do diabetes, ajuda a emagrecer, entre muitos outros.
                </h2>
                <Link href="#"><a className={style.link_join}><button className={style.button_join}>Junte-se agora</button></a></Link>
            </div>
            <div className={style.muscle}>
                <h1 className={style.title}>Construção de Músculos</h1>
                <h2 className={style.description}>
                    Treine conosco para contruir musculos e conquistar a definição que tanto deseja. Aqui você encontra os melhores aparelhos para seu treino independentemente se você esta começando ou se já é avançado.
                </h2>
                <Link href="#"><a className={style.link_join}><button className={style.button_join}>Junte-se agora</button></a></Link>
            </div>

        </div>
    )
}
