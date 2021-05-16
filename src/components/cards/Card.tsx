import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import styles from './Card.module.scss';
import Link from 'next/link';

export interface CardProps {
  data: {
    id: string;
    title: string;
    imageUrl: string;
    desc: string;
  };
}

const Card: React.FC<CardProps> = ({ data = {} }) => {
  const { id, title, imageUrl, desc } = data;
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${imageUrl}
        )`,
      }}
    >
      <div className={styles.cardContainer}>
        <h6 style={{ marginBottom: 8 }}>{title}</h6>
        <p className="subtitle" style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
          {desc}
        </p>
        <div className={styles.actContainer}>
          <div className={styles.readMore}>
            <Link href={`/posts/${id}`} passHref>
              <a>Read more</a>
            </Link>
            <ArrowRightIcon height={16} width={16} fill="var(--primary-color)" />
          </div>
          <span className="subtitle" style={{ color: 'var(--text-secondary)', fontWeight: 'bold' }}>
            3 min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
