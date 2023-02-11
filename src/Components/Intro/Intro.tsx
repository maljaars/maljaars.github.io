import './Intro.scss'

export const Intro = () => {
  return (
    <>
      <div className='intro'>
        <div className='intro__content'>
          <h1>Welkom</h1>
          <p>Welkom op de benefiet veiling in het CSW in Middelburg.</p>
          <p>Wij zijn Annemieke en Ruud Maljaars uit Middelburg en in oktober 2023 gaan we 63 kilometer wandelen voor een goed doel. Met de opbrengst van deze benefiet veiling bevrijden wij kinderen uit extreme armoede en geven zo een hoopvolle toekomst door ze te voorzien van eten, verzorging, medicijnen samen met hun plaatselijke kerk. </p>
          <p>Samen met Compassion bezoeken we twee dorpen in Ghana o.a. Kintampo. Hier zullen we onze sponsorkinderen Christabel (2 jaar) en Fantinvel (4 jaar) ontmoeten. </p>
          <p>Wil jij ook een kindje sponsoren? Dat kan voor €33,- per maand. We helpen je graag verder!</p>
          <p>De veiling vind plaats op 11 maart 2023 vanaf half 15.30 in het oude CSW gebouw aan de Sir Winston Churchilllaan 8.</p>
          <p>Naast deze veilingstukken is ook voor een kraam met wat stukken, die mensen gewoon kunnen kopen.</p>
        </div>
        <div className='intro__graphic'>
          <img className='intro__graphic--image' src="/images/intro.jpg" alt="Foto van de lopers" />
        </div>
      </div>
      <div className='intro'>
        <div className='intro__content'>
        Aanmelden voor de veiling kan via de onderstaande button
          <div className='buttons'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfdNKv85vB6Q97jyRmzEQoGh63vIcHRHdaDQzZ9ZvrhamBRnQ/viewform' target='_blank' className='button'>Aanmelden</a>
          </div>
          Bekijk ook de Muskathlon pagina's van Ruud en Annemieke.
          <div className='buttons'>
            <a href='https://www.muskathlon.nl/deelnemers/ghana-2023-annemieke-en-ruud-maljaars' target='_blank' className='button'>Annemieke</a>
            <a href='https://www.muskathlon.nl/deelnemers/ghana-2023-ruud-en-annemieke-maljaars' target='_blank' className='button'>Ruud </a>
          </div>
        </div>
      </div>
    </>
  )

};