import Link from "next/link"

export default function NavText(props: any) {

    return (
        <Link href={props.to} className="tenorSans md:text-2xl text-lg hover-underline-animation">
            {props.children}
        </Link>
    )

}