import { Observable } from 'rxjs';
import { ItemPreviewData } from '@n7-frontend/components';
declare type response = {
    results: ItemPreviewData[];
    totalCount: number;
};
declare const getCollection: ({ offset, limit }: {
    offset: any;
    limit: any;
}) => Observable<response>;
export default getCollection;
