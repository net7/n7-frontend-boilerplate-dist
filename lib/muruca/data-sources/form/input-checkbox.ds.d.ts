import { DataSource } from '@n7-frontend/core';
import { InputCheckboxData } from '@n7-frontend/components';
import { MrFormInputState, MrInputDataSource } from '../../interfaces/form.interface';
declare type MrInputCheckboxValue = string[];
export declare class MrInputCheckboxDS extends DataSource implements MrInputDataSource<MrInputCheckboxValue> {
    id: string;
    state: MrFormInputState<MrInputCheckboxValue>;
    protected transform(data: InputCheckboxData): InputCheckboxData;
    getState: () => MrFormInputState<MrInputCheckboxValue>;
    setState(newState: MrFormInputState<MrInputCheckboxValue>): void;
    clear(): void;
    refresh(): void;
    toggleValue({ inputPayload, value: isChecked }: {
        inputPayload: any;
        value: any;
    }): void;
    private getCheckboxes;
}
export {};
