import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Pomoc</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>
            Welcome to <a href="https://nextjs.org"> pomoc page</a>
          </h1>
        </main>
      </div>
    </Layout>
  )
}

export default Home
