import { DataSource } from '@n7-frontend/core';
export declare class AwHeroDS extends DataSource {
    protected transform(data: any): {
        title: string;
        text: string;
        button: {
            text: string;
            payload: string;
        };
        backgroundImage: string;
        input: {
            placeholder: string;
            payload: string;
        };
    };
}
