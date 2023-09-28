import Table from 'components/Table';
import Buttons from 'containers/Buttons';
import DadoInterface from 'interfaces/DadoInterface';
import { useDispatch, useSelector } from 'react-redux';
import { setFrame } from 'redux/modules/Frame';
import {
  PeriodoEmEdicao,
  setPeriodoEmEdicao,
} from 'redux/modules/PeriodoEmEdicao';
import { ListaDePeriodos, setPeriodos } from 'redux/modules/Periodos';
import Frame from './Frame';

export default function ExcluirPeriodoFrame() {
  interface RootsState {
    periodoEmEdicao: PeriodoEmEdicao;
    periodos: ListaDePeriodos;
  }

  const periodoEmEdicao = useSelector(
    (state: RootsState) => state.periodoEmEdicao
  );

  const periodos = useSelector((state: RootsState) => state.periodos);

  const dispatch = useDispatch();
  const periodo = periodoEmEdicao.periodoEmEdicao;
  const list: DadoInterface[] = [];

  if (periodo) {
    list.push({
      chave: 'Descrição',
      valor: periodo.getDescricao(),
    });
    list.push({
      chave: 'Data Inicial',
      valor: periodo.getInicio().toLocaleDateString(),
    });
    list.push({
      chave: 'Data Final',
      valor: periodo.getFim().toLocaleDateString(),
    });
    list.push({
      chave: 'Nº de Dias',
      valor: periodo.getDias().toString(),
    });
  }

  const listar = () => {
    dispatch(setPeriodoEmEdicao(null));
    dispatch(setFrame('periodos'));
  };

  const excluir = () => {
    if (periodo) {
      periodos.periodos.excluirPeriodo(periodo);
      setPeriodos(periodos.periodos);
      listar();
    }
  };

  const titles = ['Propriedade', 'Valor'];

  return (
    <Frame>
      <h1>Excluir Período</h1>
      <p>Tem certeza de que deseja excluir</p>
      <Table list={list} titles={titles} />
      <p>???</p>
      <Buttons
        buttons={[
          { action: listar, text: 'Não' },
          { action: excluir, text: 'Sim' },
        ]}
      />
    </Frame>
  );
}
