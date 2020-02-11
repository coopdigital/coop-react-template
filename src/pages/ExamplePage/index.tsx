import React from 'react';
import ExampleComponent from 'components/ExampleComponent';
import styles from './ExamplePage.module.css';

const ExamplePage: React.FC = () => {
  return (
    <div>
      <div className={styles['basket-header']}>
        <h1>Example Page</h1>
      </div>
      <div className={styles['basket-grid']}>
        <ExampleComponent />
      </div>
    </div>
  );
};

export default ExamplePage;
