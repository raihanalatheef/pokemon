import styled from "styled-components"

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary };
    padding: 20px;
    color: gray;
    height: 55px;
    
    p {
        text-align:left;
    }
`