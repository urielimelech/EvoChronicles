import styled from "styled-components";
import { colors } from "../assets/colors";

export const StyledCircleButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: ${colors.primaryButton};
    color: ${colors.textPrimary};
    font-size: 1.5em;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${colors.hover};
    }
    &:active {
        background-color: ${colors.active};
    }
    font-family: 'Roboto', sans-serif;
`;