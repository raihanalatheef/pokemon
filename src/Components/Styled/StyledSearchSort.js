import styled from "styled-components"

export const StyledSearchSort = styled.div`
    background-color: ${({theme}) => theme.colors.blue };
    padding: 5px;
    margin-bottom: 20px;
    @media (max-width:  ${({ theme }) => theme.medium}) {
        form {
            width: 100%;
        }
    }
`

export const StyledInput= styled.input`
    padding: 10px 15px;
    border-radius: 25px;
    border: 1px solid #fff;
    margin:5px 0;
    @media (max-width:  ${({ theme }) => theme.medium}) {
        width: 100%;
    }
`

export const StyledSelect= styled.select`
    padding: 10px 15px;
    border-radius: 25px;
    border: 1px solid #fff;
    margin:5px 0;
   
`