import Link from 'next/link';
import style from '../styles/front_cover.module.scss';

export default function FrontCover({cookies}){

    function ReturnLink(){
        if(cookies.USER_LOGIN == undefined){
            return '/cadastro'
        }
        else{
            return '/perfil'
        }
    }

    return(
        <section className={style.front_cover}>
            <div className={style.wallpaper}>
                <span className={style.title_sub}>exceda seus limites</span>
                <span className={style.title_header}>academia limits</span>
                
                <Link href={ReturnLink()}><a className={style.link_button}>junte-se à nós</a></Link>
            </div>
        </section>
    )
}