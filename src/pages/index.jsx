import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";

export default function Index() {

  useEffect(() => {
    async function VerifyUser(){
      await fetch('/api/verify-user')
        .then( async (res) => {
          await res.json()
          console.log(res);
        })
    }
    VerifyUser();
  }, [])

  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} alt="" />
        <button onClick={() => signOut()}>Sign out</button>
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