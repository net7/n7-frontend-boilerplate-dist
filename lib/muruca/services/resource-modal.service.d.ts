import { Subject, Observable } from 'rxjs';
import { ConfigurationService } from '../../common/services/configuration.service';
import { CommunicationService } from '../../common/services/communication.service';
export declare type ModalStatus = 'LOADING' | 'ERROR' | 'SUCCESS' | 'EMPTY' | 'IDLE';
export declare type ModalState = {
    status: ModalStatus;
    response?: any;
    config?: any;
};
export declare class MrResourceModalService {
    private configuration;
    private communication;
    state$: Subject<ModalState>;
    constructor(configuration: ConfigurationService, communication: CommunicationService);
    open(resourceId: string | number, configId: string): void;
    close(): void;
    pageRequest$(id: any, config: any, onError: (err: any) => void): Observable<any>;
}
