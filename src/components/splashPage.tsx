import ReactTypingEffect from 'react-typing-effect';
import Chevron from '@components/chevron';

export default function SplashPage() {
    return (
        <>
            <div className='w-full h-full sp absolute flex flex-col text-center justify-center items-center'>
                <div className='h-1/3 w-full flex justify-center items-center'>

                </div>
                <div className='h-1/3 w-full flex justify-center items-center'>
                    <ReactTypingEffect className='tenorSans lg:text-9xl text-5xl' text={["Study", "Learn" ,"Plan", "Manage", "Perform"]} speed={175} typingDelay={500}  eraseDelay={1000} cursor=" "/>
                    <p className='tenorSans lg:text-9xl text-5xl'>Better</p>
                </div>
                <div className='h-1/3 w-full flex justify-center items-center'>
                    <div className='mt-auto py-10 '>
                        <Chevron />
                    </div>
                </div>
                
                
                
        
                
            </div>
        

            


            
        </>
    )
    
}