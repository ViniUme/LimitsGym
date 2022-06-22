import { useSession, signIn, signOut } from "next-auth/react";
import { AddWishList } from '../../lib/functions';

export default function Index() {

  const { data: session } = useSession()

  if (session) {

    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => AddWishList(1, session.user.email)}>produto 1</button>
        <button onClick={() => AddWishList(2, session.user.email)}>produto 2</button>
        <button onClick={() => AddWishList(3, session.user.email)}>produto 3</button>
        <button onClick={() => AddWishList(4, session.user.email)}>produto 4</button>
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