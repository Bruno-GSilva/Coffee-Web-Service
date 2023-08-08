type AuthenticationContextType = {
  user: Auth;
  setUser: React.Dispatch<React.SetStateAction<Auth>>;
};

interface Auth {
  id: number;
  username: string;
  email: string;
  password: string;
  token: boolean;
}

interface AuthenticationContextProps {
  children: React.ReactNode;
}

type EmailChangeEvent = React.ChangeEvent<HTMLInputElement>;
type CheckBoxChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface form extends Auth {
  check?: boolean;
}
