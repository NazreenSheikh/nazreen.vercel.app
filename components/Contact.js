import { useRef, useState } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [loading, setLoading] = useState('Send')
  const nameRef = useRef('')
  const emailRef = useRef('')
  const messageRef = useRef('')

  const formSubmit = async (e) => {
    e.preventDefault()
    setLoading('Sending')

    const params = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      message: messageRef.current.value,
    }
    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        params,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER,
      )

      setLoading('Sent')
    } catch (err) {
      console.log(err)
    }

    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
  }

  return (
    <div
      id="Contact"
      className="box-border relative  container w-full mx-auto max-w-screen-2xl  "
    >
      <div className="box-border absolute left-0 right-0 w-5/12 p-2 m-auto text-xl text-center text-white border-4 border-white md:border-8 bg-custom-green md:text-3xl md:w-1/4 -top-7">
        Contact Me
      </div>
      <div className="flex">
        <div className="bg-custom-green md:w-4 md:h-cus-height md:my-20 md:ml-4"></div>
        <div className="flex flex-col mx-auto mt-16 text-center md:m-auto ">
          <div className="mb-4 text-xl md:text-3xl">
            Contact me through social media
          </div>
          <ul className="flex justify-between w-3/5 px-4 mx-auto text-4xl text-center md:mt-2 ">
            <li>
              <a href="http://www.twitter.com/nazreenshaikh6">
                <AiFillTwitterCircle className="hover:text-custom-green" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nazreen-sheikh-865653198/">
                <FaLinkedin className="hover:text-custom-green" />
              </a>
            </li>
            <li>
              <a href="https://github.com/NazreenSheikh">
                <FaGithub className="hover:text-custom-green" />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com/nazreen_sheikhh">
                <AiFillInstagram className="hover:text-custom-green" />
              </a>
            </li>
            <li>
              <a href="mailto:nazreenshaikh0077@gmail.com">
                <HiMail className="hover:text-custom-green" />
              </a>
            </li>
          </ul>
          <div className="mt-8 text-xl md:text-3xl">
            Direct send me Your Message :)
          </div>

          <form onSubmit={formSubmit} className="mt-8 md:flex">
            <div className="flex flex-col px-4 text-lg ">
              <input
                type="text"
                ref={nameRef}
                placeholder="your name"
                required
                className="p-2 mb-4 bg-gray-200 border-2 border-black rounded"
              />
              <input
                type="email"
                ref={emailRef}
                placeholder="your email"
                required
                className="p-2 mb-6 bg-gray-200 border-2 border-black rounded"
              />
            </div>
            <div className="md:px-2">
              <textarea
                ref={messageRef}
                cols="30"
                rows="10"
                placeholder="Message"
                required
                className="p-2 mb-6 bg-gray-200 border-2 border-black rounded md:mb-2"
              />
              <button
                type="submit"
                className="w-1/4 p-2 m-auto text-center text-white border-2 border-black rounded md:text-left md:w-11/12 mb-7 md:mb-0 bg-custom-green focus:outline-none"
              >
                {loading}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
