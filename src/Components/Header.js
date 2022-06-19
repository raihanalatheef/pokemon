import LogoImage from '../Images/pokemon-logo.png'
import { Container, ContainerSmall } from './Styled/Container.styled'
import { HeaderStyled, Logo } from './Styled/Header.styled'


export default function Header() {
    return (
        <HeaderStyled>
            <Container>
                <Logo src={LogoImage} alt="Pokemon logo" />
            </Container>
        </HeaderStyled>
    )
}