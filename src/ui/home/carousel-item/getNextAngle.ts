export function getNextAngle(index: number, activeCardIndex: number): number {
  // вычисляем угол поворота (на сколько нужно повернуть)
  let nextAngle = (activeCardIndex - index) * 36;

  if (index === 0 && activeCardIndex > 4) {
    nextAngle = (activeCardIndex - 10) * 36;
  } else if (index === 1 && activeCardIndex > 5) {
    nextAngle = (activeCardIndex - 11) * 36;
  } else if (index === 9 && activeCardIndex < 5) {
    nextAngle = (activeCardIndex + 1) * 36;
  } else if (index === 8 && activeCardIndex < 5) {
    nextAngle = (activeCardIndex + 2) * 36;
  }

  return nextAngle;
}
