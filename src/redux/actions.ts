import { createAction } from './tools';

export const setTest = createAction<number>('SET_TEST');

export const requestTest = createAction<number>('REQUEST_TEST');
export const responseTest = createAction<number>('RESPONSE_TEST');
