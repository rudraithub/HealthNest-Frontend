// src/redux/slices/appointmentSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface AppointmentState {
    selectedDoctor: object | null;
    selectedDate: string | null;
    selectedTime: string | null;
    openSlotIndex: number  | null;
    mobileNumber:  string | null;

}

const initialState: AppointmentState = {
    selectedDoctor: null,  // Will hold the selected doctor's data
    selectedDate: null,    // Will hold the selected appointment date
    selectedTime: null,     // Will hold the selected appointment time
    openSlotIndex: null,
    mobileNumber: ''
};

const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        setSelectedDoctor: (state, action) => {
            state.selectedDoctor = action.payload;
        },
        setSelectedDate: (state, action) => {
            state.selectedDate = action.payload;
        },
        setSelectedTime: (state, action) => {
            state.selectedTime = action.payload;
        },
        setOpenSlot: (state, action) => {
            state.openSlotIndex = action.payload;
        },
        setMobileNumber : (state, action) => {
            state.mobileNumber = action.payload
        },
        clearAppointmentData: (state) => {
            state.selectedDoctor = null;
            state.selectedDate = null;
            state.selectedTime = null;
            state.openSlotIndex = null;
            state.mobileNumber = '';
        }
    }
});

export const appointmentAction = appointmentSlice.actions;
export default appointmentSlice;
