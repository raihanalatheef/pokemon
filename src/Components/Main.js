import { Container } from "./Styled/Container.styled"
import { FlexRowCentered } from "./Styled/Flex.styled"
import React, { useState, useEffect } from "react"
import PokeCard from './PokeCard'
import axios from "axios";

export default function Main() {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemon] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
      setLoading(true)
      const res = getPokemonDetails(pokemons)
      if(res) {
      setLoading(false)
      }
    },[])
    
    async function getPokemonDetails() {
       let pokeUrls = [];
       for(let i=1; i<=151;i++) {
        pokeUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
       }
       const response = await axios.all(pokeUrls.map((pokeUrl) => axios.get(pokeUrl)))
       if (response) {
        setPokemon(response)
        return true;
       }
       return false;  
    }
  
    return (
        <main>
          <div>
            <Container>
              <form>
                <input type="text" id="searchInput"  placeholder="Search by Name or number" onChange={(e)=> setSearchTerm(e.target.value)} />
              </form>
            </Container>
          </div>
          <Container>
            <FlexRowCentered gap="10px">
            {loading? (<h4>Loading./..</h4>): (pokemons.filter(pokemon=>pokemon.data.name.toLowerCase().includes(searchTerm.toLowerCase()) || pokemon.data.id.toString().includes((searchTerm))).map(pokemonFilteredData => (
                    <PokeCard key={pokemonFilteredData.data.id} {...pokemonFilteredData.data} />
             )))
            }
            </FlexRowCentered>
          </Container>
        </main>
    )
}