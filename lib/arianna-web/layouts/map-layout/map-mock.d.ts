export declare const MAP_RESULTS: {
    items: {
        item: {
            id: string;
            label: string;
            icon: any;
            title: string;
            subTitle: any;
            image: string;
            text: string;
            relatedTypesOfEntity: {
                type: string;
                count: number;
            }[];
            breadcrumbs: {
                label: string;
                link: string;
            }[];
            fields: ({
                key: string;
                value: string;
                label?: undefined;
                fields?: undefined;
            } | {
                label: string;
                fields: {
                    key: string;
                    value: string;
                }[];
                key?: undefined;
                value?: undefined;
            })[];
        };
    }[];
};
