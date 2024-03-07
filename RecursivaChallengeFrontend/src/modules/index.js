import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import app from './app.js';
import superliga from './superliga.js';

const rootReducer = combineReducers({
	app,
	superliga,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
