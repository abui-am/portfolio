import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import styles from '@/styles/Home.module.css';
import { About, Hero, NotableProject, Posts, Skill } from '@/wrapper/home';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Abuidillah Adjie Muliadi"
        description="Check my portfolio"
        openGraph={{
          url: 'https://abui-am.vercel.app',
          title: 'Abuidillah Adjie Muliadi',
          description: 'Check my portfolio',
          images: [
            {
              url: 'https://avatars.githubusercontent.com/u/50738961?s=400&u=945f504b2f4b2ed3beb9da39d549849def6cd5ae&v=4',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://avatars.githubusercontent.com/u/50738961?s=400&u=945f504b2f4b2ed3beb9da39d549849def6cd5ae&v=4',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Abuidillah Adjie Muliadi',
        }}
        twitter={{
          handle: '@abui.am',
          site: 'Abuidillah Adjie Muliadi',
          cardType: 'summary_large_image',
        }}
      />
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
