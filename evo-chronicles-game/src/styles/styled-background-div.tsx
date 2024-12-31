import styled from 'styled-components';
import { colors } from '../assets/colors';

interface StyledBackgroundDivProps {
    background: string;
}

export const StyledBackgroundDiv = styled.div<StyledBackgroundDivProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
    background-image: ${props => `url(${props?.background})`};
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;