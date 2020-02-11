import React, { useEffect } from 'react';
import useStores from 'hooks/useStores';
import { observer } from 'mobx-react';
import ExampleStore from 'stores/ExampleStore';

const ExampleComponent = observer(() => {
  const { exampleStore }: { exampleStore: ExampleStore } = useStores();

  useEffect(() => {
    exampleStore.getNewQuote();
  }, []);

  return (
    <div>
      <div>{exampleStore.quote}</div>
      <div>{exampleStore.author}</div>
    </div>
  );
});

export default ExampleComponent;
