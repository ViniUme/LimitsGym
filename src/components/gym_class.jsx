import style from '../styles/gym_class.module.scss';
import Link from 'next/link';

export default function GymClass() {
    return (
        <div className={style.gym_class}>

            <div className={style.body}>
                <h1 className={style.title}>Musculação</h1>
                <h2 className={style.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nobis possimus delectus illum ut numquam pariatur nihil vero, consectetur blanditiis officia similique voluptas, totam culpa perferendis doloribus reiciendis nisi dolorem.
                </h2>
                <Link href="#"><a className={style.link_join}><button className={style.button_join}>Junte-se agora</button></a></Link>
            </div>
            <div className={style.muscle}>
                <h1 className={style.title}>Construção de Músculos</h1>
                <h2 className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia iusto nihil ad? Ad ipsum quasi omnis amet veniam pariatur ea, eveniet, sed magnam id similique sunt deleniti sequi eius? Nobis.
                </h2>
                <Link href="#"><a className={style.link_join}><button className={style.button_join}>Junte-se agora</button></a></Link>
            </div>

        </div>
    )
}
