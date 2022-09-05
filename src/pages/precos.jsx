import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from '../styles/prices.module.scss';

export default function Precos(){
    return(
        <section className={styles.price}>
            <Navbar/>
            <Footer/>
        </section>
    )
}