import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Components/Styled/Global'
import React from "react"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'


const theme = {
  colors: {
    primary: '#FFCC00',
    body:'#fff',
    textlight: '#fff'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
