import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        return DATA_CONTACT;
      } catch (error) {
        return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
      }
    }
  );
  
  export const fetchGroups = createAsyncThunk(
    'groups/fetchAll',
    async (_, { rejectWithValue }) => {
      try {
        return DATA_GROUP_CONTACT;
      } catch (error) {
        return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
      }
    }
  );