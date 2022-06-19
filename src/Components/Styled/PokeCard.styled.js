import styled from "styled-components"

export const StyledPokeCard = styled.div`
    width: calc(25% - 20px);
    border: 1px solid cyan;
    border-radius: 10px;
    
    @media (max-width:  ${({ theme }) => theme.mobile}) {
        width: calc(100% - 20px);
    }
`