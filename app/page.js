'use client'

import { useRouter } from "next/navigation";

export default function Home(context) {

  const router = useRouter()

  return (
    <main>
      <div className="container px-5 py-24 mx-auto flex flex-col justify-center items-center text-center">
        <h1>Homepage</h1>
        <button onClick={() => router.push('/signin')}>Sign in with Email</button>
      </div>
    </main>
  )
}