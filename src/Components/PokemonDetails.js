
import { useLocation, useNavigate } from "react-router-dom"
import PokemonSpecs from "./PokemonSpecs"
import { Container } from "./Styled/Container.styled"
import { Flex } from "./Styled/Flex.styled"
import axios from "axios"
import { useState, useEffect } from "react"
import PokemonStats from './PokemonStats'
import {PokeCardTypes}  from './Styled/PokeCard.styled'
import { PokeCardTypeContainer,PokemonGoBackBtn, PokemonFlavor, PokemonDetailContainer, PokemonDetailImageContainer, PokemonDetailInfoContainer,PokemonSpecsContainer } from './Styled/PokemonDetails.styled'



export default function PokemonDetails() { 
    const location = useLocation()
    let navigate = useNavigate()
    const pokemonInfo = location.state
    const pokeAbilties = pokemonInfo.abilities.map(a => !a.is_hidden && <span key={a.ability.name}>{a.ability.name}</span>)
    const pokeTypeForEach = pokemonInfo.types.map(pokeType => <li key={pokeType.type.name} className={`type-${pokeType.type.name}`}>{pokeType.type.name}</li>)
    const [gender, setGender] = useState()
    const [flavor, setFlavor] = useState()
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState()
    
    useEffect(() => {
        setLoading(true)
        async function fetchHandler(url) {
            try{
                const response = await axios.get(url)
                return response.data
             }
             catch(err){
                 return 'unknown'
             }  
        }
        async function findFlavour() {
            const res = await fetchHandler(`https://pokeapi.co/api/v2/pokemon-species/${pokemonInfo.id}`)
            if(res !== 'unknown') {
                setFlavor(res.flavor_text_entries[0].flavor_text)
            } else {
                setFlavor(res)
            }
            setLoading(false)
        }
        async function findCategory() { 
             const res = await fetchHandler(`https://pokeapi.co/api/v2/egg-group/${pokemonInfo.id}`)
             if(res !== 'unknown') {
                setCategory(res.name)
             } else {
                setCategory(res)
             }
             setLoading(false)
        }
        async function findGender() {
            const res = await fetchHandler(`https://pokeapi.co/api/v2/gender/${pokemonInfo.id}`)
            if(res !== 'unknown') {
                setGender(res.name)
            } else {
                setGender(res)
            }
            setLoading(false)
        }
        findGender()
        findCategory()
        findFlavour()
    },[pokemonInfo]) 
  

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
                        <PokeCardTypeContainer>
                            <h2>Types</h2>
                            <PokeCardTypes>
                                {pokeTypeForEach}
                            </PokeCardTypes>
                        </PokeCardTypeContainer>
                        <PokemonSpecsContainer>
                            <h2>Specs</h2>
                            <PokemonSpecs specs="Height" value={`${pokemonInfo.height/10} m`} />
                            <PokemonSpecs specs="Weight" value={`${pokemonInfo.weight/10} kg`} />
                            <PokemonSpecs specs="Gender" value={loading? <span>Loading...</span>: gender} />
                            <PokemonSpecs specs="Category" value={loading? <span>Loading...</span>:category} />
                            <PokemonSpecs specs="Abilities" value={pokeAbilties} />
                        </PokemonSpecsContainer>
                        <PokemonStats {...pokemonInfo}/>
                        <PokemonGoBackBtn onClick={() => {navigate('/')}}>Explore More Pokemons</PokemonGoBackBtn>
                    </PokemonDetailInfoContainer>
                </Flex>
            </PokemonDetailContainer>    
        </Container>
    )
}