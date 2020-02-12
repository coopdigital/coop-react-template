import React, { useEffect } from 'react';
import useStores from 'hooks/useStores';
import { observer } from 'mobx-react';
import ExampleStore from 'stores/ExampleStore';

import styles from './ExampleComponent.module.css';

const ExampleComponent = observer(() => {
  const { exampleStore }: { exampleStore: ExampleStore } = useStores();

  useEffect(() => {
    exampleStore.getNewQuote();
  });

  return (
    <div className={styles['example-component']}>
      <div className={styles['quote']}>{exampleStore.quote}</div>
      <div className={styles['author']}>{exampleStore.author}</div>
    </div>
  );
});

export default ExampleComponent;
