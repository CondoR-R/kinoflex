export const useGetStyleRotation = (index: number, total: number) => {
  const middle = total / 2;
  const rotate = (index + 1 - middle) * (360 / total);

  const distanceFromMiddleX = Math.min(
    Math.abs(index + 1 - middle),
    Math.abs(index + 1 - total),
    Math.abs(index + 1)
  );
  const translateX =
    (-75 * distanceFromMiddleX * distanceFromMiddleX +
      325 * distanceFromMiddleX) *
    (index + 1 > middle ? 1 : -1);

  const distanceFromMiddleY = Math.min(
    Math.abs(index + 1 - middle / 2),
    Math.abs(index + 1 - (middle / 2 + middle))
  );

  const translateY =
    (-50 * distanceFromMiddleY * distanceFromMiddleY +
      300 * distanceFromMiddleY -
      87.5) *
    (index + 1 >= 3 && index + 1 <= 7 ? -1 : 1);

  return {
    rotate,
    translateY,
    translateX,
  };
};
