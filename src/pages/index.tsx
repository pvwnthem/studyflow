import SplashPage from "@components/splashPage"
import Nav from "@components/nav"
import Info from "@/components/info"
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  
  return (
    <>
    {session ? (
      <>
      <Nav />
      
      <p>{JSON.stringify(session)}</p>
      </>
    ): (
      <>
      <div className='w-full h-screen '>
        <Nav />
        <SplashPage />
        
      </div>
      <div className='w-full h-screen '>
        <Info />
        
      </div>
      </>
    )}
      



      
      
     
    </>
  )
}
