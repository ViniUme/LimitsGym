/* eslint-disable @next/next/no-img-element */
import style from '../styles/gym_feature.module.scss';

export default function GymFeature(){
    return(
        <div className={style.gym_features}>
            <h3 className={style.why}>Por quê fazer academia?</h3>
            <h2 className={style.guarantee}>Em nossa academia garantiremos à você</h2>

            <div className={style.div_features}>
                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img1}`} />
                    <img className={style.svg_feature} src='svg/feature-svg1.svg' alt='Saúde' />
                    <div className={style.div_text}>
                        <h4 className={style.title_feature}>Benefício à Saúde</h4>
                        <h5 className={style.descrition_feature}>Pode prevenir contra doenças como diabetes, hipertensão, osteoporose e algumas doenças cardíacas.</h5>
                    </div>
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img2}`} />
                    <img className={style.svg_feature} src='svg/feature-svg2.svg' alt='' />
                    <div className={style.div_text}>
                        <h4 className={style.title_feature}>Benefício à Autoestima</h4>
                        <h5 className={style.descrition_feature}>Quem começa a praticar atividade física ganha também controle emocional, aumento da autoestima, diminuição de ansiedade e melhora no humor.</h5>
                    </div>
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img3}`} />
                    <img className={style.svg_feature} src='svg/feature-svg3.svg' alt='' />
                    <div className={style.div_text}>
                        <h4 className={style.title_feature}>Maior Condicionamento</h4>
                        <h5 className={style.descrition_feature}>Quanto mais intenso for a musculação, maior é o trabalho do coração, garantindo melhora no sistema cardíaco e respiratório.</h5>
                    </div>
                </div>

                <div className={style.view_feature}>
                    <div className={`${style.img_feature} ${style.img4}`} />
                    <img className={style.svg_feature} src='svg/feature-svg4.svg' alt='' />
                    <div className={style.div_text}>
                        <h4 className={style.title_feature}>Trata problemas Emocionais</h4>
                        <h5 className={style.descrition_feature}>Pro promover a liberação da endorfina, a musculação pode ser uma ótima alternativa para aliviar o estressse, diminuir os sintomas de ansiedade e até mesmo combater a depressão.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}