import { Colors } from "src/design-system/foundation/colors/colors.types";

const white = "#FFFFFF";
const black = "#000000";

const primary = "#FFFFFF"
const secondary = "#000000"
const accent = "#8ecae6"
const accentDark = "#639eba"

const raven = {
    raven100: "#1A1A1A",
    raven80: "#545878",
    raven60: "#C3C5D5",
    raven50: "#c0c0c0",
    raven40: "#E6E6E6",
    raven20: "#F0F0F5",
};

const success = {
    success100: '#42A675',
    success50: '#A0D3BA',
    success10: '#ECF6F1',
};

const danger = {
    danger100: '#F24F2B',
    danger50: '#F49C9C',
    danger10: '#FDEBEB',
};

export const colors: Colors = {
    raven,
    success,
    danger,
    white,
    black,
    primary,
    secondary,
    accent,
    accentDark,
    transparent: 'transparent',
    current: 'currentColor',
};