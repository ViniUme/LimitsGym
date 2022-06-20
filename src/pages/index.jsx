import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from 'react';

export default function Index() {

  const { data: session } = useSession()
  const [wish, setWish] = useState(0)

  if (session) {

    async function VerifyUser(){
  
      const email = {
        email: session.user.email
      }

      const init = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
      }

      await fetch('/api/verify-user', init)
        .then(response => response.json())
        .then(json => console.log(json))
    }

    return (
      <>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} alt="" />
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => VerifyUser()}>add</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}