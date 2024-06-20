import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    password: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;