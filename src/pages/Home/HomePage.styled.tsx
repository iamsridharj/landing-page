import { forDesktop } from "@botbrews/breakpoints";
import { HeaderTwo } from "@botbrews/typography";
import styled from "styled-components";

export const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    width: 100%;
    background: ${({ theme }) => {
        return `linear-gradient(-45deg, #8ecae6 0%, #8ecae6 27%, transparent 27%)`;
    }};
    
    ${forDesktop`
            flex-direction: row;
            height: 90vh;
        `
    }
`

export const HeroDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    ${forDesktop`
        flex-basis: calc(100% / 2);
        margin: 0.5em; /* Margin for spacing */
        padding: 2em;
        `
    }

`;

export const Description = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

  font-family: 'Playfair Display', serif;
  font-weight: 700; 
  font-size: 5rem;
  line-height: 1.2; 
  color: ${({ theme }) => {
        return theme.colors.raven.raven100
    }};
  text-align: center; 
  margin: 0.5em; 

`

export const SubDescription = styled(HeaderTwo)`
    text-align: center;
    color: ${({ theme }) => {
        return theme.colors.raven.raven50
    }}; 
`

export const HeroLogo = styled.div`
    flex-basis: calc(100% / 2);

    > img {
        width: 100%;
    }
`;

export const StyledExploreProductsRedirect = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0px;
    text-align: center;
    padding: 1rem;
    background-color: ${({ theme }) => {
        return theme.colors.accent
    }};
    color: white;
`

export const ExploreProductsBtnWrapper = styled.div`
    margin: 20px 0px;
`