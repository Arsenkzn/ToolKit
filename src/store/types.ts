import {
  LOAD_GROUP_CONTACT,
  GET_GROUP_CONTACT_ACTION,
  SET_CURRENT_GROUP_ID_ACTION,
  UNSET_CURRENT_GROUP_ID_ACTION,
} from "./actions/actions";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import {
  FILTER_BY_CURRENT_GROUP_ID_ACTION,
  GET_CONTACT_NAME_ACTION,
  LOAD_CONTACTS_ACTION_FAILURE,
  LOAD_CONTACTS_ACTION_REQUEST,
  LOAD_CONTACTS_ACTION_SUCCESS,
  SET_FAVORITES_CONTACTS_ACTION,
} from "./actions/actions";

export interface LoadContactsActionRequest {
  type: typeof LOAD_CONTACTS_ACTION_REQUEST;
}
export interface LoadContactsActionSuccess {
  type: typeof LOAD_CONTACTS_ACTION_SUCCESS;
  payload: {
    contacts: ContactDto[];
  };
}
export interface LoadContactsActionFailure {
  type: typeof LOAD_CONTACTS_ACTION_FAILURE;
  payload: {
    error: string;
  };
}
export interface SetFavoritesContactsAction {
  type: typeof SET_FAVORITES_CONTACTS_ACTION;
}

export interface SetCurrentGroupIdAction {
  type: typeof SET_CURRENT_GROUP_ID_ACTION;
  payload: GroupContactsDto;
}
export interface UnSetCurrentGroupIdAction {
  type: typeof UNSET_CURRENT_GROUP_ID_ACTION;
}
export interface FilterByCurrentGroupIdAction {
  type: typeof FILTER_BY_CURRENT_GROUP_ID_ACTION;
}

export interface GetContactNameAction {
  type: typeof GET_CONTACT_NAME_ACTION;
  payload: {
    name: ContactDto["name"];
  };
}

export interface LoadGroupContactsAction {
  type: typeof LOAD_GROUP_CONTACT;
  payload: {
    groups: GroupContactsDto[];
  };
}

export interface GetGroupContactAction {
  type: typeof GET_GROUP_CONTACT_ACTION;
  payload: {
    id: GroupContactsDto["id"];
  };
}

export interface GroupsState {
  all: GroupContactsDto[];
  currentGroupId: string;
}

export interface ContactsState {
  all: ContactDto[];
  filtered: ContactDto[];
  favorites: string[];
  loading: boolean;
  error: string;
  currentGroupId: GroupContactsDto | undefined;
}
