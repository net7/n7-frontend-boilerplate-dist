export declare type ChartResponseData = {
    categories: string[];
    series: ChartResponseSeries[];
};
export declare type ChartResponseSeries = {
    id: string;
    name: string;
    data: (number | ChartResponseSeriesData)[];
};
export declare type ChartResponseSeriesData = {
    value: number;
    metadata?: object;
};
