export const pxToRem = (px: number) => {
  const remValue = (px * 1) / 16;
  return `${remValue}rem`;
};
