import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PeriodoEmEdicao,
  setPeriodoEmEdicao,
} from 'redux/modules/PeriodoEmEdicao';
import { ListaDePeriodos, setPeriodos } from 'redux/modules/Periodos';
import { Periodo, PeriodoType } from 'models/Periodo';
import InputLabeled from 'containers/InputLabeled';
import Buttons from 'containers/Buttons';
import { setFrame } from 'redux/modules/Frame';
import validarDataDigitada from 'internalLibs/validarDataDigitada';
import ErrorContainer from 'containers/ErrorContainer';
import Frame from './Frame';

export default function CalcularPeriodoFrame() {
  interface RootsState {
    periodoEmEdicao: PeriodoEmEdicao;
    periodos: ListaDePeriodos;
  }

  const periodoEmEdicao = useSelector(
    (state: RootsState) => state.periodoEmEdicao
  );

  const periodos = useSelector((state: RootsState) => state.periodos);
  const dispatch = useDispatch();

  let descricaoInicial = '';
  let diasInicial = '';
  let fimInicial = '';
  let inicioInicial = '';
  let periodoEmEdicaoInicial: PeriodoType | null = null;

  if (periodoEmEdicao.periodoEmEdicao) {
    periodoEmEdicaoInicial = periodoEmEdicao.periodoEmEdicao;
    descricaoInicial = periodoEmEdicao.periodoEmEdicao.getDescricao();
    diasInicial = Math.abs(periodoEmEdicaoInicial.getDias()).toString();
    fimInicial = periodoEmEdicaoInicial?.getFim().toLocaleDateString();
    inicioInicial = periodoEmEdicaoInicial?.getInicio().toLocaleDateString();
  }

  const [descricao, setDescricao] = useState<string>(descricaoInicial);
  const [dias, setDias] = useState<string>(diasInicial);
  const [erro, setErro] = useState<string>('');
  const [inicio, setInicio] = useState<string>(inicioInicial);
  const [fim, setFim] = useState<string>(fimInicial);
  const [periodo, setPeriodo] = useState<PeriodoType | null>(
    periodoEmEdicaoInicial
  );

  function adicionarPeriodo(periodoAdicionado: PeriodoType) {
    periodos.periodos.adicionarPeriodo(periodoAdicionado);
    dispatch(setPeriodos(periodos.periodos));
    dispatch(setFrame('periodos'));
  }

  function atualizarPeriodo(periodoAtualizado: PeriodoType) {
    periodos.periodos.atualizarPeriodo(periodoAtualizado);
    dispatch(setPeriodos(periodos.periodos));
    dispatch(setPeriodoEmEdicao(null));
    dispatch(setFrame('periodos'));
  }

  function criarPeriodo(): PeriodoType {
    const novoPeriodo = Periodo(descricao);
    if (periodo) novoPeriodo.setId(periodo.getId());
    return novoPeriodo;
  }

  const calcularDias = () => {
    try {
      const novoPeriodo = criarPeriodo();
      novoPeriodo.calcularDias(
        new Date(inicio.split('/').reverse().join('-')),
        new Date(fim.split('/').reverse().join('-'))
      );
      setDias(novoPeriodo.getDias().toString());
      setPeriodo(novoPeriodo);
    } catch (error: any) {
      setErro(error.message);
    }
  };

  const calcularFim = () => {
    try {
      const novoPeriodo = criarPeriodo();
      novoPeriodo.calcularFim(
        new Date(inicio.split('/').reverse().join('-')),
        Number(dias)
      );
      setFim(novoPeriodo.getFim().toLocaleDateString());
      setPeriodo(novoPeriodo);
    } catch (error: any) {
      setErro(error.message);
    }
  };

  const fecharErro = () => {
    setErro('');
  };

  function handleData(
    event: ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<string>>
  ): void {
    setData(validarDataDigitada(event.target.value));
    setDias('');
  }

  const descontar = () => {
    if (periodo) {
      periodo.descontar();
      if (periodo.getId() === 0) {
        adicionarPeriodo(periodo);
      } else {
        atualizarPeriodo(periodo);
      }
    }
  };

  const handleDescricao = (event: ChangeEvent<HTMLInputElement>) => {
    const descricaoAtualizada = event.target.value;
    if (periodo) periodo.setDescricao(descricaoAtualizada);
    setDescricao(descricaoAtualizada);
  };

  const handleDias = (event: ChangeEvent<HTMLInputElement>) => {
    setDias(event.target.value);
    setFim('');
  };

  const handleFim = (event: ChangeEvent<HTMLInputElement>) => {
    handleData(event, setFim);
  };

  const handleInicio = (event: ChangeEvent<HTMLInputElement>) => {
    handleData(event, setInicio);
  };

  const somar = () => {
    if (periodo) {
      if (periodo.getId() === 0) {
        adicionarPeriodo(periodo);
      } else {
        atualizarPeriodo(periodo);
      }
    }
  };

  return (
    <Frame>
      <h1>Calcular Período</h1>
      {erro ? <ErrorContainer close={fecharErro} message={erro} /> : null}
      <InputLabeled
        id="descricao"
        label="Descrição"
        onChange={handleDescricao}
        readonly={false}
        type="string"
        value={descricao}
      />
      <InputLabeled
        id="inicio"
        label="Data inicial"
        onChange={handleInicio}
        readonly={false}
        type="date"
        value={inicio}
      />
      <InputLabeled
        id="fim"
        label="Data final"
        onChange={handleFim}
        readonly={false}
        type="date"
        value={fim}
      />
      <InputLabeled
        id="dias"
        label="Nº de dias"
        onChange={handleDias}
        readonly={false}
        type="number"
        value={dias}
      />
      <Buttons
        buttons={[
          { action: calcularDias, text: 'Calcular nº de dias' },
          { action: calcularFim, text: 'Calcular data final' },
        ]}
      />
      {fim !== '' && dias !== '' ? (
        <Buttons
          buttons={[
            { action: somar, text: 'Somar na Lista' },
            { action: descontar, text: 'Descontar na Lista' },
          ]}
        />
      ) : null}
    </Frame>
  );
}
