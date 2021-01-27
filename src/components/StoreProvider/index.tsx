import React from 'react';
import { createRootStore } from 'stores/RootStore';

export const storeContext = React.createContext(null);

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const store = createRootStore();

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
