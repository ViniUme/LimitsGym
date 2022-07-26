import style from '../styles/gym_feature.module.scss';

export default function GymFeature(){
    return(
        <div className={style.gym_features}>
            <h3 className={style.why}>Por quê fazer academia?</h3>
            <h2 className={style.guarantee}>Em nossa academia garantiremos à você</h2>

            <div className={style.div_features}>
                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img1}`} />
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img2}`} />
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img3}`} />
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img4}`} />
                </div>
            </div>
        </div>
    )
}