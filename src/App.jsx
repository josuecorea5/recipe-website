import { BrowserRouter, Link } from 'react-router-dom';
import { SiIfood } from 'react-icons/si'
import styled from 'styled-components';
import { Category } from './components/Category'
import { Search } from './components/Search';
import { Pages } from './pages/Pages'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <SiIfood />
          <Logo to={'/'}><p>Deliciousss</p></Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  p{
    margin: 0 1rem;
    font-family: 'Lobster Two', cursive
  }
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;

export default App
