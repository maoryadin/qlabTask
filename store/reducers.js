import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    updateRow: (state, action) => {
      const index = state.data.findIndex((item) => item.uuid === action.payload.uuid);
      const newData = [...state.data];
      newData[index] = action.payload;
      state.data = [...newData];
    },
    deleteRow: (state, action) => {
      const newData = state.data.filter((item) => item.uuid !== action.payload);
      state.data = [...newData];
    }
  },
});

export const { setData, updateRow, deleteRow } = dataSlice.actions;

export default dataSlice.reducer;