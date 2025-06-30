import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  Store,
} from "redux";
import {
  thunk,
  ThunkAction,
  ThunkDispatch,
  ThunkMiddleware,
} from "redux-thunk";
import { contactsReducer } from "./reducers/contacts";
import { groupContactsReducer } from "./reducers/group-reducer";
import { ProjectActions } from "./actions/actions";
import { logAtionMiddleware } from "src/pages/logActionMiddleware";
import { ContactsState, GroupsState } from "./types";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export interface RootState {
  contacts: ContactsState;
  groups: GroupsState;
}

const persistConfig = {
  key: "root",
  storage,
};

const typedContactsReducer: Reducer<ContactsState, ProjectActions> =
  contactsReducer;
const typedGroupsReducer: Reducer<GroupsState, ProjectActions> =
  groupContactsReducer;

const rootReducer: Reducer<RootState, ProjectActions> = combineReducers({
  contacts: typedContactsReducer,
  groups: typedGroupsReducer,
});

const persistedReducer = persistReducer<RootState, ProjectActions>(
  persistConfig,
  rootReducer
);

export const store: Store<RootState & PersistPartial, ProjectActions> & {
  dispatch: ThunkDispatch<RootState, undefined, ProjectActions>;
} = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(
      thunk as ThunkMiddleware<RootState, ProjectActions>,
      logAtionMiddleware
    )
  )
);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, ProjectActions>;
export type ROOTState = ReturnType<typeof rootReducer>;
