import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  HeaderContainer,
  Header,
  Nav,
  NavList,
  Link,
} from './SharedLayout.styled';
import Loader from 'components/loader/Loader';

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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
