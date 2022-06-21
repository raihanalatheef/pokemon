import React from "react"
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Components/Styled/Global'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'
import PokemonDetails from "./Components/PokemonDetails"
import ErrorPage from "./Components/ErrorPage"


const theme = {
  colors: {
    primary: '#FFCC00', //pokemon yellow
    body:'#fff',
    blue: '#0075BE', //pokemon blue
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
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
