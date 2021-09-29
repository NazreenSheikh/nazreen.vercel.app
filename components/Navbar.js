export default function Skills() {
  return (
    <nav className="sticky flex justify-between px-1 py-2 h-14 lg:h-20 lg:px-12 md:items-center md:px-8 ">
      <h2 className="font-bold tracking-wider text-custom-green lg:text-5xl lg:tracking-widest md:text-3xl">
        <a href="#" className="hidden md:block">
          NAZREEN
        </a>
      </h2>
      <ul className="flex items-center justify-between mx-auto space-x-12 text-lg text-gray-600 md:mx-0 lg:text-2xl md:space-x-12 md:text-lg md:space-x-4">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Skill">Skills</a>
        </li>
        <li>
          <a href="#Project">Project</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
