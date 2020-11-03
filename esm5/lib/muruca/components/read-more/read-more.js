//---------------------------
// ReadMore.ts
//---------------------------
import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var ReadMoreComponent = /** @class */ (function () {
    function ReadMoreComponent() {
        // CSS Classes
        this.state = 'is-expanded';
        this.collapsed = new BehaviorSubject(false);
        this._loaded = false;
        // onClick(type, payload) {
        //   if (!this.emit) return;
        //   this.emit(type, payload);
        // }
    }
    /**
     * Determine if the view is taller than the given height limit,
     * if it is, render the "Read-more" button.
     */
    ReadMoreComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this._loaded)
            return;
        if (this.root && this.root.nativeElement.clientHeight > 0) {
            this._loaded = true;
            var height = this.root.nativeElement.clientHeight;
            var limit = this.data.limit;
            this.data.height = height;
            if (height > limit) {
                setTimeout(function () {
                    _this.toggleClass();
                    _this.collapsed.next(true);
                });
            }
        }
    };
    ReadMoreComponent.prototype.toggleClass = function () {
        if (this.state === 'is-collapsed')
            this.state = 'is-expanded';
        if (this.state === 'is-expanded')
            this.state = 'is-collapsed';
    };
    ReadMoreComponent.prototype.handleToggle = function () {
        var v = this.collapsed.value;
        this.collapsed.next(!v);
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
            template: "<div class=\"mr-read-more {{this.state}}\"\n     *ngIf=\"data\"\n     #root>\n     <!-- Child component -->\n     <ng-content class=\"content\"></ng-content>\n     <div [hidden]=\"!collapsed.value\"\n          (click)=\"handleToggle()\"\n          class=\"mr-read-more__btn\">\n          <span class=\"n7-icon-plus\"></span>\n          {{ data.label }}\n     </div>\n</div>\n"
        })
    ], ReadMoreComponent);
    return ReadMoreComponent;
}());
export { ReadMoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1tb3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9jb21wb25lbnRzL3JlYWQtbW9yZS9yZWFkLW1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZCw2QkFBNkI7O0FBRTdCLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTXZDO0lBQUE7UUFRRSxjQUFjO1FBQ2QsVUFBSyxHQUFtQyxhQUFhLENBQUE7UUFFckQsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFnQ2hCLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLElBQUk7SUFDTixDQUFDO0lBbENDOzs7T0FHRztJQUNILDhDQUFrQixHQUFsQjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBTSxNQUFNLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUE2QixDQUFDLFlBQVksQ0FBQztZQUM3RCxJQUFBLHVCQUFLLENBQWU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQzFCLElBQUksTUFBTSxHQUFHLEtBQUssRUFBRTtnQkFDbEIsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtJQUNILENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGNBQWM7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUM5RCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssYUFBYTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0UsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBMUNRO1FBQVIsS0FBSyxFQUFFOzttREFBVztJQUVWO1FBQVIsS0FBSyxFQUFFOzttREFBVztJQUdzQjtRQUF4QyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2tDQUFPLFVBQVU7bURBQUM7SUFOL0MsaUJBQWlCO1FBSjdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLG1ZQUErQjtTQUNoQyxDQUFDO09BQ1csaUJBQWlCLENBaUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FqRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJlYWRNb3JlLnRzXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdDaGVja2VkLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItcmVhZC1tb3JlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlYWQtbW9yZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVhZE1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuXG4gIEBJbnB1dCgpIGVtaXQ6IGFueTtcblxuICAvLyBSb290IGRpdlxuICBAVmlld0NoaWxkKCdyb290JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHJvb3Q6IEVsZW1lbnRSZWY7XG5cbiAgLy8gQ1NTIENsYXNzZXNcbiAgc3RhdGU6ICdpcy1leHBhbmRlZCcgfCAnaXMtY29sbGFwc2VkJyA9ICdpcy1leHBhbmRlZCdcblxuICBjb2xsYXBzZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBfbG9hZGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgdmlldyBpcyB0YWxsZXIgdGhhbiB0aGUgZ2l2ZW4gaGVpZ2h0IGxpbWl0LFxuICAgKiBpZiBpdCBpcywgcmVuZGVyIHRoZSBcIlJlYWQtbW9yZVwiIGJ1dHRvbi5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9hZGVkKSByZXR1cm47XG4gICAgaWYgKHRoaXMucm9vdCAmJiB0aGlzLnJvb3QubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPiAwKSB7XG4gICAgICB0aGlzLl9sb2FkZWQgPSB0cnVlO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMucm9vdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB7IGxpbWl0IH0gPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLmRhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgaWYgKGhlaWdodCA+IGxpbWl0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoKTtcbiAgICAgICAgICB0aGlzLmNvbGxhcHNlZC5uZXh0KHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVDbGFzcygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2lzLWNvbGxhcHNlZCcpIHRoaXMuc3RhdGUgPSAnaXMtZXhwYW5kZWQnO1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAnaXMtZXhwYW5kZWQnKSB0aGlzLnN0YXRlID0gJ2lzLWNvbGxhcHNlZCc7XG4gIH1cblxuICBoYW5kbGVUb2dnbGUoKSB7XG4gICAgY29uc3QgdiA9IHRoaXMuY29sbGFwc2VkLnZhbHVlO1xuICAgIHRoaXMuY29sbGFwc2VkLm5leHQoIXYpO1xuICB9XG5cbiAgLy8gb25DbGljayh0eXBlLCBwYXlsb2FkKSB7XG4gIC8vICAgaWYgKCF0aGlzLmVtaXQpIHJldHVybjtcbiAgLy8gICB0aGlzLmVtaXQodHlwZSwgcGF5bG9hZCk7XG4gIC8vIH1cbn1cbiJdfQ==