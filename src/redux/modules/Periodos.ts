import Periodos, { PeriodosType } from 'models/Periodos';

export const Types = {
  SET_PERIODOS: 'datas/SET_PERIODOS',
};

export type ListaDePeriodos = {
  periodos: PeriodosType;
};

const initialState = {
  periodos: Periodos(),
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.SET_PERIODOS:
      return { ...state, periodos: action.payload };
    default:
      return state;
  }
}

export function setPeriodos(periodos: PeriodosType) {
  return {
    type: Types.SET_PERIODOS,
    payload: periodos,
  };
}
