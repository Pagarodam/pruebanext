import Link from "next/link";

export default function Timeline({ userName }){
    return (
    <>
        <h1>This is the Timeline of { userName }</h1>
        <Link href="/">
            <a>go home</a>
        </Link>
    </>
    )
}

Timeline.getInititalProps = () => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json());
}