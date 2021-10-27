import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="text-center w-full m-auto align-center flex flex-col h-96 my-20 justify-center max-w-screen-2xl">
      <h1 className="text-2xl mb-5 font-medium">Oooops...</h1>
      <h2 className="text-xl mb-2">That page cann&apos;t be found.</h2>
      <p>
        GO back to the{' '}
        <Link href="/">
          <a className="text-blue-600 underline">Homepage</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
