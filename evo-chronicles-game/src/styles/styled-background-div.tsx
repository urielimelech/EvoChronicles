import styled from 'styled-components';

interface StyledBackgroundDivProps {
    background: string;
}

export const StyledBackgroundDiv = styled.div<StyledBackgroundDivProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    /* z-index: -1; */
    background-image: ${props => `url(${props?.background})`};
    background-size: cover;
    background-position: center;
    display: flex;
    `;
/* background-image: ${props => {
    console.log(props.background);
    return `url('require(${props.background})')`;
}
}; */
/* background-image: ${props => url(${props.('../assets/backgrounds/main screen background.jpg')})}; */
