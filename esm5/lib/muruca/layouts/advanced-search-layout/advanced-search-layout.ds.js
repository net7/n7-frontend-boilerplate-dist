import { __extends } from "tslib";
import { LayoutDataSource, _t } from '@n7-frontend/core';
import { MrFormModel } from '../../models/form.model';
var MrAdvancedSearchLayoutDS = /** @class */ (function (_super) {
    __extends(MrAdvancedSearchLayoutDS, _super);
    function MrAdvancedSearchLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MrAdvancedSearchLayoutDS.prototype.onInit = function (payload) {
        this.configuration = payload.configuration;
        this.mainState = payload.mainState;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId);
        // init form
        this.form = new MrFormModel();
        // form init
        this.form.init(this.pageConfig.formConfig);
        this.one('mr-form-wrapper-accordion').update({
            form: this.form
        });
        // update head title
        this.updateHeadTitle();
    };
    MrAdvancedSearchLayoutDS.prototype.updateHeadTitle = function () {
        var appName = this.configuration.get('name');
        var pageTitle = this.pageConfig.title;
        this.mainState.update('headTitle', [appName, _t(pageTitle)].join(' > '));
    };
    MrAdvancedSearchLayoutDS.prototype.onSubmit = function (_a) {
        var state = _a.state;
        // do nothing
        console.warn('onSubmit: to be implemented on project', state);
    };
    MrAdvancedSearchLayoutDS.prototype.onReset = function () {
        // do nothing
    };
    return MrAdvancedSearchLayoutDS;
}(LayoutDataSource));
export { MrAdvancedSearchLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtc2VhcmNoLWxheW91dC5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9tdXJ1Y2EvbGF5b3V0cy9hZHZhbmNlZC1zZWFyY2gtbGF5b3V0L2FkdmFuY2VkLXNlYXJjaC1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUd6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQ7SUFBOEMsNENBQWdCO0lBQTlEOztJQTRDQSxDQUFDO0lBakNDLHlDQUFNLEdBQU4sVUFBTyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEQsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM5QixZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzNDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFFSCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxrREFBZSxHQUF2QjtRQUNFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsMkNBQVEsR0FBUixVQUFTLEVBQVM7WUFBUCxnQkFBSztRQUNkLGFBQWE7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0UsYUFBYTtJQUNmLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUE1Q0QsQ0FBOEMsZ0JBQWdCLEdBNEM3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UsIF90IH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1yRm9ybU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Zvcm0ubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1yQWR2YW5jZWRTZWFyY2hMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBwYWdlQ29uZmlnO1xyXG5cclxuICBwdWJsaWMgZm9ybTogTXJGb3JtTW9kZWw7XHJcblxyXG4gIG9uSW5pdChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLm1haW5TdGF0ZSA9IHBheWxvYWQubWFpblN0YXRlO1xyXG4gICAgdGhpcy5jb25maWdJZCA9IHBheWxvYWQuY29uZmlnSWQ7XHJcbiAgICB0aGlzLnBhZ2VDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KHRoaXMuY29uZmlnSWQpO1xyXG5cclxuICAgIC8vIGluaXQgZm9ybVxyXG4gICAgdGhpcy5mb3JtID0gbmV3IE1yRm9ybU1vZGVsKCk7XHJcbiAgICAvLyBmb3JtIGluaXRcclxuICAgIHRoaXMuZm9ybS5pbml0KHRoaXMucGFnZUNvbmZpZy5mb3JtQ29uZmlnKTtcclxuXHJcbiAgICB0aGlzLm9uZSgnbXItZm9ybS13cmFwcGVyLWFjY29yZGlvbicpLnVwZGF0ZSh7XHJcbiAgICAgIGZvcm06IHRoaXMuZm9ybVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGhlYWQgdGl0bGVcclxuICAgIHRoaXMudXBkYXRlSGVhZFRpdGxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUhlYWRUaXRsZSgpIHtcclxuICAgIGNvbnN0IGFwcE5hbWUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCduYW1lJyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSB0aGlzLnBhZ2VDb25maWcudGl0bGU7XHJcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGUoJ2hlYWRUaXRsZScsIFthcHBOYW1lLCBfdChwYWdlVGl0bGUpXS5qb2luKCcgPiAnKSk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdCh7IHN0YXRlIH0pIHtcclxuICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIGNvbnNvbGUud2Fybignb25TdWJtaXQ6IHRvIGJlIGltcGxlbWVudGVkIG9uIHByb2plY3QnLCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblJlc2V0KCkge1xyXG4gICAgLy8gZG8gbm90aGluZ1xyXG4gIH1cclxufVxyXG4iXX0=