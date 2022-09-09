export async function VerifyUser(user){
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user.email)
    }

    return await fetch('/api/verify-user', init)
        .then(response => response.json())
        .then((json) => {
            return json.message
        })
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