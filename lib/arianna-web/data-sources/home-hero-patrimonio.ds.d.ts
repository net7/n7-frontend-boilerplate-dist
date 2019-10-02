import { DataSource } from '@n7-frontend/core';
export declare class AwHomeHeroPatrimonioDS extends DataSource {
    protected transform(data: any): {
        title: any;
        backgroundImage: any;
        image: any;
        text: any;
        button: {
            text: any;
            payload: string;
        };
    };
}
