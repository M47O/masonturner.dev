import Link from "next/link"

export default function NotFound(){
    return (
        <p>Error 404: This route does not exist. <Link href="/">Click here to navigate home</Link>.</p>
    )
}