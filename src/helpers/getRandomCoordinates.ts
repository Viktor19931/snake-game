export default () => {
  const min = 1;
  const max = 98;
  const { floor, random } = Math;
  const x = floor((random() * (max - min + 1) + min) / 2) * 2;
  const y = floor((random() * (max - min + 1) + min) / 2) * 2;

  return [x, y];
};
