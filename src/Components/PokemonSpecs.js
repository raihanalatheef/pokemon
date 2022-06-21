import { FlexColumn } from "./Styled/Flex.styled";
import { PokemonSpecsStyled } from './Styled/PokemonSpecs.styled'

export default function PokemonSpecs(props) {
    return (
        <PokemonSpecsStyled>
            <FlexColumn>
                <h3>{props.specs}</h3>      
                <p>{props.value}</p>
            </FlexColumn>
        </PokemonSpecsStyled>
    )
}