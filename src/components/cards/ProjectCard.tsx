import Link from 'next/link';
import React from 'react';

import Tag from '../tag/Tag';
import styles from './ProjectCard.module.scss';

export interface ProjectCardProps {
  title: string;
  desc: string;
  tags: string[];
  imageUrl: string;
  url: string;
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ date, title, desc, tags = [], imageUrl, url }) => {
  return (
    <div
      className={styles.cardBase}
      style={{
        background: `url('${imageUrl}')`,
        backgroundSize: 'cover',
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
          <div style={{ display: 'flex', marginLeft: -8, marginRight: -8, flexWrap: 'wrap' }}>
            {tags.map((value) => {
              return <Tag withMargin text={value} key={value} />;
            })}
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
