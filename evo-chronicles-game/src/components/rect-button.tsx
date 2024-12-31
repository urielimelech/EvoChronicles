import React from "react";
import { StyledRectButton } from "../styles/styled-rect-button";

export const RectButton = ({ onClick, text }: { onClick: () => void, text: string }) => {
    return (
        <StyledRectButton onClick={onClick}>{text}</StyledRectButton>
    )
}