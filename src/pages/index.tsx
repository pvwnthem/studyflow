import SplashPage from "@components/splashPage"
import Nav from "@components/nav"
import Info from "@/components/info"

export default function Home() {
  return (
    <>
      <div className='w-full h-screen bg-red-200'>
        <Nav />
        <SplashPage />
        
      </div>
      <div className='w-full h-screen bg-blue-200'>
        <Info />
        
      </div>



      
      
     
    </>
  )
}
