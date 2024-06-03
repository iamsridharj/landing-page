import styled from "styled-components";
import { forDesktop } from "@botbrews/breakpoints";

export const HeaderOne = styled.h1`
    font-weight: 600;
    font-size: 22px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 24px; 
    `}
`;

export const HeaderTwo = styled.h2`
    font-weight: 600;
    font-size: 22px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 24px; 
    `}
`;

export const Caption = styled.p`
    font-size: 1.125rem;
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 1.525rem; 
    `}
`;

export const CaptionSmall = styled.p`
    font-size: .725rem; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 1.20rem; 
    `}
`;

export const Label = styled.span`
    font-weight: 500;
    font-size: 12px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 14px; 
    `}
`;

export const BodyText = styled.span`
    font-weight: 400;
    font-size: 12px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 14px; 
    `}
`;

export const BodyTextBold = styled.span`
    font-weight: 600;
    font-size: 12px; 
    font-family: 'Inter', sans-serif;
    ${forDesktop`
        font-size: 14px; 
    `}
`;
