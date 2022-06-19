import { Container } from "./Styled/Container.styled"
import { FlexRowCentered } from "./Styled/Flex.styled"
import React, { useState, useEffect } from "react"
import PokeCard from './PokeCard'
import axios from "axios";

export default function Main() {
    const [loading, setLoading] = useState(false);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=151")
    const [pokemons, setPokemon] = useState([]);
    
    // useEffect(() => {
    //   setLoading(true)
    //   axios.get(currentPageUrl).then(res => {
    //     setLoading(false)
    //     setPokemon(res.data.results)
    //     getPokemonDetails(pokemons)
    //   })
    // }, [currentPageUrl])
    useEffect(() => {
      setLoading(true)
      const res = getPokemonDetails(pokemons)
      if(res) setLoading(false)
    },[])
    
    async function getPokemonDetails() {
       let pokeUrls = [];
       for(let i=1; i<=151;i++) {
        pokeUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
       }
        axios.all(pokeUrls.map((pokeUrl) => axios.get(pokeUrl))).then(
          (data) => 
          { setPokemon(data)
            return true
          }
        );
    }
   
    if (loading) return "Loading..."
    
  
    const cards = pokemons.map(pokemon => {
      let pokemonData = pokemon.data
        return (
          <PokeCard key={pokemonData.id} {...pokemonData} />
        )
      })
      
    return (
        <main>
            <Container>
              <FlexRowCentered gap="10px">
              {cards}
              </FlexRowCentered>
            </Container>
        </main>
    )
}