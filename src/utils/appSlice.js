import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'apppSlice',
    initialState: {
        isMenuOpenFlag: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpenFlag = !state.isMenuOpenFlag;
        }
    }
})

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;