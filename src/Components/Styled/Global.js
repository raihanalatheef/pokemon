import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;800&display=swap');
    
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.lighttext};
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
    }
    main {
        min-height: calc(100vh - 255px)
    }
    // Pokemon type colors
    .type-poison {
        background-color: #C183C1;
    }
    .type-grass {
        background-color: #4E8234;
    }
    .type-fire {
        background-color:#F08030;
    }
    .type-bug {
        background-color:#A8B820;
    }
    .type-water {
        background-color:#6890F0;
    }
    .type-flying {
        background-color:#A890F0;
    }
    .type-ground {
        background-color:#927D44;
    }
    .type-electric {
        background-color:#F8D030;
    }
    .type-fairy {
        background-color:#EE99AC;
    }
    .type-normal {
        background-color:#6D6D4E;
    }
    .type-fighting {
        background-color:#FC0328;
    }
    .type-rock {
        background-color:#784a24;
    }
    .type-psychic {
        background-color:#6D6D4E;
    }
    .type-steel {
        background-color:#787887;
    }
    .type-ghost {
        background-color:#705898;
    }
    .type-ice {
        background-color:#98D8D8;
    }
    .type-dragon {
        background-color:#4924A1;
    }
`
export default GlobalStyles