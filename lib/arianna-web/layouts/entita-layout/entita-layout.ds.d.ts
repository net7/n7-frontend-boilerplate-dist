import { LayoutDataSource } from '@n7-frontend/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EntitaLayoutResponse } from './entita-layout.types';
export declare class AwEntitaLayoutDS extends LayoutDataSource {
    protected configuration: any;
    protected mainState: any;
    protected router: Router;
    protected titleService: any;
    protected route: ActivatedRoute;
    options: any;
    pageTitle: string;
    hasMetadataFields: boolean;
    myResponse: EntitaLayoutResponse;
    selectedTab: string;
    navHeader: any;
    currentId: string;
    currentSlug: string;
    currentPage: number;
    pageSize: number;
    bubblesSize: number;
    bubblesEnabled: boolean;
    private communication;
    fallbackText: string;
    loading: boolean;
    onInit({ configuration, mainState, router, route, options, titleService, communication, }: {
        configuration: any;
        mainState: any;
        router: any;
        route: any;
        options: any;
        titleService: any;
        communication: any;
    }): void;
    singleTabCheck(): void;
    updateComponent: (id: any, data: any, options?: any) => void;
    /**
     * Updates the pagination component
     */
    drawPagination: (totalItems: any, pageSize: any) => void;
    /**
     * Updates the selected tab on tab change
     */
    handlePageNavigation: () => void;
    handleNavUpdate: (tab: any) => void;
    updateWidgets(data: any): void;
    /**
     * Given a page number and a list size, returns the data
     * for a single page of content.
     *
     * @param pageNumber Page number to load
     * @param pageSize How many items need to be loaded
     */
    getEntityDetailsPage(id: any, pageNumber: number, pageSize: number): Observable<any>;
    loadItem(id: any, slug: any, tab: any): Observable<any>;
    loadContent(res: any): void;
    private _getPaginationURL;
    getNavBasePath(): string;
    getItemCount(): number;
    getFields(response: any): {
        key: any;
        value: any;
        order: any;
        label: string;
    }[];
    private getLinkedObjectItems;
    /**
     * Calculates the total amount of pages
     *
     * @param items the number of records in the database
     * @param size the number of items shown on a page
     * @returns the total number of pages
     */
    private getPageCount;
}
