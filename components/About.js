import Image from 'next/image'
export default function About() {
  return (
    <div className="container w-full mx-auto max-w-screen-2xl ">
      <div
        id="About"
        className="box-border relative p-2 mt-0 text-white  md:flex-row-reverse bg-custom-green md:flex"
      >
        <div className="box-border absolute left-0 right-0 w-5/12 p-2 m-auto text-xl text-center text-black bg-white border-4 md:border-8 md:text-3xl md:w-1/4 -top-7 border-custom-green">
          About Me
        </div>{' '}
        <div className="bg-white md:w-4 md:h-cus-height md:my-20 md:mr-4 "></div>
        <div className="items-center p-4 mt-12 text-2xl md:w-2/3 item-center md:p-4 md:my-auto lg:text-3xl">
          Hii, I am Nazreen. Currently Pursuing Electrical Engineering From
          JAMIA MILLIA ISLAMIA, DELHI.
          <br /> I'm a young student passionate about development. I work with
          decisiveness and conviction. My field of interest is programming and
          website design.
          <br />
          <br /> I have worked on Several Web Development Projects in the past
          and the technologies I prefer Working with include reactjs, nextjs,
          typescript, python, and node js.
        </div>
        <div className="p-8 m-auto text-center md:ml-2 md:p-0">
          <Image
            src="/Images/pic2.svg"
            alt="nazreen's pic"
            height={450}
            width={450}
          />
        </div>
      </div>
    </div>
  )
}
