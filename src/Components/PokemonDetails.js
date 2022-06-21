
import { useParams, useLocation } from "react-router-dom"
import { Container } from "./Styled/Container.styled";
import { Flex } from "./Styled/Flex.styled";
import { PokemonDetailContainer, PokemonDetailImageContainer, PokemonDetailInfoContainer } from './Styled/PokemonDetails.styled'



export default function PokemonDetails() { 
    // let { name } = useParams();
    const location = useLocation();
    const pokemonInfo = location.state
    console.log('otherparam', location.state)
    return (
        <Container>
            <PokemonDetailContainer>
                <Flex>
                    <PokemonDetailImageContainer>
                        <figure>
                            <img src={pokemonInfo.sprites.other.dream_world.front_default} alt={pokemonInfo.name} />
                        </figure>
                    </PokemonDetailImageContainer>
                    <PokemonDetailInfoContainer>
                    <h1>{pokemonInfo.name} - #{String(pokemonInfo.id).padStart(3, '0')}</h1>
                        <div>
                            <h4>Height</h4>
                            <span>{pokemonInfo.height/10} m</span>
                        </div>
                        <div>
                            <h4>Category</h4>
                            <span></span>
                        </div>
                        <div>
                            <h4>Weight</h4>
                            <span>{pokemonInfo.weight/10} kg</span>
                        </div>
                        <div>
                            <h4>Weight</h4>
                            <span>{pokemonInfo.weight/10} kg</span>
                        </div>
                    </PokemonDetailInfoContainer>
                </Flex>
            </PokemonDetailContainer>    
        </Container>
    )
}