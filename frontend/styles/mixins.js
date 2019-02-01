import { css } from 'styled-components';

export function darken(color, percent) {
  const num = parseInt(color.substr(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  const colString = (
    0x1000000
    + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000
    + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100
    + (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1);
  return `#${colString}`;
}

export function lighten(color, percent) {
  const num = parseInt(color.substr(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  const colString = (
    0x1000000
    + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000
    + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100
    + (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1);
  return `#${colString}`;
}

export const screens = {
  xs: '400px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1800px'
};

export const media = {
  xs: (...args) => css`
    @media only screen and (max-width: ${sizes.xs / 16}em) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media only screen and (min-width: ${sizes.sm / 16}em) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media only screen and (min-width: ${sizes.md / 16}em) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media only screen and (min-width: ${sizes.lg / 16}em) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media only screen and (min-width: ${sizes.xl / 16}em) {
      ${css(...args)}
    }
  `
};

export const fontSize = px => `${px / 16}rem`;
export const toEm = px => `${px / 16}em`;
