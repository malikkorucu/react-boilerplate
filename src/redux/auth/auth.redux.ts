import { Action } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { takeLatest } from "redux-saga/effects";
import { string } from "yup";
import { ActionWithPayload, IAuthState } from "./auth.interface";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
};

export const initialState: IAuthState = {
  user: {},
  token: "",
};

export const reducer = persistReducer(
  { storage, key: "user_redux", whitelist: ["accessToken", "user"] },
  (state: any = initialState, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case actionTypes.Login:
        const { accessToken, user } = action.payload;
        return {
          ...initialState,
          user,
          accessToken,
        };
      case actionTypes.Logout:
        return { user: {}, accessToken: "" };
      default:
        return state;
    }
  }
);

export const actions = {
  login: (accessToken: string , user:any) => ({ type: actionTypes.Login, payload: { accessToken , user } }), // prettier-ignore
  logout: () => ({ type: actionTypes.Logout }),
};

export function* saga() {
  //   yield takeLatest(actionTypes.Login, function* loginSaga(data: any) {
  // const user_id = data.payload.id
  // const { response } = yield _getProfileInformation(user_id)
  // yield put(actions.setProfileInformation(response))
  //   });
  // yield takeLatest(actionTypes.Register, function* registerSaga() {
  //   yield put(actions.requestUser())
  // })
  // yield takeLatest(actionTypes.UserRequested, function* userRequested() {
  //   const { data: user } = yield getUserByToken()
  //   yield put(actions.fulfillUser(user))
  // })
}
