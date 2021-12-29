import firebase from "firebase";

export enum AUTHDISPATCH {
  "LOGIN" = "LOGIN",
  "LOGOUT" = "LOGOUT",
}

export interface IAuthContextState {
  user: firebase.User | null;
  dispatch: React.Dispatch<any>;
}
