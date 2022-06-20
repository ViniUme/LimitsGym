import { useSession, signIn, signOut } from "next-auth/react";
import { VerifyUser } from '../../lib/functions';

export default function Index() {

  const { data: session } = useSession()

  if (session) {

    return (
      <>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} alt="" />
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => VerifyUser({email: session.user.email})}>add</button>
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