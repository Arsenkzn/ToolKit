import { DATA_GROUP_CONTACT } from "src/__data__";
import { ProjectActions } from "../actions/actions";
import { LOAD_GROUP_CONTACT } from "../constans";
import { GroupsState } from "../types";

const initialState: GroupsState = {
  all: DATA_GROUP_CONTACT,
  currentGroupId: "",
};

export const groupContactsReducer = (
  state = initialState,
  action: ProjectActions
) => {
  switch (action.type) {
    case LOAD_GROUP_CONTACT:
      return {
        ...state,
        all: action.payload.groups,
      };
    default:
      return state;
  }
};
