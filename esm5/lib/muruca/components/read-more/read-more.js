//---------------------------
// ReadMore.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { _t } from '@n7-frontend/core';
var HEIGHT_MARGIN = 50;
var ReadMoreComponent = /** @class */ (function () {
    function ReadMoreComponent() {
        this.collapsed = true;
        this.hasReadmore = false;
        this._loaded = false;
    }
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ReadMoreComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this._loaded || !this.data)
            return;
        if (this.root && this.root.nativeElement.clientHeight > 0) {
            this._loaded = true;
            this.clientHeight = this.root.nativeElement.clientHeight;
            var _a = this.data, height = _a.height, labels_1 = _a.labels;
            // translate labels
            Object.keys(labels_1).forEach(function (key) {
                _this.data.labels[key] = _t(labels_1[key]);
            });
            if (this.clientHeight > (height + HEIGHT_MARGIN)) {
                setTimeout(function () {
                    _this.hasReadmore = true;
                    _this.updateWrapperHeight();
                });
            }
        }
    };
    ReadMoreComponent.prototype.handleToggle = function () {
        this.collapsed = !this.collapsed;
        this.updateWrapperHeight();
    };
    ReadMoreComponent.prototype.updateWrapperHeight = function () {
        this.wrapperHeight = this.collapsed
            ? this.data.height
            : this.clientHeight;
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
            template: "<div #root class=\"mr-read-more\"\n    [ngClass]=\"{\n        'is-collapsed': !!(hasReadmore && collapsed),\n        'is-expanded': !!(hasReadmore && !collapsed)\n    }\">\n        <div class=\"mr-read-more__content\"\n        [ngStyle]=\"{\n            height: hasReadmore ? wrapperHeight + 'px' : false\n        }\">\n            <!-- Child component -->\n            <ng-content class=\"content\"></ng-content>\n        </div>\n        <div *ngIf=\"hasReadmore\" class=\"mr-read-more__btn\" (click)=\"handleToggle()\">\n            <span class=\"n7-icon-{{ collapsed ? 'plus' : 'minus' }}\"></span>\n            <span class=\"mr-read-more__btn-text\">{{ collapsed ? data.labels.more : data.labels.less }}</span>\n        </div>\n</div>\n"
        })
    ], ReadMoreComponent);
    return ReadMoreComponent;
}());
export { ReadMoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZCw2QkFBNkI7O0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBTXpCO0lBQUE7UUFRRSxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBTXBCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFxQ2xCLENBQUM7SUFuQ0M7OztPQUdHO0lBQ0gsOENBQWtCLEdBQWxCO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUN2QyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBNkIsQ0FBQyxZQUFZLENBQUM7WUFDcEUsSUFBQSxjQUE4QixFQUE1QixrQkFBTSxFQUFFLG9CQUFvQixDQUFDO1lBRXJDLG1CQUFtQjtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQzlCLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsRUFBRTtnQkFDaEQsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUN4QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0NBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUztZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFuRFE7UUFBUixLQUFLLEVBQUU7O21EQUFXO0lBRVY7UUFBUixLQUFLLEVBQUU7O21EQUFXO0lBR3NCO1FBQXhDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7a0NBQU8sVUFBVTttREFBQztJQU4vQyxpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsZ3ZCQUErQjtTQUNoQyxDQUFDO09BQ1csaUJBQWlCLENBcUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FyRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJlYWRNb3JlLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdDaGVja2VkLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuY29uc3QgSEVJR0hUX01BUkdJTiA9IDUwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtci1yZWFkLW1vcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVhZC1tb3JlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWFkTW9yZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG5cbiAgQElucHV0KCkgZW1pdDogYW55O1xuXG4gIC8vIFJvb3QgZGl2XG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcm9vdDogRWxlbWVudFJlZjtcblxuICBjb2xsYXBzZWQgPSB0cnVlO1xuXG4gIGhhc1JlYWRtb3JlID0gZmFsc2U7XG5cbiAgd3JhcHBlckhlaWdodDogbnVtYmVyO1xuXG4gIGNsaWVudEhlaWdodDogbnVtYmVyO1xuXG4gIF9sb2FkZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSB2aWV3IGlzIHRhbGxlciB0aGFuIHRoZSBnaXZlbiBoZWlnaHQgbGltaXQsXG4gICAqIGlmIGl0IGlzLCByZW5kZXIgdGhlIFwiUmVhZC1tb3JlXCIgYnV0dG9uLlxuICAgKi9cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2FkZWQgfHwgIXRoaXMuZGF0YSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnJvb3QgJiYgdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gMCkge1xuICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gKHRoaXMucm9vdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB7IGhlaWdodCwgbGFiZWxzIH0gPSB0aGlzLmRhdGE7XG5cbiAgICAgIC8vIHRyYW5zbGF0ZSBsYWJlbHNcbiAgICAgIE9iamVjdC5rZXlzKGxhYmVscykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YS5sYWJlbHNba2V5XSA9IF90KGxhYmVsc1trZXldKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jbGllbnRIZWlnaHQgPiAoaGVpZ2h0ICsgSEVJR0hUX01BUkdJTikpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYXNSZWFkbW9yZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy51cGRhdGVXcmFwcGVySGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICB0aGlzLnVwZGF0ZVdyYXBwZXJIZWlnaHQoKTtcbiAgfVxuXG4gIHVwZGF0ZVdyYXBwZXJIZWlnaHQoKSB7XG4gICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gdGhpcy5jb2xsYXBzZWRcbiAgICAgID8gdGhpcy5kYXRhLmhlaWdodFxuICAgICAgOiB0aGlzLmNsaWVudEhlaWdodDtcbiAgfVxufVxuIl19