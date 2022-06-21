import { FlexColumn } from './Styled/Flex.styled'
import {StyledPokeCard}  from './Styled/PokeCard.styled'
import { useNavigate } from 'react-router-dom'

export default function PokeCard(props) {
    let pokeTypes = props.types
    const pokeTypeForEach = pokeTypes.map(pokeType => <li key={pokeType.type.name}>{pokeType.type.name}</li>)
    let navigate = useNavigate()
    return (
        <StyledPokeCard>
            <FlexColumn>
                <div onClick={() => {
                    navigate(`/pokemon/${props.name}`, {state: props})
                }} >
                   <figure>
                    <img src={props.sprites.other.dream_world.front_default} alt={props.name} />
                   </figure>
                
                    <span>#{String(props.id).padStart(3, '0')}</span>
                    <h4>{props.name}</h4>
                    <p>{props.url}</p>
                    <ul>
                    {pokeTypeForEach}
                    </ul>
                </div>
            </FlexColumn>
        </StyledPokeCard>
    )
}