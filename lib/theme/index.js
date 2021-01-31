import { bootstrap } from '@theme-ui/presets'

const theme = {
  ...bootstrap,
  colors: {
    ...bootstrap.colors,
    background: '#080808',
    primary: '#12bf9d',
    input: '#989898',
  },
  fonts: {
    ...bootstrap.fonts,
    body:
      'Poppins,system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Jost,Georgia, serif',
    monospace: 'Poppins,Menlo, monospace',
  },
  styles: {
    ...bootstrap.styles,
    root: {
      ...bootstrap.styles.root,
      color: 'white',
    },
  },
  custom_box: {
    px: [10, 30, 50, 100, 200],
  },
  section_box: {
    px: [10, 20, 30, 50, 50],
  },

  breakpoints: ['350px', '576px', '768px', '992px', '1200px'],
}

export default theme
