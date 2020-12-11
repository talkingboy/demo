import { AnyAction } from 'redux';
import { TState } from './state';

const initState = {
  test: 0,
  asyncTest: 0,
};

const reducer = (state: TState = initState, action: AnyAction): TState => {
  switch (action.type) {
    case 'SET_TEST': {
      return { ...state, test: action.payload };
    }
    case 'REQUEST_TEST': {
      return { ...state, asyncTest: action.payload };
    }
    case 'RESPONSE_TEST': {
      return { ...state, asyncTest: action.payload + 1 };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
