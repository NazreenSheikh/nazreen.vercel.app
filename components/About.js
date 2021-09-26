import Image from 'next/image'
export default function About() {
  return (
    <div>
      <div
        id="About"
        className="box-border relative p-2 mt-0 text-white md:h-screen md:flex-row-reverse bg-custom-green md:flex"
      >
        <div className="box-border absolute left-0 right-0 w-5/12 p-2 m-auto text-xl text-center text-black bg-white border-4 md:border-8 md:text-3xl md:w-1/4 -top-7 border-custom-green">
          About Me
        </div>{' '}
        <div className="bg-white md:w-4 md:h-4/5 md:my-auto md:mr-4 "></div>
        <div className="items-center mt-8 text-xl md:w-2/3 item-center md:p-4 md:mt-40 md:text-3xl lg:text-4xl">
          Hii, I am Nazreen. Currently Pursuing ELectrical Engeering From
          JMI,Delhi.
          <br /> I have worked on Several Web Development Projects in the past
          and technologies I prefer Working with include reactjs, nextjs,
          typescript, python and node js. <br /> <br />{' '}
          <em> you can also call me Naaz</em>
        </div>
        <div className="p-0 m-auto text-center md:ml-2">
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
