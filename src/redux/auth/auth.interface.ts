import { Action } from "redux";

export interface ActionWithPayload<T> extends Action {
  payload?: T;
}

export interface IAuthState {
  user?: IUser;
  token?: any;
}

export interface IUser {
  name?: string;
  email?: string;
}
