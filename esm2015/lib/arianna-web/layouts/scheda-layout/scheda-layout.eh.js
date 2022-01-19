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
        if (Array.isArray(response === null || response === void 0 ? void 0 : response.digitalObjects)) {
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
        if (manifest === null || manifest === void 0 ? void 0 : manifest.sequences) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWRhLWxheW91dC5laC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL3NjaGVkYS1sYXlvdXQvc2NoZWRhLWxheW91dC5laC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUM1QixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsWUFBWTtJQUFsRDs7UUFDVSxlQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7SUErSm5ELENBQUM7SUF6SlEsTUFBTTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLHVCQUF1QjtvQkFBRTt3QkFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMzQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQzt3QkFDcEQsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO3lCQUNy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Q0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUU7NEJBQ2hELGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FDckIsQ0FBQzt3QkFDSixDQUFDLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU8saUJBQWlCLENBQUMsUUFBUTtRQUNoQyxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsU0FBUyxFQUFFO1lBQ3ZCLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO2dCQUMxQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO29CQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dCQUM5QixVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQge1xyXG4gIGZvcmtKb2luLCBmcm9tLCBvZiwgU3ViamVjdFxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdTY2hlZGFMYXlvdXRFSCBleHRlbmRzIEV2ZW50SGFuZGxlciB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIHJvdXRlOiBhbnk7XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XHJcbiAgICB0aGlzLmlubmVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuaW5pdCc6IHtcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5vbkluaXQocGF5bG9hZCk7XHJcbiAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICAgICAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZCB8fCAnJztcclxuICAgICAgICAgIGlmIChwYXJhbUlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jdXJyZW50SWQgPSBwYXJhbUlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5saXN0ZW5Sb3V0ZSgpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkTmF2aWdhdGlvbihwYXJhbUlkKTtcclxuICAgICAgICAgIHRoaXMuZW1pdE91dGVyKCd2aWV3bGVhZicpO1xyXG4gICAgICAgICAgLy8gc2Nyb2xsIHRvcFxyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIH0gYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQuZGVzdHJveSc6XHJcbiAgICAgICAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLm9uRGVzdHJveSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1sYXlvdXQudG9nZ2xlc2lkZWJhcic6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29sbGFwc2VTaWRlYmFyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnNvbGUud2FybigndW5oYW5kbGVkIGlubmVyIGV2ZW50IG9mIHR5cGUnLCB0eXBlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm91dGVyRXZlbnRzJC5zdWJzY3JpYmUoKHsgdHlwZSwgcGF5bG9hZCB9KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2F3LXNpZGViYXItaGVhZGVyLmNsaWNrJzpcclxuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb2xsYXBzZVNpZGViYXIoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2F3LXNjaGVkYS1kcm9wZG93bi5jbGljayc6XHJcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY2hhbmdlRGlnaXRhbE9iamVjdChwYXlsb2FkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblJvdXRlKCkge1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICBjb25zdCBwYXJhbUlkID0gcGFyYW1zLmdldCgnaWQnKTtcclxuICAgICAgaWYgKHBhcmFtSWQpIHtcclxuICAgICAgICBpZiAocGFyYW1JZCkge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmN1cnJlbnRJZCA9IHBhcmFtSWQ7XHJcbiAgICAgICAgICB0aGlzLmVtaXRPdXRlcigncm91dGVjaGFuZ2VkJywgcGFyYW1JZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb250ZW50SXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubG9hZEl0ZW0ocGFyYW1JZCkucGlwZShcclxuICAgICAgICAgIHN3aXRjaE1hcCgocmVzcG9uc2UpID0+IHRoaXMucGFyc2VEaWdpdGFsT2JqZWN0cyQocmVzcG9uc2UpKVxyXG4gICAgICAgICkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbnRlbnRJc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZSkgdGhpcy5kYXRhU291cmNlLmxvYWRDb250ZW50KHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBzY3JvbGwgdG9wXHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkTmF2aWdhdGlvbihzZWxlY3RlZEl0ZW0pIHtcclxuICAgIHRoaXMuZGF0YVNvdXJjZS51cGRhdGVOYXZpZ2F0aW9uKCdDYXJpY2FtZW50byBpbiBjb3Jzby4uLicpO1xyXG4gICAgdGhpcy5kYXRhU291cmNlLmdldE5hdmlnYXRpb24oJ3BhdHJpbW9uaW8nKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRUcmVlKHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UudXBkYXRlTmF2aWdhdGlvbih0aGlzLmRhdGFTb3VyY2UuZ2V0VHJlZSgpLmxhYmVsKTtcclxuICAgICAgICB0aGlzLmVtaXRPdXRlcignbmF2aWdhdGlvbnJlc3BvbnNlJywge1xyXG4gICAgICAgICAgdHJlZTogdGhpcy5kYXRhU291cmNlLmdldFRyZWUoKSxcclxuICAgICAgICAgIGN1cnJlbnRJdGVtOiBzZWxlY3RlZEl0ZW0sXHJcbiAgICAgICAgICBiYXNlUGF0aDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKS5zY2hlZGFCYXNlUGF0aCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBhcnNlRGlnaXRhbE9iamVjdHMkKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zdCBpaWlmTWFuaWZlc3QkID0ge307XHJcbiAgICBjb25zdCBiYXNlVXJscyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2Jhc2VVcmxzJykgfHwge307XHJcbiAgICBjb25zdCB7IGlpaWZTZXJ2ZXIsIGlpcFNlcnZlciB9ID0gYmFzZVVybHM7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZT8uZGlnaXRhbE9iamVjdHMpKSB7XHJcbiAgICAgIHJlc3BvbnNlLmRpZ2l0YWxPYmplY3RzLmZvckVhY2goKGRpZ2l0YWxPYmplY3QpID0+IHtcclxuICAgICAgICAvLyBpaXAgY29uZmlnIHVybCBjaGVja1xyXG4gICAgICAgIGlmIChpaXBTZXJ2ZXIgJiYgZGlnaXRhbE9iamVjdC50eXBlID09PSAnaW1hZ2VzLWlpcCcpIHtcclxuICAgICAgICAgIGRpZ2l0YWxPYmplY3QuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnVybCA9IGAke2lpcFNlcnZlcn0ke2l0ZW0udXJsfWA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWlpZiBjb25maWcgdXJsIGNoZWNrXHJcbiAgICAgICAgaWYgKGlpaWZTZXJ2ZXIgJiYgZGlnaXRhbE9iamVjdC50eXBlID09PSAnaW1hZ2VzLWlpaWYnKSB7XHJcbiAgICAgICAgICBkaWdpdGFsT2JqZWN0Lml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS51cmwgPSBgJHtpaWlmU2VydmVyfSR7aXRlbS51cmx9YDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpZ2l0YWxPYmplY3QudHlwZSA9PT0gJ2ltYWdlcy1paWlmJykge1xyXG4gICAgICAgICAgZGlnaXRhbE9iamVjdC5pdGVtcy5mb3JFYWNoKCh7IHVybCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlpaWZNYW5pZmVzdCRbdXJsXSA9IGZyb20oXHJcbiAgICAgICAgICAgICAgZmV0Y2godXJsKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoZGF0YS5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBFcnJvciBsb2FkaW5nIGlpaWYgbWFuaWZlc3QgJHt1cmx9YCwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghaXNFbXB0eShpaWlmTWFuaWZlc3QkKSkge1xyXG4gICAgICByZXR1cm4gZm9ya0pvaW4oaWlpZk1hbmlmZXN0JCkucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAoKGRhdGE6IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgcmVzcG9uc2UuZGlnaXRhbE9iamVjdHMuZm9yRWFjaCgoZGlnaXRhbE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGlnaXRhbE9iamVjdC50eXBlID09PSAnaW1hZ2VzLWlpaWYnKSB7XHJcbiAgICAgICAgICAgICAgZGlnaXRhbE9iamVjdC5pdGVtcy5mb3JFYWNoKChpdGVtSW1hZ2VzLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlnaXRhbE9iamVjdC5pdGVtc1tpbmRleF0uaWlpZkltYWdlcyA9IHRoaXMuZ2V0TWFuaWZlc3RJbWFnZXMoXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFbaXRlbUltYWdlcy51cmxdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBvZihyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZihyZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE1hbmlmZXN0SW1hZ2VzKG1hbmlmZXN0KSB7XHJcbiAgICBjb25zdCBpaWlmSW1hZ2VzID0gW107XHJcbiAgICBpZiAobWFuaWZlc3Q/LnNlcXVlbmNlcykge1xyXG4gICAgICBtYW5pZmVzdC5zZXF1ZW5jZXMuZm9yRWFjaCgoeyBjYW52YXNlcyB9KSA9PiB7XHJcbiAgICAgICAgY2FudmFzZXMuZm9yRWFjaCgoeyBpbWFnZXMgfSkgPT4ge1xyXG4gICAgICAgICAgaW1hZ2VzLmZvckVhY2goKHsgcmVzb3VyY2UgfSkgPT4ge1xyXG4gICAgICAgICAgICBpaWlmSW1hZ2VzLnB1c2gocmVzb3VyY2VbJ0BpZCddKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpaWlmSW1hZ2VzO1xyXG4gIH1cclxufVxyXG4iXX0=