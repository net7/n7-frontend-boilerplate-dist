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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBSzlCLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7SUFBMUQ7O1FBV1UsdUJBQWtCLEdBQUc7WUFDM0IsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLElBQUksRUFBRSxZQUFZO1lBQ2xCLElBQUksRUFBRSxjQUFjO1lBQ3BCLEVBQUUsRUFBRSxvQkFBb0I7WUFDeEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLE1BQU0sRUFBRSwwQkFBMEI7U0FDbkMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWlCO1lBQ25ELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtTQUM5QixDQUFDLENBQUE7UUFFRiwwQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV4RCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsa0VBQWtFO1FBQ2xFLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FB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QUNGO1FBQ0QsT0FBTyxNQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEsIEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkl0ZW0sIEdldENvbGxlY3Rpb25QYXJhbXMsIEdldENvbGxlY3Rpb25SZXNwb25zZSB9IGZyb20gJy4vY29sbGVjdGlvbi1sYXlvdXQudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQXdDb2xsZWN0aW9uTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgbGF5b3V0T3B0aW9ucztcblxuICBwcml2YXRlIHJvdXRlO1xuXG4gIHB1YmxpYyBjb2xsZWN0aW9uSUQ6IHN0cmluZztcblxuICBwcml2YXRlIGNsYXNzaWZpY2F0aW9uc01hcCA9IHtcbiAgICBmZjQwMDogJ2ZvbmRvLWZvdG9ncmFmaWNvJyxcbiAgICBhbDogJ2FnZ3JlZ2F6aW9uZS1sb2dpY2EnLFxuICAgIGxhOiAnbGlicm8tYW50aWNvJyxcbiAgICB2ZWFjMzAxOiAndmVzdGltZW50bycsXG4gICAgZjQwMDogJ2ZvdG9ncmFmaWEnLFxuICAgIHVhc2M6ICdjYXJ0b2dyYWZpY2EnLFxuICAgIGRjOiAnc2NoZWRhLWR1Ymxpbi1jb3JlJyxcbiAgICBvYTMwMDogJ3NjaGVkYS1vYScsXG4gICAgcm1tdXM6ICdtYXRlcmlhbGUtbXVzaWNhbGUnLFxuICAgIHVhOiAndW5pdGEtYXJjaGl2aXN0aWNhJyxcbiAgICBvYWMzMDA6ICdvcGVyYS1hcnRlLWNvbnRlbXBvcmFuZWEnLFxuICB9XG5cbiAgaW5uZXJUaXRsZURhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElubmVyVGl0bGVEYXRhPih7XG4gICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiAnJyB9IH0sXG4gIH0pXG5cbiAgY29sbGVjdGlvbkRlc2NyaXB0aW9uID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcblxuICBwYWdlU2l6ZSA9IDY7XG5cbiAgLyoqIE5lY2Vzc2FyeSB0byBpdGVyYXRlIHdpdGggdGhlIGxvYWRpbmcgaXRlbSBwbGFjZWhvbGRlciBIVE1MICovXG4gIHBhZ2VTaXplTGlzdCA9IFtdO1xuXG4gIGN1cnJlbnRPZmZzZXQgPSAwO1xuXG4gIGxvYWRlZENvbGxlY3Rpb25zOiBCZWhhdmlvclN1YmplY3Q8SXRlbVByZXZpZXdEYXRhW10gfCBbXT47XG5cbiAgLyoqIEJ1dHRvbiB0aGF0IGxvYWRzIG1vcmUgY29udGVudCBpbnRvIHRoZSBsYXlvdXQgKi9cbiAgbG9hZE1vcmVCdXR0b24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuXG4gIC8qKiBDb250cm9scyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgbGF5b3V0ICovXG4gIGxvYWRpbmcgPSB0cnVlO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29sbGVjdGlvbi1sYXlvdXQnKTtcbiAgICB0aGlzLnBhZ2VTaXplTGlzdCA9IG5ldyBBcnJheSh0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciB0aGUgY29sbGVjdGlvbiBJRCBoYXMgYmVlbiBsb2FkZWRcbiAgICovXG4gIG9uQ29sbGVjdGlvbklEKCkge1xuICAgIC8vIHJlc2V0IHBhZ2luYXRpb24gcGFyYW1zXG4gICAgdGhpcy5wYWdlU2l6ZSA9IDY7XG4gICAgdGhpcy5jdXJyZW50T2Zmc2V0ID0gMDtcbiAgICAvLyBsb2FkXG4gICAgdGhpcy5sb2FkTW9yZSh0cnVlKTtcbiAgfVxuXG4gIGxvYWRNb3JlKHJlbG9hZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5sb2FkZWRDb2xsZWN0aW9ucy5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IHBhcmFtczogR2V0Q29sbGVjdGlvblBhcmFtcyA9IHtcbiAgICAgIGlkOiB0aGlzLmNvbGxlY3Rpb25JRCxcbiAgICAgIGl0ZW1QYWdpbmF0aW9uOiB7XG4gICAgICAgIGxpbWl0OiB0aGlzLnBhZ2VTaXplLFxuICAgICAgICBvZmZzZXQ6IHRoaXMuY3VycmVudE9mZnNldCxcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2V0Q29sbGVjdGlvbicsIHtcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICBwYXJhbXNcbiAgICB9KS5waXBlKFxuICAgICAgZmlyc3QoKGQpID0+ICEhZCksXG4gICAgICBtYXAoKGQ6IEdldENvbGxlY3Rpb25SZXNwb25zZSkgPT4gKHtcbiAgICAgICAgLy8gbWFwIHRoZSBiYWNrZW5kIHJlc3BvbnNlIHRvIHRoZSBmb3JtYXQgdXNlZCBieSBJdGVtUHJldmlld0NvbXBvbmVudFxuICAgICAgICByZXNwb25zZTogZC5pdGVtcy5tYXAoKGl0ZW06IENvbGxlY3Rpb25JdGVtKSA9PiAoe1xuICAgICAgICAgIHRpdGxlOiB0aGlzLnN0cmluZ0xpbWl0ZXIoaXRlbS50aXRsZSwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS50aXRsZS5tYXhMZW5ndGgsXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS50aXRsZS5jaGFyLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRleHQ6IHRoaXMuc3RyaW5nTGltaXRlcihpdGVtLmNvbnRlbnQsIHtcbiAgICAgICAgICAgIG1heExlbmd0aDogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0uZGVzY3JpcHRpb24ubWF4TGVuZ3RoLFxuICAgICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0uZGVzY3JpcHRpb24uY2hhclxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNsYXNzZXM6IGAke2l0ZW0uaW1hZ2UgPyAnaXMtb3ZlcmxheSBoYXMtaW1hZ2UnIDogJ2lzLW92ZXJsYXkgaGFzLWltYWdlIGhhcy13YXRlcm1hcmsnfSAke3RoaXMuY2xhc3NNYXAoaXRlbS5jbGFzc2lmaWNhdGlvbil9YCxcbiAgICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSB8fCB0aGlzLmxheW91dE9wdGlvbnMud2F0ZXJtYXJrLFxuICAgICAgICAgIGNvbG9yOiBpdGVtLmJhY2tncm91bmQsXG4gICAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgICBocmVmOiBpdGVtLnVybCB8fCB0aGlzLnVybEJ1aWxkZXIoaXRlbS5hNHZJZCwgaXRlbS50aXRsZSwgaXRlbS50eXBlKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2xhc3NpZmljYXRpb246IGl0ZW0uY2xhc3NpZmljYXRpb25cbiAgICAgICAgfSkpLFxuICAgICAgICB0ZXh0OiBkLnRleHQsXG4gICAgICAgIHRpdGxlOiBkLnRpdGxlLFxuICAgICAgICB0b3RhbDogZC50b3RhbCxcbiAgICAgIH0pKVxuICAgICkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgICAgIHRoaXMuc2V0VGl0bGUodGhpcy5zdHJpbmdMaW1pdGVyKGRhdGEudGl0bGUsIHtcbiAgICAgICAgICAgIG1heExlbmd0aDogdGhpcy5sYXlvdXRPcHRpb25zLmhlYWRlci5tYXhMZW5ndGgsXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaGVhZGVyLmNoYXJcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uRGVzY3JpcHRpb24ubmV4dChkYXRhLnRleHQgPyB0aGlzLnN0cmluZ0xpbWl0ZXIoZGF0YS50ZXh0LCB7XG4gICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuZGVzY3JpcHRpb24ubWF4TGVuZ3RoLFxuICAgICAgICAgIGNoYXI6IHRoaXMubGF5b3V0T3B0aW9ucy5kZXNjcmlwdGlvbi5jaGFyXG4gICAgICAgIH0pIDogJycpO1xuICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgKz0gdGhpcy5wYWdlU2l6ZTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkRhdGEgPSAhcmVsb2FkXG4gICAgICAgICAgPyBbLi4uY29sbGVjdGlvbiwgLi4uZGF0YS5yZXNwb25zZV1cbiAgICAgICAgICA6IFsuLi5kYXRhLnJlc3BvbnNlXTtcbiAgICAgICAgdGhpcy5sb2FkZWRDb2xsZWN0aW9ucy5uZXh0KGNvbGxlY3Rpb25EYXRhKTtcbiAgICAgICAgdGhpcy5sb2FkTW9yZUJ1dHRvbi5uZXh0KFxuICAgICAgICAgIGRhdGEudG90YWwgPiB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCkubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHRoaXMubG9hZE1vcmVCdXR0b24ubmV4dChmYWxzZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhIFVSTCBmcm9tIGVudGl0eSB0eXBlLFxuICAgKiBlbnRpdHkgaWQsIGFuZCBhIHNsdWcgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBlbnRpdHkgdHlwZVxuICAgKiBAcGFyYW0gaWQgZW50aXR5IElEXG4gICAqIEBwYXJhbSB0aXRsZSBodW1hbi1yZWFkYWJsZSB0aXRsZVxuICAgKiBAcmV0dXJucyBVUkwgc3RyaW5nIGluY2x1ZGluZyBhIHNsdWdcbiAgICovXG4gIHVybEJ1aWxkZXIoaWQsIHRpdGxlLCB0eXBlOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGlmIChpZCAmJiB0aXRsZSkge1xuICAgICAgY29uc3QgdGl0bGVTbHVnID0gc2x1Z2lmeSh0aXRsZSk7XG4gICAgICBjb25zdCB7IHNjaGVkYUJhc2VQYXRoLCBlbnRpdGFCYXNlUGF0aCB9ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcbiAgICAgIGNvbnN0IGJhc2VQYXRoID0gdHlwZSA9PT0gJ2VudGl0eScgPyBlbnRpdGFCYXNlUGF0aCA6IHNjaGVkYUJhc2VQYXRoO1xuICAgICAgcmV0dXJuIGAvJHtiYXNlUGF0aH0vJHtpZH0vJHt0aXRsZVNsdWd9YDtcbiAgICB9IHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBzdHJpbmdMaW1pdGVyKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9uczogeyBtYXhMZW5ndGg6IG51bWJlcjsgY2hhcjogc3RyaW5nIH0pOiBzdHJpbmcge1xuICAgIGxldCByZXMgPSBjb250ZW50O1xuICAgIGlmIChjb250ZW50ICYmIG9wdGlvbnMubWF4TGVuZ3RoKSB7XG4gICAgICByZXMgPSBjb250ZW50LnNsaWNlKDAsIG9wdGlvbnMubWF4TGVuZ3RoKTtcbiAgICAgIGlmIChvcHRpb25zLmNoYXIgJiYgcmVzICE9PSBjb250ZW50KSB7XG4gICAgICAgIHJlcyArPSBvcHRpb25zLmNoYXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbm5lclRpdGxlRGF0YS5uZXh0KHtcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogdGl0bGUgfSB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBjbGFzc2lmaWNhdGlvbiBzdHJpbmdzIHRvIGNzcyBjbGFzc2VzLlxuICAgKlxuICAgKiBAcGFyYW0gY2xhc3NpZmljYXRpb24gYSBjbGFzc2lmaWNhdGlvbiBzdHJpbmcgbGlrZSBcImE0Lm9jLnVhXCJcbiAgICogQHJldHVybnMgYSBDU1MgY2xhc3NcbiAgICovXG4gIGNsYXNzTWFwKGNsYXNzaWZpY2F0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghY2xhc3NpZmljYXRpb24gfHwgY2xhc3NpZmljYXRpb24ubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCBjb2RlTWF0Y2ggPSAvXFwuKFxcdyspJC9naS5leGVjKGNsYXNzaWZpY2F0aW9uKTtcbiAgICBpZiAoY29kZU1hdGNoKSB7XG4gICAgICBjb25zdCBwYXJzZWRDb2RlID0gY29kZU1hdGNoWzFdPy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jbGFzc2lmaWNhdGlvbnNNYXBbcGFyc2VkQ29kZV07XG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBgaXMtJHtjbGFzc05hbWV9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGBpcy0ke2NsYXNzaWZpY2F0aW9uLnJlcGxhY2UoJy4nLCAnLScpfWA7XG4gIH1cbn1cbiJdfQ==