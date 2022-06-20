import { FlexColumn } from './Styled/Flex.styled'
import {StyledPokeCard}  from './Styled/PokeCard.styled'


export default function PokeCard(props) {
    let pokeTypes = props.types
    const pokeTypeForEach = pokeTypes.map(pokeType => <li key={pokeType.type.name}>{pokeType.type.name}</li>)
    return (
        <StyledPokeCard>
        <FlexColumn>
               <figure>
                <img src={props.sprites.front_default} alt={props.name} />
               </figure>
            
                <span>#{props.id}</span>
                <h4>{props.name}</h4>
                <p>{props.url}</p>
                <ul>
                {pokeTypeForEach}
                </ul>
            </FlexColumn>
        </StyledPokeCard>
    )
}