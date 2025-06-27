import React from 'react';
import * as Styles from './HumanRelationStyles';

const HumanRelations = () => {
  return (
    <Styles.HumanRelationsContainer>
      <Styles.HumanRelationsTitle>
        HUMAN RELATIONS AND DEVELOPMENT
      </Styles.HumanRelationsTitle>
      <Styles.HumanRelationsSubTitle>
        We build the city in vain if we do not first build the man
      </Styles.HumanRelationsSubTitle>
      <Styles.HumanRelationsSubTitle primary='true'>
        Mentoring, Counselling, Education & Consulting
      </Styles.HumanRelationsSubTitle>
      <Styles.HumanRelationsDesc>
        Through workshops, consulting-only agreements, and speaking engagements,
        we’ll set your team up to be a results producing machine. We've
        partnered with the industry's leading experts to ensure the education
        your team receives is world- class
      </Styles.HumanRelationsDesc>
      <Styles.HumanRelationsList>
        <li>Seminars</li>
        <li>Mentoring</li>
        <li>Events and Promotion</li>
      </Styles.HumanRelationsList>
    </Styles.HumanRelationsContainer>
  );
};

export default HumanRelations;
