export default function mostrarDataEmFusoHorarioDoBrasil(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours() + 3,
    date.getMinutes(),
    date.getSeconds()
  );
}
