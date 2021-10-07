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
      <div className="flex flex-col items-center justify-between mt-8 md:h-screen md:flex-row ">
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
          <div className="px-2 py-4 text-center">
            <div className="font-bold tracking-wider">BLOOMS BAY</div>
            <div className="text-gray-700">
              React-Firebase-TensorFlow-Tailwind
            </div>
            <div className="pt-2 font-bold text-left">Discription:</div>
            <div className="text-left">
              An E-commarce website to explore and buy beautiful flowers for
              your Partner, Family or Friend. You can also choose flower
              according to upcoming fest or occassional events.
            </div>

            <button className="text-2xl">
              <a href="https://github.com/NazreenSheikh/flower-management-frontend">
                <FaGithub className=" hover:text-custom-green" />
              </a>
            </button>
          </div>
        </div>
        <div className="w-3/5 max-h-screen m-8 mt-12 bg-white border-4 border-black rounded-lg shadow-lg md:my-auto md:w-1/2 lg:w-1/4 lg:ml-8 ">
          <a href="https://react-gallery-sheikh.vercel.app/">
            <Image
              src="/Projects/web-Gallery.png"
              alt=""
              height={500}
              width={500}
            />{' '}
          </a>
          <div className="px-2 py-4 text-center">
            <div className="font-bold tracking-wider">WEB GALLERY</div>
            <div className="text-gray-700">
              React-Firebase-TensorFlow-Tailwind
            </div>
            <div className="pt-2 font-bold text-left">Discription:</div>
            <div className="text-left">
              Here you can explore and search any picture also can fetch
              information about any particular picture. To download any picture
              you have to first login to the web gallery.
            </div>
            <button className="text-2xl">
              <a href="https://github.com/NazreenSheikh/React-Gallery">
                <FaGithub className=" hover:text-custom-green" />
              </a>
            </button>
          </div>
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
          <div className="px-2 py-4 text-center">
            <div className="font-bold tracking-wider">TEXT UTILS</div>
            <div className="text-gray-700">React-Bootstrap</div>
            <div className="pt-2 font-bold text-left">Discription:</div>
            <div className="text-left">
              Text-Utils takes your provided text and change its original
              appearance to somthing new according to your chosen option. You
              can also switch to textutils dark or light mode.
            </div>
            <button className="text-2xl">
              <a href="https://github.com/NazreenSheikh/textutils">
                <FaGithub className=" hover:text-custom-green" />
              </a>
            </button>
          </div>
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
          <div className="px-2 py-4 text-center">
            <div className="font-bold tracking-wider">TEXT UTILS</div>
            <div className="text-gray-700">React-Bootstrap</div>
            <div className="pt-2 font-bold text-left">Discription:</div>
            <div className="text-left">
              Text-Utils takes your provided text and change its original
              appearance to somthing new according to your chosen option. You
              can also switch to textutils dark or light mode.
            </div>
            <button className="text-2xl">
              <a href="https://github.com/NazreenSheikh/textutils">
                <FaGithub className=" hover:text-custom-green" />
              </a>
            </button>
          </div>
        </div>
        <div className="w-3/5 max-h-screen mt-8 mb-16 bg-white border-4 border-black rounded-lg shadow-lg md:m-8 md:my-auto md:w-1/2 lg:w-1/4 lg:ml-8">
          {' '}
          <a href="https://momentum-phi.vercel.app/">
            <Image
              src="/Projects/Momentum.png"
              alt=""
              height={500}
              width={500}
            />
          </a>
          <div className="px-2 py-4 text-center">
            <div className="font-bold tracking-wider">MOMENTUM</div>
            <div className="text-gray-700">HTML-CSS-JAVASCRIPT</div>
            <div className="pt-2 font-bold text-left">Discription:</div>
            <div className="text-left">
              A basic Personal deskboard with dynamic background, motivational
              quotes and current climate condition at your location. You can add
              your Daily manageable ToDos to it.
            </div>
            <button className="text-2xl">
              <a href="https://github.com/NazreenSheikh/momentum">
                <FaGithub className=" hover:text-custom-green" />
              </a>
            </button>
          </div>
        </div>

        <div className="bg-white md:w-4 md:mb-28 md:h-screen md:mr-4"></div>
      </div>
    </div>
  )
}
