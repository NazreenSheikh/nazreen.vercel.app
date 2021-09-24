export default function Skills() {
  return (
    <nav className="flex justify-between sticky-nav px-1 py-2 lg:h-20 lg:px-12 lg:items-center md:items-center md:h-14  md:px-8 ">
      <h2 className="text-custom-green tracking-wider font-bold lg:text-5xl lg:tracking-widest md:text-3xl">
        NAZREEN
      </h2>
      <ul className="flex justify-between space-x-2 text-gray-600 text-sm lg:text-2xl lg:space-x-12 md:text-lg md:space-x-4">
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
