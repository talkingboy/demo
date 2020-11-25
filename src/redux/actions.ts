import { createAction } from '@reduxjs/toolkit';

export const setTestValue = createAction<number>('setTestValue');
