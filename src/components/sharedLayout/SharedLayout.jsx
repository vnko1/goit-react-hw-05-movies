import { Outlet } from 'react-router-dom';
import {
  Container,
  HeaderContainer,
  Header,
  Nav,
  NavList,
  Link,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Nav>
            <NavList>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </NavList>
          </Nav>
        </HeaderContainer>
      </Header>
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
