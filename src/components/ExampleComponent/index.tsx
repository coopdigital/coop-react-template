import React, { useEffect } from 'react';
import useStores from 'hooks/useStores';
import { observer } from 'mobx-react';

import styles from './ExampleComponent.module.css';

type Props = {
  showAuthor: boolean;
};

const ExampleComponent = observer(({ showAuthor }: Props) => {
  const { exampleStore } = useStores();

  useEffect(() => {
    exampleStore.getNewQuote();
  });

  return (
    <div className={styles['example-component']}>
      <div className={styles['quote']}>{exampleStore.quote}</div>
      {showAuthor && (
        <div className={styles['author']}>{exampleStore.author}</div>
      )}
    </div>
  );
});

export default ExampleComponent;
