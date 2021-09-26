import React from 'react';
import { Col, Container as GridContainer, Row } from 'react-grid-system';

import { ProjectCard } from '@/components/cards';
import { Container } from '@/components/container';

import projects from '../../json/project.json';

const NotableProject: React.FC = () => {
  return (
    <Container
      withPadding
      outerStyle={{
        background: 'var(--background-secondary)',
      }}
    >
      <h4 style={{ marginBottom: 40 }} id="projects">
        Project Showcase
      </h4>

      <GridContainer style={{ padding: 0 }}>
        <Row>
          {projects.map(({ imageUrl, desc, title, id, tags, url, date }) => (
            <Col style={{ marginBottom: 32 }} sm={6} key={id}>
              <ProjectCard
                date={date ?? ''}
                url={url ?? ''}
                imageUrl={imageUrl}
                desc={desc}
                title={title}
                tags={tags ?? []}
              />
            </Col>
          ))}
        </Row>
      </GridContainer>
    </Container>
  );
};

export default NotableProject;
