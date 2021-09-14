import Link from 'next/link'
export default function Navbar() {
  return (
    <div>
      <h2>N A Z R E E N</h2>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/skill">
            <a>Skill</a>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <a>Project</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
