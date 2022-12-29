import { url } from 'inspector';
import React from 'react';
import './App.css';

interface Afbeelding {
  name: string,
  path: string,
}

interface Kavel {
  nummer: string,
  name: string,
  omschrijving: string,
  afbeeldingen: Afbeelding[],
};

const kavels: Kavel[] = [
  {
    nummer: '01',
    name: 'Ritje in Ferrari',
    omschrijving: 'Offroaden voor gevorderden!',
    afbeeldingen: [
      {
        name: 'Ferrari',
        path: 'auto0.jpg',
      }, {
        name: 'Ferrari binnen',
        path: 'auto1.jpg',
      }, {
        name: 'Ferrari nog een',
        path: 'auto2.jpg',
      },
    ]
  },
  {
    nummer: '02',
    name: 'Ritje in mijn Ford',
    omschrijving: '<p>Geheel verzorgt<p>Inclusief: <ul><li>Eindschoonmaak</li><li>Beginschoonmaak</li></ul>',
    afbeeldingen: [
      {
        name: 'Ford',
        path: 'ford.jpeg',
      }
    ]
  },
];



function App() {
  return (
    <div className="App" style={{maxWidth: '100vw'}}>
      {kavels.map((kavel) => (
        <div style={{display: 'flex', flexDirection: 'column'}} key={kavel.nummer}>
          <h2>{kavel.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: kavel.omschrijving }}>{}</div>
          <div style={{display: 'flex'}}>
            {kavel.afbeeldingen.map((afbeelding) => (
                <div style={{backgroundImage: `url('/images/${afbeelding.path}')`, width: '50px', height: '80px'}}></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
