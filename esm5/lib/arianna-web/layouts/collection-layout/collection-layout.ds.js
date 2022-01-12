import { __extends, __read, __spread } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
import { first, map } from 'rxjs/operators';
import slugify from 'slugify';
var AwCollectionLayoutDS = /** @class */ (function (_super) {
    __extends(AwCollectionLayoutDS, _super);
    function AwCollectionLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classificationsMap = {
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
        _this.innerTitleData = new BehaviorSubject({
            title: { main: { text: '' } },
        });
        _this.collectionDescription = new BehaviorSubject('');
        _this.pageSize = 6;
        /** Necessary to iterate with the loading item placeholder HTML */
        _this.pageSizeList = [];
        _this.currentOffset = 0;
        /** Button that loads more content into the layout */
        _this.loadMoreButton = new BehaviorSubject(true);
        /** Controls the loading state of the layout */
        _this.loading = true;
        return _this;
    }
    AwCollectionLayoutDS.prototype.onInit = function (payload) {
        this.communication = payload.communication;
        this.route = payload.route;
        this.configuration = payload.configuration;
        this.loadedCollections = new BehaviorSubject([]);
        this.layoutOptions = this.configuration.get('collection-layout');
        this.pageSizeList = new Array(this.pageSize);
    };
    /**
     * After the collection ID has been loaded
     */
    AwCollectionLayoutDS.prototype.onCollectionID = function () {
        // reset pagination params
        this.pageSize = 6;
        this.currentOffset = 0;
        // load
        this.loadMore(true);
    };
    AwCollectionLayoutDS.prototype.loadMore = function (reload) {
        var _this = this;
        if (reload === void 0) { reload = false; }
        this.loading = true;
        var collection = this.loadedCollections.getValue();
        var params = {
            id: this.collectionID,
            itemPagination: {
                limit: this.pageSize,
                offset: this.currentOffset,
            }
        };
        this.communication.request$('getCollection', {
            onError: function (error) { return console.error(error); },
            params: params
        }).pipe(first(function (d) { return !!d; }), map(function (d) { return ({
            // map the backend response to the format used by ItemPreviewComponent
            response: d.items.map(function (item) { return ({
                title: _this.stringLimiter(item.title, {
                    maxLength: _this.layoutOptions.item.title.maxLength,
                    char: _this.layoutOptions.item.title.char,
                }),
                text: _this.stringLimiter(item.content, {
                    maxLength: _this.layoutOptions.item.description.maxLength,
                    char: _this.layoutOptions.item.description.char
                }),
                classes: (item.image ? 'is-overlay has-image' : 'is-overlay has-image has-watermark') + " " + _this.classMap(item.classification),
                image: item.image || _this.layoutOptions.watermark,
                color: item.background,
                anchor: {
                    href: item.url || _this.urlBuilder(item.a4vId, item.title, item.type)
                },
                classification: item.classification
            }); }),
            text: d.text,
            title: d.title,
            total: d.total,
        }); })).subscribe({
            next: function (data) {
                _this.loading = false;
                if (data.title) {
                    _this.setTitle(_this.stringLimiter(data.title, {
                        maxLength: _this.layoutOptions.header.maxLength,
                        char: _this.layoutOptions.header.char
                    }));
                }
                _this.collectionDescription.next(data.text ? _this.stringLimiter(data.text, {
                    maxLength: _this.layoutOptions.description.maxLength,
                    char: _this.layoutOptions.description.char
                }) : '');
                _this.currentOffset += _this.pageSize;
                var collectionData = !reload
                    ? __spread(collection, data.response) : __spread(data.response);
                _this.loadedCollections.next(collectionData);
                _this.loadMoreButton.next(data.total > _this.loadedCollections.getValue().length);
            },
            error: function (e) {
                console.error(e);
                _this.loadMoreButton.next(false);
            },
        });
    };
    /**
     * Builds a URL from entity type,
     * entity id, and a slug string.
     *
     * @param type entity type
     * @param id entity ID
     * @param title human-readable title
     * @returns URL string including a slug
     */
    AwCollectionLayoutDS.prototype.urlBuilder = function (id, title, type) {
        if (id && title) {
            var titleSlug = slugify(title);
            var _a = this.configuration.get('paths'), schedaBasePath = _a.schedaBasePath, entitaBasePath = _a.entitaBasePath;
            var basePath = type === 'entity' ? entitaBasePath : schedaBasePath;
            return "/" + basePath + "/" + id + "/" + titleSlug;
        }
        return undefined;
    };
    AwCollectionLayoutDS.prototype.stringLimiter = function (content, options) {
        var res = content;
        if (content && options.maxLength) {
            res = content.slice(0, options.maxLength);
            if (options.char && res !== content) {
                res += options.char;
            }
        }
        return res;
    };
    AwCollectionLayoutDS.prototype.setTitle = function (title) {
        this.innerTitleData.next({
            title: { main: { text: title } }
        });
    };
    /**
     * Convert classification strings to css classes.
     *
     * @param classification a classification string like "a4.oc.ua"
     * @returns a CSS class
     */
    AwCollectionLayoutDS.prototype.classMap = function (classification) {
        var _a;
        if (!classification || classification.length < 1) {
            return '';
        }
        var codeMatch = /\.(\w+)$/gi.exec(classification);
        if (codeMatch) {
            var parsedCode = (_a = codeMatch[1]) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
            var className = this.classificationsMap[parsedCode];
            if (className) {
                return "is-" + className;
            }
        }
        return "is-" + classification.replace('.', '-');
    };
    return AwCollectionLayoutDS;
}(LayoutDataSource));
export { AwCollectionLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUs5QjtJQUEwQyx3Q0FBZ0I7SUFBMUQ7UUFBQSxxRUE0TEM7UUFqTFMsd0JBQWtCLEdBQUc7WUFDM0IsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLElBQUksRUFBRSxZQUFZO1lBQ2xCLElBQUksRUFBRSxjQUFjO1lBQ3BCLEVBQUUsRUFBRSxvQkFBb0I7WUFDeEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLE1BQU0sRUFBRSwwQkFBMEI7U0FDbkMsQ0FBQTtRQUVELG9CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWlCO1lBQ25ELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtTQUM5QixDQUFDLENBQUE7UUFFRiwyQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV4RCxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsa0VBQWtFO1FBQ2xFLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxC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QUNELE9BQU8sUUFBTSxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUcsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBNUxELENBQTBDLGdCQUFnQixHQTRMekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSwgSXRlbVByZXZpZXdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgR2V0Q29sbGVjdGlvblBhcmFtcywgR2V0Q29sbGVjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi9jb2xsZWN0aW9uLWxheW91dC50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBBd0NvbGxlY3Rpb25MYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBsYXlvdXRPcHRpb25zO1xuXG4gIHByaXZhdGUgcm91dGU7XG5cbiAgcHVibGljIGNvbGxlY3Rpb25JRDogc3RyaW5nO1xuXG4gIHByaXZhdGUgY2xhc3NpZmljYXRpb25zTWFwID0ge1xuICAgIGZmNDAwOiAnZm9uZG8tZm90b2dyYWZpY28nLFxuICAgIGFsOiAnYWdncmVnYXppb25lLWxvZ2ljYScsXG4gICAgbGE6ICdsaWJyby1hbnRpY28nLFxuICAgIHZlYWMzMDE6ICd2ZXN0aW1lbnRvJyxcbiAgICBmNDAwOiAnZm90b2dyYWZpYScsXG4gICAgdWFzYzogJ2NhcnRvZ3JhZmljYScsXG4gICAgZGM6ICdzY2hlZGEtZHVibGluLWNvcmUnLFxuICAgIG9hMzAwOiAnc2NoZWRhLW9hJyxcbiAgICBybW11czogJ21hdGVyaWFsZS1tdXNpY2FsZScsXG4gICAgdWE6ICd1bml0YS1hcmNoaXZpc3RpY2EnLFxuICAgIG9hYzMwMDogJ29wZXJhLWFydGUtY29udGVtcG9yYW5lYScsXG4gIH1cblxuICBpbm5lclRpdGxlRGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SW5uZXJUaXRsZURhdGE+KHtcbiAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICcnIH0gfSxcbiAgfSlcblxuICBjb2xsZWN0aW9uRGVzY3JpcHRpb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuXG4gIHBhZ2VTaXplID0gNjtcblxuICAvKiogTmVjZXNzYXJ5IHRvIGl0ZXJhdGUgd2l0aCB0aGUgbG9hZGluZyBpdGVtIHBsYWNlaG9sZGVyIEhUTUwgKi9cbiAgcGFnZVNpemVMaXN0ID0gW107XG5cbiAgY3VycmVudE9mZnNldCA9IDA7XG5cbiAgbG9hZGVkQ29sbGVjdGlvbnM6IEJlaGF2aW9yU3ViamVjdDxJdGVtUHJldmlld0RhdGFbXSB8IFtdPjtcblxuICAvKiogQnV0dG9uIHRoYXQgbG9hZHMgbW9yZSBjb250ZW50IGludG8gdGhlIGxheW91dCAqL1xuICBsb2FkTW9yZUJ1dHRvbiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG5cbiAgLyoqIENvbnRyb2xzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBsYXlvdXQgKi9cbiAgbG9hZGluZyA9IHRydWU7XG5cbiAgb25Jbml0KHBheWxvYWQpIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XG4gICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMubG9hZGVkQ29sbGVjdGlvbnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb2xsZWN0aW9uLWxheW91dCcpO1xuICAgIHRoaXMucGFnZVNpemVMaXN0ID0gbmV3IEFycmF5KHRoaXMucGFnZVNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIHRoZSBjb2xsZWN0aW9uIElEIGhhcyBiZWVuIGxvYWRlZFxuICAgKi9cbiAgb25Db2xsZWN0aW9uSUQoKSB7XG4gICAgLy8gcmVzZXQgcGFnaW5hdGlvbiBwYXJhbXNcbiAgICB0aGlzLnBhZ2VTaXplID0gNjtcbiAgICB0aGlzLmN1cnJlbnRPZmZzZXQgPSAwO1xuICAgIC8vIGxvYWRcbiAgICB0aGlzLmxvYWRNb3JlKHRydWUpO1xuICB9XG5cbiAgbG9hZE1vcmUocmVsb2FkID0gZmFsc2UpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBHZXRDb2xsZWN0aW9uUGFyYW1zID0ge1xuICAgICAgaWQ6IHRoaXMuY29sbGVjdGlvbklELFxuICAgICAgaXRlbVBhZ2luYXRpb246IHtcbiAgICAgICAgbGltaXQ6IHRoaXMucGFnZVNpemUsXG4gICAgICAgIG9mZnNldDogdGhpcy5jdXJyZW50T2Zmc2V0LFxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRDb2xsZWN0aW9uJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtc1xuICAgIH0pLnBpcGUoXG4gICAgICBmaXJzdCgoZCkgPT4gISFkKSxcbiAgICAgIG1hcCgoZDogR2V0Q29sbGVjdGlvblJlc3BvbnNlKSA9PiAoe1xuICAgICAgICAvLyBtYXAgdGhlIGJhY2tlbmQgcmVzcG9uc2UgdG8gdGhlIGZvcm1hdCB1c2VkIGJ5IEl0ZW1QcmV2aWV3Q29tcG9uZW50XG4gICAgICAgIHJlc3BvbnNlOiBkLml0ZW1zLm1hcCgoaXRlbTogQ29sbGVjdGlvbkl0ZW0pID0+ICh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuc3RyaW5nTGltaXRlcihpdGVtLnRpdGxlLCB7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLnRpdGxlLm1heExlbmd0aCxcbiAgICAgICAgICAgIGNoYXI6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLnRpdGxlLmNoYXIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGV4dDogdGhpcy5zdHJpbmdMaW1pdGVyKGl0ZW0uY29udGVudCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS5kZXNjcmlwdGlvbi5tYXhMZW5ndGgsXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS5kZXNjcmlwdGlvbi5jaGFyXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2xhc3NlczogYCR7aXRlbS5pbWFnZSA/ICdpcy1vdmVybGF5IGhhcy1pbWFnZScgOiAnaXMtb3ZlcmxheSBoYXMtaW1hZ2UgaGFzLXdhdGVybWFyayd9ICR7dGhpcy5jbGFzc01hcChpdGVtLmNsYXNzaWZpY2F0aW9uKX1gLFxuICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlIHx8IHRoaXMubGF5b3V0T3B0aW9ucy53YXRlcm1hcmssXG4gICAgICAgICAgY29sb3I6IGl0ZW0uYmFja2dyb3VuZCxcbiAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgIGhyZWY6IGl0ZW0udXJsIHx8IHRoaXMudXJsQnVpbGRlcihpdGVtLmE0dklkLCBpdGVtLnRpdGxlLCBpdGVtLnR5cGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc2lmaWNhdGlvbjogaXRlbS5jbGFzc2lmaWNhdGlvblxuICAgICAgICB9KSksXG4gICAgICAgIHRleHQ6IGQudGV4dCxcbiAgICAgICAgdGl0bGU6IGQudGl0bGUsXG4gICAgICAgIHRvdGFsOiBkLnRvdGFsLFxuICAgICAgfSkpXG4gICAgKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChkYXRhLnRpdGxlKSB7XG4gICAgICAgICAgdGhpcy5zZXRUaXRsZSh0aGlzLnN0cmluZ0xpbWl0ZXIoZGF0YS50aXRsZSwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuaGVhZGVyLm1heExlbmd0aCxcbiAgICAgICAgICAgIGNoYXI6IHRoaXMubGF5b3V0T3B0aW9ucy5oZWFkZXIuY2hhclxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25EZXNjcmlwdGlvbi5uZXh0KGRhdGEudGV4dCA/IHRoaXMuc3RyaW5nTGltaXRlcihkYXRhLnRleHQsIHtcbiAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5kZXNjcmlwdGlvbi5tYXhMZW5ndGgsXG4gICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLmRlc2NyaXB0aW9uLmNoYXJcbiAgICAgICAgfSkgOiAnJyk7XG4gICAgICAgIHRoaXMuY3VycmVudE9mZnNldCArPSB0aGlzLnBhZ2VTaXplO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uRGF0YSA9ICFyZWxvYWRcbiAgICAgICAgICA/IFsuLi5jb2xsZWN0aW9uLCAuLi5kYXRhLnJlc3BvbnNlXVxuICAgICAgICAgIDogWy4uLmRhdGEucmVzcG9uc2VdO1xuICAgICAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLm5leHQoY29sbGVjdGlvbkRhdGEpO1xuICAgICAgICB0aGlzLmxvYWRNb3JlQnV0dG9uLm5leHQoXG4gICAgICAgICAgZGF0YS50b3RhbCA+IHRoaXMubG9hZGVkQ29sbGVjdGlvbnMuZ2V0VmFsdWUoKS5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgdGhpcy5sb2FkTW9yZUJ1dHRvbi5uZXh0KGZhbHNlKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGEgVVJMIGZyb20gZW50aXR5IHR5cGUsXG4gICAqIGVudGl0eSBpZCwgYW5kIGEgc2x1ZyBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB0eXBlIGVudGl0eSB0eXBlXG4gICAqIEBwYXJhbSBpZCBlbnRpdHkgSURcbiAgICogQHBhcmFtIHRpdGxlIGh1bWFuLXJlYWRhYmxlIHRpdGxlXG4gICAqIEByZXR1cm5zIFVSTCBzdHJpbmcgaW5jbHVkaW5nIGEgc2x1Z1xuICAgKi9cbiAgdXJsQnVpbGRlcihpZCwgdGl0bGUsIHR5cGU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGlkICYmIHRpdGxlKSB7XG4gICAgICBjb25zdCB0aXRsZVNsdWcgPSBzbHVnaWZ5KHRpdGxlKTtcbiAgICAgIGNvbnN0IHsgc2NoZWRhQmFzZVBhdGgsIGVudGl0YUJhc2VQYXRoIH0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpO1xuICAgICAgY29uc3QgYmFzZVBhdGggPSB0eXBlID09PSAnZW50aXR5JyA/IGVudGl0YUJhc2VQYXRoIDogc2NoZWRhQmFzZVBhdGg7XG4gICAgICByZXR1cm4gYC8ke2Jhc2VQYXRofS8ke2lkfS8ke3RpdGxlU2x1Z31gO1xuICAgIH0gcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0cmluZ0xpbWl0ZXIoY29udGVudDogc3RyaW5nLCBvcHRpb25zOiB7IG1heExlbmd0aDogbnVtYmVyOyBjaGFyOiBzdHJpbmcgfSk6IHN0cmluZyB7XG4gICAgbGV0IHJlcyA9IGNvbnRlbnQ7XG4gICAgaWYgKGNvbnRlbnQgJiYgb3B0aW9ucy5tYXhMZW5ndGgpIHtcbiAgICAgIHJlcyA9IGNvbnRlbnQuc2xpY2UoMCwgb3B0aW9ucy5tYXhMZW5ndGgpO1xuICAgICAgaWYgKG9wdGlvbnMuY2hhciAmJiByZXMgIT09IGNvbnRlbnQpIHtcbiAgICAgICAgcmVzICs9IG9wdGlvbnMuY2hhcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlubmVyVGl0bGVEYXRhLm5leHQoe1xuICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiB0aXRsZSB9IH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGNsYXNzaWZpY2F0aW9uIHN0cmluZ3MgdG8gY3NzIGNsYXNzZXMuXG4gICAqXG4gICAqIEBwYXJhbSBjbGFzc2lmaWNhdGlvbiBhIGNsYXNzaWZpY2F0aW9uIHN0cmluZyBsaWtlIFwiYTQub2MudWFcIlxuICAgKiBAcmV0dXJucyBhIENTUyBjbGFzc1xuICAgKi9cbiAgY2xhc3NNYXAoY2xhc3NpZmljYXRpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCFjbGFzc2lmaWNhdGlvbiB8fCBjbGFzc2lmaWNhdGlvbi5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IGNvZGVNYXRjaCA9IC9cXC4oXFx3KykkL2dpLmV4ZWMoY2xhc3NpZmljYXRpb24pO1xuICAgIGlmIChjb2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IHBhcnNlZENvZGUgPSBjb2RlTWF0Y2hbMV0/LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmNsYXNzaWZpY2F0aW9uc01hcFtwYXJzZWRDb2RlXTtcbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGBpcy0ke2NsYXNzTmFtZX1gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYGlzLSR7Y2xhc3NpZmljYXRpb24ucmVwbGFjZSgnLicsICctJyl9YDtcbiAgfVxufVxuIl19