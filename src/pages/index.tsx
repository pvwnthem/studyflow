import SplashPage from "@components/splashPage"
import Nav from "@components/nav"
import Info from "@/components/info"

export default function Home() {
  return (
    <>
      <div className='w-full h-screen '>
        <Nav />
        <SplashPage />
        
      </div>
      <div className='w-full h-screen '>
        <Info />
        
      </div>



      
      
     
    </>
  )
}
