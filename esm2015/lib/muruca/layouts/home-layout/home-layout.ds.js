/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import homeMock from './home-layout-mock';
export class MrHomeLayoutDS extends LayoutDataSource {
    /**
     * @param {?} payload
     * @return {?}
     */
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        this.doRequest();
    }
    /**
     * @return {?}
     */
    doRequest() {
        const { sections } = this.pageConfig;
        if (sections) {
            // FIXME: collegare API
            // this.communication.request$('sections', {
            //   method: 'POST',
            //   params: sections.map(({ id }) => id)
            // }).subscribe((response) => {
            //   this.initSections(response);
            // });
            this.initSections(homeMock);
        }
    }
    /**
     * @param {?} response
     * @return {?}
     */
    initSections(response) {
        const { sections } = this.pageConfig;
        if (sections) {
            sections.forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ({ id }) => {
                /** @type {?} */
                const widgetDataSource = this.getWidgetDataSource(id);
                /** @type {?} */
                const responseData = response[id];
                // set id
                widgetDataSource.id = id;
                // update data
                if (responseData) {
                    this.one(id).update(responseData);
                }
            }));
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutDS.prototype.configId;
    /**
     * @type {?}
     * @private
     */
    MrHomeLayoutDS.prototype.pageConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRzdFLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBRTFDLE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCOzs7OztJQVNsRCxNQUFNLENBQUMsT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFNBQVM7Y0FDRCxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVO1FBRXBDLElBQUksUUFBUSxFQUFFO1lBQ1osdUJBQXVCO1lBQ3ZCLDRDQUE0QztZQUM1QyxvQkFBb0I7WUFDcEIseUNBQXlDO1lBQ3pDLCtCQUErQjtZQUMvQixpQ0FBaUM7WUFDakMsTUFBTTtZQUVOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxRQUFRO2NBQ2IsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVTtRQUVwQyxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7O3NCQUNwQixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDOztzQkFDL0MsWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLFNBQVM7Z0JBQ1QsZ0JBQWdCLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsY0FBYztnQkFDZCxJQUFJLFlBQVksRUFBRTtvQkFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ25DO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRjs7Ozs7O0lBakRDLHVDQUE0Qzs7Ozs7SUFFNUMsdUNBQTRDOzs7OztJQUU1QyxrQ0FBeUI7Ozs7O0lBRXpCLG9DQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCBob21lTW9jayBmcm9tICcuL2hvbWUtbGF5b3V0LW1vY2snO1xuXG5leHBvcnQgY2xhc3MgTXJIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29uZmlnSWQ6IHN0cmluZztcblxuICBwcml2YXRlIHBhZ2VDb25maWc7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkgfHwge307XG5cbiAgICB0aGlzLmRvUmVxdWVzdCgpO1xuICB9XG5cbiAgZG9SZXF1ZXN0KCkge1xuICAgIGNvbnN0IHsgc2VjdGlvbnMgfSA9IHRoaXMucGFnZUNvbmZpZztcblxuICAgIGlmIChzZWN0aW9ucykge1xuICAgICAgLy8gRklYTUU6IGNvbGxlZ2FyZSBBUElcbiAgICAgIC8vIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnc2VjdGlvbnMnLCB7XG4gICAgICAvLyAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgLy8gICBwYXJhbXM6IHNlY3Rpb25zLm1hcCgoeyBpZCB9KSA9PiBpZClcbiAgICAgIC8vIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vICAgdGhpcy5pbml0U2VjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIHRoaXMuaW5pdFNlY3Rpb25zKGhvbWVNb2NrKTtcbiAgICB9XG4gIH1cblxuICBpbml0U2VjdGlvbnMocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IHNlY3Rpb25zIH0gPSB0aGlzLnBhZ2VDb25maWc7XG5cbiAgICBpZiAoc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCB3aWRnZXREYXRhU291cmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKGlkKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2VbaWRdO1xuICAgICAgICAvLyBzZXQgaWRcbiAgICAgICAgd2lkZ2V0RGF0YVNvdXJjZS5pZCA9IGlkO1xuICAgICAgICAvLyB1cGRhdGUgZGF0YVxuICAgICAgICBpZiAocmVzcG9uc2VEYXRhKSB7XG4gICAgICAgICAgdGhpcy5vbmUoaWQpLnVwZGF0ZShyZXNwb25zZURhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==