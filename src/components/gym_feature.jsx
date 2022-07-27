import style from '../styles/gym_feature.module.scss';

export default function GymFeature(){
    return(
        <div className={style.gym_features}>
            <h3 className={style.why}>Por quê fazer academia?</h3>
            <h2 className={style.guarantee}>Em nossa academia garantiremos à você</h2>

            <div className={style.div_features}>
                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img1}`} />
                    <img src='svg/feature-svg1.svg' alt='Saúde' />
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img2}`} />
                    <img src='svg/feature-svg2.svg' alt='' />
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img3}`} />
                    <img src='svg/feature-svg3.svg' alt='' />
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img4}`} />
                    <img src='svg/feature-svg4.svg' alt='' />
                </div>
            </div>
        </div>
    )
}