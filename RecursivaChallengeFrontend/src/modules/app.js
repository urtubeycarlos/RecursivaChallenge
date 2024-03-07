import { createSlice, configureStore } from '@reduxjs/toolkit';

export const APP_VIEW = {
	FORM_ARCHIVO: 1,
	REPORTE: 2,
};

const initialState = {
	view: APP_VIEW.FORM_ARCHIVO,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setView: (state, action) => {
			state.view = action.payload;
		},
	},
});

export const { setView } = appSlice.actions;

export const appStore = configureStore({
	reducer: appSlice.reducer,
});

export default appSlice.reducer;
