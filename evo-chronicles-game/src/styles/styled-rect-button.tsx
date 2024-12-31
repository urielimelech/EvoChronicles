import styled from "styled-components";
import { colors } from "../assets/colors";

export const StyledRectButton = styled.button`
    padding: 0.5em 1em;
    background-color: ${props => (props.disabled ? colors.disabled : colors.primaryButton)};
    color: ${props => (props.disabled ? colors.textDisabled : colors.textPrimary)};
    font-size: 1.5em;
    border: none;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s;
    &:hover {
        background-color: ${colors.hover};
    }
    &:active {
        background-color: ${colors.active};
    }
    font-family: 'Roboto', sans-serif;
    border-radius: 0.5em;
`;