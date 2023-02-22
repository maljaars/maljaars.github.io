import './Intro.scss'

export const Intro = () => {
  return (
    <>
      <div className='intro'>
        <div className='intro__content'>
          <h1>Welkom</h1>
          <p>Welkom op onze benefiet veiling in het CSW in Middelburg.</p>
          <p>Wij zijn Annemieke en Ruud Maljaars uit Middelburg en in oktober 2023 gaan we 63 kilometer wandelen voor de christelijke hulporganisatie Compassion. Met de opbrengst bevrijden we kinderen uit extreme armoede. Door de plaatselijke kerk horen ze over Jezus en worden ze voorzien van eten, verzorging, medicijnen en onderwijs.</p>
          <p>
            <b>MELD JE AAN</b> met de rode aanmeldknop. Dat is voor ons handig in verband met de catering.
          </p>
          <p>De veiling vindt plaats op 11 maart 2023 om half 15u30 in het oude CSW gebouw aan de Sir Winston Churchilllaan 8. Ingang via de achteringang aan de Koos Vorrinkstraat. Inloop vanaf 15u15.</p>
          <p>
            Naast deze veilingstukken is er ook een kraam met leuke cadeautjes die te koop zijn.
          </p>
          <p>
            Compassion heeft de ANBI-status.
          </p>
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