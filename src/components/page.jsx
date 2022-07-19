import Head from 'next/head';

export default function Page({title, description, children}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            {children}

        </>
    )
}