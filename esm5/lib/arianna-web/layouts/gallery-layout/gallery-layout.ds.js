import { __extends } from "tslib";
import { AwSearchLayoutDS } from '../search-layout/search-layout.ds';
import facetsConfig from './gallery-facets.config';
var AwGalleryLayoutDS = /** @class */ (function (_super) {
    __extends(AwGalleryLayoutDS, _super);
    function AwGalleryLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layoutId = 'aw-gallery-layout';
        _this.configId = 'gallery-layout';
        _this.currentNav = 'galleria';
        _this.headTitle = 'Arianna4View - Galleria';
        _this.facetsConfig = facetsConfig;
        _this.paginationList = [12, 24, 48];
        _this.pageSize = 12; // linked objects page size
        return _this;
    }
    return AwGalleryLayoutDS;
}(AwSearchLayoutDS));
export { AwGalleryLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxZQUFZLE1BQU0seUJBQXlCLENBQUM7QUFFbkQ7SUFBdUMscUNBQWdCO0lBQXZEO1FBQUEscUVBY0M7UUFiUSxjQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFFL0IsY0FBUSxHQUFHLGdCQUFnQixDQUFDO1FBRTVCLGdCQUFVLEdBQUcsVUFBVSxDQUFDO1FBRXhCLGVBQVMsR0FBRyx5QkFBeUIsQ0FBQztRQUV0QyxrQkFBWSxHQUFHLFlBQVksQ0FBQztRQUU1QixvQkFBYyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5QixjQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsMkJBQTJCOztJQUNuRCxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBZEQsQ0FBdUMsZ0JBQWdCLEdBY3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXdTZWFyY2hMYXlvdXREUyB9IGZyb20gJy4uL3NlYXJjaC1sYXlvdXQvc2VhcmNoLWxheW91dC5kcyc7XG5pbXBvcnQgZmFjZXRzQ29uZmlnIGZyb20gJy4vZ2FsbGVyeS1mYWNldHMuY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIEF3R2FsbGVyeUxheW91dERTIGV4dGVuZHMgQXdTZWFyY2hMYXlvdXREUyB7XG4gIHB1YmxpYyBsYXlvdXRJZCA9ICdhdy1nYWxsZXJ5LWxheW91dCc7XG5cbiAgcHVibGljIGNvbmZpZ0lkID0gJ2dhbGxlcnktbGF5b3V0JztcblxuICBwdWJsaWMgY3VycmVudE5hdiA9ICdnYWxsZXJpYSc7XG5cbiAgcHVibGljIGhlYWRUaXRsZSA9ICdBcmlhbm5hNFZpZXcgLSBHYWxsZXJpYSc7XG5cbiAgcHVibGljIGZhY2V0c0NvbmZpZyA9IGZhY2V0c0NvbmZpZztcblxuICBwdWJsaWMgcGFnaW5hdGlvbkxpc3QgPSBbMTIsIDI0LCA0OF07XG5cbiAgcHVibGljIHBhZ2VTaXplID0gMTI7IC8vIGxpbmtlZCBvYmplY3RzIHBhZ2Ugc2l6ZVxufVxuIl19