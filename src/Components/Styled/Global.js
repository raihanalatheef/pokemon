import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    
    * {
        box-sizing: border-box;
        margin: 0;
    }
      
    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.lighttext};
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
    }

`
export default GlobalStyles