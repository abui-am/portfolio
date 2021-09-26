import { SearchIcon } from '@heroicons/react/solid';
import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { Col, Row } from 'react-grid-system';

import PillButton from '@/components/button/PillButton';
import SkillCard from '@/components/cards/SkillCard';
import { Container } from '@/components/container';
import Paper from '@/components/container/Paper';
import Input from '@/components/forms/Input';
import skills from '@/json/skills.json';

import styles from './Skill.module.scss';

const buttonData = [
  { text: 'Front End', value: 'front-end' },
  { text: 'Back End', value: 'back-end' },
  { text: 'Design', value: 'design' },
];

const Skill: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeData, setActiveData] = useState(buttonData[0]);

  const filteredList = skills.filter(({ specialization }) => specialization.includes(activeData.value));

  const list = new Fuse(filteredList, {
    includeScore: true,
    keys: ['title', 'specialization'],
  });

  const searchList = list.search(search).map(({ item }) => item);

  const usedList = search ? searchList : filteredList;

  return (
    <Container withPadding>
      <h4 style={{ marginBottom: 40 }} id="skills-and-stack">
        Skills and Stack
      </h4>
      <Paper>
        <div className={styles.actContainer}>
          <PillButton buttonData={buttonData} onClick={(v) => setActiveData(v)} />
          <div className={styles.margin}>
            <Input
              onKeyUp={(e) => {
                const target = e.target as HTMLInputElement;
                setSearch(target.value);
              }}
              placeholder="Search..."
              Icon={<SearchIcon height={24} width={24} style={{ color: 'var(--text-secondary)' }} />}
            />
          </div>
        </div>
        <Row>
          {useMemo(
            () =>
              usedList.map((item) => (
                <Col sm={6} key={item.id} style={{ paddingBottom: 24 }}>
                  <SkillCard data={item} />
                </Col>
              )),
            [usedList],
          )}
        </Row>
      </Paper>
    </Container>
  );
};

export default Skill;
