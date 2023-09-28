import converterNumeroParaAnos from 'internalLibs/converterNumeroParaAnos';
import converterNumeroParaAnosEmExtenso from 'internalLibs/converterNumeroParaAnosEmExtenso';
import { PeriodoType } from './Periodo';

export type PeriodosType = {
  adicionarPeriodo(periodo: PeriodoType): void;
  atualizarPeriodo(periodoAtualizado: PeriodoType): void;
  excluirPeriodo(periodoRemovido: PeriodoType): void;
  getDescontos(): number;
  getLista(): PeriodoType[];
  getSoma(): number;
  getTotal(): number;
  getTotalEmAnos(): string;
  getTotalEmAnosPorExtenso(): string;
  multiplicar(dias: number): void;
  procurarPeriodo(id: number): PeriodoType;
  somar(dias: number): void;
  subtrair(dias: number): void;
};

export default function Periodos(): PeriodosType {
  const lista: PeriodoType[] = [];
  let descontos = 0;
  let soma = 0;
  let total = 0;
  let totalEmAnos = '';
  let totalEmAnosPorExtenso = '';

  // Métodos privados
  function gerarConversoesParaDate() {
    totalEmAnos = converterNumeroParaAnos(total);
    totalEmAnosPorExtenso = converterNumeroParaAnosEmExtenso(total);
  }

  function proximoId(): number {
    let id = 0;
    lista.forEach((periodo) => {
      const idDoPeriodo = periodo.getId();
      if (idDoPeriodo > id) {
        id = idDoPeriodo;
      }
    });
    return id + 1;
  }

  function gerarDescontos() {
    descontos = 0;
    lista.forEach((periodo) => {
      const dias = periodo.getDias();
      if (dias < 0) {
        descontos -= dias;
      }
    });
  }

  function gerarTotal() {
    total = 0;
    lista.forEach((periodo) => {
      total += periodo.getDias();
    });
    gerarConversoesParaDate();
  }

  function gerarSoma() {
    soma = 0;
    lista.forEach((periodo) => {
      const dias = periodo.getDias();
      if (dias >= 0) {
        soma += dias;
      }
    });
  }

  function gerarValores() {
    gerarTotal();
    gerarSoma();
    gerarDescontos();
  }

  // Métodos públicos
  function adicionarPeriodo(periodo: PeriodoType) {
    periodo.setId(proximoId());
    lista.push(periodo);
    gerarValores();
  }

  function atualizarPeriodo(periodoAtualizado: PeriodoType) {
    lista.forEach((periodo, index) => {
      if (periodo.getId() === periodoAtualizado.getId()) {
        lista[index] = periodoAtualizado;
      }
    });
    gerarValores();
  }

  function excluirPeriodo(periodoRemovido: PeriodoType) {
    lista.forEach((periodo, index) => {
      if (periodo.getDias() === periodoRemovido.getDias()) {
        lista.splice(index, 1);
      }
    });
    gerarValores();
  }

  function getDescontos(): number {
    return descontos;
  }

  function getLista(): PeriodoType[] {
    return lista;
  }

  function getSoma(): number {
    return soma;
  }

  function getTotal(): number {
    return total;
  }

  function getTotalEmAnos(): string {
    return totalEmAnos;
  }

  function getTotalEmAnosPorExtenso(): string {
    return totalEmAnosPorExtenso;
  }

  function multiplicar(dias: number) {
    total *= dias;
    gerarConversoesParaDate();
  }

  function procurarPeriodo(id: number): PeriodoType {
    let periodoProcurado: PeriodoType | null = null;
    lista.forEach((periodo) => {
      if (periodo.getId() === id) {
        periodoProcurado = periodo;
      }
    });
    if (periodoProcurado) {
      return periodoProcurado;
    }
    throw new Error('Período não encontrado');
  }

  function somar(dias: number) {
    total += dias;
    gerarConversoesParaDate();
  }

  function subtrair(dias: number) {
    total -= dias;
    gerarConversoesParaDate();
  }

  return {
    adicionarPeriodo,
    atualizarPeriodo,
    excluirPeriodo,
    getDescontos,
    getLista,
    getSoma,
    getTotal,
    getTotalEmAnos,
    getTotalEmAnosPorExtenso,
    multiplicar,
    procurarPeriodo,
    somar,
    subtrair,
  };
}
