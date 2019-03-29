import { lighten, darken } from 'polished'

export const Colors = {
  white: '#fff',
  black: '#000',
  purple: '#6d3eda',
}

export const Tones = {
  lightGrey: darken(0.05, Colors.white),
  darkGrey: lighten(0.15, Colors.black),
  darkPurple: darken(0.05, Colors.purple),
}

export const fontSizes = {
  sm: '.8rem',
  md: '1.2rem',
  lg: '1.9rem',
  xl: '3rem',
}
