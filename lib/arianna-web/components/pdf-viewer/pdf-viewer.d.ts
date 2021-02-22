export declare type PdfViewerData = {
    items: {
        label: string;
        url: string;
        selected: boolean;
    }[];
    next: number | null;
    prev: number | null;
    currentUrl: string;
    libOptions: {
        showToolbar: boolean;
        showSidebarButton: boolean;
        showFindButton: boolean;
        showPagingButtons: boolean;
        showZoomButtons: boolean;
        showPresentationModeButton: boolean;
        showOpenFileButton: boolean;
        showPrintButton: boolean;
        showDownloadButton: boolean;
        showBookmarkButton: boolean;
        showSecondaryToolbarButton: boolean;
        showRotateButton: boolean;
        showHandToolButton: boolean;
        showScrollingButton: boolean;
        showSpreadButton: boolean;
        showPropertiesButton: boolean;
    };
    classes?: string;
};
export declare class PdfViewerComponent {
    data: PdfViewerData;
    emit: (type: string, payload?: any) => void;
    onClick(payload: any): void;
    onLoaded(): void;
}
