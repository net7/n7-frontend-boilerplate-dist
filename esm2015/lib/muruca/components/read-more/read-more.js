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
        if (this._loaded)
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
    Input(),
    __metadata("design:type", Object)
], ReadMoreComponent.prototype, "emit", void 0);
__decorate([
    ViewChild('root', { read: ElementRef }),
    __metadata("design:type", ElementRef)
], ReadMoreComponent.prototype, "root", void 0);
ReadMoreComponent = __decorate([
    Component({
        selector: 'mr-read-more',
        template: "<div #root *ngIf=\"data\" class=\"mr-read-more\"\n    [ngClass]=\"{\n        'is-collapsed': !!(hasReadmore && collapsed),\n        'is-expanded': !!(hasReadmore && !collapsed)\n    }\">\n        <div class=\"mr-read-more__content\"\n        [ngStyle]=\"{\n            height: hasReadmore ? wrapperHeight + 'px' : false\n        }\">\n            <!-- Child component -->\n            <ng-content class=\"content\"></ng-content>\n        </div>\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\n        </div>\n</div>\n"
    })
], ReadMoreComponent);
export { ReadMoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZCw2QkFBNkI7O0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBTXpCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBUUUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQU1wQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBcUNsQixDQUFDO0lBbkNDOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBNkIsQ0FBQyxZQUFZLENBQUM7WUFDMUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRXJDLG1CQUFtQjtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEVBQUU7Z0JBQ2hELFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUM3QixDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUztZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBcERVO0lBQVIsS0FBSyxFQUFFOzsrQ0FBVztBQUVWO0lBQVIsS0FBSyxFQUFFOzsrQ0FBVztBQUdzQjtJQUF4QyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDOzhCQUFPLFVBQVU7K0NBQUM7QUFOL0MsaUJBQWlCO0lBSjdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLCt2QkFBK0I7S0FDaEMsQ0FBQztHQUNXLGlCQUFpQixDQXFEN0I7U0FyRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJlYWRNb3JlLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdDaGVja2VkLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuY29uc3QgSEVJR0hUX01BUkdJTiA9IDUwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1yZWFkLW1vcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVhZC1tb3JlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWFkTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIC8vIFJvb3QgZGl2XG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcm9vdDogRWxlbWVudFJlZjtcblxuICBjb2xsYXBzZWQgPSB0cnVlO1xuXG4gIGhhc1JlYWRtb3JlID0gZmFsc2U7XG5cbiAgd3JhcHBlckhlaWdodDogbnVtYmVyO1xuXG4gIGNsaWVudEhlaWdodDogbnVtYmVyO1xuXG4gIF9sb2FkZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSB2aWV3IGlzIHRhbGxlciB0aGFuIHRoZSBnaXZlbiBoZWlnaHQgbGltaXQsXG4gICAqIGlmIGl0IGlzLCByZW5kZXIgdGhlIFwiUmVhZC1tb3JlXCIgYnV0dG9uLlxuICAgKi9cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2FkZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5yb290ICYmIHRoaXMucm9vdC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+IDApIHtcbiAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsaWVudEhlaWdodCA9ICh0aGlzLnJvb3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgeyBoZWlnaHQsIGxhYmVscyB9ID0gdGhpcy5kYXRhO1xuXG4gICAgICAvLyB0cmFuc2xhdGUgbGFiZWxzXG4gICAgICBPYmplY3Qua2V5cyhsYWJlbHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEubGFiZWxzW2tleV0gPSBfdChsYWJlbHNba2V5XSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuY2xpZW50SGVpZ2h0ID4gKGhlaWdodCArIEhFSUdIVF9NQVJHSU4pKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFzUmVhZG1vcmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudXBkYXRlV3JhcHBlckhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGUoKSB7XG4gICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgdGhpcy51cGRhdGVXcmFwcGVySGVpZ2h0KCk7XG4gIH1cblxuICB1cGRhdGVXcmFwcGVySGVpZ2h0KCkge1xuICAgIHRoaXMud3JhcHBlckhlaWdodCA9IHRoaXMuY29sbGFwc2VkXG4gICAgICA/IHRoaXMuZGF0YS5oZWlnaHRcbiAgICAgIDogdGhpcy5jbGllbnRIZWlnaHQ7XG4gIH1cbn1cbiJdfQ==