import React, { PropsWithChildren } from "react";

import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styled";


export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ ariaLabel, children, iconPosition, icon }) => {
    return (
        <StyledButton
            role="button"
            type="button"
            tabIndex={0}
            aria-label={ariaLabel || "btn"}
            $iconPosition={iconPosition}
        >
            {children}
            {icon && (icon)}
        </StyledButton>
    )
};
