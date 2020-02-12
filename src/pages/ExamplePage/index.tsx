import React from 'react';
import ExampleComponent from 'components/ExampleComponent';
import styles from './ExamplePage.module.css';

const ExamplePage: React.FC = () => {
  return (
    <div className={styles['example-page-grid']}>
      <ExampleComponent />
    </div>
  );
};

export default ExamplePage;
