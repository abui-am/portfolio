import { NextPage } from 'next';
import Head from 'next/head';

import styles from '@/styles/Home.module.css';
import { About, Hero, NotableProject, Posts, Skill } from '@/wrapper/home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Posts />
        <About />
        <Skill />
        <NotableProject />
      </main>

      <footer className={styles.footer}>Made with ❤️</footer>
    </>
  );
};

export default Home;
