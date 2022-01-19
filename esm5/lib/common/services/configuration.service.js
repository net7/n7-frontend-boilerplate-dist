import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        var _this = this;
        this.defaults = {};
        this.get = function (key) { return _this.defaults[key]; };
        this.set = function (key, value) { _this.defaults[key] = value; };
    }
    ConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });
    ConfigurationService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ConfigurationService);
    return ConfigurationService;
}());
export { ConfigurationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBQUE7UUFBQSxpQkFNQztRQUxTLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFcEIsUUFBRyxHQUFHLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQztRQUVsQyxRQUFHLEdBQUcsVUFBQyxHQUFHLEVBQUUsS0FBSyxJQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzdEOztJQU5ZLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csb0JBQW9CLENBTWhDOytCQVhEO0NBV0MsQUFORCxJQU1DO1NBTlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGRlZmF1bHRzOiBhbnkgPSB7fTtcclxuXHJcbiAgcHVibGljIGdldCA9IChrZXkpID0+IHRoaXMuZGVmYXVsdHNba2V5XTtcclxuXHJcbiAgcHVibGljIHNldCA9IChrZXksIHZhbHVlKSA9PiB7IHRoaXMuZGVmYXVsdHNba2V5XSA9IHZhbHVlOyB9XHJcbn1cclxuIl19