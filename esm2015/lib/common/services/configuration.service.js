import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let ConfigurationService = class ConfigurationService {
    constructor() {
        this.defaults = {};
        this.get = (key) => this.defaults[key];
        this.set = (key, value) => { this.defaults[key] = value; };
    }
};
ConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });
ConfigurationService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ConfigurationService);
export { ConfigurationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQWpDO1FBQ1UsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVwQixRQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsUUFBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDN0Q7Q0FBQSxDQUFBOztBQU5ZLG9CQUFvQjtJQUhoQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csb0JBQW9CLENBTWhDO1NBTlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGRlZmF1bHRzOiBhbnkgPSB7fTtcclxuXHJcbiAgcHVibGljIGdldCA9IChrZXkpID0+IHRoaXMuZGVmYXVsdHNba2V5XTtcclxuXHJcbiAgcHVibGljIHNldCA9IChrZXksIHZhbHVlKSA9PiB7IHRoaXMuZGVmYXVsdHNba2V5XSA9IHZhbHVlOyB9XHJcbn1cclxuIl19