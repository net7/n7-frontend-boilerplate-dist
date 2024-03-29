import { AwSearchLayoutDS } from '../search-layout/search-layout.ds';
import facetsConfig from './gallery-facets.config';
export class AwGalleryLayoutDS extends AwSearchLayoutDS {
    constructor() {
        super(...arguments);
        this.layoutId = 'aw-gallery-layout';
        this.configId = 'gallery-layout';
        this.currentNav = 'galleria';
        this.headTitle = 'Arianna4View - Galleria';
        this.facetsConfig = facetsConfig;
        this.paginationList = [12, 24, 48];
        this.pageSize = 12; // linked objects page size
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9nYWxsZXJ5LWxheW91dC9nYWxsZXJ5LWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLFlBQVksTUFBTSx5QkFBeUIsQ0FBQztBQUVuRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCO0lBQXZEOztRQUNTLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUUvQixhQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFFNUIsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUV4QixjQUFTLEdBQUcseUJBQXlCLENBQUM7UUFFdEMsaUJBQVksR0FBRyxZQUFZLENBQUM7UUFFNUIsbUJBQWMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFOUIsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtJQUNuRCxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd1NlYXJjaExheW91dERTIH0gZnJvbSAnLi4vc2VhcmNoLWxheW91dC9zZWFyY2gtbGF5b3V0LmRzJztcclxuaW1wb3J0IGZhY2V0c0NvbmZpZyBmcm9tICcuL2dhbGxlcnktZmFjZXRzLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdHYWxsZXJ5TGF5b3V0RFMgZXh0ZW5kcyBBd1NlYXJjaExheW91dERTIHtcclxuICBwdWJsaWMgbGF5b3V0SWQgPSAnYXctZ2FsbGVyeS1sYXlvdXQnO1xyXG5cclxuICBwdWJsaWMgY29uZmlnSWQgPSAnZ2FsbGVyeS1sYXlvdXQnO1xyXG5cclxuICBwdWJsaWMgY3VycmVudE5hdiA9ICdnYWxsZXJpYSc7XHJcblxyXG4gIHB1YmxpYyBoZWFkVGl0bGUgPSAnQXJpYW5uYTRWaWV3IC0gR2FsbGVyaWEnO1xyXG5cclxuICBwdWJsaWMgZmFjZXRzQ29uZmlnID0gZmFjZXRzQ29uZmlnO1xyXG5cclxuICBwdWJsaWMgcGFnaW5hdGlvbkxpc3QgPSBbMTIsIDI0LCA0OF07XHJcblxyXG4gIHB1YmxpYyBwYWdlU2l6ZSA9IDEyOyAvLyBsaW5rZWQgb2JqZWN0cyBwYWdlIHNpemVcclxufVxyXG4iXX0=