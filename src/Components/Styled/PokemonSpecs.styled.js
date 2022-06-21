import styled from "styled-components"

export const PokemonSpecsStyled = styled.div`
    border: 1px solid #e5e5e5;
    padding: 10px;
    span, p {
        font-size: 14px;
        text-transform: Capitalize;
    }
    h3 {
        font-size: 15px;
        padding-bottom: 5px;
    }
    @media (max-width:  ${({ theme }) => theme.medium}) {
        span, p {
            font-size: 12px;
        }
        h3 {
            font-size: 14px;
        }
    }
`