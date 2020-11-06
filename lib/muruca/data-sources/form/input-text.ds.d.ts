import { DataSource } from '@n7-frontend/core';
import { InputTextData } from '@n7-frontend/components';
import { MrFormInputState, MrInputDataSource } from '../../interfaces/form.interface';
export declare type MrInputTextValue = string | null;
export declare class MrInputTextDS extends DataSource implements MrInputDataSource<MrInputTextValue> {
    id: string;
    state: MrFormInputState<MrInputTextValue>;
    protected transform(data: InputTextData): InputTextData;
    getState: () => MrFormInputState<string>;
    setState(newState: MrFormInputState<MrInputTextValue>): void;
    clear(): void;
    refresh(): void;
}
