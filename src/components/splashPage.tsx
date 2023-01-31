import ReactTypingEffect from 'react-typing-effect';


export default function SplashPage() {
    return (
        <>
            <div className='w-full h-full sp absolute flex text-center justify-center items-center'>
                <ReactTypingEffect className='tenorSans lg:text-9xl text-5xl' text={["Study", "Learn" ,"Plan", "Manage", "Perform"]} speed={175} typingDelay={500}  eraseDelay={1000} cursor=" "/>
                <p className='tenorSans lg:text-9xl text-5xl'> Better</p>

            </div>
        </>
    )
    
}