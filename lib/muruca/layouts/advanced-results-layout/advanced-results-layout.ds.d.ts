import { LayoutDataSource } from '@n7-frontend/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../../../common/services/configuration.service';
import { CommunicationService } from '../../../common/services/communication.service';
import { MainStateService } from '../../../common/services/main-state.service';
export declare class MrAdvancedResultsLayoutDS extends LayoutDataSource {
    protected configuration: ConfigurationService;
    protected communication: CommunicationService;
    protected mainState: MainStateService;
    protected configId: string;
    pageConfig: any;
    onInit(payload: any): void;
    updateSearchTags(params: any): void;
    request$(params: any, onError: any): Observable<any>;
    handleResponse(response: any): void;
    protected updateHeadTitle(): void;
    private addTranslations;
    protected getPaginationParams(response: any): {
        totalPages: number;
        currentPage: number;
        pageLimit: any;
        sizes: {
            label: string;
            list: any;
            active: any;
        };
    };
}
