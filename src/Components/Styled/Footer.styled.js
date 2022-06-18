import styled from "styled-components"

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary };
    padding: 20px;
    color: gray;
    
    p {
        text-align:left;
    }
`