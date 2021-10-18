import Head from 'next/head'

export default function Metatags({
  title = `Nazreen's protfolio `,
  description = `I&apos;m a young student passinate about davelopment. I work
  with decisiveness and conviction. My feild of interest are programming
  and website designing .`,
  Image = 'https://nazreen.vercel.app/t-pic.png',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@NazreenShaikh6" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={Image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}
