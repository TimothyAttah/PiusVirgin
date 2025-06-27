import React from 'react';
import * as Styles from './HealthStyles';

const HealthManagement = () => {
  return (
    <Styles.HealthManagementContainer>
      <Styles.HealthManagementTitle>
        HEALTH MANAGEMENT
      </Styles.HealthManagementTitle>
      <Styles.HealthManagementList>
        <li>Talks</li>
        <li>Seminars</li>
        <li>Services</li>
      </Styles.HealthManagementList>
    </Styles.HealthManagementContainer>
  );
};

export default HealthManagement;
