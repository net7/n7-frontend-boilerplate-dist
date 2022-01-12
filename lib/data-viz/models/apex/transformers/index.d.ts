import { ChartData } from '@n7-frontend/components';
import { ChartResponseData } from '../../../types/response.types';
declare const transformers: {
    [id: string]: {
        run: (id: string, data: ChartResponseData, options?: any) => ChartData;
    };
};
export default transformers;
