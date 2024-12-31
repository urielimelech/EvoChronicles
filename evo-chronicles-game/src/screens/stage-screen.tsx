import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundDiv } from "../components/background-div";
import { Stage, Task } from "../game-logic/stages";
import { stageUp } from "../reducers/stage-reducer";
import { RectButton } from "../components/rect-button";
import { gainXP } from "../reducers/experience-reducer";

interface StageScreenProps {
    stageDetails: Stage;
}

export const StageScreen: React.FC<StageScreenProps> = ({ stageDetails }) => {
    const dispatch = useDispatch();
    const exp = useSelector((state: any) => state.experience);

    useEffect(() => {
        return () => {
        }
    }, []);

    useEffect(() => {
        if (exp?.characterLevel >= stageDetails.maxLevel) {
            onStageUp();
        }
    }, [exp]);

    const onStageUp = (): void => {
        dispatch(stageUp());
    }

    const onDoTask = (task: Task): void => {
        dispatch(gainXP(task.xp));
    }

    const tasks = stageDetails.tasks.map((task, index) => {
        return (
            <RectButton
                key={index}
                onClick={() => onDoTask(task)}
                text={task.name}
                description={task.description}
                disabled={task.minLevel > exp?.characterLevel}
            />
        )
    })

    return (
        <BackgroundDiv background={stageDetails.background}>
            {tasks}
        </BackgroundDiv>
    )
}