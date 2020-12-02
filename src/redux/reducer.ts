import { AnyAction } from 'redux';
import { TState } from './state';

const initState = {
  test: 0,
};

const reducer = (state: TState = initState, action: AnyAction): TState => {
  switch (action.type) {
    case 'setTest': {
      return { ...state, test: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
