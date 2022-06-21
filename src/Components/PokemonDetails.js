
import { useLocation } from "react-router-dom"
import PokemonSpecs from "./PokemonSpecs"
import { Container } from "./Styled/Container.styled"
import { Flex } from "./Styled/Flex.styled"
import axios from "axios"
import { useState, useEffect } from "react"
import { PokemonDetailContainer, PokemonDetailImageContainer, PokemonDetailInfoContainer,PokemonSpecsContainer } from './Styled/PokemonDetails.styled'



export default function PokemonDetails() { 
    const location = useLocation();
    const pokemonInfo = location.state
    const pokeAbilties = pokemonInfo.abilities.map(a => !a.is_hidden && <span key={a.ability.name}>{a.ability.name}</span>)
    const [gender, setGender] = useState();
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState();
    
    useEffect(() => {
        setLoading(true)
        findGender()
        findCategory()
    },[])
  
    async function findGender() {
        try{
           let response = await axios.get(`https://pokeapi.co/api/v2/gender/${pokemonInfo.id}`)
           console.log(response,"dsbfjksdf")
           setGender(response.data.name)
           setLoading(false)
        }
        catch(err){
            alert(err)
        }
    }
    async function findCategory() {
        try{
           let response = await axios.get(`https://pokeapi.co/api/v2/egg-group/${pokemonInfo.id}`)
           setCategory(response.data.name)
           setLoading(false)
        }
        catch(err){
            alert(err)
        }
    }
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
                        <PokemonSpecsContainer>
                            <PokemonSpecs specs="Height" value={`${pokemonInfo.height/10} m`} />
                            <PokemonSpecs specs="Weight" value={`${pokemonInfo.weight/10} kg`} />
                            <PokemonSpecs specs="Gender" value={loading? <span>Loading...</span>: gender} />
                            <PokemonSpecs specs="Category" value={loading? <span>Loading...</span>:category} />
                            <PokemonSpecs specs="Abilities" value={pokeAbilties} />
                        </PokemonSpecsContainer>
                    </PokemonDetailInfoContainer>
                </Flex>
            </PokemonDetailContainer>    
        </Container>
    )
}