export default function converterDataParaHorarioAmericano(
  dataEmFormatoBrasileiro: string
): string {
  try {
    const dadosDaData = dataEmFormatoBrasileiro.split('/');
    const data = new Date(
      Number(dadosDaData[2]),
      Number(dadosDaData[1]) - 1,
      Number(dadosDaData[0])
    );
    return data.toISOString().substring(0, 10);
  } catch (error: any) {
    throw new Error(error);
  }
}
