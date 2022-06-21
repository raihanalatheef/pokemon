import styled from "styled-components"

export const Stats = styled.div`
    width: 70%;
    h2 {
        font-size: 16px;
        padding: 20px 0 10px;
    }
    span {
        font-size: 13px;   
        text-transform: Capitalize
    }
    @media (max-width:  ${({ theme }) => theme.medium}) {
        width: 100%;
    }
`
export const StatBar = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.blue};
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    margin: 5px 0;
    position: relative;
`

export const StatBarProgress = styled.div`
    background-color: ${({ theme }) => theme.colors.blue};
    width: ${props => props.width || 0}px;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
`