import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundDiv } from "../components/background-div";

export const StoneAgeScreen = () => {
    const background = useSelector((state: any) => state.background)?.background;
    const dispatch = useDispatch();

    return (
        <BackgroundDiv background={background}>

        </BackgroundDiv>
    )
}