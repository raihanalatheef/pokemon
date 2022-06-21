import styled from "styled-components"

export const Container = styled.div`
    width: 1200px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    @media (max-width:  ${({ theme }) => theme.medium}) {
        padding: 0 10px;
    }
`

export  const ContainerSmall = styled(Container)`
    width: 800px;
`