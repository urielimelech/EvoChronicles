import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundDiv } from '../components/background-div';
import { mainScreenAction } from '../store/store';
import { Loading } from '../components/loading';


export const MainScreen = () => {

    const background = useSelector((state: any) => state.background);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mainScreenAction())
        return () => {
            console.log('MainScreen unmounted');
        }
    }, []);

    useEffect(() => {
    }, [background]);

    return (
        background !== '' ?
            <BackgroundDiv background={background?.background} /> : <Loading />
    );
}