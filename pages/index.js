// import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      id="Home"
      className="box-border md:h-screen text-custom-green md:flex "
    >
      <div className="lg:w-8 md:w-7 md:h-4/5 md:my-auto md:ml-4 bg-custom-green "></div>
      <div className="px-4 mt-4 md:m-auto lg:ml-12 md:ml-4">
        <div>
          <p className="text-2xl text-black lg:text-5xl md:text-4xl ">
            HI, I am Nazreen
          </p>
          <p className="items-center mt-2 text-4xl font-extrabold md:mt-8 lg:text-6xl md:text-5xl ">
            Full Stack Web Developer And Designer
          </p>
        </div>
        <div className="text-xl text-center text-custom-green md:mt-4 md:text-xl md:text-left md:-bottom-32 ">
          <button className="p-3 mx-4 mt-6 text-white bg-custom-green md:p-4 ">
            <a href="#Contact">CONTACT ME</a>
          </button>
          <ul className="flex justify-between w-3/5 px-4 mx-auto mt-8 text-4xl text-center text-black md:mt-6 md:text-5xl md:w-1/2 md:mx-0 ">
            <li>
              <a href="http://www.twitter.com/nazreenshaikh6">
                <AiFillTwitterCircle />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nazreen-sheikh-865653198/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/NazreenSheikh">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com/nazreen_sheikhh">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 m-auto text-center md:w-4/5 lg:w-11/12 md:p-0 ">
        <Image
          src="/Images/Mask Group.svg"
          alt="nazreen's pic"
          height={550}
          width={550}
        />
      </div>
    </div>
  )
}
