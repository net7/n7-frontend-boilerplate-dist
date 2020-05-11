declare const _default: {
    'slider-1': import("@n7-frontend/components").CarouselData;
    'collection-1': {
        header: {
            title: string;
            subtitle: string;
            button: {
                text: string;
                link: string;
            };
        };
        items: ({
            image: string;
            title: string;
            text: string;
            metadata: {
                classes: string;
                items: {
                    label: string;
                    value: string;
                }[];
            }[];
        } | {
            image: string;
            title: string;
            text: string;
            metadata?: undefined;
        })[];
    };
    'hero-1': {
        title: string;
        text: string;
        button: {
            title: string;
            text: string;
            anchor: {
                href: string;
                target: string;
            };
        };
        image: string;
    };
    'collection-2': {
        header: {
            title: string;
            subtitle: string;
            button: {
                text: string;
                link: string;
            };
        };
        items: {
            image: string;
            title: string;
            text: string;
        }[];
    };
};
export default _default;
