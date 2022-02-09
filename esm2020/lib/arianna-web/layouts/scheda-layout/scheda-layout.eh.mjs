import { EventHandler } from '@n7-frontend/core';
import { isEmpty } from 'lodash';
import { forkJoin, from, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
export class AwSchedaLayoutEH extends EventHandler {
    constructor() {
        super(...arguments);
        this.destroyed$ = new Subject();
    }
    listen() {
        this.innerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-scheda-layout.init':
                    {
                        this.dataSource.onInit(payload);
                        this.configuration = payload.configuration;
                        this.route = payload.route;
                        const paramId = this.route.snapshot.params.id || '';
                        if (paramId) {
                            this.dataSource.currentId = paramId;
                        }
                        this.listenRoute();
                        this.loadNavigation(paramId);
                        this.emitOuter('viewleaf');
                        // scroll top
                        window.scrollTo(0, 0);
                    }
                    break;
                case 'aw-scheda-layout.destroy':
                    this.destroyed$.next();
                    this.dataSource.onDestroy();
                    break;
                case 'aw-scheda-layout.togglesidebar':
                    this.dataSource.collapseSidebar();
                    break;
                default:
                    console.warn('unhandled inner event of type', type);
                    break;
            }
        });
        this.outerEvents$.subscribe(({ type, payload }) => {
            switch (type) {
                case 'aw-sidebar-header.click':
                    this.dataSource.collapseSidebar();
                    break;
                case 'aw-scheda-dropdown.click':
                    this.dataSource.changeDigitalObject(payload);
                    break;
                default:
                    break;
            }
        });
    }
    listenRoute() {
        this.route.paramMap.subscribe((params) => {
            const paramId = params.get('id');
            if (paramId) {
                if (paramId) {
                    this.dataSource.currentId = paramId;
                    this.emitOuter('routechanged', paramId);
                }
                this.dataSource.contentIsLoading = true;
                this.dataSource.loadItem(paramId).pipe(switchMap((response) => this.parseDigitalObjects$(response))).subscribe((response) => {
                    this.dataSource.contentIsLoading = false;
                    if (response)
                        this.dataSource.loadContent(response);
                });
            }
            // scroll top
            window.scrollTo(0, 0);
        });
    }
    loadNavigation(selectedItem) {
        this.dataSource.updateNavigation('Caricamento in corso...');
        this.dataSource.getNavigation('patrimonio').subscribe((response) => {
            if (response) {
                this.dataSource.setTree(response);
                this.dataSource.updateNavigation(this.dataSource.getTree().label);
                this.emitOuter('navigationresponse', {
                    tree: this.dataSource.getTree(),
                    currentItem: selectedItem,
                    basePath: this.configuration.get('paths').schedaBasePath,
                });
            }
        });
    }
    parseDigitalObjects$(response) {
        const iiifManifest$ = {};
        const baseUrls = this.configuration.get('baseUrls') || {};
        const { iiifServer, iipServer } = baseUrls;
        if (Array.isArray(response?.digitalObjects)) {
            response.digitalObjects.forEach((digitalObject) => {
                // iip config url check
                if (iipServer && digitalObject.type === 'images-iip') {
                    digitalObject.items.forEach((item) => {
                        item.url = `${iipServer}${item.url}`;
                    });
                }
                // iiif config url check
                if (iiifServer && digitalObject.type === 'images-iiif') {
                    digitalObject.items.forEach((item) => {
                        item.url = `${iiifServer}${item.url}`;
                    });
                }
                if (digitalObject.type === 'images-iiif') {
                    digitalObject.items.forEach(({ url }) => {
                        iiifManifest$[url] = from(fetch(url)
                            .then((data) => {
                            if (!data.ok) {
                                throw Error(data.statusText);
                            }
                            return data.json();
                        })
                            .catch((err) => {
                            console.warn(`Error loading iiif manifest ${url}`, err);
                            return null;
                        }));
                    });
                }
            });
        }
        if (!isEmpty(iiifManifest$)) {
            return forkJoin(iiifManifest$).pipe(switchMap((data) => {
                response.digitalObjects.forEach((digitalObject) => {
                    if (digitalObject.type === 'images-iiif') {
                        digitalObject.items.forEach((itemImages, index) => {
                            digitalObject.items[index].iiifImages = this.getManifestImages(data[itemImages.url]);
                        });
                    }
                });
                return of(response);
            }));
        }
        return of(response);
    }
    getManifestImages(manifest) {
        const iiifImages = [];
        if (manifest?.sequences) {
            manifest.sequences.forEach(({ canvases }) => {
                canvases.forEach(({ images }) => {
                    images.forEach(({ resource }) => {
                        iiifImages.push(resource['@id']);
                    });
                });
            });
        }
        return iiifImages;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL243LWJvaWxlcnBsYXRlLWxpYi9zcmMvbGliL2FyaWFubmEtd2ViL2xheW91dHMvc2NoZWRhLWxheW91dC9zY2hlZGEtbGF5b3V0LmVoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFDTCxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQzVCLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBQWxEOztRQUNVLGVBQVUsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQStKbkQsQ0FBQztJQXpKUSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2hELFFBQVEsSUFBSSxFQUFFO2dCQUNaLEtBQUssdUJBQXVCO29CQUFFO3dCQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO3dCQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO3dCQUNwRCxJQUFJLE9BQU8sRUFBRTs0QkFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLFNB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SyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTs0QkFDaEQsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUM1RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUNyQixDQUFDO3dCQUNKLENBQUMsQ0FBQyxDQUFDO3FCQUNKO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxRQUFRO1FBQ2hDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLFFBQVEsRUFBRSxTQUFTLEVBQUU7WUFDdkIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7Z0JBQzFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7b0JBQzlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7d0JBQzlCLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ25DLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7XHJcbiAgZm9ya0pvaW4sIGZyb20sIG9mLCBTdWJqZWN0XHJcbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd1NjaGVkYUxheW91dEVIIGV4dGVuZHMgRXZlbnRIYW5kbGVyIHtcclxuICBwcml2YXRlIGRlc3Ryb3llZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IGFueTtcclxuXHJcbiAgcHVibGljIGxpc3RlbigpIHtcclxuICAgIHRoaXMuaW5uZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5pbml0Jzoge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uSW5pdChwYXlsb2FkKTtcclxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgICAgICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1JZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLmlkIHx8ICcnO1xyXG4gICAgICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmxpc3RlblJvdXRlKCk7XHJcbiAgICAgICAgICB0aGlzLmxvYWROYXZpZ2F0aW9uKHBhcmFtSWQpO1xyXG4gICAgICAgICAgdGhpcy5lbWl0T3V0ZXIoJ3ZpZXdsZWFmJyk7XHJcbiAgICAgICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgfSBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC5kZXN0cm95JzpcclxuICAgICAgICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uub25EZXN0cm95KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWxheW91dC50b2dnbGVzaWRlYmFyJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb2xsYXBzZVNpZGViYXIoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCd1bmhhbmRsZWQgaW5uZXIgZXZlbnQgb2YgdHlwZScsIHR5cGUpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub3V0ZXJFdmVudHMkLnN1YnNjcmliZSgoeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXctc2lkZWJhci1oZWFkZXIuY2xpY2snOlxyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbGxhcHNlU2lkZWJhcigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYXctc2NoZWRhLWRyb3Bkb3duLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jaGFuZ2VEaWdpdGFsT2JqZWN0KHBheWxvYWQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuUm91dGUoKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhcmFtSWQgPSBwYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICBpZiAocGFyYW1JZCkge1xyXG4gICAgICAgIGlmIChwYXJhbUlkKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY3VycmVudElkID0gcGFyYW1JZDtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCdyb3V0ZWNoYW5nZWQnLCBwYXJhbUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbnRlbnRJc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sb2FkSXRlbShwYXJhbUlkKS5waXBlKFxyXG4gICAgICAgICAgc3dpdGNoTWFwKChyZXNwb25zZSkgPT4gdGhpcy5wYXJzZURpZ2l0YWxPYmplY3RzJChyZXNwb25zZSkpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29udGVudElzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB0aGlzLmRhdGFTb3VyY2UubG9hZENvbnRlbnQocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHNjcm9sbCB0b3BcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWROYXZpZ2F0aW9uKHNlbGVjdGVkSXRlbSkge1xyXG4gICAgdGhpcy5kYXRhU291cmNlLnVwZGF0ZU5hdmlnYXRpb24oJ0NhcmljYW1lbnRvIGluIGNvcnNvLi4uJyk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZ2V0TmF2aWdhdGlvbigncGF0cmltb25pbycpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNldFRyZWUocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVOYXZpZ2F0aW9uKHRoaXMuZGF0YVNvdXJjZS5nZXRUcmVlKCkubGFiZWwpO1xyXG4gICAgICAgIHRoaXMuZW1pdE91dGVyKCduYXZpZ2F0aW9ucmVzcG9uc2UnLCB7XHJcbiAgICAgICAgICB0cmVlOiB0aGlzLmRhdGFTb3VyY2UuZ2V0VHJlZSgpLFxyXG4gICAgICAgICAgY3VycmVudEl0ZW06IHNlbGVjdGVkSXRlbSxcclxuICAgICAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGFyc2VEaWdpdGFsT2JqZWN0cyQocmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IGlpaWZNYW5pZmVzdCQgPSB7fTtcclxuICAgIGNvbnN0IGJhc2VVcmxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYmFzZVVybHMnKSB8fCB7fTtcclxuICAgIGNvbnN0IHsgaWlpZlNlcnZlciwgaWlwU2VydmVyIH0gPSBiYXNlVXJscztcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3BvbnNlPy5kaWdpdGFsT2JqZWN0cykpIHtcclxuICAgICAgcmVzcG9uc2UuZGlnaXRhbE9iamVjdHMuZm9yRWFjaCgoZGlnaXRhbE9iamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIGlpcCBjb25maWcgdXJsIGNoZWNrXHJcbiAgICAgICAgaWYgKGlpcFNlcnZlciAmJiBkaWdpdGFsT2JqZWN0LnR5cGUgPT09ICdpbWFnZXMtaWlwJykge1xyXG4gICAgICAgICAgZGlnaXRhbE9iamVjdC5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0udXJsID0gYCR7aWlwU2VydmVyfSR7aXRlbS51cmx9YDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpaWlmIGNvbmZpZyB1cmwgY2hlY2tcclxuICAgICAgICBpZiAoaWlpZlNlcnZlciAmJiBkaWdpdGFsT2JqZWN0LnR5cGUgPT09ICdpbWFnZXMtaWlpZicpIHtcclxuICAgICAgICAgIGRpZ2l0YWxPYmplY3QuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnVybCA9IGAke2lpaWZTZXJ2ZXJ9JHtpdGVtLnVybH1gO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlnaXRhbE9iamVjdC50eXBlID09PSAnaW1hZ2VzLWlpaWYnKSB7XHJcbiAgICAgICAgICBkaWdpdGFsT2JqZWN0Lml0ZW1zLmZvckVhY2goKHsgdXJsIH0pID0+IHtcclxuICAgICAgICAgICAgaWlpZk1hbmlmZXN0JFt1cmxdID0gZnJvbShcclxuICAgICAgICAgICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihkYXRhLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEVycm9yIGxvYWRpbmcgaWlpZiBtYW5pZmVzdCAke3VybH1gLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0VtcHR5KGlpaWZNYW5pZmVzdCQpKSB7XHJcbiAgICAgIHJldHVybiBmb3JrSm9pbihpaWlmTWFuaWZlc3QkKS5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcCgoZGF0YTogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICByZXNwb25zZS5kaWdpdGFsT2JqZWN0cy5mb3JFYWNoKChkaWdpdGFsT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdGFsT2JqZWN0LnR5cGUgPT09ICdpbWFnZXMtaWlpZicpIHtcclxuICAgICAgICAgICAgICBkaWdpdGFsT2JqZWN0Lml0ZW1zLmZvckVhY2goKGl0ZW1JbWFnZXMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWdpdGFsT2JqZWN0Lml0ZW1zW2luZGV4XS5paWlmSW1hZ2VzID0gdGhpcy5nZXRNYW5pZmVzdEltYWdlcyhcclxuICAgICAgICAgICAgICAgICAgZGF0YVtpdGVtSW1hZ2VzLnVybF1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIG9mKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TWFuaWZlc3RJbWFnZXMobWFuaWZlc3QpIHtcclxuICAgIGNvbnN0IGlpaWZJbWFnZXMgPSBbXTtcclxuICAgIGlmIChtYW5pZmVzdD8uc2VxdWVuY2VzKSB7XHJcbiAgICAgIG1hbmlmZXN0LnNlcXVlbmNlcy5mb3JFYWNoKCh7IGNhbnZhc2VzIH0pID0+IHtcclxuICAgICAgICBjYW52YXNlcy5mb3JFYWNoKCh7IGltYWdlcyB9KSA9PiB7XHJcbiAgICAgICAgICBpbWFnZXMuZm9yRWFjaCgoeyByZXNvdXJjZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlpaWZJbWFnZXMucHVzaChyZXNvdXJjZVsnQGlkJ10pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlpaWZJbWFnZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==