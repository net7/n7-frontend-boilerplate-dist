//---------------------------
// ReadMore.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { _t } from '@n7-frontend/core';
const HEIGHT_MARGIN = 50;
let ReadMoreComponent = class ReadMoreComponent {
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ReadMoreComponent.prototype, "data", void 0);
__decorate([
    ViewChild('root', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], ReadMoreComponent.prototype, "root", void 0);
ReadMoreComponent = __decorate([
    Component({
        selector: 'mr-read-more',
        template: "<div #root class=\"mr-read-more\"\r\n    [ngClass]=\"{\r\n        'is-collapsed': !!(hasReadmore && collapsed),\r\n        'is-expanded': !!(hasReadmore && !collapsed)\r\n    }\">\r\n        <div class=\"mr-read-more__content\"\r\n        [ngStyle]=\"{\r\n            height: hasReadmore ? wrapperHeight + 'px' : false\r\n        }\">\r\n            <!-- Child component -->\r\n            <ng-content class=\"content\"></ng-content>\r\n        </div>\r\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\r\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\r\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\r\n        </div>\r\n</div>\r\n"
    })
], ReadMoreComponent);
export { ReadMoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZCw2QkFBNkI7O0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVdkMsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBTXpCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBTUUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQU1wQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBcUNsQixDQUFDO0lBbkNDOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQTZCLENBQUMsWUFBWSxDQUFDO1lBQzFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUVyQyxtQkFBbUI7WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxFQUFFO2dCQUNoRCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVM7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTtBQWxEVTtJQUFSLEtBQUssRUFBRTs7K0NBQW9CO0FBR2E7SUFBeEMsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzs4QkFBTyxVQUFVOytDQUFDO0FBSi9DLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixreEJBQStCO0tBQ2hDLENBQUM7R0FDVyxpQkFBaUIsQ0FtRDdCO1NBbkRZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJlYWRNb3JlLnRzXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0NoZWNrZWQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIFJlYWRNb3JlRGF0YSA9IHtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBsYWJlbHM6IHtcclxuICAgIG1vcmU6IHN0cmluZztcclxuICAgIGxlc3M6IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgSEVJR0hUX01BUkdJTiA9IDUwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtci1yZWFkLW1vcmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWFkLW1vcmUuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWFkTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IFJlYWRNb3JlRGF0YTtcclxuXHJcbiAgLy8gUm9vdCBkaXZcclxuICBAVmlld0NoaWxkKCdyb290JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHJvb3Q6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbGxhcHNlZCA9IHRydWU7XHJcblxyXG4gIGhhc1JlYWRtb3JlID0gZmFsc2U7XHJcblxyXG4gIHdyYXBwZXJIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIF9sb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSB2aWV3IGlzIHRhbGxlciB0aGFuIHRoZSBnaXZlbiBoZWlnaHQgbGltaXQsXHJcbiAgICogaWYgaXQgaXMsIHJlbmRlciB0aGUgXCJSZWFkLW1vcmVcIiBidXR0b24uXHJcbiAgICovXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2xvYWRlZCB8fCAhdGhpcy5kYXRhKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5yb290ICYmIHRoaXMucm9vdC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+IDApIHtcclxuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jbGllbnRIZWlnaHQgPSAodGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudEhlaWdodDtcclxuICAgICAgY29uc3QgeyBoZWlnaHQsIGxhYmVscyB9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgICAgLy8gdHJhbnNsYXRlIGxhYmVsc1xyXG4gICAgICBPYmplY3Qua2V5cyhsYWJlbHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YS5sYWJlbHNba2V5XSA9IF90KGxhYmVsc1trZXldKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGllbnRIZWlnaHQgPiAoaGVpZ2h0ICsgSEVJR0hUX01BUkdJTikpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGFzUmVhZG1vcmUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVXcmFwcGVySGVpZ2h0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVRvZ2dsZSgpIHtcclxuICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xyXG4gICAgdGhpcy51cGRhdGVXcmFwcGVySGVpZ2h0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXcmFwcGVySGVpZ2h0KCkge1xyXG4gICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gdGhpcy5jb2xsYXBzZWRcclxuICAgICAgPyB0aGlzLmRhdGEuaGVpZ2h0XHJcbiAgICAgIDogdGhpcy5jbGllbnRIZWlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==