import { Container } from './styles'
import logo from '../../assets/logo-voopter.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo Voopter" />
      </Link>
    </Container>
  )
}
