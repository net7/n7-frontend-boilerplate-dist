import { DataSource } from '@n7-frontend/core';
export declare class SmartPaginationDS extends DataSource {
    protected transform(data: any): {
        first: {
            classes: string;
            anchor: {
                payload: {
                    source: string;
                    page: any;
                };
                href?: undefined;
                queryParams?: undefined;
            } | {
                href: any;
                queryParams: any;
                payload?: undefined;
            } | {
                payload?: undefined;
                href?: undefined;
                queryParams?: undefined;
            };
        };
        prev: {
            classes: string;
            anchor: {
                payload: {
                    source: string;
                    page: any;
                };
                href?: undefined;
                queryParams?: undefined;
            } | {
                href: any;
                queryParams: any;
                payload?: undefined;
            } | {
                payload?: undefined;
                href?: undefined;
                queryParams?: undefined;
            };
        };
        next: {
            classes: string;
            anchor: {
                payload: {
                    source: string;
                    page: any;
                };
                href?: undefined;
                queryParams?: undefined;
            } | {
                href: any;
                queryParams: any;
                payload?: undefined;
            } | {
                payload?: undefined;
                href?: undefined;
                queryParams?: undefined;
            };
        };
        last: {
            classes: string;
            anchor: {
                payload: {
                    source: string;
                    page: any;
                };
                href?: undefined;
                queryParams?: undefined;
            } | {
                href: any;
                queryParams: any;
                payload?: undefined;
            } | {
                payload?: undefined;
                href?: undefined;
                queryParams?: undefined;
            };
        };
        links: any[];
        select: {
            label: string;
            options: any;
            payload: string;
        };
    };
    private paginationBuilder;
    private _getPaginationAnchor;
}
