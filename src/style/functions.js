import { css, injectGlobal } from 'styled-components'

export const sizes = {
  xl: 2300,
	giant: 1440,
	mid: 1325,
  desktop: 1080,
  tablet: 770,
	mobile: 600,
	xs: 360,
	height: 1980
}

export const minHeight = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-height: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const maxHeight = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-height: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const above = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const below = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export function clearFix() {
  return `
    &:after {
      display: table;
      content: "";
      clear: both;
    }
  `;
}