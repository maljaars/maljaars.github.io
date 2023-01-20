import { useEffect, useState } from 'react';
import { Afbeelding, Kavel } from '../Interfaces';
import { Modal } from '../Modal/Modal';
import './Kavels.scss'

type Props = {
  kavels: Kavel[],
};

export const Kavels = ({ kavels }: Props) => {

  const [modalContent, setModalContent] = useState<Element>();

  const [showModal, setShowModal] = useState(false);
  const handleKeyup = (e: KeyboardEvent) => e.keyCode === 27 && setShowModal(false);
  const toggleModal = (afbeelding: Afbeelding) => {

    const jsx = (
      <div
        onClick={() => setShowModal(false)}
        style={{
          backgroundImage: `url(/images/${afbeelding.path})`
        }}
        className='modal-image'
      >
      </div>
    );

    setModalContent(jsx as any);
    return setShowModal(!showModal);
  }

  useEffect(() => {
    if (showModal) window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  });


  return (
    <>
      <div className='kavels'>
        {kavels.map((kavel, kavelNr) => (
          <div className='kavel' key={kavelNr}>
            <div className='kavel__poster'>
              {kavel.afbeeldingen.filter((e, index) => index === 0).map((afbeelding) => (
                <div className='kavel__poster__frame' key={afbeelding.path} onClick={() => toggleModal(afbeelding)}>
                  <img className='kavel__poster__frame--image' alt={`${afbeelding.name}`} src={`/images/${afbeelding.path}`} />
                </div>
              ))}
            </div>
            <div className='kavel__content'>
              <h3>{kavel.name}</h3>
              <div dangerouslySetInnerHTML={{ __html: kavel.omschrijving }} />
              <div className='thumbs'>
                {kavel.afbeeldingen.filter((e, index) => index > 0).map((afbeelding) => (
                  <div className='thumbs__frame' key={afbeelding.path} onClick={() => toggleModal(afbeelding)}>
                    <img className='thumbs__frame--image' alt={`${afbeelding.name}`} src={`/images/${afbeelding.path}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && modalContent && <Modal>
        {modalContent as any}
      </Modal>}
    </>
  )

};