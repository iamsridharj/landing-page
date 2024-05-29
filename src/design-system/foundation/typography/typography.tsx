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
