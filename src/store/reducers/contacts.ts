import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { DATA_CONTACT } from 'src/__data__';

interface ContactsState {
  all: ContactDto[];
  filtered: ContactDto[];
  favorites: string[];
  loading: boolean;
  error: string;
  currentGroupId?: GroupContactsDto;
}

const initialState: ContactsState = {
  all: DATA_CONTACT,
  filtered: DATA_CONTACT,
  favorites: [],
  loading: false,
  error: '',
  currentGroupId: undefined,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    loadContactsRequest(state) {
      state.loading = true;
      state.error = '';
    },
    loadContactsSuccess(state, action: PayloadAction<ContactDto[]>) {
      state.all = action.payload;
      state.filtered = action.payload;
      state.loading = false;
    },
    loadContactsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setFavoritesContacts(state) {
      state.favorites = state.all.slice(0, 4).map(contact => contact.id);
    },
    setCurrentGroupId(state, action: PayloadAction<GroupContactsDto>) {
      state.currentGroupId = action.payload;
    },
    unsetCurrentGroupId(state) {
      state.filtered = state.all;
      state.currentGroupId = undefined;
    },
    filterByCurrentGroupId(state) {
      if (state.currentGroupId) {
        state.filtered = state.filtered.filter(({ id }) => 
          state.currentGroupId?.contactIds.includes(id)
        );
      }
    },
    getContactByName(state, action: PayloadAction<string>) {
      const searchName = action.payload.toLowerCase();
      state.filtered = state.all.filter(contact => 
        contact.name.toLowerCase().includes(searchName)
      );
    },
  },
});

export const {
  loadContactsRequest,
  loadContactsSuccess,
  loadContactsFailure,
  setFavoritesContacts,
  setCurrentGroupId,
  unsetCurrentGroupId,
  filterByCurrentGroupId,
  getContactByName,
} = contactsSlice.actions;

export default contactsSlice.reducer;