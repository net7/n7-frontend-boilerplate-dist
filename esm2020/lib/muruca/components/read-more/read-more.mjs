//---------------------------
// ReadMore.ts
//---------------------------
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { _t } from '@n7-frontend/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const HEIGHT_MARGIN = 50;
export class ReadMoreComponent {
    constructor() {
        this.collapsed = true;
        this.hasReadmore = false;
        this._loaded = false;
    }
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ngAfterViewChecked() {
        if (this._loaded || !this.data)
            return;
        if (this.root && this.root.nativeElement.clientHeight > 0) {
            this._loaded = true;
            this.clientHeight = this.root.nativeElement.clientHeight;
            const { height, labels } = this.data;
            // translate labels
            Object.keys(labels).forEach((key) => {
                this.data.labels[key] = _t(labels[key]);
            });
            if (this.clientHeight > (height + HEIGHT_MARGIN)) {
                setTimeout(() => {
                    this.hasReadmore = true;
                    this.updateWrapperHeight();
                });
            }
        }
    }
    handleToggle() {
        this.collapsed = !this.collapsed;
        this.updateWrapperHeight();
    }
    updateWrapperHeight() {
        this.wrapperHeight = this.collapsed
            ? this.data.height
            : this.clientHeight;
    }
}
ReadMoreComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ReadMoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ReadMoreComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.2", type: ReadMoreComponent, selector: "mr-read-more", inputs: { data: "data" }, viewQueries: [{ propertyName: "root", first: true, predicate: ["root"], descendants: true, read: ElementRef }], ngImport: i0, template: "<div #root class=\"mr-read-more\"\r\n    [ngClass]=\"{\r\n        'is-collapsed': !!(hasReadmore && collapsed),\r\n        'is-expanded': !!(hasReadmore && !collapsed)\r\n    }\">\r\n        <div class=\"mr-read-more__content\"\r\n        [ngStyle]=\"{\r\n            height: hasReadmore ? wrapperHeight + 'px' : false\r\n        }\">\r\n            <!-- Child component -->\r\n            <ng-content class=\"content\"></ng-content>\r\n        </div>\r\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\r\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\r\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\r\n        </div>\r\n</div>\r\n", directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: ReadMoreComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-read-more', template: "<div #root class=\"mr-read-more\"\r\n    [ngClass]=\"{\r\n        'is-collapsed': !!(hasReadmore && collapsed),\r\n        'is-expanded': !!(hasReadmore && !collapsed)\r\n    }\">\r\n        <div class=\"mr-read-more__content\"\r\n        [ngStyle]=\"{\r\n            height: hasReadmore ? wrapperHeight + 'px' : false\r\n        }\">\r\n            <!-- Child component -->\r\n            <ng-content class=\"content\"></ng-content>\r\n        </div>\r\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\r\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\r\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\r\n        </div>\r\n</div>\r\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], root: [{
                type: ViewChild,
                args: ['root', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2NvbXBvbmVudHMvcmVhZC1tb3JlL3JlYWQtbW9yZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLDZCQUE2QjtBQUU3QixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBb0IsU0FBUyxFQUFFLFVBQVUsRUFDMUQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFVdkMsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBTXpCLE1BQU0sT0FBTyxpQkFBaUI7SUFKOUI7UUFVRSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBTXBCLFlBQU8sR0FBRyxLQUFLLENBQUM7S0FxQ2pCO0lBbkNDOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQTZCLENBQUMsWUFBWSxDQUFDO1lBQzFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVyQyxtQkFBbUI7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxFQUFFO2dCQUNoRCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDOzs4R0FsRFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsdUpBSUQsVUFBVSw2QkMzQnZDLHd3QkFpQkE7MkZETWEsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLGNBQWM7OEJBSWYsSUFBSTtzQkFBWixLQUFLO2dCQUdtQyxJQUFJO3NCQUE1QyxTQUFTO3VCQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBSZWFkTW9yZS50c1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdDaGVja2VkLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgX3QgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBSZWFkTW9yZURhdGEgPSB7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgbGFiZWxzOiB7XHJcbiAgICBtb3JlOiBzdHJpbmc7XHJcbiAgICBsZXNzOiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IEhFSUdIVF9NQVJHSU4gPSA1MDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXItcmVhZC1tb3JlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVhZC1tb3JlLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVhZE1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcclxuICBASW5wdXQoKSBkYXRhOiBSZWFkTW9yZURhdGE7XHJcblxyXG4gIC8vIFJvb3QgZGl2XHJcbiAgQFZpZXdDaGlsZCgncm9vdCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSByb290OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb2xsYXBzZWQgPSB0cnVlO1xyXG5cclxuICBoYXNSZWFkbW9yZSA9IGZhbHNlO1xyXG5cclxuICB3cmFwcGVySGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNsaWVudEhlaWdodDogbnVtYmVyO1xyXG5cclxuICBfbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBpZiB0aGUgdmlldyBpcyB0YWxsZXIgdGhhbiB0aGUgZ2l2ZW4gaGVpZ2h0IGxpbWl0LFxyXG4gICAqIGlmIGl0IGlzLCByZW5kZXIgdGhlIFwiUmVhZC1tb3JlXCIgYnV0dG9uLlxyXG4gICAqL1xyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2FkZWQgfHwgIXRoaXMuZGF0YSkgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMucm9vdCAmJiB0aGlzLnJvb3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPiAwKSB7XHJcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gKHRoaXMucm9vdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHsgaGVpZ2h0LCBsYWJlbHMgfSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgIC8vIHRyYW5zbGF0ZSBsYWJlbHNcclxuICAgICAgT2JqZWN0LmtleXMobGFiZWxzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEubGFiZWxzW2tleV0gPSBfdChsYWJlbHNba2V5XSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY2xpZW50SGVpZ2h0ID4gKGhlaWdodCArIEhFSUdIVF9NQVJHSU4pKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhc1JlYWRtb3JlID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlV3JhcHBlckhlaWdodCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUb2dnbGUoKSB7XHJcbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgIHRoaXMudXBkYXRlV3JhcHBlckhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlV3JhcHBlckhlaWdodCgpIHtcclxuICAgIHRoaXMud3JhcHBlckhlaWdodCA9IHRoaXMuY29sbGFwc2VkXHJcbiAgICAgID8gdGhpcy5kYXRhLmhlaWdodFxyXG4gICAgICA6IHRoaXMuY2xpZW50SGVpZ2h0O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICNyb290IGNsYXNzPVwibXItcmVhZC1tb3JlXCJcclxuICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAnaXMtY29sbGFwc2VkJzogISEoaGFzUmVhZG1vcmUgJiYgY29sbGFwc2VkKSxcclxuICAgICAgICAnaXMtZXhwYW5kZWQnOiAhIShoYXNSZWFkbW9yZSAmJiAhY29sbGFwc2VkKVxyXG4gICAgfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtci1yZWFkLW1vcmVfX2NvbnRlbnRcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgaGVpZ2h0OiBoYXNSZWFkbW9yZSA/IHdyYXBwZXJIZWlnaHQgKyAncHgnIDogZmFsc2VcclxuICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgIDwhLS0gQ2hpbGQgY29tcG9uZW50IC0tPlxyXG4gICAgICAgICAgICA8bmctY29udGVudCBjbGFzcz1cImNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImhhc1JlYWRtb3JlXCIgY2xhc3M9XCJtci1yZWFkLW1vcmVfX2J0blwiIChjbGljayk9XCJoYW5kbGVUb2dnbGUoKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm43LWljb24te3sgY29sbGFwc2VkID8gJ3BsdXMnIDogJ21pbnVzJyB9fVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci1yZWFkLW1vcmVfX2J0bi10ZXh0XCI+e3sgY29sbGFwc2VkID8gZGF0YS5sYWJlbHMubW9yZSA6IGRhdGEubGFiZWxzLmxlc3MgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=