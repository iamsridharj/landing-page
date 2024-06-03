
import { HeaderOne, BodyTextBold } from '@botbrews/typography';
import styled from 'styled-components';


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 2rem;
  backdrop-filter: blur(50px);
  background-color: transparent;
  position: fixed;
    width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled(HeaderOne)`
  margin: 0;
  color: ${({ theme }) => {
    return theme.colors.white
  }};

  & > span {
    color: ${({ theme }) => {
    return theme.colors.accentDark
  }}; 
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NavItem = styled(BodyTextBold)`
  a {
    text-decoration: none;
    color: ${({ theme }) => {
    return theme.colors.white
  }};

    &:hover {
      text-decoration: underline;
    }
  }
`;
