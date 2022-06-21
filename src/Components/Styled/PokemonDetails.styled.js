import styled from "styled-components"

export const PokemonDetailContainer = styled.div`
    padding: 20px 0;
`

export const PokemonDetailImageContainer = styled.div`
    flex: 1 1 40%;
    figure {
        width: 100%;
        height: 100%;
        text-align: center;
    }
    img {
        width: 350px;
        height: 350px;
    }
    @media (max-width:  ${({ theme }) => theme.medium}) {
        flex: 1 1 100%;
        img {
            width: 90%;
            height: auto;
        }
    }
`
export const PokemonDetailInfoContainer = styled.div`
    flex: 1 1 60%;
    padding: 20px;
    h1 {
        text-transform: capitalize;
        font-size: 24px;
        padding-bottom: 20px;
    }
    @media (max-width:  ${({ theme }) => theme.medium}) {
        flex: 1 1 100%;
        padding: 15px;
    }
`

export const PokemonSpecsContainer = styled.div`
    display: flex;
    gap:20px;
    flex-wrap: wrap;
    @media (max-width:  ${({ theme }) => theme.medium}) {
        gap:10px;
    }
`

export const PokemonFlavor = styled.p`
    font-size: 18px;
    padding-bottom: 20px;
    @media (max-width:  ${({ theme }) => theme.medium}) {
        font-size: 15px;
    }
`