import { useSession, signIn, signOut } from "next-auth/react";
import { AddWishList } from '../../lib/functions';

export default function Index() {

  const { data: session } = useSession()

  if (session) {

    return (
      <>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} alt="" />
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => AddWishList(1, session.user.email)}>produto 1</button>
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