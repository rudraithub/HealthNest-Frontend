import { createSlice } from "@reduxjs/toolkit";

interface UIState {
    isModalOpen: boolean,
    errorMessage: string,
    successMessage: string
}

const initialState: UIState = {
    isModalOpen: false,
    errorMessage: '',
    successMessage: ''
}

const uiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        showError: (state, action) => {
            state.errorMessage = action.payload
            state.isModalOpen = true
        },
        showSuccess: (state, action) => {
            state.successMessage = action.payload
            state.isModalOpen = true
        },
        closeModal: (state) => {
            state.isModalOpen = false;
            state.errorMessage = "";
            state.successMessage = "";
        },
    }
})

export const UiACtion = uiSlice.actions

export default uiSlice