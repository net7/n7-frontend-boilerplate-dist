import { LayoutDataSource, _t } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import 'leaflet.markercluster';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
export class MrTimelineLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.loading = {
            resourceDetails: true,
            timeline: true,
        };
        this.defaultDescription = '';
        this.eventDescription = '';
        this.hasMap = false;
        this.timelineListener$ = new Subject();
    }
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.location = payload.location;
        this.configId = payload.configId;
        this.pageConfig = this.configuration.get(this.configId) || {};
        // update the timeline
        this.communication.request$('timeline', {
            method: 'GET',
            onError: (e) => console.error(e)
        }).subscribe((d) => {
            this.timelineData = d;
            this.loading.timeline = false;
            this.one('mr-timeline').updateOptions({ libOptions: this.pageConfig.libOptions });
            this.one('mr-timeline').update(d);
        });
        this.getWidgetDataSource('mr-timeline').timelineLoaded$
            .pipe(first())
            .subscribe((timeline) => {
            this.timelineListener$.next(timeline);
        });
        // update the description
        this.communication.request$('timelineDescription', {
            method: 'GET',
            onError: (e) => console.error(e),
        }).subscribe((d) => {
            this.defaultDescription = d.text;
            this.loadDefaults(false);
        });
        // set map header
        this.mapHeader = _t(this.pageConfig.mapHeader);
    }
    loadDefaults(navigate) {
        const timelineInstance = this.getWidgetDataSource('mr-timeline').timeline;
        if (timelineInstance) {
            timelineInstance.setSelection([]);
        }
        this.eventDescription = this.defaultDescription;
        this.eventHeader = '';
        this.hasMap = false;
        this.bibliographyData = undefined;
        this.collectionWitnessData = undefined;
        this.collectionWorksData = undefined;
        this.collectionGalleryData = undefined;
        if (navigate)
            this.location.go('/timeline/');
        this.one('mr-year-header').update({
            title: { main: { text: _t(this.pageConfig.title) } },
        });
    }
    updatePageDetails(id) {
        this.communication.request$('resource', {
            onError: (e) => console.error(e),
            method: 'POST',
            params: {
                id, type: 'views/time-events'
            }
        }).subscribe((res) => {
            if (!res || res == null)
                return;
            const { 
            /* eslint-disable */
            'collection-bibliography': bibData, 'collection-places': placesData, 'collection-witnesses': witnessData, 'collection-works': worksData, gallery, header, } = res.sections;
            if (placesData) {
                this.hasMap = true;
                this.one('mr-map').update(placesData);
            }
            else {
                this.hasMap = false;
            }
            if (bibData) {
                this.bibliographyData = {
                    header: bibData.header,
                    items: bibData.items.map((item) => (Object.assign(Object.assign({}, item), { anchor: {
                            payload: item.payload
                        }, classes: 'mr-item-preview-bibliography' })))
                };
            }
            else {
                this.bibliographyData = undefined;
            }
            if (witnessData) {
                this.collectionWitnessData = {
                    items: witnessData.items.map((witness) => ({
                        title: witness.title,
                        anchor: {
                            href: witness.link,
                        }
                    })),
                    header: witnessData.header
                };
            }
            else {
                this.collectionWitnessData = undefined;
            }
            if (worksData === null || worksData === void 0 ? void 0 : worksData.items) {
                this.collectionWorksData = {
                    header: worksData.header,
                    items: worksData.items.map((item) => ({
                        image: item.image,
                        title: item.title,
                        anchor: item.link ? {
                            href: item.link,
                        } : undefined,
                        text: item.text,
                    }))
                };
            }
            else {
                this.collectionWorksData = undefined;
            }
            if (gallery) {
                this.collectionGalleryData = gallery;
            }
            else {
                this.collectionGalleryData = undefined;
            }
            if (header) {
                this.eventDescription = header.content;
                this.eventHeader = res.title;
                this.one('mr-year-header').update({
                    title: { main: { text: header.title } },
                    actions: {
                        buttons: [{
                                text: '',
                                icon: 'n7-icon-close',
                                anchor: {
                                    payload: 'closebutton'
                                }
                            }]
                    }
                });
            }
            this.loading.resourceDetails = false;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3ZDLE9BQU8sdUJBQXVCLENBQUM7QUFHL0Isa0VBQWtFO0FBRWxFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFBeEQ7O1FBZVMsWUFBTyxHQUFHO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFBO1FBRU0sdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBSXhCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUlyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBTWYsc0JBQWlCLEdBQXNCLElBQUksT0FBTyxFQUFFLENBQUE7SUFpTDdELENBQUM7SUFySkMsTUFBTSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5RCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3RDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlO2FBQ3BELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNiLFNBQVMsQ0FBQyxDQUFDLFFBQWtCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUwseUJBQXlCO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO1lBQ2pELE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILGlCQUFpQjtRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxZQUFZLENBQUMsUUFBaUI7UUFDNUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBb0IsQ0FBQztRQUN0RixJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7UUFDckMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztRQUN2QyxJQUFJLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO1NBQ3JELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFO2dCQUNOLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CO2FBQzlCO1NBQ0YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQXdCLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJO2dCQUFFLE9BQU87WUFDaEMsTUFBTTtZQUNKLG9CQUFvQjtZQUNwQix5QkFBeUIsRUFBRSxPQUFPLEVBQ2xDLG1CQUFtQixFQUFFLFVBQVUsRUFDL0Isc0JBQXNCLEVBQUUsV0FBVyxFQUNuQyxrQkFBa0IsRUFBRSxTQUFTLEVBQzdCLE9BQU8sRUFDUCxNQUFNLEdBRVAsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ2pCLElBQUksVUFBVSxFQUFFO2dCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUNELElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztvQkFDdEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO29CQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGlDQUM5QixJQUFJLEtBQ1AsTUFBTSxFQUFFOzRCQUNOLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzt5QkFDdEIsRUFDRCxPQUFPLEVBQUUsOEJBQThCLElBQ3ZDLENBQUM7aUJBQ0osQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7YUFDbkM7WUFDRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMscUJBQXFCLEdBQUc7b0JBQzNCLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BRTdCLEVBQW1CLEVBQUUsQ0FBQyxDQUFDO3dCQUN0QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7d0JBQ3BCLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7eUJBQ25CO3FCQUNGLENBQUMsQ0FBQztvQkFDSCxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU07aUJBQzNCLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsS0FBSyxFQUFFO2dCQUNwQixJQUFJLENBQUMsbUJBQW1CLEdBQUc7b0JBQ3pCLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtvQkFDeEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDcEQsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3lCQUNoQixDQUFDLENBQUMsQ0FBQyxTQUFTO3dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDaEIsQ0FBQyxDQUFDO2lCQUNKLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO2FBQ3RDO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDdkMsT0FBTyxFQUFFO3dCQUNQLE9BQU8sRUFBRSxDQUFDO2dDQUNSLElBQUksRUFBRSxFQUFFO2dDQUNSLElBQUksRUFBRSxlQUFlO2dDQUNyQixNQUFNLEVBQUU7b0NBQ04sT0FBTyxFQUFFLGFBQWE7aUNBQ3ZCOzZCQUNGLENBQUM7cUJBQ0g7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlLCBfdCB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEl0ZW1QcmV2aWV3RGF0YSwgVGltZWxpbmVEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGltZWxpbmUgfSBmcm9tICd2aXMtdGltZWxpbmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1yTGF5b3V0U3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGF5b3V0LXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0ICdsZWFmbGV0Lm1hcmtlcmNsdXN0ZXInO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkl0ZW0sIEdldFJlc291cmNlUmVzcG9uc2UgfSBmcm9tICcuL3RpbWVsaW5lLWxheW91dC50eXBlcyc7XG5cbi8vIGRlbW8gcGFnZTogaHR0cDovL2xvY2FsaG9zdDo0MjAwL3RpbWVsaW5lLzI5OTIvbWlzc2lvbmUtdmVuZXppYVxuXG5leHBvcnQgY2xhc3MgTXJUaW1lbGluZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcblxuICBwcml2YXRlIGxheW91dFN0YXRlOiBNckxheW91dFN0YXRlU2VydmljZTtcblxuICBwcml2YXRlIGNvbmZpZ0lkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBwYWdlQ29uZmlnO1xuXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xuXG4gIHB1YmxpYyBsb2FkaW5nID0ge1xuICAgIHJlc291cmNlRGV0YWlsczogdHJ1ZSxcbiAgICB0aW1lbGluZTogdHJ1ZSxcbiAgfVxuXG4gIHB1YmxpYyBkZWZhdWx0RGVzY3JpcHRpb24gPSAnJztcblxuICBwdWJsaWMgZXZlbnRIZWFkZXI6IHN0cmluZztcblxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICcnXG5cbiAgcHVibGljIHRpbWVsaW5lRGF0YTogVGltZWxpbmVEYXRhO1xuXG4gIHB1YmxpYyBoYXNNYXAgPSBmYWxzZTtcblxuICBwdWJsaWMgcm91dGU7XG5cbiAgcHVibGljIG1hcEhlYWRlcjtcblxuICBwdWJsaWMgdGltZWxpbmVMaXN0ZW5lciQ6IFN1YmplY3Q8VGltZWxpbmU+ID0gbmV3IFN1YmplY3QoKVxuXG4gIHB1YmxpYyBiaWJsaW9ncmFwaHlEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczoge1xuICAgICAgcGF5bG9hZD86IHtcbiAgICAgICAgYWN0aW9uOiBzdHJpbmc7XG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgIH07XG4gICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIH1bXTtcbiAgfVxuXG4gIHB1YmxpYyBjb2xsZWN0aW9uV29ya3NEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XG4gIH1cblxuICBwdWJsaWMgY29sbGVjdGlvbldpdG5lc3NEYXRhOiB7XG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcgfTtcbiAgICBpdGVtczogSXRlbVByZXZpZXdEYXRhW107XG4gIH07XG5cbiAgcHVibGljIGNvbGxlY3Rpb25HYWxsZXJ5RGF0YTtcblxuICBwdWJsaWMgZXZlbnRUaXRsZTogc3RyaW5nO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbjtcblxuICAgIHRoaXMuY29uZmlnSWQgPSBwYXlsb2FkLmNvbmZpZ0lkO1xuICAgIHRoaXMucGFnZUNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQodGhpcy5jb25maWdJZCkgfHwge307XG5cbiAgICAvLyB1cGRhdGUgdGhlIHRpbWVsaW5lXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZScsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKVxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xuICAgICAgdGhpcy50aW1lbGluZURhdGEgPSBkO1xuICAgICAgdGhpcy5sb2FkaW5nLnRpbWVsaW5lID0gZmFsc2U7XG4gICAgICB0aGlzLm9uZSgnbXItdGltZWxpbmUnKS51cGRhdGVPcHRpb25zKHsgbGliT3B0aW9uczogdGhpcy5wYWdlQ29uZmlnLmxpYk9wdGlvbnMgfSk7XG4gICAgICB0aGlzLm9uZSgnbXItdGltZWxpbmUnKS51cGRhdGUoZCk7XG4gICAgfSk7XG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJFxuICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHRpbWVsaW5lOiBUaW1lbGluZSkgPT4ge1xuICAgICAgICB0aGlzLnRpbWVsaW5lTGlzdGVuZXIkLm5leHQodGltZWxpbmUpO1xuICAgICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgdGhlIGRlc2NyaXB0aW9uXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCd0aW1lbGluZURlc2NyaXB0aW9uJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxuICAgIH0pLnN1YnNjcmliZSgoZCkgPT4ge1xuICAgICAgdGhpcy5kZWZhdWx0RGVzY3JpcHRpb24gPSBkLnRleHQ7XG4gICAgICB0aGlzLmxvYWREZWZhdWx0cyhmYWxzZSk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgbWFwIGhlYWRlclxuICAgIHRoaXMubWFwSGVhZGVyID0gX3QodGhpcy5wYWdlQ29uZmlnLm1hcEhlYWRlcik7XG4gIH1cblxuICBsb2FkRGVmYXVsdHMobmF2aWdhdGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0aW1lbGluZUluc3RhbmNlID0gdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lIGFzIFRpbWVsaW5lO1xuICAgIGlmICh0aW1lbGluZUluc3RhbmNlKSB7XG4gICAgICB0aW1lbGluZUluc3RhbmNlLnNldFNlbGVjdGlvbihbXSk7XG4gICAgfVxuICAgIHRoaXMuZXZlbnREZXNjcmlwdGlvbiA9IHRoaXMuZGVmYXVsdERlc2NyaXB0aW9uO1xuICAgIHRoaXMuZXZlbnRIZWFkZXIgPSAnJztcbiAgICB0aGlzLmhhc01hcCA9IGZhbHNlO1xuICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbGxlY3Rpb25XaXRuZXNzRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb2xsZWN0aW9uR2FsbGVyeURhdGEgPSB1bmRlZmluZWQ7XG4gICAgaWYgKG5hdmlnYXRlKSB0aGlzLmxvY2F0aW9uLmdvKCcvdGltZWxpbmUvJyk7XG4gICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogX3QodGhpcy5wYWdlQ29uZmlnLnRpdGxlKSB9IH0sXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVQYWdlRGV0YWlscyhpZCkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgncmVzb3VyY2UnLCB7XG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkLCB0eXBlOiAndmlld3MvdGltZS1ldmVudHMnXG4gICAgICB9XG4gICAgfSkuc3Vic2NyaWJlKChyZXM6IEdldFJlc291cmNlUmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzIHx8IHJlcyA9PSBudWxsKSByZXR1cm47XG4gICAgICBjb25zdCB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgICdjb2xsZWN0aW9uLWJpYmxpb2dyYXBoeSc6IGJpYkRhdGEsXG4gICAgICAgICdjb2xsZWN0aW9uLXBsYWNlcyc6IHBsYWNlc0RhdGEsXG4gICAgICAgICdjb2xsZWN0aW9uLXdpdG5lc3Nlcyc6IHdpdG5lc3NEYXRhLFxuICAgICAgICAnY29sbGVjdGlvbi13b3Jrcyc6IHdvcmtzRGF0YSxcbiAgICAgICAgZ2FsbGVyeSxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgICB9ID0gcmVzLnNlY3Rpb25zO1xuICAgICAgaWYgKHBsYWNlc0RhdGEpIHtcbiAgICAgICAgdGhpcy5oYXNNYXAgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHBsYWNlc0RhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYXNNYXAgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChiaWJEYXRhKSB7XG4gICAgICAgIHRoaXMuYmlibGlvZ3JhcGh5RGF0YSA9IHtcbiAgICAgICAgICBoZWFkZXI6IGJpYkRhdGEuaGVhZGVyLFxuICAgICAgICAgIGl0ZW1zOiBiaWJEYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgcGF5bG9hZDogaXRlbS5wYXlsb2FkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NlczogJ21yLWl0ZW0tcHJldmlldy1iaWJsaW9ncmFwaHknXG4gICAgICAgICAgfSkpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJpYmxpb2dyYXBoeURhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAod2l0bmVzc0RhdGEpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB7XG4gICAgICAgICAgaXRlbXM6IHdpdG5lc3NEYXRhLml0ZW1zLm1hcCgod2l0bmVzczoge1xuICAgICAgICAgICAgbGluazogc3RyaW5nOyB0aXRsZTogc3RyaW5nOyB0eXBlOiBzdHJpbmc7XG4gICAgICAgICAgfSk6IEl0ZW1QcmV2aWV3RGF0YSA9PiAoe1xuICAgICAgICAgICAgdGl0bGU6IHdpdG5lc3MudGl0bGUsXG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgaHJlZjogd2l0bmVzcy5saW5rLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBoZWFkZXI6IHdpdG5lc3NEYXRhLmhlYWRlclxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uV2l0bmVzc0RhdGEgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAod29ya3NEYXRhPy5pdGVtcykge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25Xb3Jrc0RhdGEgPSB7XG4gICAgICAgICAgaGVhZGVyOiB3b3Jrc0RhdGEuaGVhZGVyLFxuICAgICAgICAgIGl0ZW1zOiB3b3Jrc0RhdGEuaXRlbXMubWFwKChpdGVtOiBDb2xsZWN0aW9uSXRlbSkgPT4gKHtcbiAgICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICBhbmNob3I6IGl0ZW0ubGluayA/IHtcbiAgICAgICAgICAgICAgaHJlZjogaXRlbS5saW5rLFxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcbiAgICAgICAgICB9KSlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbldvcmtzRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChnYWxsZXJ5KSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gZ2FsbGVyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkdhbGxlcnlEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICB0aGlzLmV2ZW50RGVzY3JpcHRpb24gPSBoZWFkZXIuY29udGVudDtcbiAgICAgICAgdGhpcy5ldmVudEhlYWRlciA9IHJlcy50aXRsZTtcbiAgICAgICAgdGhpcy5vbmUoJ21yLXllYXItaGVhZGVyJykudXBkYXRlKHtcbiAgICAgICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IGhlYWRlci50aXRsZSB9IH0sXG4gICAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgIGljb246ICduNy1pY29uLWNsb3NlJyxcbiAgICAgICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZDogJ2Nsb3NlYnV0dG9uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcucmVzb3VyY2VEZXRhaWxzID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==