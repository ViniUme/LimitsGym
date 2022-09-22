import Page from '../components/page';
import { VerifyUser } from '../utils/functions';
import { parseCookies } from 'nookies';
import ProfileData from '../components/profile_data';
import { mask } from 'remask';
import { Patterns } from '../utils/variables';

export async function getServerSideProps(context){
    const pattern = Patterns();
    const cookies = parseCookies(context);

    const url = context.req.rawHeaders[1]
    const response = await VerifyUser(cookies.USER_LOGIN, url);
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