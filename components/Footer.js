export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-green container w-full mx-auto max-w-screen-2xl ">
      <p className="p-10 mt-8 text-center text-gray-300 md:mt-0 md:text-lg">
        &copy;{currentYear} Nazreen All rights reserved.
      </p>
    </footer>
  )
}
