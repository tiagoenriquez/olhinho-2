export default function converterNumeroParaAnos(numeroDeDias: number): string {
  if (numeroDeDias <= 0) return '';
  const anos = Math.floor(numeroDeDias / 365);
  const stringAnos = anos > 1 ? 'anos' : 'ano';
  const meses = Math.floor((numeroDeDias % 365) / 30);
  const stringMeses = meses > 1 ? 'meses' : 'mês';
  const dias = (numeroDeDias % 365) % 30;
  const stringDias = dias > 1 ? 'dias' : 'dia';
  return `${anos} ${stringAnos}, ${meses} ${stringMeses} e ${dias} ${stringDias}`;
}
