
import { useLocation } from "react-router-dom"
import PokemonSpecs from "./PokemonSpecs"
import { Container } from "./Styled/Container.styled"
import { Flex } from "./Styled/Flex.styled"
import axios from "axios"
import { useState, useEffect } from "react"
import PokemonStats from './PokemonStats'
import { PokemonFlavor, PokemonDetailContainer, PokemonDetailImageContainer, PokemonDetailInfoContainer,PokemonSpecsContainer } from './Styled/PokemonDetails.styled'



export default function PokemonDetails() { 
    const location = useLocation();
    const pokemonInfo = location.state
    const pokeAbilties = pokemonInfo.abilities.map(a => !a.is_hidden && <span key={a.ability.name}>{a.ability.name}</span>)
    const [gender, setGender] = useState();
    const [flavor, setflavor] = useState();
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState();
    
    useEffect(() => {
        setLoading(true)
        findDetails()
    },[])
  

    async function findDetails() {
        try{
           let endpoints = [
           `https://pokeapi.co/api/v2/pokemon-species/${pokemonInfo.id}`,
           `https://pokeapi.co/api/v2/gender/${pokemonInfo.id}`,
           `https://pokeapi.co/api/v2/egg-group/${pokemonInfo.id}`,
           
           ]
           const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
           setflavor(response[0].data.flavor_text_entries[0].flavor_text)
           setGender(response[1].data.name)
           setCategory(response[2].data.name)
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
                        <PokemonFlavor>{flavor?flavor.replace(/\f?\n|\f/g, " "):''}</PokemonFlavor>
                        <PokemonSpecsContainer>
                            <PokemonSpecs specs="Height" value={`${pokemonInfo.height/10} m`} />
                            <PokemonSpecs specs="Weight" value={`${pokemonInfo.weight/10} kg`} />
                            <PokemonSpecs specs="Gender" value={loading? <span>Loading...</span>: gender} />
                            <PokemonSpecs specs="Category" value={loading? <span>Loading...</span>:category} />
                            <PokemonSpecs specs="Abilities" value={pokeAbilties} />
                        </PokemonSpecsContainer>
                        <PokemonStats {...pokemonInfo}/>
                    </PokemonDetailInfoContainer>
                </Flex>
            </PokemonDetailContainer>    
        </Container>
    )
}