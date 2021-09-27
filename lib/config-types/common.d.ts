import { FooterData, HeaderData } from '@n7-frontend/components';
export declare type ConfigCommonCommunication = {
    /** default provider id */
    defaultProvider: string;
    providers: {
        [providerId: string]: {
            /** api base url */
            baseUrl: string;
            /** api type: rest | apollo (graphql) */
            type?: 'rest' | 'apollo';
            /** request map: request id => api point */
            config?: {
                [requestId: string]: string;
            };
        };
    };
};
export declare type ConfigCommonFooter = FooterData;
export declare type ConfigCommonHeader = Partial<HeaderData>;
export declare type ConfigCommonLabels = {
    [key: string]: string;
};
