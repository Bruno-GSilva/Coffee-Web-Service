import { createContext, useState } from "react";
import { useLocalStorage } from 'usehooks-ts';

export const GlobalAuthContext = createContext(
  {} as AuthenticationContextType
);

export default function AuthenticationContext({
  children,
}: AuthenticationContextProps) {
  const [user, setUser] = useState<Auth>({} as Auth);
  const [token, setToken] = useLocalStorage('token', false)

  return (
    <GlobalAuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </GlobalAuthContext.Provider>
  );
}
