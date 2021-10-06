import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
export default function Skills() {
  return (
    <div
      id="Project"
      className="box-border relative p-2 text-black bg-custom-green "
    >
      <div className="box-border absolute left-0 right-0 w-5/12 p-2 m-auto text-xl text-center bg-white border-4 md:border-8 border-custom-green md:text-3xl md:w-1/4 -top-7">
        Projects
      </div>
      <div className="flex flex-col items-center justify-between md:h-screen md:flex-row lg:mt-10 ">
        <div className="w-3/5 max-h-screen m-8 bg-white border-4 border-black rounded-lg shadow-lg md:my-auto md:w-1/2 lg:w-1/4 ">
          {' '}
          <a href="https://blooms-bay.netlify.app/">
            <Image
              src="/Projects/Blooms-bay.png"
              alt=""
              height={500}
              width={500}
            />{' '}
          </a>
          <p className="py-4">
            description :<br />
            description creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4{' '}
          </p>
        </div>
        <div className="w-3/5 max-h-screen m-8 mt-12 bg-white border-4 border-black rounded-lg shadow-lg md:my-auto md:w-1/2 lg:w-1/4 lg:ml-16 ">
          <a href="https://react-gallery-sheikh.vercel.app/">
            <Image
              src="/Projects/web-Gallery.png"
              alt=""
              height={500}
              width={500}
            />{' '}
          </a>
          <p className="py-4">
            description :<br />
            description creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4{' '}
          </p>
        </div>
        <div className="w-3/5 max-h-screen m-8 bg-white border-4 border-black rounded-lg shadow-lg md:my-auto md:w-1/4 md:hidden lg:block">
          {' '}
          <a href="https://nazreensheikh.github.io/TextUtils/">
            <Image
              src="/Projects/TextUtils.png"
              alt=""
              height={500}
              width={500}
            />{' '}
          </a>
          <p className="py-4">
            description :<br />
            description creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4{' '}
          </p>
        </div>
        <div className="bg-white md:w-4 md:mt-28 md:h-screen md:mr-4 lg:mt-4"></div>
      </div>
      <div className="flex flex-col items-center justify-between md:h-screen md:flex-row">
        <div className="hidden w-3/5 max-h-screen m-8 bg-white border-4 border-black rounded-lg shadow-lg md:my-auto md:w-1/2 md:block lg:hidden">
          {' '}
          <a href="https://nazreensheikh.github.io/TextUtils/">
            <Image
              src="/Projects/TextUtils.png"
              alt=""
              height={500}
              width={500}
            />
          </a>
          <p className="py-4">
            description :<br />
            description creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4{' '}
          </p>
        </div>
        <div className="w-3/5 max-h-screen mt-8 mb-16 bg-white border-4 border-black rounded-lg shadow-lg md:m-8 md:my-auto md:w-1/2 lg:w-1/4 lg:ml-16">
          {' '}
          <a href="https://momentum-phi.vercel.app/">
            <Image
              src="/Projects/Momentum.png"
              alt=""
              height={500}
              width={500}
            />
          </a>
          <p className="py-4">
            description :<br />
            description creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4creen mt-8 mb-16 bg-white border-4creen mt-8 mb-16
            bg-white border-4{' '}
            <button>
              <FaGithub className="hover:text-custom-green" />
            </button>
          </p>
        </div>

        <div className="bg-white md:w-4 md:mb-28 md:h-screen md:mr-4"></div>
      </div>
    </div>
  )
}
