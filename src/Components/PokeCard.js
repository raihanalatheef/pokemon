import {StyledPokeCard}  from './Styled/PokeCard.styled'


export default function PokeCard(props) {
    let pokeTypes = props.types
    return (
        <StyledPokeCard>
            <img src={props.sprites.front_default} alt={props.name} />
            <span>#{props.id}</span>
            <h4>{props.name}</h4>
            <p>{props.url}</p>
            {pokeTypes.map((pokeType) => `<li>${pokeType.type.name}</li>`)}
        </StyledPokeCard>
    )
}