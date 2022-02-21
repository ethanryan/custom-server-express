import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>
    Example Next.js app using custom server.js file and Express
    </h1>
    <div>
    process.env.NODE_ENV is: {process?.env?.NODE_ENV}
    </div>
    <ul>
      <li>
        <Link href="/b" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/a" as="/b">
          <a>b</a>
        </Link>
      </li>
    </ul>
    </>
  )
}
