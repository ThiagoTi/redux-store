import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: 'Eat pizza', complete: false }]
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  console.log('state 2', JSON.stringify(state, null, 2));
  console.log('action 2', JSON.stringify(action, null, 2));
  switch (action.type) {
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      return {
        ...state,
        data: data
      };
    }
    case fromActions.REMOVE_TODO: {
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );
      return {
        ...state,
        data
      };
    }
  }

  return state;
}
