import { LayoutDataSource } from '@n7-frontend/core';
import { Observable } from 'rxjs';
export declare class MrStaticLayoutDS extends LayoutDataSource {
    private communication;
    RENDER_HTML: any;
    onInit(payload: any): void;
    pageRequest$(slug: string): Observable<any>;
    renderHTML(title: any, body: any): void;
}
