/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/home-layout/home-layout.ds.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
var MrHomeLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(MrHomeLayoutDS, _super);
    function MrHomeLayoutDS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    MrHomeLayoutDS.prototype.onInit = /**
     * @return {?}
     */
    function () {
        this.one('mr-resources').updateOptions({ source: 'resources' });
        this.one('mr-collections').updateOptions({ source: 'collections' });
        this.some(['mr-resources', 'mr-collections']).update({});
        this.one('mr-res-header').update({
            title: 'Le mappe',
            subtitle: 'Una selezione di alcune mappe di Totus Mundus.',
            button: {
                text: 'Visita il catalogo',
                link: '/catalogo'
            }
        });
        this.one('mr-coll-header').update({
            title: 'I percorsi',
            subtitle: 'Visita il mondo di Totus Mundus con una serie di percorsi per te.',
            button: {
                text: 'Visita il catalogo',
                link: '/catalogo'
            }
        });
        this.one('mr-hero').update({
            text: 'The Totus Mundus project presents a series of information and data about the jesuit Matteo Ricci, its life, the maps he created and the people he collaborated with',
            button: {
                title: '',
                text: 'Cerca',
                anchor: {
                    href: '/button-url',
                    target: '_blank'
                }
            },
            image: 'https://i.imgur.com/VHTbVbm.png'
        });
    };
    return MrHomeLayoutDS;
}(LayoutDataSource));
export { MrHomeLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0U7SUFBb0MsMENBQWdCO0lBQXBEOztJQWtDQSxDQUFDOzs7O0lBakNDLCtCQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMvQixLQUFLLEVBQUUsVUFBVTtZQUNqQixRQUFRLEVBQUUsZ0RBQWdEO1lBQzFELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixJQUFJLEVBQUUsV0FBVzthQUNsQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEMsS0FBSyxFQUFFLFlBQVk7WUFDbkIsUUFBUSxFQUFFLG1FQUFtRTtZQUM3RSxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxFQUFFLFdBQVc7YUFDbEI7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLEVBQUUscUtBQXFLO1lBQzNLLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLGFBQWE7b0JBQ25CLE1BQU0sRUFBRSxRQUFRO2lCQUNqQjthQUNGO1lBQ0QsS0FBSyxFQUFFLGlDQUFpQztTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBbENELENBQW9DLGdCQUFnQixHQWtDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUvZGlzdC9sYXlvdXQtZGF0YS1zb3VyY2UnO1xuXG5leHBvcnQgY2xhc3MgTXJIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgb25Jbml0KCkge1xuICAgIHRoaXMub25lKCdtci1yZXNvdXJjZXMnKS51cGRhdGVPcHRpb25zKHsgc291cmNlOiAncmVzb3VyY2VzJyB9KTtcbiAgICB0aGlzLm9uZSgnbXItY29sbGVjdGlvbnMnKS51cGRhdGVPcHRpb25zKHsgc291cmNlOiAnY29sbGVjdGlvbnMnIH0pO1xuICAgIHRoaXMuc29tZShbJ21yLXJlc291cmNlcycsICdtci1jb2xsZWN0aW9ucyddKS51cGRhdGUoe30pO1xuICAgIHRoaXMub25lKCdtci1yZXMtaGVhZGVyJykudXBkYXRlKHtcbiAgICAgIHRpdGxlOiAnTGUgbWFwcGUnLFxuICAgICAgc3VidGl0bGU6ICdVbmEgc2VsZXppb25lIGRpIGFsY3VuZSBtYXBwZSBkaSBUb3R1cyBNdW5kdXMuJyxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiAnVmlzaXRhIGlsIGNhdGFsb2dvJyxcbiAgICAgICAgbGluazogJy9jYXRhbG9nbydcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbXItY29sbC1oZWFkZXInKS51cGRhdGUoe1xuICAgICAgdGl0bGU6ICdJIHBlcmNvcnNpJyxcbiAgICAgIHN1YnRpdGxlOiAnVmlzaXRhIGlsIG1vbmRvIGRpIFRvdHVzIE11bmR1cyBjb24gdW5hIHNlcmllIGRpIHBlcmNvcnNpIHBlciB0ZS4nLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6ICdWaXNpdGEgaWwgY2F0YWxvZ28nLFxuICAgICAgICBsaW5rOiAnL2NhdGFsb2dvJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdtci1oZXJvJykudXBkYXRlKHtcbiAgICAgIHRleHQ6ICdUaGUgVG90dXMgTXVuZHVzIHByb2plY3QgcHJlc2VudHMgYSBzZXJpZXMgb2YgaW5mb3JtYXRpb24gYW5kIGRhdGEgYWJvdXQgdGhlIGplc3VpdCBNYXR0ZW8gUmljY2ksIGl0cyBsaWZlLCB0aGUgbWFwcyBoZSBjcmVhdGVkIGFuZCB0aGUgcGVvcGxlIGhlIGNvbGxhYm9yYXRlZCB3aXRoJyxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHRleHQ6ICdDZXJjYScsXG4gICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgIGhyZWY6ICcvYnV0dG9uLXVybCcsXG4gICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW1hZ2U6ICdodHRwczovL2kuaW1ndXIuY29tL1ZIVGJWYm0ucG5nJ1xuICAgIH0pO1xuICB9XG59XG4iXX0=