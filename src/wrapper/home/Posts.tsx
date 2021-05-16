import Card from '@/components/cards/Card';
import { Container } from '@/components/container';
import React from 'react';
import posts from '@/json/posts.json';
import { Row, Container as GridContainer, Col } from 'react-grid-system';
import styles from './Posts.module.scss';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';
const Posts: React.FC = () => {
  return (
    <Container withPadding>
      <h4 style={{ marginBottom: 40 }}>Recent posts</h4>

      <GridContainer style={{ margin: '0px -16px', padding: 0 }}>
        <Row>
          {posts.map((data, index) => (
            <Col key={data.id} style={{ marginBottom: 32 }} sm={index < 2 ? 6 : 4}>
              <Card data={data} />
            </Col>
          ))}
        </Row>
      </GridContainer>

      <div className={styles.actContainer}>
        <Link href="/posts">
          <a>
            <div className={styles.viewMore}>
              View more blogs
              <ArrowRightIcon height={20} width={20} />
            </div>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Posts;
