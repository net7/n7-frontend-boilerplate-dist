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
ReadMoreComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ReadMoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ReadMoreComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0", type: ReadMoreComponent, selector: "mr-read-more", inputs: { data: "data" }, viewQueries: [{ propertyName: "root", first: true, predicate: ["root"], descendants: true, read: ElementRef }], ngImport: i0, template: "<div #root class=\"mr-read-more\"\n    [ngClass]=\"{\n        'is-collapsed': !!(hasReadmore && collapsed),\n        'is-expanded': !!(hasReadmore && !collapsed)\n    }\">\n        <div class=\"mr-read-more__content\"\n        [ngStyle]=\"{\n            height: hasReadmore ? wrapperHeight + 'px' : false\n        }\">\n            <!-- Child component -->\n            <ng-content class=\"content\"></ng-content>\n        </div>\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\n        </div>\n</div>\n", directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ReadMoreComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mr-read-more', template: "<div #root class=\"mr-read-more\"\n    [ngClass]=\"{\n        'is-collapsed': !!(hasReadmore && collapsed),\n        'is-expanded': !!(hasReadmore && !collapsed)\n    }\">\n        <div class=\"mr-read-more__content\"\n        [ngStyle]=\"{\n            height: hasReadmore ? wrapperHeight + 'px' : false\n        }\">\n            <!-- Child component -->\n            <ng-content class=\"content\"></ng-content>\n        </div>\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\n        </div>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }], root: [{
                type: ViewChild,
                args: ['root', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbjctYm9pbGVycGxhdGUtbGliL3NyYy9saWIvbXVydWNhL2NvbXBvbmVudHMvcmVhZC1tb3JlL3JlYWQtbW9yZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLDZCQUE2QjtBQUU3QixPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUssRUFBb0IsU0FBUyxFQUFFLFVBQVUsRUFDMUQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFVdkMsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBTXpCLE1BQU0sT0FBTyxpQkFBaUI7SUFKOUI7UUFVRSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBTXBCLFlBQU8sR0FBRyxLQUFLLENBQUM7S0FxQ2pCO0lBbkNDOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQTZCLENBQUMsWUFBWSxDQUFDO1lBQzFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVyQyxtQkFBbUI7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxFQUFFO2dCQUNoRCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDOzs4R0FsRFUsaUJBQWlCO2tHQUFqQixpQkFBaUIsdUpBSUQsVUFBVSw2QkMzQnZDLHN1QkFpQkE7MkZETWEsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLGNBQWM7OEJBSWYsSUFBSTtzQkFBWixLQUFLO2dCQUdtQyxJQUFJO3NCQUE1QyxTQUFTO3VCQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUmVhZE1vcmUudHNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0NoZWNrZWQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBSZWFkTW9yZURhdGEgPSB7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsYWJlbHM6IHtcbiAgICBtb3JlOiBzdHJpbmc7XG4gICAgbGVzczogc3RyaW5nO1xuICB9O1xufTtcblxuY29uc3QgSEVJR0hUX01BUkdJTiA9IDUwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1yZWFkLW1vcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVhZC1tb3JlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWFkTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBSZWFkTW9yZURhdGE7XG5cbiAgLy8gUm9vdCBkaXZcbiAgQFZpZXdDaGlsZCgncm9vdCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSByb290OiBFbGVtZW50UmVmO1xuXG4gIGNvbGxhcHNlZCA9IHRydWU7XG5cbiAgaGFzUmVhZG1vcmUgPSBmYWxzZTtcblxuICB3cmFwcGVySGVpZ2h0OiBudW1iZXI7XG5cbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgX2xvYWRlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHZpZXcgaXMgdGFsbGVyIHRoYW4gdGhlIGdpdmVuIGhlaWdodCBsaW1pdCxcbiAgICogaWYgaXQgaXMsIHJlbmRlciB0aGUgXCJSZWFkLW1vcmVcIiBidXR0b24uXG4gICAqL1xuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvYWRlZCB8fCAhdGhpcy5kYXRhKSByZXR1cm47XG4gICAgaWYgKHRoaXMucm9vdCAmJiB0aGlzLnJvb3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPiAwKSB7XG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbGllbnRIZWlnaHQgPSAodGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0LCBsYWJlbHMgfSA9IHRoaXMuZGF0YTtcblxuICAgICAgLy8gdHJhbnNsYXRlIGxhYmVsc1xuICAgICAgT2JqZWN0LmtleXMobGFiZWxzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhLmxhYmVsc1trZXldID0gX3QobGFiZWxzW2tleV0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNsaWVudEhlaWdodCA+IChoZWlnaHQgKyBIRUlHSFRfTUFSR0lOKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhhc1JlYWRtb3JlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVdyYXBwZXJIZWlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlKCkge1xuICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgIHRoaXMudXBkYXRlV3JhcHBlckhlaWdodCgpO1xuICB9XG5cbiAgdXBkYXRlV3JhcHBlckhlaWdodCgpIHtcbiAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSB0aGlzLmNvbGxhcHNlZFxuICAgICAgPyB0aGlzLmRhdGEuaGVpZ2h0XG4gICAgICA6IHRoaXMuY2xpZW50SGVpZ2h0O1xuICB9XG59XG4iLCI8ZGl2ICNyb290IGNsYXNzPVwibXItcmVhZC1tb3JlXCJcbiAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdpcy1jb2xsYXBzZWQnOiAhIShoYXNSZWFkbW9yZSAmJiBjb2xsYXBzZWQpLFxuICAgICAgICAnaXMtZXhwYW5kZWQnOiAhIShoYXNSZWFkbW9yZSAmJiAhY29sbGFwc2VkKVxuICAgIH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1yLXJlYWQtbW9yZV9fY29udGVudFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIntcbiAgICAgICAgICAgIGhlaWdodDogaGFzUmVhZG1vcmUgPyB3cmFwcGVySGVpZ2h0ICsgJ3B4JyA6IGZhbHNlXG4gICAgICAgIH1cIj5cbiAgICAgICAgICAgIDwhLS0gQ2hpbGQgY29tcG9uZW50IC0tPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgY2xhc3M9XCJjb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImhhc1JlYWRtb3JlXCIgY2xhc3M9XCJtci1yZWFkLW1vcmVfX2J0blwiIChjbGljayk9XCJoYW5kbGVUb2dnbGUoKVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuNy1pY29uLXt7IGNvbGxhcHNlZCA/ICdwbHVzJyA6ICdtaW51cycgfX1cIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLXJlYWQtbW9yZV9fYnRuLXRleHRcIj57eyBjb2xsYXBzZWQgPyBkYXRhLmxhYmVscy5tb3JlIDogZGF0YS5sYWJlbHMubGVzcyB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==