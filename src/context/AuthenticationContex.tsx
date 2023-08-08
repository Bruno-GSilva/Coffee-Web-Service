import { createContext, useState } from "react";

export const GlobalAuthContext = createContext(
  {} as AuthenticationContextType
);

export default function AuthenticationContext({
  children,
}: AuthenticationContextProps) {
  const [user, setUser] = useState<Auth>({} as Auth);

  return (
    <GlobalAuthContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalAuthContext.Provider>
  );
}
