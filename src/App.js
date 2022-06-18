import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Components/Styled/Global'
import Header from './Components/Header'
import Footer from './Components/Footer'

const theme = {
  colors: {
    primary: '#000',
    body:'#121519',
    textlight: '#fff'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
