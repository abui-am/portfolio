import { ArrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

import styles from './Card.module.scss';

export interface CardProps {
  data: {
    id: string;
    title: string;
    imageUrl: string;
    desc: string;
    url: string;
  };
}

const Card: React.FC<CardProps> = ({ data = {} }) => {
  const { title, imageUrl, desc, url } = data;
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${imageUrl}
        )`,
      }}
    >
      <div className={styles.cardContainer}>
        <Link href={url ?? ''}>
          <a target="_blank">
            <h6 style={{ marginBottom: 8 }}>{title}</h6>
          </a>
        </Link>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>{desc}</p>
        <div className={styles.actContainer}>
          <div className={styles.readMore}>
            <Link href={url ?? ''} passHref>
              <a target="_blank">Read more</a>
            </Link>
            <ArrowRightIcon height={16} width={16} fill="var(--primary-color)" />
          </div>
          <span className="subtitle" style={{ color: 'var(--text-secondary)', fontWeight: 'bold' }}>
            5 min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
