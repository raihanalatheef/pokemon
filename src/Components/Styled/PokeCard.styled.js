import styled from "styled-components"

export const StyledPokeCard = styled.div`
    width: calc(25% - 20px);
    border: 1px solid cyan;
    border-radius: 10px;
    cursor: pointer;
    img {
        height: 130px;
        width:130px;
    }
    figure {
        text-align: center;
        border-radius: 100%;
        background: linear-gradient(45deg, #5696cbdb, transparent);
        width:130px;
        margin: 15px auto;
        height: 130px;
        
    }
    @media (max-width:  ${({ theme }) => theme.mobile}) {
        width: calc(100% - 20px);
    }
`