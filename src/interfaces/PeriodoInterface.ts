import React from 'react';

export default interface PeriodoInterface {
  descricao: string;
  inicio: string;
  fim: string;
  dias: number;
  editar: React.JSX.Element;
  excluir: React.JSX.Element;
}
