import Link from "next/link"

export default function NavText(props: any) {

    return (
        <Link href={props.to} className="tenorSans text-2xl hover-underline-animation">
            {props.children}
        </Link>
    )

}