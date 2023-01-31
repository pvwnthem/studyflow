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
      <a href="https://www.flaticon.com/free-icons/mortarboard" title="mortarboard icons" className="mx-auto">Mortarboard icons created by mavadee - Flaticon</a>



      
      
     
    </>
  )
}
