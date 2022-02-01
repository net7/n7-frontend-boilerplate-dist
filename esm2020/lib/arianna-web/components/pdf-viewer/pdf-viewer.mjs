//---------------------------
// PdfViewer.ts
//---------------------------
import { Component, Input } from '@angular/core';
import { isNull } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@n7-frontend/components";
import * as i2 from "ngx-extended-pdf-viewer";
import * as i3 from "@angular/common";
export class PdfViewerComponent {
    onClick(payload) {
        if (!this.emit || isNull(payload)) {
            return;
        }
        this.emit('click', payload);
    }
    onLoaded() {
        this.emit('loaded');
    }
}
PdfViewerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: PdfViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfViewerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: PdfViewerComponent, selector: "aw-pdf-viewer", inputs: { data: "data", emit: "emit" }, ngImport: i0, template: "<div *ngIf=\"data\" class=\"aw-pdf-viewer {{ data.classes || '' }}\">\n    <div class=\"aw-pdf-viewer__loader\">\n        <n7-loader></n7-loader>\n    </div>\n    \n    <ngx-extended-pdf-viewer\n        [src]=\"data.currentUrl\"\n        [height]=\"'90vh'\"\n        [useBrowserLocale]=\"true\"\n        [textLayer]=\"true\"\n        [showToolbar]=\"data.libOptions.showToolbar\"\n        [showSidebarButton]=\"data.libOptions.showSidebarButton\"\n        [showFindButton]=\"data.libOptions.showFindButton\"\n        [showPagingButtons]=\"data.libOptions.showPagingButtons\"\n        [showZoomButtons]=\"data.libOptions.showZoomButtons\"\n        [showPresentationModeButton]=\"data.libOptions.showPresentationModeButton\"\n        [showOpenFileButton]=\"data.libOptions.showOpenFileButton\"\n        [showPrintButton]=\"data.libOptions.showPrintButton\"\n        [showDownloadButton]=\"data.libOptions.showDownloadButton\"\n        [showBookmarkButton]=\"data.libOptions.showBookmarkButton\"\n        [showSecondaryToolbarButton]=\"data.libOptions.showSecondaryToolbarButton\"\n        [showRotateButton]=\"data.libOptions.showRotateButton\"\n        [showHandToolButton]=\"data.libOptions.showHandToolButton\"\n        [showScrollingButton]=\"data.libOptions.showScrollingButton\"\n        [showSpreadButton]=\"data.libOptions.showSpreadButton\"\n        [showPropertiesButton]=\"data.libOptions.showPropertiesButton\"\n        (pdfLoaded)=\"onLoaded()\"\n        (pdfLoadingFailed)=\"onLoaded()\">\n    </ngx-extended-pdf-viewer>\n    \n    <div *ngIf=\"data.items.length > 1\" class=\"aw-pdf-viewer__navigation\">\n        <div class=\"aw-pdf-viewer__navigation-tools\">\n            <a class=\"aw-pdf-viewer__navigation-prev {{ (!data.prev && data.prev !== 0) ? 'is-disabled' : '' }}\" \n            (click)=\"onClick(data.prev)\">\n                <span class=\"n7-icon-angle-left\"></span>\n            </a>\n            <div class=\"aw-pdf-viewer__navigation-select\">\n                <p class=\"aw-pdf-viewer__navigation-select-text\">Scorri i documenti PDF</p>\n                <select (change)=\"onClick(+$event.target.value)\">\n                    <option *ngFor=\"let item of data.items; let $i = index\" [value]=\"$i\"\n                    [selected]=\"item.selected\">{{ item.label }}</option>\n                </select>\n            </div>\n            <a class=\"aw-pdf-viewer__navigation-next {{ !data.next ? 'is-disabled' : '' }}\" \n            (click)=\"onClick(data.next)\">\n                <span class=\"n7-icon-angle-right\"></span>\n            </a>\n        </div>\n    </div>\n</div>", components: [{ type: i1.LoaderComponent, selector: "n7-loader", inputs: ["data"] }, { type: i2.NgxExtendedPdfViewerComponent, selector: "ngx-extended-pdf-viewer", inputs: ["customFindbarInputArea", "customToolbar", "customFindbar", "customFindbarButtons", "customSecondaryToolbar", "customSidebar", "customThumbnail", "customFreeFloatingBar", "showFreeFloatingBar", "enableDragAndDrop", "formData", "pageViewMode", "scrollMode", "authorization", "httpHeaders", "contextMenuAllowed", "enablePrint", "delayFirstView", "logLevel", "enablePinchOnMobile", "minifiedJSLibraries", "printResolution", "rotation", "src", "base64Src", "height", "useBrowserLocale", "backgroundColor", "pdfBackground", "pdfBackgroundColorToReplace", "filenameForDownload", "ignoreKeyboard", "ignoreKeys", "acceptKeys", "imageResourcesPath", "localeFolderPath", "language", "listenToURL", "nameddest", "password", "showUnverifiedSignatures", "startTabindex", "showSidebarButton", "sidebarVisible", "showFindButton", "showFindHighlightAll", "showFindMatchCase", "showFindCurrentPageOnly", "showFindPageRange", "showFindEntireWord", "showFindEntirePhrase", "showFindIgnoreAccents", "showFindFuzzySearch", "showFindResultsCount", "showFindMessages", "showPagingButtons", "showZoomButtons", "showPresentationModeButton", "showOpenFileButton", "showPrintButton", "showDownloadButton", "showBookmarkButton", "theme", "showToolbar", "showSecondaryToolbarButton", "showRotateButton", "handTool", "showHandToolButton", "showScrollingButton", "showSpreadButton", "showPropertiesButton", "showBorders", "spread", "page", "pageLabel", "textLayer", "zoom", "zoomLevels", "maxZoom", "minZoom", "_mobileFriendlyZoom", "wheelAction", "mobileFriendlyZoom"], outputs: ["formDataChange", "progress", "srcChange", "scrollModeChange", "afterPrint", "beforePrint", "currentZoomFactor", "rotationChange", "sidebarVisibleChange", "handToolChange", "spreadChange", "thumbnailDrawn", "pageChange", "pageLabelChange", "pagesLoaded", "pageRender", "pageRendered", "pdfDownloaded", "pdfLoaded", "pdfLoadingStarts", "pdfLoadingFailed", "textLayerRendered", "updateFindMatchesCount", "updateFindState", "zoomChange"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: PdfViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'aw-pdf-viewer', template: "<div *ngIf=\"data\" class=\"aw-pdf-viewer {{ data.classes || '' }}\">\n    <div class=\"aw-pdf-viewer__loader\">\n        <n7-loader></n7-loader>\n    </div>\n    \n    <ngx-extended-pdf-viewer\n        [src]=\"data.currentUrl\"\n        [height]=\"'90vh'\"\n        [useBrowserLocale]=\"true\"\n        [textLayer]=\"true\"\n        [showToolbar]=\"data.libOptions.showToolbar\"\n        [showSidebarButton]=\"data.libOptions.showSidebarButton\"\n        [showFindButton]=\"data.libOptions.showFindButton\"\n        [showPagingButtons]=\"data.libOptions.showPagingButtons\"\n        [showZoomButtons]=\"data.libOptions.showZoomButtons\"\n        [showPresentationModeButton]=\"data.libOptions.showPresentationModeButton\"\n        [showOpenFileButton]=\"data.libOptions.showOpenFileButton\"\n        [showPrintButton]=\"data.libOptions.showPrintButton\"\n        [showDownloadButton]=\"data.libOptions.showDownloadButton\"\n        [showBookmarkButton]=\"data.libOptions.showBookmarkButton\"\n        [showSecondaryToolbarButton]=\"data.libOptions.showSecondaryToolbarButton\"\n        [showRotateButton]=\"data.libOptions.showRotateButton\"\n        [showHandToolButton]=\"data.libOptions.showHandToolButton\"\n        [showScrollingButton]=\"data.libOptions.showScrollingButton\"\n        [showSpreadButton]=\"data.libOptions.showSpreadButton\"\n        [showPropertiesButton]=\"data.libOptions.showPropertiesButton\"\n        (pdfLoaded)=\"onLoaded()\"\n        (pdfLoadingFailed)=\"onLoaded()\">\n    </ngx-extended-pdf-viewer>\n    \n    <div *ngIf=\"data.items.length > 1\" class=\"aw-pdf-viewer__navigation\">\n        <div class=\"aw-pdf-viewer__navigation-tools\">\n            <a class=\"aw-pdf-viewer__navigation-prev {{ (!data.prev && data.prev !== 0) ? 'is-disabled' : '' }}\" \n            (click)=\"onClick(data.prev)\">\n                <span class=\"n7-icon-angle-left\"></span>\n            </a>\n            <div class=\"aw-pdf-viewer__navigation-select\">\n                <p class=\"aw-pdf-viewer__navigation-select-text\">Scorri i documenti PDF</p>\n                <select (change)=\"onClick(+$event.target.value)\">\n                    <option *ngFor=\"let item of data.items; let $i = index\" [value]=\"$i\"\n                    [selected]=\"item.selected\">{{ item.label }}</option>\n                </select>\n            </div>\n            <a class=\"aw-pdf-viewer__navigation-next {{ !data.next ? 'is-disabled' : '' }}\" \n            (click)=\"onClick(data.next)\">\n                <span class=\"n7-icon-angle-right\"></span>\n            </a>\n        </div>\n    </div>\n</div>" }]
        }], propDecorators: { data: [{
                type: Input
            }], emit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZpZXdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2NvbXBvbmVudHMvcGRmLXZpZXdlci9wZGYtdmlld2VyLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvYXJpYW5uYS13ZWIvY29tcG9uZW50cy9wZGYtdmlld2VyL3BkZi12aWV3ZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsZUFBZTtBQUNmLDZCQUE2QjtBQUU3QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQW9DaEMsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QixPQUFPLENBQUMsT0FBTztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7K0dBZlUsa0JBQWtCO21HQUFsQixrQkFBa0IsNkZDekMvQix1akZBaURNOzJGRFJPLGtCQUFrQjtrQkFKOUIsU0FBUzsrQkFDRSxlQUFlOzhCQUloQixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFBkZlZpZXdlci50c1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IHR5cGUgUGRmVmlld2VyRGF0YSA9IHtcbiAgaXRlbXM6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHNlbGVjdGVkOiBib29sZWFuO1xuICB9W107XG4gIG5leHQ6IG51bWJlciB8IG51bGw7XG4gIHByZXY6IG51bWJlciB8IG51bGw7XG4gIGN1cnJlbnRVcmw6IHN0cmluZztcbiAgbGliT3B0aW9uczoge1xuICAgIHNob3dUb29sYmFyOiBib29sZWFuO1xuICAgIHNob3dTaWRlYmFyQnV0dG9uOiBib29sZWFuO1xuICAgIHNob3dGaW5kQnV0dG9uOiBib29sZWFuO1xuICAgIHNob3dQYWdpbmdCdXR0b25zOiBib29sZWFuO1xuICAgIHNob3dab29tQnV0dG9uczogYm9vbGVhbjtcbiAgICBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbjogYm9vbGVhbjtcbiAgICBzaG93T3BlbkZpbGVCdXR0b246IGJvb2xlYW47XG4gICAgc2hvd1ByaW50QnV0dG9uOiBib29sZWFuO1xuICAgIHNob3dEb3dubG9hZEJ1dHRvbjogYm9vbGVhbjtcbiAgICBzaG93Qm9va21hcmtCdXR0b246IGJvb2xlYW47XG4gICAgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b246IGJvb2xlYW47XG4gICAgc2hvd1JvdGF0ZUJ1dHRvbjogYm9vbGVhbjtcbiAgICBzaG93SGFuZFRvb2xCdXR0b246IGJvb2xlYW47XG4gICAgc2hvd1Njcm9sbGluZ0J1dHRvbjogYm9vbGVhbjtcbiAgICBzaG93U3ByZWFkQnV0dG9uOiBib29sZWFuO1xuICAgIHNob3dQcm9wZXJ0aWVzQnV0dG9uOiBib29sZWFuO1xuICB9O1xuICBjbGFzc2VzPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdy1wZGYtdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi12aWV3ZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBkZlZpZXdlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRhdGE6IFBkZlZpZXdlckRhdGE7XG5cbiAgQElucHV0KCkgZW1pdDogKHR5cGU6IHN0cmluZywgcGF5bG9hZD86IGFueSkgPT4gdm9pZDtcblxuICBvbkNsaWNrKHBheWxvYWQpIHtcbiAgICBpZiAoIXRoaXMuZW1pdCB8fCBpc051bGwocGF5bG9hZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2NsaWNrJywgcGF5bG9hZCk7XG4gIH1cblxuICBvbkxvYWRlZCgpIHtcbiAgICB0aGlzLmVtaXQoJ2xvYWRlZCcpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZGF0YVwiIGNsYXNzPVwiYXctcGRmLXZpZXdlciB7eyBkYXRhLmNsYXNzZXMgfHwgJycgfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXctcGRmLXZpZXdlcl9fbG9hZGVyXCI+XG4gICAgICAgIDxuNy1sb2FkZXI+PC9uNy1sb2FkZXI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPG5neC1leHRlbmRlZC1wZGYtdmlld2VyXG4gICAgICAgIFtzcmNdPVwiZGF0YS5jdXJyZW50VXJsXCJcbiAgICAgICAgW2hlaWdodF09XCInOTB2aCdcIlxuICAgICAgICBbdXNlQnJvd3NlckxvY2FsZV09XCJ0cnVlXCJcbiAgICAgICAgW3RleHRMYXllcl09XCJ0cnVlXCJcbiAgICAgICAgW3Nob3dUb29sYmFyXT1cImRhdGEubGliT3B0aW9ucy5zaG93VG9vbGJhclwiXG4gICAgICAgIFtzaG93U2lkZWJhckJ1dHRvbl09XCJkYXRhLmxpYk9wdGlvbnMuc2hvd1NpZGViYXJCdXR0b25cIlxuICAgICAgICBbc2hvd0ZpbmRCdXR0b25dPVwiZGF0YS5saWJPcHRpb25zLnNob3dGaW5kQnV0dG9uXCJcbiAgICAgICAgW3Nob3dQYWdpbmdCdXR0b25zXT1cImRhdGEubGliT3B0aW9ucy5zaG93UGFnaW5nQnV0dG9uc1wiXG4gICAgICAgIFtzaG93Wm9vbUJ1dHRvbnNdPVwiZGF0YS5saWJPcHRpb25zLnNob3dab29tQnV0dG9uc1wiXG4gICAgICAgIFtzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbl09XCJkYXRhLmxpYk9wdGlvbnMuc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25cIlxuICAgICAgICBbc2hvd09wZW5GaWxlQnV0dG9uXT1cImRhdGEubGliT3B0aW9ucy5zaG93T3BlbkZpbGVCdXR0b25cIlxuICAgICAgICBbc2hvd1ByaW50QnV0dG9uXT1cImRhdGEubGliT3B0aW9ucy5zaG93UHJpbnRCdXR0b25cIlxuICAgICAgICBbc2hvd0Rvd25sb2FkQnV0dG9uXT1cImRhdGEubGliT3B0aW9ucy5zaG93RG93bmxvYWRCdXR0b25cIlxuICAgICAgICBbc2hvd0Jvb2ttYXJrQnV0dG9uXT1cImRhdGEubGliT3B0aW9ucy5zaG93Qm9va21hcmtCdXR0b25cIlxuICAgICAgICBbc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25dPVwiZGF0YS5saWJPcHRpb25zLnNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uXCJcbiAgICAgICAgW3Nob3dSb3RhdGVCdXR0b25dPVwiZGF0YS5saWJPcHRpb25zLnNob3dSb3RhdGVCdXR0b25cIlxuICAgICAgICBbc2hvd0hhbmRUb29sQnV0dG9uXT1cImRhdGEubGliT3B0aW9ucy5zaG93SGFuZFRvb2xCdXR0b25cIlxuICAgICAgICBbc2hvd1Njcm9sbGluZ0J1dHRvbl09XCJkYXRhLmxpYk9wdGlvbnMuc2hvd1Njcm9sbGluZ0J1dHRvblwiXG4gICAgICAgIFtzaG93U3ByZWFkQnV0dG9uXT1cImRhdGEubGliT3B0aW9ucy5zaG93U3ByZWFkQnV0dG9uXCJcbiAgICAgICAgW3Nob3dQcm9wZXJ0aWVzQnV0dG9uXT1cImRhdGEubGliT3B0aW9ucy5zaG93UHJvcGVydGllc0J1dHRvblwiXG4gICAgICAgIChwZGZMb2FkZWQpPVwib25Mb2FkZWQoKVwiXG4gICAgICAgIChwZGZMb2FkaW5nRmFpbGVkKT1cIm9uTG9hZGVkKClcIj5cbiAgICA8L25neC1leHRlbmRlZC1wZGYtdmlld2VyPlxuICAgIFxuICAgIDxkaXYgKm5nSWY9XCJkYXRhLml0ZW1zLmxlbmd0aCA+IDFcIiBjbGFzcz1cImF3LXBkZi12aWV3ZXJfX25hdmlnYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF3LXBkZi12aWV3ZXJfX25hdmlnYXRpb24tdG9vbHNcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYXctcGRmLXZpZXdlcl9fbmF2aWdhdGlvbi1wcmV2IHt7ICghZGF0YS5wcmV2ICYmIGRhdGEucHJldiAhPT0gMCkgPyAnaXMtZGlzYWJsZWQnIDogJycgfX1cIiBcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKGRhdGEucHJldilcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWljb24tYW5nbGUtbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdy1wZGYtdmlld2VyX19uYXZpZ2F0aW9uLXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXctcGRmLXZpZXdlcl9fbmF2aWdhdGlvbi1zZWxlY3QtdGV4dFwiPlNjb3JyaSBpIGRvY3VtZW50aSBQREY8L3A+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCAoY2hhbmdlKT1cIm9uQ2xpY2soKyRldmVudC50YXJnZXQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YS5pdGVtczsgbGV0ICRpID0gaW5kZXhcIiBbdmFsdWVdPVwiJGlcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbS5zZWxlY3RlZFwiPnt7IGl0ZW0ubGFiZWwgfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJhdy1wZGYtdmlld2VyX19uYXZpZ2F0aW9uLW5leHQge3sgIWRhdGEubmV4dCA/ICdpcy1kaXNhYmxlZCcgOiAnJyB9fVwiIFxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soZGF0YS5uZXh0KVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibjctaWNvbi1hbmdsZS1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=