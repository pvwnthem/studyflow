import NavText from "@components/wrappers/NavText"

export default function Nav() {

    return (
        <>
            <div className="w-full h-24 border flex">
                <div className="w-1/3 bg-blue-200"></div> {/* left box, padding only, no content */}
                <div className="w-1/3 flex items-center justify-center"> {/* center box with logo text*/}
                    <h1 className="tenorSans text-6xl text-center">Studyflow</h1>
                </div>
                <div className="w-1/3 flex items-center justify-around"> {/* right box with links */}
                    <NavText>home</NavText>
                    <NavText>home</NavText>
                    <NavText>home</NavText>
                    <NavText>Get Started</NavText>
                </div>
            </div>
        </>
    )

}