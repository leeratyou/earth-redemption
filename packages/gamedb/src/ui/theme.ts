const theme = {
  unit: 'rem',
  fontFamily: 'Source sans',
  fontSize: {
  
  },
  color: {
  
  },
  fonts: {

  },
  space(...args: any[]) {
    const result = (args.length ? [...args] : [1]).reduce((str, curr) => `${str} ${curr}rem`, '')
    return result
  },
  css: {
    centered: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
    transition: 'all 300ms ease-in-out;',
  }
};


export default theme
