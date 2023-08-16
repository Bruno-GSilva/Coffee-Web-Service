type AuthenticationContextType = {
  user: Auth;
  setUser: React.Dispatch<React.SetStateAction<Auth>>;
  token:boolean;
  setToken: React.Dispatch<React.SetStateAction<boolean>>;
};

interface Auth {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
}

interface AuthenticationContextProps {
  children: React.ReactNode;
}

type EmailChangeEvent = React.ChangeEvent<HTMLInputElement>;
type CheckBoxChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface form extends Auth {
  check?: boolean;
}
