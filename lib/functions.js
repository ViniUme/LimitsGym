export async function VerifyUser(user){
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    await fetch('/api/verify-user', init)
        .then(response => response.json())
        .then((json) => {
            if(json.response === true){
                console.log("existe")
            }
            else{
                console.log("criando")
                const create = CreateUser(json.email);

                if(create === true){
                    return true
                }
            }
        })
}

export function CreateUser(user){

    const body = {
        email: user.email,
        wish: []
    }
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    console.log(init)

    return fetch("/api/create-user", init)
        .then(response => response.json())
        .then((json) => {
            if(json.message === true){
                return true
            }
        })
}

export function AddWishList(product, user){
    const check = VerifyUser(user);

    if(check === true){
        const init = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        }

        fetch("/api/add-wish-list", init)
            .then(response => response.json())
            .then(json => console.log(json))
    }
}