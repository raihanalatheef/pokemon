import styled from "styled-components"

export const PokemonDetailContainer = styled.div`
    padding: 20px 0;
`

export const PokemonDetailImageContainer = styled.div`
    flex: 1 1 40%;
    figure {
        width: 400px;
        height: 400px;
        text-align:center;
        border-radius: 10px;
        background: linear-gradient(45deg,#0088f9db,transparent)
    }
    img {
        width: 350px;
        height: 350px;
    }
`
export const PokemonDetailInfoContainer = styled.div`
    flex: 1 1 60%;
    h1 {
        text-transform: capitalize;
        font-size: 24px;
        padding-bottom: 20px;
    }
`