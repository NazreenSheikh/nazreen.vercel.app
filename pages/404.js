import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="align-center w-full mx-auto max-w-screen-2xl">
      <h1>Oooops...</h1>
      <h2>That page cann&apos;t be found.</h2>
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
