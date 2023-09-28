import mostrarDataEmFusoHorarioDoBrasil from 'internalLibs/mostrarDataEmFusoHorarioDoBrasil';

export type PeriodoType = {
  calcularDias(inicioNovo: Date, fimNovo: Date): void;
  calcularFim(inicioNovo: Date, diasNovo: number): void;
  descontar(): void;
  getDescricao(): string;
  getDias(): number;
  getFim(): Date;
  getId(): number;
  getInicio(): Date;
  setDescricao(descricaoNovo: string): void;
  setId(idNovo: number): void;
};

export function Periodo(descricaoInicial: string) {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DATE = 24 * HOUR;

  let id = 0;
  let descricao = descricaoInicial;
  let dias: number;
  let inicio: Date;
  let fim: Date;

  // Todos os métodos são públicos.
  function calcularDias(inicioNovo: Date, fimNovo: Date) {
    if (inicioNovo > fimNovo) {
      throw new Error('Data final não pode ser anterior à data inicial.');
    }
    if (
      inicioNovo.toString() === 'Invalid Date' ||
      fimNovo.toString() === 'Invalid Date'
    ) {
      throw new Error('Data inválida');
    }
    inicio = inicioNovo;
    fim = fimNovo;
    dias = (Number(fim) - Number(inicio)) / DATE + 1;
  }

  function calcularFim(inicioNovo: Date, diasNovo: number) {
    if (inicioNovo.toString() === 'Invalid Date') {
      throw new Error('Data inválida');
    }
    inicio = inicioNovo;
    dias = diasNovo;
    fim = new Date(inicio);
    fim.setDate(inicio.getDate() + dias - 1);
  }

  function descontar() {
    dias = 0 - dias;
  }

  function getDescricao(): string {
    return descricao;
  }

  function getDias(): number {
    return dias;
  }

  function getFim(): Date {
    return mostrarDataEmFusoHorarioDoBrasil(fim);
  }

  function getId(): number {
    return id;
  }

  function getInicio(): Date {
    return mostrarDataEmFusoHorarioDoBrasil(inicio);
  }

  function setDescricao(descricaoNovo: string) {
    descricao = descricaoNovo;
  }

  function setId(idNovo: number) {
    id = idNovo;
  }

  const peridoType: PeriodoType = {
    calcularDias,
    calcularFim,
    descontar,
    getDescricao,
    getDias,
    getFim,
    getId,
    getInicio,
    setDescricao,
    setId,
  };

  return peridoType;
}
