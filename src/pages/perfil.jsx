import Page from '../components/page';
import { VerifyUser } from '../utils/functions';
import { parseCookies } from 'nookies';
import ProfileData from '../components/profile_data';
import EditForm from '../components/edit_form';
import { mask } from 'remask';
import { Patterns } from '../utils/variables';
import { useState } from 'react';

export async function getServerSideProps(context){
    const pattern = Patterns();
    const cookies = parseCookies(context);
    const response = await VerifyUser({email: cookies.USER_LOGIN});
    const user_data = {...response.user, tel: mask(response.user.tel, pattern.tel), rg: mask(response.user.rg, pattern.rg), pass: null};

    return{
        props: {
            cookies: cookies,
            data: user_data
        }
    }
}

export default function Profile({cookies, data}){

    return(
        <Page title='Perfil do usuário' description='Página onde mostra todos os dados sobre o usuário' cookies={cookies}>
            <ProfileData data={data}/>
        </Page>
    )
}