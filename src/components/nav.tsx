import NavText from "@components/wrappers/NavText"

export default function Nav() {

    return (
        <>
            <div className="w-full absolute nav h-24 py-8 lg:border lg:flex items-center">
                <div className="w-1/3"></div> {/* left box, padding only, no content */}
                <div className="lg:w-1/3 flex items-center justify-center"> {/* center box with logo text*/}
                    <h1 className="tenorSans text-6xl text-center lg:py-0 py-2">Studyflow</h1>
                </div>
                <div className="lg:w-1/3 lg:py-0 py-6 flex items-center justify-around lg:border-b-0 border-l-0 border-r-0 border border-b-1 border-t-0"> {/* right box with links */}
                    <NavText to="/home">Home</NavText>
                    <NavText to="/solutions">Solutions</NavText>
                    <NavText to="/about">About</NavText>
                    <NavText to="/">Get Started</NavText>
                </div>
            </div>
        </>
    )

}