import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class LayoutsConfigurationService {
    constructor(config) {
        this.config = config;
        this.defaults = {};
        this.get = (key) => this.defaults[key];
        this.set = (key, value) => { this.defaults[key] = value; };
        if (this.config?.layouts) {
            Object.keys(this.config.layouts).forEach((key) => {
                this.set(key, this.config.layouts[key]);
            });
        }
    }
}
LayoutsConfigurationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: LayoutsConfigurationService, deps: [{ token: 'config' }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutsConfigurationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: LayoutsConfigurationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: LayoutsConfigurationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9jb21tb24vc2VydmljZXMvbGF5b3V0cy1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS25ELE1BQU0sT0FBTywyQkFBMkI7SUFHdEMsWUFBc0MsTUFBVztRQUFYLFdBQU0sR0FBTixNQUFNLENBQUs7UUFGekMsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQVVwQixRQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsUUFBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFUMUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRTtZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O3dIQVRVLDJCQUEyQixrQkFHbEIsUUFBUTs0SEFIakIsMkJBQTJCLGNBRjFCLE1BQU07MkZBRVAsMkJBQTJCO2tCQUh2QyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBSWMsTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0c0NvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGRlZmF1bHRzOiBhbnkgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IGFueSkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnPy5sYXlvdXRzKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLmxheW91dHMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jb25maWcubGF5b3V0c1trZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0ID0gKGtleSkgPT4gdGhpcy5kZWZhdWx0c1trZXldO1xyXG5cclxuICBwdWJsaWMgc2V0ID0gKGtleSwgdmFsdWUpID0+IHsgdGhpcy5kZWZhdWx0c1trZXldID0gdmFsdWU7IH1cclxufVxyXG4iXX0=