// import { ArrowRightIcon } from '@heroicons/react/solid';
// import Link from 'next/link';
import React from 'react';
import { Col, Container as GridContainer, Row } from 'react-grid-system';

import Card from '@/components/cards/Card';
import { Container } from '@/components/container';
import posts from '@/json/posts.json';

// import styles from './Posts.module.scss';

const Posts: React.FC = () => {
  return (
    <Container withPadding>
      <h4 style={{ marginBottom: 40 }} id="posts">
        Recent posts
      </h4>

      <GridContainer style={{ padding: 0 }}>
        <Row>
          {posts.map((data, index) => (
            <Col key={data.id} style={{ marginBottom: 32 }} sm={index < 2 ? 6 : 4}>
              <Card data={data} />
            </Col>
          ))}
        </Row>
      </GridContainer>

      {/* <div className={styles.actContainer}>
        <Link href="/posts" passHref>
          <a>
            <div className={styles.viewMore}>
              View more blogs
              <ArrowRightIcon height={20} width={20} />
            </div>
          </a>
        </Link>
      </div> */}
    </Container>
  );
};

export default Posts;
