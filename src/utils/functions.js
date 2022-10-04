export async function VerifyUser(user, url){
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    if(url == null){
        try{
            const response = await fetch(`/api/verify-user`, init).then(response => {return response.json()})
            return response
        }
        catch(error){
            return 'Erro ao tentar requisitar verificação de usuário'
        }
    }
    else{
        try{
            const response = await fetch(`http://${url}/api/verify-user`, init).then(response => {return response.json()});
            return response
        }
        catch(error){
            return error
        }
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

export async function EditUser(old_user, new_user){
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({old_user: old_user, new_user: new_user})
    }
    
    try{
        const response = await fetch('/api/edit-user', init).then((response) => {return response.json()});
        return response
    }
    catch(error){
        return error
    }
}