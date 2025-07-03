import { getgroups } from "process";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { filterByCurrentGroupId, getContactByName, loadContactsFailure, loadContactsRequest, loadContactsSuccess, setCurrentGroupId, setFavoritesContacts, unsetCurrentGroupId } from "./reducers/contacts";
import { loadGroupsSuccess } from "./reducers/group-reducer";
export interface LoadContactsActionRequest {
  type: typeof loadContactsRequest;
}
export interface LoadContactsActionSuccess {
  type: typeof loadContactsSuccess;
  payload: {
    contacts: ContactDto[];
  };
}
export interface LoadContactsActionFailure {
  type: typeof loadContactsFailure;
  payload: {
    error: string;
  };
}
export interface SetFavoritesContactsAction {
  type: typeof setFavoritesContacts;
}

export interface SetCurrentGroupIdAction {
  type: typeof setCurrentGroupId;
  payload: GroupContactsDto;
}
export interface UnSetCurrentGroupIdAction {
  type: typeof unsetCurrentGroupId;
}
export interface FilterByCurrentGroupIdAction {
  type: typeof filterByCurrentGroupId;
}

export interface GetContactNameAction {
  type: typeof getContactByName;
  payload: {
    name: ContactDto["name"];
  };
}

export interface LoadGroupContactsAction {
  type: typeof loadGroupsSuccess;
  payload: {
    groups: GroupContactsDto[];
  };
}

export interface GetGroupContactAction {
  type: typeof loadGroupsSuccess;
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
