import { CardData, CardDataWithWidgets } from '../types/card.types';
export declare class CardLoader {
    private layout;
    private config;
    private itemsInitialized;
    constructor(layout: any, config: {
        cards: CardData[];
    });
    getCards(): CardDataWithWidgets[];
    private addLayoutWidgets;
}
