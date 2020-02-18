import React from 'react';
import useStores from 'hooks/useStores';
import { observer } from 'mobx-react';

import ExamplePage from 'pages/ExamplePage';

export const StateRouter = observer(() => {
  const { stateStore } = useStores();

  let output = null;
  switch (stateStore.state) {
    case 'initial':
      output = <ExamplePage />;
      break;
  }
  return output;
});

export default StateRouter;
