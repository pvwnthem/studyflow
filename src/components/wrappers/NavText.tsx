
export default function NavText(props: any) {

    return (
        <h1 className="tenorSans text-2xl hover-underline-animation">
            {props.children}
        </h1>
    )

}