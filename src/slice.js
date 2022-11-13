import { createSlice } from "@reduxjs/toolkit";

const sliceTheme = createSlice({
  name: "Theme",
  initialState: {
    isLigth: true,
    message: ""
  },
  reducers: {
    setLight: (initialState, action) => {
      initialState.isLigth = !initialState.isLigth
      initialState.message = action.payload
    }
  }
})

export const { setLight } = sliceTheme.actions;
export default sliceTheme.reducer 