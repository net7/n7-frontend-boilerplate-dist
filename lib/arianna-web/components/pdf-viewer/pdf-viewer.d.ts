export declare type PdfViewerData = {
    items: {
        label: string;
        url: string;
        selected: boolean;
    }[];
    next: number | null;
    prev: number | null;
    currentUrl: string;
    classes?: string;
};
export declare class PdfViewerComponent {
    data: PdfViewerData;
    emit: (type: string, payload?: any) => void;
    onClick(payload: any): void;
    onLoaded(): void;
}
