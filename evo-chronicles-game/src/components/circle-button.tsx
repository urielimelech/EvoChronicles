import React from "react";
import { StyledCircleButton } from "../styles/styled-circle-button";

export const CircleButton = ({ onClick, text }: { onClick: () => void, text: string }) => {
    return (
        <StyledCircleButton onClick={onClick}>{text}</StyledCircleButton>
    )
}