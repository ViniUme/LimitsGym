import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Page({title, description, cookies, children, name}){

    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta charSet='UTF-8'/>
                <meta name='author' content='Leonardo Berteli, Ruan Lucas, Pedro Vágula, Vinícius Santos, Vinícius Marcham'/>
                <meta name='google' content='notranslate'/>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <Navbar cookies={cookies} name={name} />
                {children}
            <Footer cookies={cookies} />
        </>
    )
}