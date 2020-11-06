import { Subject, ReplaySubject } from 'rxjs';
import { MrChangedParams, MrInputDataSource, MrFormConfig } from '../interfaces/form.interface';
export declare class MrFormModel {
    config: MrFormConfig;
    loaded$: ReplaySubject<boolean>;
    inputs: {
        [id: string]: {
            ds: any;
            eh: any;
            emit: (t: string, p: any) => Function;
        };
    };
    private inputTypes;
    changed$: Subject<MrChangedParams>;
    init(config: MrFormConfig): void;
    getInput: (id: string) => MrInputDataSource<any>;
    getInputs: () => {
        [id: string]: MrInputDataSource<any>;
    };
    getState(): {};
    addInputType(type: string, ds: any, eh: any): void;
    private initInputs;
}
