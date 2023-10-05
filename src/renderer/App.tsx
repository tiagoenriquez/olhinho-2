import './App.css';
import { Frame } from 'redux/modules/Frame';
import { Provider, useSelector } from 'react-redux';
import store from 'redux/store';
import Menu from 'containers/Menu';
import PeriodosFrame from 'frames/PeriodosFrame';
import DadosFrame from 'frames/DadosFrame';
import CalcularPeriodoFrame from 'frames/CalcularPeriodoFrame';
import ExcluirPeriodoFrame from 'frames/ExcluirPeriodoFrame';
import CalcularDiasFrame from 'frames/CalcularDiasFrame';
import CalcularNumerosFrame from 'frames/CalcularNumerosFrame';
import SobreFrame from 'frames/SobreFrame';

function Main() {
  interface Rootstate {
    frame: Frame;
  }

  const frame = useSelector((state: Rootstate) => state.frame);

  switch (frame.nome) {
    case 'calcular-numeros':
      return <CalcularNumerosFrame />;
    case 'calcular-periodo':
      return <CalcularPeriodoFrame />;
    case 'dados':
      return <DadosFrame />;
    case 'excluir':
      return <ExcluirPeriodoFrame />;
    case 'multiplicar':
      return <CalcularDiasFrame operacao="multiplicar" />;
    case 'periodos':
      return <PeriodosFrame />;
    case 'sobre':
      return <SobreFrame />;
    case 'somar':
      return <CalcularDiasFrame operacao="somar" />;
    case 'subtrair':
      return <CalcularDiasFrame operacao="subtrair" />;
    default:
      return null;
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Main />
    </Provider>
  );
}
