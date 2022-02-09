import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
import { first, map } from 'rxjs/operators';
import slugify from 'slugify';
export class AwCollectionLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.classificationsMap = {
            ff400: 'fondo-fotografico',
            al: 'aggregazione-logica',
            la: 'libro-antico',
            veac301: 'vestimento',
            f400: 'fotografia',
            uasc: 'cartografica',
            dc: 'scheda-dublin-core',
            oa300: 'scheda-oa',
            rmmus: 'materiale-musicale',
            ua: 'unita-archivistica',
            oac300: 'opera-arte-contemporanea',
        };
        this.innerTitleData = new BehaviorSubject({
            title: { main: { text: '' } },
        });
        this.collectionDescription = new BehaviorSubject('');
        this.pageSize = 6;
        /** Necessary to iterate with the loading item placeholder HTML */
        this.pageSizeList = [];
        this.currentOffset = 0;
        /** Button that loads more content into the layout */
        this.loadMoreButton = new BehaviorSubject(true);
        /** Controls the loading state of the layout */
        this.loading = true;
    }
    onInit(payload) {
        this.communication = payload.communication;
        this.route = payload.route;
        this.configuration = payload.configuration;
        this.loadedCollections = new BehaviorSubject([]);
        this.layoutOptions = this.configuration.get('collection-layout');
        this.pageSizeList = new Array(this.pageSize);
    }
    /**
     * After the collection ID has been loaded
     */
    onCollectionID() {
        // reset pagination params
        this.pageSize = 6;
        this.currentOffset = 0;
        // load
        this.loadMore(true);
    }
    loadMore(reload = false) {
        this.loading = true;
        const collection = this.loadedCollections.getValue();
        const params = {
            id: this.collectionID,
            itemPagination: {
                limit: this.pageSize,
                offset: this.currentOffset,
            }
        };
        // check base url config
        const baseUrls = this.configuration.get('baseUrls') || {};
        const baseUrl = baseUrls.portaleMatriceServer || null;
        if (baseUrl) {
            params.baseUrl = baseUrl;
        }
        this.communication.request$('getCollection', {
            onError: (error) => console.error(error),
            params
        }).pipe(first((d) => !!d), map((d) => ({
            // map the backend response to the format used by ItemPreviewComponent
            response: d.items.map((item) => ({
                title: this.stringLimiter(item.title, {
                    maxLength: this.layoutOptions.item.title.maxLength,
                    char: this.layoutOptions.item.title.char,
                }),
                text: this.stringLimiter(item.content, {
                    maxLength: this.layoutOptions.item.description.maxLength,
                    char: this.layoutOptions.item.description.char
                }),
                classes: `${item.image ? 'is-overlay has-image' : 'is-overlay has-image has-watermark'} ${this.classMap(item.classification)}`,
                image: item.image || this.layoutOptions.watermark,
                color: item.background,
                anchor: {
                    href: item.url || this.urlBuilder(item.a4vId, item.title, item.type)
                },
                classification: item.classification
            })),
            text: d.text,
            title: d.title,
            total: d.total,
        }))).subscribe({
            next: (data) => {
                this.loading = false;
                if (data.title) {
                    this.setTitle(this.stringLimiter(data.title, {
                        maxLength: this.layoutOptions.header.maxLength,
                        char: this.layoutOptions.header.char
                    }));
                }
                this.collectionDescription.next(data.text ? this.stringLimiter(data.text, {
                    maxLength: this.layoutOptions.description.maxLength,
                    char: this.layoutOptions.description.char
                }) : '');
                this.currentOffset += this.pageSize;
                const collectionData = !reload
                    ? [...collection, ...data.response]
                    : [...data.response];
                this.loadedCollections.next(collectionData);
                this.loadMoreButton.next(data.total > this.loadedCollections.getValue().length);
            },
            error: (e) => {
                console.error(e);
                this.loadMoreButton.next(false);
            },
        });
    }
    /**
     * Builds a URL from entity type,
     * entity id, and a slug string.
     *
     * @param type entity type
     * @param id entity ID
     * @param title human-readable title
     * @returns URL string including a slug
     */
    urlBuilder(id, title, type) {
        if (id && title) {
            const titleSlug = slugify(title);
            const { schedaBasePath, entitaBasePath } = this.configuration.get('paths');
            const basePath = type === 'entity' ? entitaBasePath : schedaBasePath;
            return `/${basePath}/${id}/${titleSlug}`;
        }
        return undefined;
    }
    stringLimiter(content, options) {
        let res = content;
        if (content && options.maxLength) {
            res = content.slice(0, options.maxLength);
            if (options.char && res !== content) {
                res += options.char;
            }
        }
        return res;
    }
    setTitle(title) {
        this.innerTitleData.next({
            title: { main: { text: title } }
        });
    }
    /**
     * Convert classification strings to css classes.
     *
     * @param classification a classification string like "a4.oc.ua"
     * @returns a CSS class
     */
    classMap(classification) {
        if (!classification || classification.length < 1) {
            return '';
        }
        const codeMatch = /\.(\w+)$/gi.exec(classification);
        if (codeMatch) {
            const parsedCode = codeMatch[1]?.toLocaleLowerCase();
            const className = this.classificationsMap[parsedCode];
            if (className) {
                return `is-${className}`;
            }
        }
        return `is-${classification.replace('.', '-')}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uNy1ib2lsZXJwbGF0ZS1saWIvc3JjL2xpYi9hcmlhbm5hLXdlYi9sYXlvdXRzL2NvbGxlY3Rpb24tbGF5b3V0L2NvbGxlY3Rpb24tbGF5b3V0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFLOUIsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjtJQUExRDs7UUFXVSx1QkFBa0IsR0FBRztZQUMzQixLQUFLLEVBQUUsbUJBQW1CO1lBQzFCLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsRUFBRSxFQUFFLGNBQWM7WUFDbEIsT0FBTyxFQUFFLFlBQVk7WUFDckIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsSUFBSSxFQUFFLGNBQWM7WUFDcEIsRUFBRSxFQUFFLG9CQUFvQjtZQUN4QixLQUFLLEVBQUUsV0FBVztZQUNsQixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLEVBQUUsRUFBRSxvQkFBb0I7WUFDeEIsTUFBTSxFQUFFLDBCQUEwQjtTQUNuQyxDQUFBO1FBRUQsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBaUI7WUFDbkQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO1NBQzlCLENBQUMsQ0FBQTtRQUVGLDBCQUFxQixHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXhELGFBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixrRUFBa0U7UUFDbEUs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QUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxTQUFTLEVBQUU7WUFDYixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztZQUNyRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsT0FBTyxNQUFNLFNBQVMsRUFBRSxDQUFDO2FBQzFCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSwgSXRlbVByZXZpZXdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25JdGVtLCBHZXRDb2xsZWN0aW9uUGFyYW1zLCBHZXRDb2xsZWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuL2NvbGxlY3Rpb24tbGF5b3V0LnR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0NvbGxlY3Rpb25MYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0T3B0aW9ucztcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTtcclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25JRDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNsYXNzaWZpY2F0aW9uc01hcCA9IHtcclxuICAgIGZmNDAwOiAnZm9uZG8tZm90b2dyYWZpY28nLFxyXG4gICAgYWw6ICdhZ2dyZWdhemlvbmUtbG9naWNhJyxcclxuICAgIGxhOiAnbGlicm8tYW50aWNvJyxcclxuICAgIHZlYWMzMDE6ICd2ZXN0aW1lbnRvJyxcclxuICAgIGY0MDA6ICdmb3RvZ3JhZmlhJyxcclxuICAgIHVhc2M6ICdjYXJ0b2dyYWZpY2EnLFxyXG4gICAgZGM6ICdzY2hlZGEtZHVibGluLWNvcmUnLFxyXG4gICAgb2EzMDA6ICdzY2hlZGEtb2EnLFxyXG4gICAgcm1tdXM6ICdtYXRlcmlhbGUtbXVzaWNhbGUnLFxyXG4gICAgdWE6ICd1bml0YS1hcmNoaXZpc3RpY2EnLFxyXG4gICAgb2FjMzAwOiAnb3BlcmEtYXJ0ZS1jb250ZW1wb3JhbmVhJyxcclxuICB9XHJcblxyXG4gIGlubmVyVGl0bGVEYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJbm5lclRpdGxlRGF0YT4oe1xyXG4gICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiAnJyB9IH0sXHJcbiAgfSlcclxuXHJcbiAgY29sbGVjdGlvbkRlc2NyaXB0aW9uID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcclxuXHJcbiAgcGFnZVNpemUgPSA2O1xyXG5cclxuICAvKiogTmVjZXNzYXJ5IHRvIGl0ZXJhdGUgd2l0aCB0aGUgbG9hZGluZyBpdGVtIHBsYWNlaG9sZGVyIEhUTUwgKi9cclxuICBwYWdlU2l6ZUxpc3QgPSBbXTtcclxuXHJcbiAgY3VycmVudE9mZnNldCA9IDA7XHJcblxyXG4gIGxvYWRlZENvbGxlY3Rpb25zOiBCZWhhdmlvclN1YmplY3Q8SXRlbVByZXZpZXdEYXRhW10gfCBbXT47XHJcblxyXG4gIC8qKiBCdXR0b24gdGhhdCBsb2FkcyBtb3JlIGNvbnRlbnQgaW50byB0aGUgbGF5b3V0ICovXHJcbiAgbG9hZE1vcmVCdXR0b24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cclxuICAvKiogQ29udHJvbHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGxheW91dCAqL1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb2xsZWN0aW9uLWxheW91dCcpO1xyXG4gICAgdGhpcy5wYWdlU2l6ZUxpc3QgPSBuZXcgQXJyYXkodGhpcy5wYWdlU2l6ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZnRlciB0aGUgY29sbGVjdGlvbiBJRCBoYXMgYmVlbiBsb2FkZWRcclxuICAgKi9cclxuICBvbkNvbGxlY3Rpb25JRCgpIHtcclxuICAgIC8vIHJlc2V0IHBhZ2luYXRpb24gcGFyYW1zXHJcbiAgICB0aGlzLnBhZ2VTaXplID0gNjtcclxuICAgIHRoaXMuY3VycmVudE9mZnNldCA9IDA7XHJcbiAgICAvLyBsb2FkXHJcbiAgICB0aGlzLmxvYWRNb3JlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmUocmVsb2FkID0gZmFsc2UpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5sb2FkZWRDb2xsZWN0aW9ucy5nZXRWYWx1ZSgpO1xyXG4gICAgY29uc3QgcGFyYW1zOiBHZXRDb2xsZWN0aW9uUGFyYW1zID0ge1xyXG4gICAgICBpZDogdGhpcy5jb2xsZWN0aW9uSUQsXHJcbiAgICAgIGl0ZW1QYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgbGltaXQ6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgICAgb2Zmc2V0OiB0aGlzLmN1cnJlbnRPZmZzZXQsXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBjaGVjayBiYXNlIHVybCBjb25maWdcclxuICAgIGNvbnN0IGJhc2VVcmxzID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnYmFzZVVybHMnKSB8fCB7fTtcclxuICAgIGNvbnN0IGJhc2VVcmwgPSBiYXNlVXJscy5wb3J0YWxlTWF0cmljZVNlcnZlciB8fCBudWxsO1xyXG4gICAgaWYgKGJhc2VVcmwpIHtcclxuICAgICAgcGFyYW1zLmJhc2VVcmwgPSBiYXNlVXJsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRDb2xsZWN0aW9uJywge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXNcclxuICAgIH0pLnBpcGUoXHJcbiAgICAgIGZpcnN0KChkKSA9PiAhIWQpLFxyXG4gICAgICBtYXAoKGQ6IEdldENvbGxlY3Rpb25SZXNwb25zZSkgPT4gKHtcclxuICAgICAgICAvLyBtYXAgdGhlIGJhY2tlbmQgcmVzcG9uc2UgdG8gdGhlIGZvcm1hdCB1c2VkIGJ5IEl0ZW1QcmV2aWV3Q29tcG9uZW50XHJcbiAgICAgICAgcmVzcG9uc2U6IGQuaXRlbXMubWFwKChpdGVtOiBDb2xsZWN0aW9uSXRlbSkgPT4gKHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnN0cmluZ0xpbWl0ZXIoaXRlbS50aXRsZSwge1xyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLnRpdGxlLm1heExlbmd0aCxcclxuICAgICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0udGl0bGUuY2hhcixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgdGV4dDogdGhpcy5zdHJpbmdMaW1pdGVyKGl0ZW0uY29udGVudCwge1xyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLmRlc2NyaXB0aW9uLm1heExlbmd0aCxcclxuICAgICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0uZGVzY3JpcHRpb24uY2hhclxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBjbGFzc2VzOiBgJHtpdGVtLmltYWdlID8gJ2lzLW92ZXJsYXkgaGFzLWltYWdlJyA6ICdpcy1vdmVybGF5IGhhcy1pbWFnZSBoYXMtd2F0ZXJtYXJrJ30gJHt0aGlzLmNsYXNzTWFwKGl0ZW0uY2xhc3NpZmljYXRpb24pfWAsXHJcbiAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSB8fCB0aGlzLmxheW91dE9wdGlvbnMud2F0ZXJtYXJrLFxyXG4gICAgICAgICAgY29sb3I6IGl0ZW0uYmFja2dyb3VuZCxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBocmVmOiBpdGVtLnVybCB8fCB0aGlzLnVybEJ1aWxkZXIoaXRlbS5hNHZJZCwgaXRlbS50aXRsZSwgaXRlbS50eXBlKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNsYXNzaWZpY2F0aW9uOiBpdGVtLmNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHRleHQ6IGQudGV4dCxcclxuICAgICAgICB0aXRsZTogZC50aXRsZSxcclxuICAgICAgICB0b3RhbDogZC50b3RhbCxcclxuICAgICAgfSkpXHJcbiAgICApLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGRhdGEudGl0bGUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0VGl0bGUodGhpcy5zdHJpbmdMaW1pdGVyKGRhdGEudGl0bGUsIHtcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuaGVhZGVyLm1heExlbmd0aCxcclxuICAgICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLmhlYWRlci5jaGFyXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkRlc2NyaXB0aW9uLm5leHQoZGF0YS50ZXh0ID8gdGhpcy5zdHJpbmdMaW1pdGVyKGRhdGEudGV4dCwge1xyXG4gICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuZGVzY3JpcHRpb24ubWF4TGVuZ3RoLFxyXG4gICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLmRlc2NyaXB0aW9uLmNoYXJcclxuICAgICAgICB9KSA6ICcnKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgKz0gdGhpcy5wYWdlU2l6ZTtcclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uRGF0YSA9ICFyZWxvYWRcclxuICAgICAgICAgID8gWy4uLmNvbGxlY3Rpb24sIC4uLmRhdGEucmVzcG9uc2VdXHJcbiAgICAgICAgICA6IFsuLi5kYXRhLnJlc3BvbnNlXTtcclxuICAgICAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLm5leHQoY29sbGVjdGlvbkRhdGEpO1xyXG4gICAgICAgIHRoaXMubG9hZE1vcmVCdXR0b24ubmV4dChcclxuICAgICAgICAgIGRhdGEudG90YWwgPiB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCkubGVuZ3RoXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB0aGlzLmxvYWRNb3JlQnV0dG9uLm5leHQoZmFsc2UpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZHMgYSBVUkwgZnJvbSBlbnRpdHkgdHlwZSxcclxuICAgKiBlbnRpdHkgaWQsIGFuZCBhIHNsdWcgc3RyaW5nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHR5cGUgZW50aXR5IHR5cGVcclxuICAgKiBAcGFyYW0gaWQgZW50aXR5IElEXHJcbiAgICogQHBhcmFtIHRpdGxlIGh1bWFuLXJlYWRhYmxlIHRpdGxlXHJcbiAgICogQHJldHVybnMgVVJMIHN0cmluZyBpbmNsdWRpbmcgYSBzbHVnXHJcbiAgICovXHJcbiAgdXJsQnVpbGRlcihpZCwgdGl0bGUsIHR5cGU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoaWQgJiYgdGl0bGUpIHtcclxuICAgICAgY29uc3QgdGl0bGVTbHVnID0gc2x1Z2lmeSh0aXRsZSk7XHJcbiAgICAgIGNvbnN0IHsgc2NoZWRhQmFzZVBhdGgsIGVudGl0YUJhc2VQYXRoIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xyXG4gICAgICBjb25zdCBiYXNlUGF0aCA9IHR5cGUgPT09ICdlbnRpdHknID8gZW50aXRhQmFzZVBhdGggOiBzY2hlZGFCYXNlUGF0aDtcclxuICAgICAgcmV0dXJuIGAvJHtiYXNlUGF0aH0vJHtpZH0vJHt0aXRsZVNsdWd9YDtcclxuICAgIH0gcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHN0cmluZ0xpbWl0ZXIoY29udGVudDogc3RyaW5nLCBvcHRpb25zOiB7IG1heExlbmd0aDogbnVtYmVyOyBjaGFyOiBzdHJpbmcgfSk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzID0gY29udGVudDtcclxuICAgIGlmIChjb250ZW50ICYmIG9wdGlvbnMubWF4TGVuZ3RoKSB7XHJcbiAgICAgIHJlcyA9IGNvbnRlbnQuc2xpY2UoMCwgb3B0aW9ucy5tYXhMZW5ndGgpO1xyXG4gICAgICBpZiAob3B0aW9ucy5jaGFyICYmIHJlcyAhPT0gY29udGVudCkge1xyXG4gICAgICAgIHJlcyArPSBvcHRpb25zLmNoYXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmlubmVyVGl0bGVEYXRhLm5leHQoe1xyXG4gICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IHRpdGxlIH0gfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0IGNsYXNzaWZpY2F0aW9uIHN0cmluZ3MgdG8gY3NzIGNsYXNzZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2xhc3NpZmljYXRpb24gYSBjbGFzc2lmaWNhdGlvbiBzdHJpbmcgbGlrZSBcImE0Lm9jLnVhXCJcclxuICAgKiBAcmV0dXJucyBhIENTUyBjbGFzc1xyXG4gICAqL1xyXG4gIGNsYXNzTWFwKGNsYXNzaWZpY2F0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFjbGFzc2lmaWNhdGlvbiB8fCBjbGFzc2lmaWNhdGlvbi5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IGNvZGVNYXRjaCA9IC9cXC4oXFx3KykkL2dpLmV4ZWMoY2xhc3NpZmljYXRpb24pO1xyXG4gICAgaWYgKGNvZGVNYXRjaCkge1xyXG4gICAgICBjb25zdCBwYXJzZWRDb2RlID0gY29kZU1hdGNoWzFdPy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzaWZpY2F0aW9uc01hcFtwYXJzZWRDb2RlXTtcclxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgaXMtJHtjbGFzc05hbWV9YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBpcy0ke2NsYXNzaWZpY2F0aW9uLnJlcGxhY2UoJy4nLCAnLScpfWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==