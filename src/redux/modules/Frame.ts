export const Types = {
  SET_FRAME: 'datas/SET_FRAME',
};

export type Frame = {
  nome: string;
};

const initialState = {
  nome: 'calcular-periodo',
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.SET_FRAME:
      return { ...state, nome: action.payload };
    default:
      return state;
  }
}

export function setFrame(nome: string) {
  return {
    type: Types.SET_FRAME,
    payload: nome,
  };
}
