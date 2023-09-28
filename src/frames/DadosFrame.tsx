import Table from 'components/Table';
import DadoInterface from 'interfaces/DadoInterface';
import { useSelector } from 'react-redux';
import { ListaDePeriodos } from 'redux/modules/Periodos';
import Frame from './Frame';

export default function DadosFrame() {
  interface RootsState {
    periodos: ListaDePeriodos;
  }

  const periodos = useSelector((state: RootsState) => state.periodos);
  const titles = ['Propriedade', 'Valor'];
  const list: DadoInterface[] = [
    { chave: 'Total em dias', valor: periodos.periodos.getTotal().toString() },
    { chave: 'Soma', valor: periodos.periodos.getSoma().toString() },
    { chave: 'Descontos', valor: periodos.periodos.getDescontos().toString() },
    { chave: 'Total em anos', valor: periodos.periodos.getTotalEmAnos() },
    {
      chave: 'Total em anos por extenso',
      valor: periodos.periodos.getTotalEmAnosPorExtenso(),
    },
  ];

  return (
    <Frame>
      <h1>Dados do Somatório de Períodos</h1>
      <Table list={list} titles={titles} />
    </Frame>
  );
}
