import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$white',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
