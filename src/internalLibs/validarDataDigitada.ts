export default function validarDataDigitada(data: string): string {
  if ('0123456789'.includes(data.charAt(data.length - 1))) {
    let dataEditada = data;
    if (data.length % 3 === 2 && data.length <= 5) {
      dataEditada = `${data}/`;
    }
    return dataEditada;
  }
  return '';
}
