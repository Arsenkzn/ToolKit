import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { DATA_GROUP_CONTACT } from 'src/__data__';

interface GroupsState {
  all: GroupContactsDto[];
}

const initialState: GroupsState = {
  all: DATA_GROUP_CONTACT,
};

const groupContactsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    loadGroupsSuccess(state, action: PayloadAction<GroupContactsDto[]>) {
      state.all = action.payload;
    },
  },
});

export const { loadGroupsSuccess } = groupContactsSlice.actions;

export default groupContactsSlice.reducer;