import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

// REDUCERS
import * as auth from "../../redux/auth/auth.redux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
}) as any;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([]);
}
