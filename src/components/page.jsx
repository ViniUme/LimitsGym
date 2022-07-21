import Head from 'next/head';

export default function Page({title, description, children}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta charSet='UTF-8' />
            </Head>

            {children}

        </>
    )
}