import { ChartResponseSeries } from '../../types/response.types';
declare const _default: {
    getContainerId: (id: string) => string;
    getSeries: (series: ChartResponseSeries[]) => ApexAxisChartSeries;
    getSeriesMetadata: (series: ChartResponseSeries[]) => object[];
};
export default _default;
