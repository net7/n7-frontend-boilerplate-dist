import { DataSource } from '@n7-frontend/core';
export declare class AwHeroDS extends DataSource {
    currentInputValue: string;
    protected transform(data: any): {
        title: any;
        text: any;
        backgroundImage: any;
        button: {
            text: any;
            anchor: {
                payload: string;
            };
        };
        input: {
            placeholder: any;
            payload: string;
        };
        classes: any;
    };
}
