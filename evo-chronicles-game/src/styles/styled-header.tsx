import styled from "styled-components";
import { colors } from "../assets/colors";

export const StyledHeader = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    color: ${colors.textSecondary};
    font-size: 1.5em;
    font-family: 'Roboto', sans-serif;
`;