import { ContactsState } from "../types";
import {
  FILTER_BY_CURRENT_GROUP_ID_ACTION,
  GET_CONTACT_NAME_ACTION,
  LOAD_CONTACTS_ACTION_FAILURE,
  LOAD_CONTACTS_ACTION_REQUEST,
  LOAD_CONTACTS_ACTION_SUCCESS,
  SET_CURRENT_GROUP_ID_ACTION,
  SET_FAVORITES_CONTACTS_ACTION,
  UNSET_CURRENT_GROUP_ID_ACTION,
} from "../constans";
import { ProjectActions } from "../actions/actions";
import { DATA_CONTACT } from "src/__data__";

const initialState: ContactsState = {
  all: DATA_CONTACT,
  filtered: [],
  favorites: [],
  loading: false,
  error: "",
  currentGroupId: undefined,
};

export const contactsReducer = (
  state = initialState,
  action: ProjectActions
) => {
  switch (action.type) {
    case LOAD_CONTACTS_ACTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case LOAD_CONTACTS_ACTION_SUCCESS:
      return {
        ...state,
        all: action.payload.contacts,
        filtered: action.payload.contacts,
        loading: false,
        error: "",
      };
    case LOAD_CONTACTS_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SET_FAVORITES_CONTACTS_ACTION:
      return {
        ...state,
        favorites: [
          state.all[0].id,
          state.all[1].id,
          state.all[2].id,
          state.all[3].id,
        ],
      };
    case SET_CURRENT_GROUP_ID_ACTION:
      return {
        ...state,
        currentGroupId: action.payload,
      };
    case UNSET_CURRENT_GROUP_ID_ACTION:
      return {
        ...state,
        filtered: state.all,
        currentGroupId: undefined,
      };
    case FILTER_BY_CURRENT_GROUP_ID_ACTION:
      return {
        ...state,
        filtered: state.filtered.filter(({ id }) => {
          return state.currentGroupId?.contactIds.includes(id);
        }),
      };
    case GET_CONTACT_NAME_ACTION:
      const searchName = action.payload.name.toLowerCase();
      return {
        ...state,
        filtered: state.all.filter((contact) =>
          contact.name.toLowerCase().includes(searchName)
        ),
      };
    default:
      return state;
  }
};
