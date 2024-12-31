import React, { useEffect, useState } from 'react';
import './App.css';
import { MainScreen } from './screens/main-screen';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Stage, Stages } from './game-logic/stages';
import { StageScreen } from './screens/stage-screen';


function App() {

  const stage = useSelector((state: any) => state.stage)?.stage;
  const [stageState, setStageState] = useState<Stage | null>(null)
  const [path, setPath] = useState<string>('')
  const navigate = useNavigate();

  const stages = Stages
  const stageKeys = Array.from(stages.keys())

  useEffect(() => {
    document.title = "Evo Chronicles";
  }, [])

  useEffect(() => {
    if (typeof (stage) === 'number' && stage >= 0 && stage < stageKeys.length) {
      setPath(stageKeys[stage])
      const currentStage = stages.get(stageKeys[stage])
      if (currentStage?.id && currentStage?.id !== stageState?.id)
        setStageState(currentStage)
    }
  }, [stage])

  useEffect(() => {
    navigate(`/${path}`)
  }, [path])

  useEffect(() => {
    if (stage === null) {
      setStageState(null)
    }
  }, [stageState])

  return (
    <Routes>
      <Route path={`/`} element={<MainScreen />} />
      {stageState && <Route path={`/${path}`} element={<StageScreen stageDetails={stageState} />} />}
    </Routes>
  );
}

export default App;
