export default function Skills() {
  return (
    <nav className="flex justify-between px-1 py-2 sticky-nav lg:h-20 lg:px-12 lg:items-center md:items-center md:h-14 md:px-8 ">
      <h2 className="font-bold tracking-wider text-custom-green lg:text-5xl lg:tracking-widest md:text-3xl">
        <a href="#">NAZREEN</a>
      </h2>
      <ul className="flex justify-between space-x-2 text-sm text-gray-600 lg:text-2xl lg:space-x-12 md:text-lg md:space-x-4">
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
