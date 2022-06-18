import LogoImage from '../Images/pokemon-logo.png'
import { Container } from './Styled/Container.styled'
import { HeaderStyled, Logo } from './Styled/Header.styled'


export default function Header() {
    return (
        <HeaderStyled>
            <Container>
                <Logo src={LogoImage} alt="Pokemon logo" />
                <p>Welcome to Pokedex! </p>
                <p>Contains 151 original Pokemon and their details. You can search by name or number as well as sort the pokemons by using the sorting functionality.</p>
            </Container>
        </HeaderStyled>
    )
}