import React, { ReactNode } from "react";
import { StyledBackgroundDiv } from "../styles/styled-background-div";

interface BackgroundDivProps {
    children?: ReactNode;
    background: string;
}

export const BackgroundDiv: React.FC<BackgroundDivProps> = ({ children, background }) => {
    return (
        <StyledBackgroundDiv background={background} >
            {children}
        </StyledBackgroundDiv>
    )
}