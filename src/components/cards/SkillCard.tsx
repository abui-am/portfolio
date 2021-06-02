import Link from 'next/link';
import React from 'react';

import { monthToYearText } from '@/utitls/textUtils';

import Paper from '../container/Paper';
import Tag from '../tag/Tag';
import styles from './SkillCard.module.scss';

export interface SkillCardData {
  id: string;
  imageUrl: string;
  title: string;
  level: string;
  monthOfExperience: number;
}

export interface SkillCardProps {
  data: SkillCardData;
}

const SkillCard: React.FC<SkillCardProps> = ({ data = {} }) => {
  const { id, imageUrl, title, level, monthOfExperience } = data;
  return (
    <Paper withOutline noShadow>
      <div className={styles.base}>
        <div className={styles.box1}>
          <img src={imageUrl} style={{ maxWidth: 72, maxHeight: 72 }} alt="skillImage" />
        </div>
        <div className={styles.box2}>
          <div style={{ display: 'flex', marginBottom: 8, alignItems: 'center' }}>
            <p style={{ fontWeight: 'bold' }}>{title}</p>

            {(level === 'Proficient' || level === 'Expert') && (
              <div style={{ marginLeft: 12 }}>
                <Tag text={level as string} />
              </div>
            )}
          </div>
          <p style={{ marginBottom: 8 }}>
            {monthToYearText(monthOfExperience as number)}
            <span style={{ color: 'var(--text-secondary)' }}> of professional experience</span>
          </p>

          <Link href={`/skills/${id}`}>
            <a style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>See details</a>
          </Link>
        </div>
      </div>
    </Paper>
  );
};

export default SkillCard;
