import { createReducer } from '@reduxjs/toolkit';
import { setTestValue } from './actions';
import { GlobalState } from './state';

const initialState: GlobalState = { value: 0 };

const reducer = createReducer(initialState, (builder) => {
	builder.addCase(setTestValue, (state, action) => {
		state.value += action.payload;
	});
});

export default reducer;
