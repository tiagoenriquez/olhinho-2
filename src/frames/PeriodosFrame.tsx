import Buttons from 'containers/Buttons';
import PeriodoInterface from 'interfaces/PeriodoInterface';
import { useDispatch, useSelector } from 'react-redux';
import { ListaDePeriodos } from 'redux/modules/Periodos';
import Table from 'components/Table';
import SmallButton from 'components/SmallButton';
import { PeriodoType } from 'models/Periodo';
import { MouseEvent, useState } from 'react';
import { setPeriodoEmEdicao } from 'redux/modules/PeriodoEmEdicao';
import { setFrame } from 'redux/modules/Frame';
import caneta from '../assets/caneta.png';
import lixeira from '../assets/lixeira.png';
import Frame from './Frame';

export default function PeriodosFrame() {
  interface RootsState {
    periodos: ListaDePeriodos;
  }

  const dispatch = useDispatch();
  const periodos = useSelector((state: RootsState) => state.periodos);
  const list: PeriodoInterface[] = [];
  const titles = ['Descrição', 'Início', 'Fim', 'Dias', '', ''];

  const [periodosExibidos, setPeriodosExibidos] = useState<PeriodoType[]>(
    periodos.periodos.getLista()
  );

  function mudarTela(event: MouseEvent<HTMLButtonElement>, frame: string) {
    const { id } = event.target as HTMLButtonElement | HTMLImageElement;
    const idNumber = Number(
      id.replace('-button', '').replace('-image', '').replace(`${frame}-`, '')
    );
    dispatch(setPeriodoEmEdicao(periodos.periodos.procurarPeriodo(idNumber)));
    dispatch(setFrame(frame));
  }

  const atualizar = (event: MouseEvent<HTMLButtonElement>) => {
    mudarTela(event, 'calcular-periodo');
  };

  const excluir = (event: MouseEvent<HTMLButtonElement>) => {
    mudarTela(event, 'excluir');
  };

  periodosExibidos.forEach((periodo) => {
    const periodoInterface: PeriodoInterface = {
      descricao: periodo.getDescricao(),
      inicio: periodo.getInicio().toLocaleDateString(),
      fim: periodo.getFim().toLocaleDateString(),
      dias: periodo.getDias(),
      editar: (
        <SmallButton
          action={atualizar}
          alternativeTextOfImage="Botão Atualizar"
          id={`calcular-periodo-${periodo.getId()}`}
          image={caneta}
          tooltip="Abre a tela de edição de período em modo de atualização."
        />
      ),
      excluir: (
        <SmallButton
          action={excluir}
          alternativeTextOfImage="Botão Excluir"
          id={`excluir-${periodo.getId()}`}
          image={lixeira}
          tooltip="Abre a tela de exclusão de período."
        />
      ),
    };
    list.push(periodoInterface);
  });

  const mostrarTudo = () => {
    setPeriodosExibidos(periodos.periodos.getLista());
  };

  const mostrarSomas = () => {
    setPeriodosExibidos(
      periodos.periodos.getLista().filter((periodo) => {
        return periodo.getDias() >= 0;
      })
    );
  };

  const mostrarDescontos = () => {
    setPeriodosExibidos(
      periodos.periodos.getLista().filter((periodo) => {
        return periodo.getDias() < 0;
      })
    );
  };

  return (
    <Frame>
      <h1>Lista de Períodos</h1>
      <Buttons
        buttons={[
          { action: mostrarTudo, text: 'Mostrar tudo' },
          { action: mostrarSomas, text: 'Mostrar apenas somas' },
          { action: mostrarDescontos, text: 'Mostrar apenas descontos' },
        ]}
      />
      <Table list={list} titles={titles} />
    </Frame>
  );
}
