import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'apppSlice',
    initialState: {
        isMenuOpenFlag: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpenFlag = !state.isMenuOpenFlag;
        },
        closeMenu: (state) => {
            state.isMenuOpenFlag = false;
        }
    }
})

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;