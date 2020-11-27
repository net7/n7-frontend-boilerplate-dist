import { DataSource } from '@n7-frontend/core';
import { SearchPageDescriptionData } from '../../components/search-page-description/search-page-description';
export declare class MrSearchPageDescriptionDS extends DataSource {
    protected transform(data: any): SearchPageDescriptionData;
}
