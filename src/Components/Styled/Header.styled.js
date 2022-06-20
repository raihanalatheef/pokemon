import styled from "styled-components"

export const HeaderStyled = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 30px 0;
    text-align:center;
    height:200px;
    
    p {
        color: ${({ theme }) => theme.colors.textlight};
        font-size: 20px;
        line-height: 1.5em;
    }
    @media (max-width:  ${({ theme }) => theme.mobile}) {
        height: auto;
    }
`

export const Logo = styled.img`
    width: 50%;
    max-width: 425px;
`