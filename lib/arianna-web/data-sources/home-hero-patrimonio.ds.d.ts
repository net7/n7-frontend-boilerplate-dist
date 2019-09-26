import { DataSource } from '@n7-frontend/core';
export declare class AwHomeHeroPatrimonioDS extends DataSource {
    protected transform(data: any): {
        title: string;
        backgroundImage: string;
        image: string;
        text: string;
        button: {
            text: string;
            payload: string;
        };
    };
}
