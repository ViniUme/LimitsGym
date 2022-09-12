import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Page({title, description, children}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta charSet='UTF-8' />
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}