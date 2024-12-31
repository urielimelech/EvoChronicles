import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundDiv } from '../components/background-div';
import { GameHeader } from '../components/game-header';
import { Loading } from '../components/loading';
import { RectButton } from '../components/rect-button';
import { WrapperDiv } from '../components/wrapper-div';
import { startGame } from '../reducers/level-reducer';
import { mainScreenAction, stoneAgeScreenAction } from '../reducers/screen-reducer';

export const MainScreen = () => {

    const background = useSelector((state: any) => state.background)?.background;
    const level = useSelector((state: any) => state.level)?.level;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mainScreenAction())
        return () => {
        }
    }, []);

    useEffect(() => {
    }, [background]);

    useEffect(() => {
    }, [level]);

    const onStartGame = (): void => {
        console.log('Start game');
        dispatch(startGame());
        dispatch(stoneAgeScreenAction())
    }

    return (
        background !== '' ?
            <BackgroundDiv background={background}>
                <WrapperDiv>
                    <GameHeader text='Evolution Chronicles' />
                    <RectButton onClick={onStartGame} text='Start' />
                </WrapperDiv>
            </BackgroundDiv>
            :
            <Loading />
    );
}