import {extendTheme, ThemeConfig} from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({config,
colors: {
    gray:{
        50: '#f9f9f9',
        100: '#ededed',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111'

    }
},
textStyles:{
    h1: {
        fontSize: ['18px', '32px'],
        fontWeight: 'bold',
        lineHeight: ['15px', '35px'],
        letterSpacing: '2px',
        fontFamily: `'Montserrat Variable', sans-serif`,
    },
    h2: {
        fontSize: ['16px', '24px'],
        fontWeight: 'bold',
        lineHeight: ['2px', '16px'],
        letterSpacing: '1px',
        fontFamily: `'Montserrat Variable', sans-serif`,
    },
    h3: {
        fontSize: ['12px', '18px'],
        fontWeight: 'regular',
        fontFamily: `'Montserrat Variable', sans-serif`,
        color: 'grey'
      },
    h4: {
        fontSize: ['10px', '14px'],
        fontWeight: 'light',
        fontFamily: `'Montserrat Variable', sans-serif`,
        color: 'grey'
      },
    h5: {
        fontSize: ['12px', '16px'],
        fontWeight: 'light',
        fontFamily: `'Montserrat Variable', sans-serif`,
      },
},
});

export default theme