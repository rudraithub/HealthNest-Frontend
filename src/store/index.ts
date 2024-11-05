import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import appointmentSlice from './appointmentSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, appointmentSlice.reducer);

const store = configureStore({
  reducer: {
    appointment: persistedReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);
export default store;