import LargeButton from 'components/LargeButton';
import InputLabeled from 'containers/InputLabeled';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFrame } from 'redux/modules/Frame';
import { ListaDePeriodos, setPeriodos } from 'redux/modules/Periodos';
import Frame from './Frame';

interface CalcularDiasFrameProps {
  operacao: string;
}

export default function CalcularDiasFrame(props: CalcularDiasFrameProps) {
  const { operacao } = props;

  interface RootsState {
    periodos: ListaDePeriodos;
  }

  const periodos = useSelector((state: RootsState) => state.periodos);
  const [numero, setNumero] = useState<number>(0);
  const dispatch = useDispatch();

  const handleNumero = (event: ChangeEvent<HTMLInputElement>) => {
    setNumero(Number(event.target.value));
  };

  type Operacoes = {
    multiplicar(): void;
    somar(): void;
    subtrair(): void;
  };

  const operacoes: Operacoes = {
    multiplicar: () => {
      periodos.periodos.multiplicar(numero);
    },
    somar: () => {
      periodos.periodos.somar(numero);
    },
    subtrair: () => {
      periodos.periodos.subtrair(numero);
    },
  };

  const calcular = () => {
    operacoes[operacao as keyof Operacoes]();
    dispatch(setPeriodos(periodos.periodos));
    dispatch(setFrame('dados'));
  };

  return (
    <Frame>
      <InputLabeled
        id="numero"
        label="Digite um número"
        onChange={handleNumero}
        readonly={false}
        type="number"
        value={numero}
      />
      <LargeButton
        action={calcular}
        text={`${operacao.charAt(0).toUpperCase()}${operacao.substring(
          1
        )} na lista`}
      />
    </Frame>
  );
}
