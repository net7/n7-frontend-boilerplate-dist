import { DataSource } from '@n7-frontend/core';
import { InputSelectData } from '@n7-frontend/components';
import { MrFormInputState, MrInputDataSource } from '../../interfaces/form.interface';
declare type MrInputSelectValue = string | null;
export declare class MrInputSelectDS extends DataSource implements MrInputDataSource<MrInputSelectValue> {
    id: string;
    state: MrFormInputState<MrInputSelectValue>;
    protected transform(data: InputSelectData): InputSelectData;
    getState: () => MrFormInputState<string>;
    setState(newState: MrFormInputState<MrInputSelectValue>): void;
    clear(): void;
    refresh(): void;
    private getOptions;
}
export {};
