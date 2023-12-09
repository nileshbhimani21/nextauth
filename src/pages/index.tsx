import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data } = useSession()
  if (data) {
    return (
      <div style={{ textAlign: 'center' }}>
        Signed in as<br />
        {data.user.name} <br />{data.user.email}<br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div style={{ textAlign: 'center' }}>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
