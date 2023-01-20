import { useEffect, useState } from 'react';
import { Kavel } from '../Interfaces';
import './Present.scss';

type Props = {
    kavels: Kavel[],
    isActive: boolean,
};

export const Present = ({ kavels, isActive }: Props) => {

    const [kavel, setCurrentKavel] = useState<Kavel>(kavels[0]);

    const handleKeyup = (e: KeyboardEvent) => {
        const index = kavels.indexOf(kavel);

        if (e.key === 'ArrowRight' && index < kavels.length - 1) {
            setCurrentKavel(kavels[index + 1])
        } else if (e.key === 'ArrowLeft' && index > 0) {
            setCurrentKavel(kavels[index - 1])
        }
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
        return () => window.removeEventListener('keyup', handleKeyup);
    });

    if (!isActive) {
        return (<></>)
    }

    let bgImg = kavel.afbeeldingen.filter((e, index) => index > 0)[0];

    if (bgImg === undefined) {
        bgImg = kavel.afbeeldingen.filter((e, index) => index === 0)[0];
    }

    let bgStyling;
    if (bgImg !== undefined) {
        bgStyling = { backgroundImage: `url("/images/${bgImg.path}")` };
    } else {
        bgStyling = { backgroundImage: 'none' };
    }

    return (
        <div className='present-container'>
            <div className='background' style={bgStyling}></div>
            <div className='present'>
                <div className='kavel'>
                    <div className='kavel__poster'>
                        {kavel.afbeeldingen.filter((e, index) => index === 0).map((afbeelding) => (
                            <div className='kavel__poster__frame' key={afbeelding.path}>
                                <img
                                    className='kavel__poster__frame--image'
                                    alt={`${afbeelding.name}`}
                                    src={`/images/${afbeelding.path}`}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='kavel__content'>
                        <h3>{kavel.nummer} - {kavel.name}</h3>
                        <div dangerouslySetInnerHTML={{ __html: kavel.omschrijving }} />
                        <div className='thumbs'>
                            {kavel.afbeeldingen.filter((e, index) => index > 0).map((afbeelding) => (
                                    <img className='img'
                                        key={afbeelding.path}
                                        alt={`${afbeelding.name}`}
                                        src={`/images/${afbeelding.path}`}
                                    />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
