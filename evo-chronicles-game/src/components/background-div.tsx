import React from "react";
import { StyledBackgroundDiv } from "../styles/styled-background-div";

export const BackgroundDiv = ({ background }: { background: string }) => {
    console.log({background});
    return (
        <StyledBackgroundDiv background={background} />
    )
}