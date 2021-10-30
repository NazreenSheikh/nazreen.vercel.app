import Image from 'next/image'
import { Languages, Tools, Platforms } from './SingleSkill'
import uuid from 'react-uuid'

export default function Skills() {
  return (
    <div
      id="Skill"
      className="box-border relative p-2 text-white bg-white container w-full mx-auto max-w-screen-2xl "
    >
      <div className="box-border absolute left-0 right-0 w-5/12 p-2 m-auto text-xl text-center border-4 border-white md:border-8 bg-custom-green md:text-3xl md:w-1/4 -top-7">
        My Skills
      </div>
      <div className="flex justify-between ">
        <div className="bg-custom-green md:w-4 md:h-cus-height md:my-20 md:ml-4"></div>
        <div className="flex flex-col items-center justify-between w-full my-12 space-y-16 md:my-auto ">
          <div className="justify-between w-3/4 border-4 border-black rounded-lg shadow-xl md:flex md:h-28 h-72 bg-custom-green">
            <div className="p-3 text-2xl text-center md:text-4xl">
              Languages
            </div>
            <div className="flex text-center justify-around  mt-16 md:my-auto  md:px-4 md:space-x-3 ">
              {Languages.map((lang) => {
                return (
                  <a href={lang.links} key={uuid()}>
                    <Image
                      src={'/Images/' + lang.Img}
                      alt={lang.name}
                      height={100}
                      width={100}
                    />
                  </a>
                )
              })}
            </div>
          </div>
          <div className="justify-between w-3/4 border-4 border-black rounded-lg shadow-xl md:flex md:h-28 bg-custom-green">
            <div className="p-3 text-2xl text-center md:text-4xl">Tools</div>
            <div className="md:flex">
              <div className="md:flex justify-between text-center  my-8 md:my-3 lg:my-0 ">
                {Tools.map((tool) => {
                  return (
                    <a href={tool.links} key={uuid()} className=" px-2 md:p-0">
                      <Image
                        src={'/Images/' + tool.Img}
                        alt={tool.name}
                        height={100}
                        width={100}
                      />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="justify-between w-3/4 border-4 border-black rounded-lg shadow-xl md:flex md:h-28 h-72 bg-custom-green">
            <div className="p-3 text-2xl text-center md:text-4xl">
              Platforms
            </div>
            <div className="flex justify-around mt-16 md:mt-0 md:px-4">
              {Platforms.map((platform) => {
                return (
                  <a href={platform.links} key={uuid()}>
                    <Image
                      src={'/Images/' + platform.Img}
                      alt={platform.name}
                      height={100}
                      width={100}
                    />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
