import { forDesktop } from "@botbrews/breakpoints";
import { HeaderTwo } from "@botbrews/typography";
import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    width: 100%;
    
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

  font-family: 'Playfair Display', serif;
  font-weight: 700; 
  font-size: 5rem;
  line-height: 1.2; 
  color: ${({ theme }) => {
        return theme.colors.white
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

export const StyledDivider = styled.div`
    width: 100%;
    height: 1px;
    background: ${({ theme }) => {
        return theme.colors.raven.raven60
    }};;
    margin: 20px 0;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 3px;
        width: 50px;
        background: ${({ theme }) => {
        return theme.colors.raven.raven60
    }};;
    }
`;