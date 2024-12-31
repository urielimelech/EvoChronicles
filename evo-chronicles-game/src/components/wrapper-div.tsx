import React from "react";
import { StyledWrapper } from "../styles/styled-wrapper";

export const WrapperDiv = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}