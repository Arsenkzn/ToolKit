import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import {
  FilterByCurrentGroupIdAction,
  GetContactNameAction,
  GetGroupContactAction,
  LoadContactsActionFailure,
  LoadContactsActionRequest,
  LoadContactsActionSuccess,
  LoadGroupContactsAction,
  SetCurrentGroupIdAction,
  SetFavoritesContactsAction,
  UnSetCurrentGroupIdAction,
} from "../types";
import { ContactDto } from "src/types/dto/ContactDto";

import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { DATA_CONTACT } from "src/__data__";
import { ROOTState } from "../store";

export const LOAD_CONTACTS_ACTION_REQUEST = "LOAD_CONTACTS_ACTION_REQUEST";
export const LOAD_CONTACTS_ACTION_FAILURE = "LOAD_CONTACTS_ACTION_FAILURE";
export const LOAD_CONTACTS_ACTION_SUCCESS = "LOAD_CONTACTS_ACTION_SUCCESS";
export const SET_FAVORITES_CONTACTS_ACTION = "SET_FAVORITES_CONTACTS_ACTION";
export const GET_CONTACT_NAME_ACTION = "GET_CONTACT_NAME_ACTION";
export const SET_CURRENT_GROUP_ID_ACTION = "SET_CURRENT_GROUP_ID_ACTION";
export const UNSET_CURRENT_GROUP_ID_ACTION = "UNSET_CURRENT_GROUP_ID_ACTION";
export const FILTER_BY_CURRENT_GROUP_ID_ACTION =
  "FILTER_BY_CURRENT_GROUP_ID_ACTION";

export const LOAD_GROUP_CONTACT = "LOAD_GROUP_CONTACT";
export const GET_GROUP_CONTACT_ACTION = "GET_GROUP_CONTACT_ACTION";

export const loadContactsActionRequest = (): LoadContactsActionRequest => {
  return { type: LOAD_CONTACTS_ACTION_REQUEST };
};
export const loadContactsActionSuccess = (
  contacts: ContactDto[]
): LoadContactsActionSuccess => {
  return { type: LOAD_CONTACTS_ACTION_SUCCESS, payload: { contacts } };
};
export const loadContactsActionFailure = (
  error: string
): LoadContactsActionFailure => {
  return { type: LOAD_CONTACTS_ACTION_FAILURE, payload: { error } };
};

export const setFavoritesContactsAction = (): SetFavoritesContactsAction => {
  return { type: SET_FAVORITES_CONTACTS_ACTION };
};

export const setCurrentGroupIdAction = (
  id: GroupContactsDto
): SetCurrentGroupIdAction => {
  return { type: SET_CURRENT_GROUP_ID_ACTION, payload: id };
};
export const unsetCurrentGroupIdAction = (): UnSetCurrentGroupIdAction => {
  return { type: UNSET_CURRENT_GROUP_ID_ACTION };
};

export const filterByCurrentGroupIdAction =
  (): FilterByCurrentGroupIdAction => {
    return { type: FILTER_BY_CURRENT_GROUP_ID_ACTION };
  };

export const getContactNameAction = (
  name: ContactDto["name"]
): GetContactNameAction => {
  return { type: GET_CONTACT_NAME_ACTION, payload: { name } };
};

export const loadGroupContactsAction = (
  groups: GroupContactsDto[]
): LoadGroupContactsAction => {
  return { type: LOAD_GROUP_CONTACT, payload: { groups } };
};

export const getGroupContactAction = (
  id: GroupContactsDto["id"]
): GetGroupContactAction => {
  return { type: GET_GROUP_CONTACT_ACTION, payload: { id } };
};

export const fetchContacts =
  (): ThunkAction<void, ROOTState, void, ProjectActions> =>
  async (dispatch) => {
    try {
      dispatch(loadContactsActionRequest());
      const response = await axios.get("http://localhost:3000/contact");
      dispatch(loadContactsActionSuccess(response.data));
      dispatch(setFavoritesContactsAction());
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      dispatch(loadContactsActionFailure(message));
      dispatch(loadContactsActionSuccess(DATA_CONTACT));
    }
  };

export const fetchGroups =
  (): ThunkAction<void, ROOTState, void, ProjectActions> =>
  async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3000/groups");
      dispatch(loadGroupContactsAction(response.data));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("Failed to load groups:", message);
    }
  };

export type ProjectActions =
  | LoadContactsActionRequest
  | LoadContactsActionSuccess
  | LoadContactsActionFailure
  | SetFavoritesContactsAction
  | SetCurrentGroupIdAction
  | UnSetCurrentGroupIdAction
  | FilterByCurrentGroupIdAction
  | GetContactNameAction
  | LoadGroupContactsAction
  | GetGroupContactAction;
