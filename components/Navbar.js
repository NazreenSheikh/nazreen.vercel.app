import Link from 'next/link'

export default function Skills() {
  return (
    <nav className="sticky flex container w-full mx-auto max-w-screen-2xl justify-between px-1 py-2 h-14 lg:h-20 lg:px-12 md:items-center md:px-8 ">
      <h2 className="font-bold tracking-wider text-custom-green lg:text-5xl lg:tracking-widest md:text-3xl">
        <Link href="/" className="hidden md:block">
          <a>NAZREEN</a>
        </Link>
      </h2>
      <ul className="flex items-center justify-between mx-auto space-x-4 text-lg text-gray-600 md:text-xl md:mx-0 lg:text-2xl md:space-x-12 ">
        <li>
          <Link href="/#Home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#About">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#Skill">
            <a href="">Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/#Project">
            <a>Project</a>
          </Link>
        </li>
        <li>
          <Link href="/#Contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
