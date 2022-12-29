export interface Afbeelding {
    name: string,
    path: string,
}

export interface Kavel {
    nummer: string,
    name: string,
    omschrijving: string,
    afbeeldingen: Afbeelding[],
};

