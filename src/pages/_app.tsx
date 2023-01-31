import '@/styles/globals.css'

import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import type { AppProps } from 'next/app'

// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}