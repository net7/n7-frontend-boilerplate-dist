import { DataSource } from '@n7-frontend/core';
import { CardData } from '../types/card.types';
export declare class CardDS extends DataSource {
    protected transform(data: CardData): CardData;
}
