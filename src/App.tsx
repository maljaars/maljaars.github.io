import './App.scss';
import "@fontsource/josefin-sans";
import "@fontsource/epilogue";
import { Kavels } from './Components/Kavels/Kavels';
import { Intro } from './Components/Intro/Intro';
import { Present } from './Components/Present/Present';
import { useEffect, useState } from 'react';
import { Kavel } from './Components/Interfaces';

function App() {
  const [kavels, setKavels] = useState<Kavel[]>([]);
  const [isPresenting, setIsPresenting] = useState<boolean>(false);

  const getKavelData = async () => {
    const response = await fetch(
      "kavels.json"
    ).then((response) => response.json());

    setKavels(response);
  }

  useEffect(() => {
    getKavelData();
  }, [])

  const handleKeyup = (e: KeyboardEvent) => e.ctrlKey && e.key === 'x' && setIsPresenting(!isPresenting);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  });

  if (isPresenting) {
    return <Present kavels={kavels} isActive={isPresenting} />
  }

  return (
    <>
      <div className='App'>
        <div className='header'>
          <img src='/images/musk_logo.svg' alt='Muskathlon logo' />
        </div>
        <div className='wrapper'>
          <Intro></Intro>
          <h2>Kavels</h2>
          <Kavels kavels={kavels} />
        </div>
        <div className='footer'>
          <div className='footer__copyright'>
            Copyright ©{new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
