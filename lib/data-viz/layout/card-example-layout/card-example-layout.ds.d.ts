import { LayoutDataSource } from '@n7-frontend/core';
import { CardData } from '../../types/card.types';
import { CardLoader } from '../../models/card-loader';
export declare class DvCardExampleLayoutDS extends LayoutDataSource {
    cardLoader: CardLoader;
    cards: CardData[];
    onInit(payload: any): void;
    onDestroy(): void;
}
