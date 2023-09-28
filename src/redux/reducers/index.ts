import { combineReducers } from 'redux';

import frame from '../modules/Frame';
import periodoEmEdicao from '../modules/PeriodoEmEdicao';
import periodos from '../modules/Periodos';

export default combineReducers({ frame, periodoEmEdicao, periodos });
