export interface IUser {
  email?: string;
  username?: string;
  token?: string;
}

export interface IContext extends IUser {
  signIn: ({ email, password }) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
