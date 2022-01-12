import { CardDataWithWidgets } from '../../types/card.types';
export declare class CardComponent {
    data: CardDataWithWidgets;
    emit: (type: string, payload: any) => void;
}
