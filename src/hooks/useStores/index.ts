import React from 'react';
import { storeContext } from 'components/StoreProvider';
import RootStore from 'stores/RootStore';

export const useStores = (): RootStore => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStores must be used within a StoreProvider.');
  }
  return store;
};

export default useStores;
