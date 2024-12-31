import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundDiv } from "../components/background-div";
import { levelUp } from "../reducers/level-reducer";

export const LevelScreen = () => {
    const background = useSelector((state: any) => state.background)?.background;
    const dispatch = useDispatch();

    const onLevelUp = (): void => {
        console.log('Level up');
        dispatch(levelUp());
    }

    return (
        <BackgroundDiv background={background}>

        </BackgroundDiv>
    )
}