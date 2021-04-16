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
        var _a;
        if (!classification || classification.length < 1) {
            return '';
        }
        const codeMatch = /\.(\w+)$/gi.exec(classification);
        if (codeMatch) {
            const parsedCode = (_a = codeMatch[1]) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
            const className = this.classificationsMap[parsedCode];
            if (className) {
                return `is-${className}`;
            }
        }
        return `is-${classification.replace('.', '-')}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBSzlCLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7SUFBMUQ7O1FBV1UsdUJBQWtCLEdBQUc7WUFDM0IsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLElBQUksRUFBRSxZQUFZO1lBQ2xCLElBQUksRUFBRSxjQUFjO1lBQ3BCLEVBQUUsRUFBRSxvQkFBb0I7WUFDeEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLE1BQU0sRUFBRSwwQkFBMEI7U0FDbkMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWlCO1lBQ25ELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtTQUM5QixDQUFDLENBQUE7UUFFRiwwQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV4RCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsa0VBQWtFO1FBQ2xFLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FB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QUNGO1FBQ0QsT0FBTyxNQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEsIEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgR2V0Q29sbGVjdGlvblBhcmFtcywgR2V0Q29sbGVjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi9jb2xsZWN0aW9uLWxheW91dC50eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXdDb2xsZWN0aW9uTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGxheW91dE9wdGlvbnM7XHJcblxyXG4gIHByaXZhdGUgcm91dGU7XHJcblxyXG4gIHB1YmxpYyBjb2xsZWN0aW9uSUQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjbGFzc2lmaWNhdGlvbnNNYXAgPSB7XHJcbiAgICBmZjQwMDogJ2ZvbmRvLWZvdG9ncmFmaWNvJyxcclxuICAgIGFsOiAnYWdncmVnYXppb25lLWxvZ2ljYScsXHJcbiAgICBsYTogJ2xpYnJvLWFudGljbycsXHJcbiAgICB2ZWFjMzAxOiAndmVzdGltZW50bycsXHJcbiAgICBmNDAwOiAnZm90b2dyYWZpYScsXHJcbiAgICB1YXNjOiAnY2FydG9ncmFmaWNhJyxcclxuICAgIGRjOiAnc2NoZWRhLWR1Ymxpbi1jb3JlJyxcclxuICAgIG9hMzAwOiAnc2NoZWRhLW9hJyxcclxuICAgIHJtbXVzOiAnbWF0ZXJpYWxlLW11c2ljYWxlJyxcclxuICAgIHVhOiAndW5pdGEtYXJjaGl2aXN0aWNhJyxcclxuICAgIG9hYzMwMDogJ29wZXJhLWFydGUtY29udGVtcG9yYW5lYScsXHJcbiAgfVxyXG5cclxuICBpbm5lclRpdGxlRGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SW5uZXJUaXRsZURhdGE+KHtcclxuICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogJycgfSB9LFxyXG4gIH0pXHJcblxyXG4gIGNvbGxlY3Rpb25EZXNjcmlwdGlvbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcblxyXG4gIHBhZ2VTaXplID0gNjtcclxuXHJcbiAgLyoqIE5lY2Vzc2FyeSB0byBpdGVyYXRlIHdpdGggdGhlIGxvYWRpbmcgaXRlbSBwbGFjZWhvbGRlciBIVE1MICovXHJcbiAgcGFnZVNpemVMaXN0ID0gW107XHJcblxyXG4gIGN1cnJlbnRPZmZzZXQgPSAwO1xyXG5cclxuICBsb2FkZWRDb2xsZWN0aW9uczogQmVoYXZpb3JTdWJqZWN0PEl0ZW1QcmV2aWV3RGF0YVtdIHwgW10+O1xyXG5cclxuICAvKiogQnV0dG9uIHRoYXQgbG9hZHMgbW9yZSBjb250ZW50IGludG8gdGhlIGxheW91dCAqL1xyXG4gIGxvYWRNb3JlQnV0dG9uID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuXHJcbiAgLyoqIENvbnRyb2xzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBsYXlvdXQgKi9cclxuICBsb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xyXG4gICAgdGhpcy5sb2FkZWRDb2xsZWN0aW9ucyA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29sbGVjdGlvbi1sYXlvdXQnKTtcclxuICAgIHRoaXMucGFnZVNpemVMaXN0ID0gbmV3IEFycmF5KHRoaXMucGFnZVNpemUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWZ0ZXIgdGhlIGNvbGxlY3Rpb24gSUQgaGFzIGJlZW4gbG9hZGVkXHJcbiAgICovXHJcbiAgb25Db2xsZWN0aW9uSUQoKSB7XHJcbiAgICAvLyByZXNldCBwYWdpbmF0aW9uIHBhcmFtc1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IDY7XHJcbiAgICB0aGlzLmN1cnJlbnRPZmZzZXQgPSAwO1xyXG4gICAgLy8gbG9hZFxyXG4gICAgdGhpcy5sb2FkTW9yZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWRNb3JlKHJlbG9hZCA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IHRoaXMubG9hZGVkQ29sbGVjdGlvbnMuZ2V0VmFsdWUoKTtcclxuICAgIGNvbnN0IHBhcmFtczogR2V0Q29sbGVjdGlvblBhcmFtcyA9IHtcclxuICAgICAgaWQ6IHRoaXMuY29sbGVjdGlvbklELFxyXG4gICAgICBpdGVtUGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGxpbWl0OiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICAgIG9mZnNldDogdGhpcy5jdXJyZW50T2Zmc2V0LFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRDb2xsZWN0aW9uJywge1xyXG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxyXG4gICAgICBwYXJhbXNcclxuICAgIH0pLnBpcGUoXHJcbiAgICAgIGZpcnN0KChkKSA9PiAhIWQpLFxyXG4gICAgICBtYXAoKGQ6IEdldENvbGxlY3Rpb25SZXNwb25zZSkgPT4gKHtcclxuICAgICAgICAvLyBtYXAgdGhlIGJhY2tlbmQgcmVzcG9uc2UgdG8gdGhlIGZvcm1hdCB1c2VkIGJ5IEl0ZW1QcmV2aWV3Q29tcG9uZW50XHJcbiAgICAgICAgcmVzcG9uc2U6IGQuaXRlbXMubWFwKChpdGVtOiBDb2xsZWN0aW9uSXRlbSkgPT4gKHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnN0cmluZ0xpbWl0ZXIoaXRlbS50aXRsZSwge1xyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLnRpdGxlLm1heExlbmd0aCxcclxuICAgICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0udGl0bGUuY2hhcixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgdGV4dDogdGhpcy5zdHJpbmdMaW1pdGVyKGl0ZW0uY29udGVudCwge1xyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLmRlc2NyaXB0aW9uLm1heExlbmd0aCxcclxuICAgICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0uZGVzY3JpcHRpb24uY2hhclxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBjbGFzc2VzOiBgJHtpdGVtLmltYWdlID8gJ2lzLW92ZXJsYXkgaGFzLWltYWdlJyA6ICdpcy1vdmVybGF5IGhhcy1pbWFnZSBoYXMtd2F0ZXJtYXJrJ30gJHt0aGlzLmNsYXNzTWFwKGl0ZW0uY2xhc3NpZmljYXRpb24pfWAsXHJcbiAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSB8fCB0aGlzLmxheW91dE9wdGlvbnMud2F0ZXJtYXJrLFxyXG4gICAgICAgICAgY29sb3I6IGl0ZW0uYmFja2dyb3VuZCxcclxuICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICBocmVmOiBpdGVtLnVybCB8fCB0aGlzLnVybEJ1aWxkZXIoaXRlbS5hNHZJZCwgaXRlbS50aXRsZSwgaXRlbS50eXBlKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNsYXNzaWZpY2F0aW9uOiBpdGVtLmNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHRleHQ6IGQudGV4dCxcclxuICAgICAgICB0aXRsZTogZC50aXRsZSxcclxuICAgICAgICB0b3RhbDogZC50b3RhbCxcclxuICAgICAgfSkpXHJcbiAgICApLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGRhdGEudGl0bGUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0VGl0bGUodGhpcy5zdHJpbmdMaW1pdGVyKGRhdGEudGl0bGUsIHtcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuaGVhZGVyLm1heExlbmd0aCxcclxuICAgICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLmhlYWRlci5jaGFyXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkRlc2NyaXB0aW9uLm5leHQoZGF0YS50ZXh0ID8gdGhpcy5zdHJpbmdMaW1pdGVyKGRhdGEudGV4dCwge1xyXG4gICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuZGVzY3JpcHRpb24ubWF4TGVuZ3RoLFxyXG4gICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLmRlc2NyaXB0aW9uLmNoYXJcclxuICAgICAgICB9KSA6ICcnKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgKz0gdGhpcy5wYWdlU2l6ZTtcclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uRGF0YSA9ICFyZWxvYWRcclxuICAgICAgICAgID8gWy4uLmNvbGxlY3Rpb24sIC4uLmRhdGEucmVzcG9uc2VdXHJcbiAgICAgICAgICA6IFsuLi5kYXRhLnJlc3BvbnNlXTtcclxuICAgICAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLm5leHQoY29sbGVjdGlvbkRhdGEpO1xyXG4gICAgICAgIHRoaXMubG9hZE1vcmVCdXR0b24ubmV4dChcclxuICAgICAgICAgIGRhdGEudG90YWwgPiB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCkubGVuZ3RoXHJcbiAgICAgICAgKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB0aGlzLmxvYWRNb3JlQnV0dG9uLm5leHQoZmFsc2UpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCdWlsZHMgYSBVUkwgZnJvbSBlbnRpdHkgdHlwZSxcclxuICAgKiBlbnRpdHkgaWQsIGFuZCBhIHNsdWcgc3RyaW5nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHR5cGUgZW50aXR5IHR5cGVcclxuICAgKiBAcGFyYW0gaWQgZW50aXR5IElEXHJcbiAgICogQHBhcmFtIHRpdGxlIGh1bWFuLXJlYWRhYmxlIHRpdGxlXHJcbiAgICogQHJldHVybnMgVVJMIHN0cmluZyBpbmNsdWRpbmcgYSBzbHVnXHJcbiAgICovXHJcbiAgdXJsQnVpbGRlcihpZCwgdGl0bGUsIHR5cGU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoaWQgJiYgdGl0bGUpIHtcclxuICAgICAgY29uc3QgdGl0bGVTbHVnID0gc2x1Z2lmeSh0aXRsZSk7XHJcbiAgICAgIGNvbnN0IHsgc2NoZWRhQmFzZVBhdGgsIGVudGl0YUJhc2VQYXRoIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xyXG4gICAgICBjb25zdCBiYXNlUGF0aCA9IHR5cGUgPT09ICdlbnRpdHknID8gZW50aXRhQmFzZVBhdGggOiBzY2hlZGFCYXNlUGF0aDtcclxuICAgICAgcmV0dXJuIGAvJHtiYXNlUGF0aH0vJHtpZH0vJHt0aXRsZVNsdWd9YDtcclxuICAgIH0gcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHN0cmluZ0xpbWl0ZXIoY29udGVudDogc3RyaW5nLCBvcHRpb25zOiB7IG1heExlbmd0aDogbnVtYmVyOyBjaGFyOiBzdHJpbmcgfSk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzID0gY29udGVudDtcclxuICAgIGlmIChjb250ZW50ICYmIG9wdGlvbnMubWF4TGVuZ3RoKSB7XHJcbiAgICAgIHJlcyA9IGNvbnRlbnQuc2xpY2UoMCwgb3B0aW9ucy5tYXhMZW5ndGgpO1xyXG4gICAgICBpZiAob3B0aW9ucy5jaGFyICYmIHJlcyAhPT0gY29udGVudCkge1xyXG4gICAgICAgIHJlcyArPSBvcHRpb25zLmNoYXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmlubmVyVGl0bGVEYXRhLm5leHQoe1xyXG4gICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IHRpdGxlIH0gfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0IGNsYXNzaWZpY2F0aW9uIHN0cmluZ3MgdG8gY3NzIGNsYXNzZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2xhc3NpZmljYXRpb24gYSBjbGFzc2lmaWNhdGlvbiBzdHJpbmcgbGlrZSBcImE0Lm9jLnVhXCJcclxuICAgKiBAcmV0dXJucyBhIENTUyBjbGFzc1xyXG4gICAqL1xyXG4gIGNsYXNzTWFwKGNsYXNzaWZpY2F0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFjbGFzc2lmaWNhdGlvbiB8fCBjbGFzc2lmaWNhdGlvbi5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IGNvZGVNYXRjaCA9IC9cXC4oXFx3KykkL2dpLmV4ZWMoY2xhc3NpZmljYXRpb24pO1xyXG4gICAgaWYgKGNvZGVNYXRjaCkge1xyXG4gICAgICBjb25zdCBwYXJzZWRDb2RlID0gY29kZU1hdGNoWzFdPy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzaWZpY2F0aW9uc01hcFtwYXJzZWRDb2RlXTtcclxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgaXMtJHtjbGFzc05hbWV9YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBpcy0ke2NsYXNzaWZpY2F0aW9uLnJlcGxhY2UoJy4nLCAnLScpfWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==