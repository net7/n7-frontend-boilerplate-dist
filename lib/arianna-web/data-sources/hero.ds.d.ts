import { DataSource } from '@n7-frontend/core';
export declare class AwHeroDS extends DataSource {
    protected transform(data: any): {
        title: any;
        text: any;
        backgroundImage: any;
        button: {
            text: any;
            payload: string;
        };
        input: {
            placeholder: any;
            payload: string;
        };
    };
}
