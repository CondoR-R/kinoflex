export const useGetStyleRotation = (index: number, total: number) => {
  /**
   * вычисляем угол поворота карточки из условия, что карточка с индесом 9
   * должна быть под углом 0, а карточка с индексом 4 (середина) под углом 180
   * */
  const rotate = (index + 1 - total) * (360 / total);

  // радиус окружности
  const radius = 350;

  // Смещения по x и y вычисляются по тригонометрической окружности
  const x = Math.sin((36 * (index + 1) * Math.PI) / 180) * radius;
  const y = -Math.cos((36 * (index + 1) * Math.PI) / 180) * radius;

  return {
    rotate,
    x,
    y,
  };
};
