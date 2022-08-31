import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userIsAuthinticated: false,
    session: null,
  },
  reducers: {
    setUser(state, action) {
      const { session } = action.payload;
      state.userIsAuthinticated = true;
      state.session = session;
    },
    removeUser(state) {
      (state.userIsAuthinticated = false), (state.session = null);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
