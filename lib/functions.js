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
                CreateUser(json.email);
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

    fetch("/api/create-user", init)
        .then(response => response.json())
        .then(json => console.log(json))
}