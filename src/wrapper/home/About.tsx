import Button from '@/components/button/Button';
import { Container } from '@/components/container';
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <Container
      withPadding
      outerStyle={{
        background: 'var(--background-secondary)',
      }}
      style={{ display: 'flex' }}
    >
      <div className={styles.left}>
        <h4 className={styles.title}>
          A <span className={styles.titlePrimary}>passionate Front End Developer</span>, who love to learn.
        </h4>
        <div className={styles.textBox}>
          <p>
            Mainly focusing on building good looking, best performance Front-End using the latest cutting-edge stack.
            Posseses strong <span>debugging skill,</span> i love to solve problem and helping people.
          </p>
          <p>
            <span>I see development as an art.</span> i took a big intention on my code quality, while always trying to
            achieve the deadlines.
          </p>
          <p>
            Having a dev-design skill set enables me to be versatile in Front-End development.{' '}
            <span>I can do UI/UX design, implement it into Front-End, and maintain it well.</span>
          </p>
          <p>
            In a quest for always keeping myself updated, <span>I read books and attend conferences & meetups. </span>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <img src="Saly.png" />
          <div className={styles.myJourneyBtn}>
            <Button variant="rounded" Icon={<ArrowRightIcon height={20} width={20} />}>
              My journey
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
