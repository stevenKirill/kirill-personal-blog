import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const IsClientCtx = createContext(false);

interface IProps {
  children: ReactNode;
}

export const IsClientCtxProvider = ({ children }: IProps) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
  );
};

export function useIsClient() {
  return useContext(IsClientCtx);
}
