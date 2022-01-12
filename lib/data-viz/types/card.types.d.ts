import { IDataSource } from '@n7-frontend/core';
import { CardItemTypes } from './card-item.types';
export declare type CardTitle = {
    text: string;
    classes?: string;
};
export declare type CardActionList = {
    header: {
        icon: {
            open: string;
            close: string;
        };
        label?: string;
    };
    items: CardActionButton[];
    isExpanded?: boolean;
};
export declare type CardActionButton = {
    label: string;
    payload: any;
    icon?: string;
    classes?: string;
};
export declare type CardAction = CardActionButton | CardActionList;
export declare type CardSection = {
    items: CardItemTypes[];
    columns?: number;
    classes?: string;
};
export interface CardWidgets {
    [id: string]: {
        ds: IDataSource;
        emit: (type: string, payload?: any) => void;
    };
}
export interface CardData {
    header?: {
        sections: CardSection[];
    };
    content: {
        sections: CardSection[];
    };
    footer?: {
        sections: CardSection[];
    };
    classes?: string;
}
export interface CardDataWithWidgets extends CardData {
    widgets: CardWidgets;
}
