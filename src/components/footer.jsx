import styles from '../styles/footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({cookies}){

    function UserLinks(){
        if(cookies.USER_LOGIN == undefined){
            return(
                <>
                    <Link href="/entrar"><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Entrar</a></Link>
                    <Link href="/cadastro"><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Cadastrar-se</a></Link>
                </>
            )
        }
        else{
            return(
                <>
                    <Link href="/perfil"><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Perfil</a></Link>
                    <Link href="/carrinho"><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Carrinho</a></Link>
                </>
            )
        }
    }

    return(
        <section className={styles.footer}>
            <div className={styles.contact}>
                <h3 className={styles.div_title}>Entrar em contato</h3>
                <span className={styles.div_item}><Image src="/img/local.webp" width={25} height={25} alt="" />R. Armando Sales, 489 - Osvaldo Cruz - SP</span>
                <span className={styles.div_item}><Image src="/img/tel.webp" width={25} height={25} alt="" />(41) 99674-8137</span>
                <Link href="https://www.instagram.com/limitsgym/"><a target="_blank" className={`${styles.div_item} ${styles.item_link}`}><Image src="/img/instagram.webp" width={25} height={25} alt="" />@limitsgym</a></Link>
            </div>
            <div className={styles.links}>
                <h3 className={styles.div_title}>Links Rápidos</h3>
                <Link href="/"><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Início</a></Link>
                <Link href="/contatos"><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Contatos</a></Link>
                <Link href="/precos"><a className={`${styles.div_item} ${styles.item_link}`}>{">"} Preços</a></Link>
                {UserLinks()}
            </div>
        </section>
    )
}