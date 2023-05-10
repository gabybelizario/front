import { Container, Profile  } from './styles';

export function Header() {
  return(
    <Container>
      <Profile>
        <img src="https://github.com/gabybelizario.png" alt="Foto dell'utente" />
        <div>
          <span>Benvenuto</span>
          <strong>Gabriela Belizario</strong>
        </div>
      </Profile>
    </Container>
  )
}