import Image from 'next/image'
export default function Skills() {
  return (
    <div
      id="Skill"
      className="box-border relative p-2 text-white bg-white md:max-h-screen container w-full mx-auto max-w-screen-2xl "
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
            <div className="flex justify-between px-2 mt-16 md:my-auto md:px-4 md:space-x-3 ">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <Image
                  src="/Images/javascript.svg"
                  alt="javascipt"
                  height={100}
                  width={100}
                />
              </a>
              <a href="https://www.typescripttutorial.net/">
                <Image
                  src="/Images/typescriptlang-icon.svg"
                  alt="typescript"
                  height={100}
                  width={100}
                />
              </a>
              <a href="https://www.python.org">
                <Image
                  src="/Images/python-icon.svg"
                  alt="Python"
                  height={100}
                  width={100}
                />
              </a>
            </div>
          </div>
          <div className="justify-between w-3/4 border-4 border-black rounded-lg shadow-xl md:flex md:h-28 bg-custom-green">
            <div className="p-3 text-2xl text-center md:text-4xl">Tools</div>
            <div className="md:flex">
              <div className="flex justify-between px-2 mt-8 md:mt-0 md:pr-0 ">
                <a href="https://www.mysql.com/">
                  <Image
                    src="/Images/mysql-official.svg"
                    className="bg-white "
                    alt="Mysql"
                    height={100}
                    width={100}
                  />
                </a>
                <a href="https://git-scm.com/">
                  <Image
                    src="/Images/git-scm-icon.svg"
                    alt="Git"
                    height={100}
                    width={100}
                  />
                </a>
                <a href="https://figma.com/">
                  <Image
                    src="/Images/figma-icon.svg"
                    alt="Figma"
                    height={100}
                    width={100}
                  />
                </a>
              </div>
              <div className="flex justify-between px-2 my-8 md:mt-0 md:my-0 md:pl-0 ">
                <a href="https://reactjs.org/">
                  <Image
                    src="/Images/reactjs-icon.svg"
                    alt="Reactjs"
                    height={100}
                    width={100}
                  />
                </a>
                <a href="https://nodejs.org">
                  <Image
                    src="/Images/nodejs-icon.svg"
                    alt="Nodejs"
                    height={100}
                    width={100}
                  />
                </a>
                <a href="https://code.visualstudio.com/">
                  <Image
                    src="/Images/vscode.svg"
                    alt="VScode"
                    height={100}
                    width={100}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="justify-between w-3/4 border-4 border-black rounded-lg shadow-xl md:flex md:h-28 h-72 bg-custom-green">
            <div className="p-3 text-2xl text-center md:text-4xl">
              Plateforms
            </div>
            <div className="flex justify-around mt-16 md:mt-0 md:px-4">
              <a href="https://www.linux.org/">
                <Image
                  src="/Images/linux-icon.svg"
                  alt="Linux"
                  height={100}
                  width={100}
                />
              </a>
              <a href="https://www.microsoft.com/">
                <Image
                  src="/Images/windows.svg"
                  alt="Windows"
                  height={100}
                  width={100}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
