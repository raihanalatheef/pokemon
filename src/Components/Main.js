import { Container } from "./Styled/Container.styled"
import { Flex, FlexRowCentered } from "./Styled/Flex.styled"
import React, { useState, useEffect } from "react"
import PokeCard from './PokeCard'
import axios from "axios";

export default function Main() {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemon] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('numberAsc');



    useEffect(() => {
      setLoading(true)
      getPokemonDetails(pokemons)
    },[])
    
    async function getPokemonDetails() {
       let pokeUrls = [];
       for(let i=1; i<=151;i++) {
        pokeUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
       }
       const response = await axios.all(pokeUrls.map((pokeUrl) => axios.get(pokeUrl)))
       if (response) {
        setPokemon(response)
        setLoading(false)
        return true;
       }
       return false;  
    }
    function checkSortType(a,b) {
      switch(sortOrder) {
        case 'numberAsc': return a.data.id - b.data.id
        case 'numberDesc': return b.data.id - a.data.id
        case 'nameAsc': return a.data.name > b.data.name ? 1 : -1
        case 'nameDesc': return a.data.name > b.data.name ? -1 : 1
        default: return a.data.id - b.data.id
      } 
    }
    return (
        <main>
          <div>
            <Container>
            <Flex>
              <form>
                <input type="text" id="searchInput"  placeholder="Search by Name or number" onChange={(e)=> setSearchTerm(e.target.value)} />
              </form>
              <div>
              <select id="sortOrder" value={sortOrder} placeholder="Sort pokemons" onChange={(e)=> setSortOrder(e.target.value)}>
      					<option value="numberAsc">Lowest Number (First)</option>
      					<option value="numberDesc">Highest Number (First)</option>
      					<option value="nameAsc">A-Z</option>
      					<option value="nameDesc">Z-A</option>
        			</select>
              </div>
              </Flex>
            </Container>
          </div>
          <Container>
            <FlexRowCentered gap="10px">
            { loading ? (<h4>Loading...</h4>): 
             (
               pokemons.filter(pokemon=>pokemon.data.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.data.id.toString().includes((searchTerm)))
              .sort((a,b) => checkSortType(a,b))
              .map(pokemonFilteredData => (
                <PokeCard key={pokemonFilteredData.data.id} {...pokemonFilteredData.data} />
               ))
             )
            }
            </FlexRowCentered>
          </Container>
        </main>
    )
}