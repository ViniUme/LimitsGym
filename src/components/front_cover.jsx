import Link from 'next/link';
import style from '../styles/front_cover.module.scss';

export default function FrontCover(){
    return(
        <section className={style.section_main}>
            <div className={style.wallpaper}>
                <span className={style.title_sub}>exceda seus limites</span>
                <span className={style.title_header}>academia limits</span>
                
                <Link href="#">
                    <a className={style.link_button}>
                        <button className={style.title_shadow}><span className={style.title_button}>junte-se a nós</span></button>
                    </a>
                </Link>
            </div>
        </section>
    )
}