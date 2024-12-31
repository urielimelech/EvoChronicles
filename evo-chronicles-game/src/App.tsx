import React, { useEffect, useState } from 'react';
import './App.css';
import { MainScreen } from './screens/main-screen';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { StoneAgeScreen } from './screens/stone-age-screen';


function App() {

  const level = useSelector((state: any) => state.level).level;
  const [screenState, setScreenState] = useState<React.ReactElement | null>(null)
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Evo Chronicles";
    setScreenState(<Route path='/' element={<MainScreen />} />)
  }, [])

  useEffect(() => {
  }, [screenState])

  useEffect(() => {
    switch (level) {
      case 0:
        navigate('/')
        break;
      case 1:
        navigate('/stone-age')
        break;
      default:
        break;
    }
  }, [level])



  return (
    <Routes>
      <Route path='/' element={<MainScreen />} />
      <Route path='/stone-age' element={<StoneAgeScreen />} />
    </Routes>
  );
}

export default App;
