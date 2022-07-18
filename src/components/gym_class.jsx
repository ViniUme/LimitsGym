import style from '../styles/gym_class.module.scss';

export default function GymClass() {
    return (
        <div className={style.gym_class}>

            <div className={style.body}>
                <h1>Musculação</h1>
            </div>
            <div className={style.muscle}>
                <h1>Construção de músculos</h1>
            </div>

        </div>
    )
}
