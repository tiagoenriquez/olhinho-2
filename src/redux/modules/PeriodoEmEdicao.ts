import { PeriodoType } from 'models/Periodo';

export const Types = {
  SET_PERIODO_EM_EDICAO: 'datas/SET_PERIODO_EM_EDICAO',
};

export type PeriodoEmEdicao = {
  periodoEmEdicao: PeriodoType | null;
};

const initialState = {
  periodo: null,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.SET_PERIODO_EM_EDICAO:
      return { ...state, periodoEmEdicao: action.payload };
    default:
      return state;
  }
}

export function setPeriodoEmEdicao(periodoEmEdicao: PeriodoType | null) {
  return {
    type: Types.SET_PERIODO_EM_EDICAO,
    payload: periodoEmEdicao,
  };
}
