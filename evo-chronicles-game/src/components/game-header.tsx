import React from "react";
import { StyledHeader } from "../styles/styled-header";

export const GameHeader = ({ text }: { text: string }) => {
    return (
        <StyledHeader>
            {text}
        </StyledHeader>
    )
}