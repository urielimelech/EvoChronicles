import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mainScreenBackground } from '../assets/imports';
import { BackgroundDiv } from '../components/background-div';
import { GameHeader } from '../components/game-header';
import { Loading } from '../components/loading';
import { RectButton } from '../components/rect-button';
import { WrapperDiv } from '../components/wrapper-div';
import { startGame } from '../reducers/stage-reducer';

export const MainScreen = () => {

    const background = useSelector((state: any) => state.background)?.background;
    const stage = useSelector((state: any) => state.stage)?.stage;
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
        }
    }, []);

    useEffect(() => {
    }, [background]);

    useEffect(() => {
    }, [stage]);

    const onStartGame = (): void => {
        dispatch(startGame());
    }

    return (
        background !== '' ?
            <BackgroundDiv background={mainScreenBackground}>
                <WrapperDiv>
                    <GameHeader text='Evolution Chronicles' />
                    <RectButton onClick={onStartGame} text='Start' />
                </WrapperDiv>
            </BackgroundDiv>
            :
            <Loading />
    );
}