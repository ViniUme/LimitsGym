export async function VerifyUser(user, url){
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user.email)
    }

    try{
        const response = await fetch('http://localhost:3000/api/verify-user', init).then(response => response.json()).then((json) => {return json})
        return response
    }
    catch(err){
        return 'Erro ao tentar requisitar verificação de usuário'
    }
}

export async function CreateUser(user){

    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    return await fetch("/api/create-user", init).then(response => response.json())
}

export async function LoginUser(user){
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    const response = await fetch('/api/login-user', init).then(response => response.json());

    return response
}

export async function AddWishList(product, user){

    const check = await VerifyUser(user);

    if(check === true){

        const info = await VerifyWishList(user)
        const wish = info.wish
        wish.push(product)
        const newInfo = [
            info.email,
            {
                email: info.email,
                wish: wish
            }
        ]
        
        const init = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newInfo)
        }

        fetch("/api/add-wish-list", init)
    }
}

export function VerifyWishList(user){
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    return fetch("/api/verify-wish-list", init)
        .then(response => response.json())
        .then((json) => {return json})
}