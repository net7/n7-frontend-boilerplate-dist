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
        // check base url config
        var baseUrls = this.configuration.get('baseUrls') || {};
        var baseUrl = baseUrls.portaleMatriceServer || null;
        if (baseUrl) {
            params.baseUrl = baseUrl;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUs5QjtJQUEwQyx3Q0FBZ0I7SUFBMUQ7UUFBQSxxRUFrTUM7UUF2TFMsd0JBQWtCLEdBQUc7WUFDM0IsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLElBQUksRUFBRSxZQUFZO1lBQ2xCLElBQUksRUFBRSxjQUFjO1lBQ3BCLEVBQUUsRUFBRSxvQkFBb0I7WUFDeEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLE1BQU0sRUFBRSwwQkFBMEI7U0FDbkMsQ0FBQTtRQUVELG9CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWlCO1lBQ25ELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtTQUM5QixDQUFDLENBQUE7UUFFRiwyQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV4RCxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsa0VBQWtFO1FBQ2xFLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxC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QztRQUNwRCxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQU0sVUFBVSxTQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsMENBQUUsaUJBQWlCLEVBQUUsQ0FBQztZQUNyRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsT0FBTyxRQUFNLFNBQVcsQ0FBQzthQUMxQjtTQUNGO1FBQ0QsT0FBTyxRQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBRyxDQUFDO0lBQ2xELENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFsTUQsQ0FBMEMsZ0JBQWdCLEdBa016RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElubmVyVGl0bGVEYXRhLCBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29sbGVjdGlvbkl0ZW0sIEdldENvbGxlY3Rpb25QYXJhbXMsIEdldENvbGxlY3Rpb25SZXNwb25zZSB9IGZyb20gJy4vY29sbGVjdGlvbi1sYXlvdXQudHlwZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3Q29sbGVjdGlvbkxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XHJcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBsYXlvdXRPcHRpb25zO1xyXG5cclxuICBwcml2YXRlIHJvdXRlO1xyXG5cclxuICBwdWJsaWMgY29sbGVjdGlvbklEOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY2xhc3NpZmljYXRpb25zTWFwID0ge1xyXG4gICAgZmY0MDA6ICdmb25kby1mb3RvZ3JhZmljbycsXHJcbiAgICBhbDogJ2FnZ3JlZ2F6aW9uZS1sb2dpY2EnLFxyXG4gICAgbGE6ICdsaWJyby1hbnRpY28nLFxyXG4gICAgdmVhYzMwMTogJ3Zlc3RpbWVudG8nLFxyXG4gICAgZjQwMDogJ2ZvdG9ncmFmaWEnLFxyXG4gICAgdWFzYzogJ2NhcnRvZ3JhZmljYScsXHJcbiAgICBkYzogJ3NjaGVkYS1kdWJsaW4tY29yZScsXHJcbiAgICBvYTMwMDogJ3NjaGVkYS1vYScsXHJcbiAgICBybW11czogJ21hdGVyaWFsZS1tdXNpY2FsZScsXHJcbiAgICB1YTogJ3VuaXRhLWFyY2hpdmlzdGljYScsXHJcbiAgICBvYWMzMDA6ICdvcGVyYS1hcnRlLWNvbnRlbXBvcmFuZWEnLFxyXG4gIH1cclxuXHJcbiAgaW5uZXJUaXRsZURhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElubmVyVGl0bGVEYXRhPih7XHJcbiAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICcnIH0gfSxcclxuICB9KVxyXG5cclxuICBjb2xsZWN0aW9uRGVzY3JpcHRpb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xyXG5cclxuICBwYWdlU2l6ZSA9IDY7XHJcblxyXG4gIC8qKiBOZWNlc3NhcnkgdG8gaXRlcmF0ZSB3aXRoIHRoZSBsb2FkaW5nIGl0ZW0gcGxhY2Vob2xkZXIgSFRNTCAqL1xyXG4gIHBhZ2VTaXplTGlzdCA9IFtdO1xyXG5cclxuICBjdXJyZW50T2Zmc2V0ID0gMDtcclxuXHJcbiAgbG9hZGVkQ29sbGVjdGlvbnM6IEJlaGF2aW9yU3ViamVjdDxJdGVtUHJldmlld0RhdGFbXSB8IFtdPjtcclxuXHJcbiAgLyoqIEJ1dHRvbiB0aGF0IGxvYWRzIG1vcmUgY29udGVudCBpbnRvIHRoZSBsYXlvdXQgKi9cclxuICBsb2FkTW9yZUJ1dHRvbiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcblxyXG4gIC8qKiBDb250cm9scyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgbGF5b3V0ICovXHJcbiAgbG9hZGluZyA9IHRydWU7XHJcblxyXG4gIG9uSW5pdChwYXlsb2FkKSB7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBwYXlsb2FkLmNvbW11bmljYXRpb247XHJcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMubG9hZGVkQ29sbGVjdGlvbnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcclxuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbGxlY3Rpb24tbGF5b3V0Jyk7XHJcbiAgICB0aGlzLnBhZ2VTaXplTGlzdCA9IG5ldyBBcnJheSh0aGlzLnBhZ2VTaXplKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFmdGVyIHRoZSBjb2xsZWN0aW9uIElEIGhhcyBiZWVuIGxvYWRlZFxyXG4gICAqL1xyXG4gIG9uQ29sbGVjdGlvbklEKCkge1xyXG4gICAgLy8gcmVzZXQgcGFnaW5hdGlvbiBwYXJhbXNcclxuICAgIHRoaXMucGFnZVNpemUgPSA2O1xyXG4gICAgdGhpcy5jdXJyZW50T2Zmc2V0ID0gMDtcclxuICAgIC8vIGxvYWRcclxuICAgIHRoaXMubG9hZE1vcmUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkTW9yZShyZWxvYWQgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCk7XHJcbiAgICBjb25zdCBwYXJhbXM6IEdldENvbGxlY3Rpb25QYXJhbXMgPSB7XHJcbiAgICAgIGlkOiB0aGlzLmNvbGxlY3Rpb25JRCxcclxuICAgICAgaXRlbVBhZ2luYXRpb246IHtcclxuICAgICAgICBsaW1pdDogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgICBvZmZzZXQ6IHRoaXMuY3VycmVudE9mZnNldCxcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIGNoZWNrIGJhc2UgdXJsIGNvbmZpZ1xyXG4gICAgY29uc3QgYmFzZVVybHMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdiYXNlVXJscycpIHx8IHt9O1xyXG4gICAgY29uc3QgYmFzZVVybCA9IGJhc2VVcmxzLnBvcnRhbGVNYXRyaWNlU2VydmVyIHx8IG51bGw7XHJcbiAgICBpZiAoYmFzZVVybCkge1xyXG4gICAgICBwYXJhbXMuYmFzZVVybCA9IGJhc2VVcmw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldENvbGxlY3Rpb24nLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSkucGlwZShcclxuICAgICAgZmlyc3QoKGQpID0+ICEhZCksXHJcbiAgICAgIG1hcCgoZDogR2V0Q29sbGVjdGlvblJlc3BvbnNlKSA9PiAoe1xyXG4gICAgICAgIC8vIG1hcCB0aGUgYmFja2VuZCByZXNwb25zZSB0byB0aGUgZm9ybWF0IHVzZWQgYnkgSXRlbVByZXZpZXdDb21wb25lbnRcclxuICAgICAgICByZXNwb25zZTogZC5pdGVtcy5tYXAoKGl0ZW06IENvbGxlY3Rpb25JdGVtKSA9PiAoe1xyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuc3RyaW5nTGltaXRlcihpdGVtLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIG1heExlbmd0aDogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0udGl0bGUubWF4TGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS50aXRsZS5jaGFyLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICB0ZXh0OiB0aGlzLnN0cmluZ0xpbWl0ZXIoaXRlbS5jb250ZW50LCB7XHJcbiAgICAgICAgICAgIG1heExlbmd0aDogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0uZGVzY3JpcHRpb24ubWF4TGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS5kZXNjcmlwdGlvbi5jaGFyXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGNsYXNzZXM6IGAke2l0ZW0uaW1hZ2UgPyAnaXMtb3ZlcmxheSBoYXMtaW1hZ2UnIDogJ2lzLW92ZXJsYXkgaGFzLWltYWdlIGhhcy13YXRlcm1hcmsnfSAke3RoaXMuY2xhc3NNYXAoaXRlbS5jbGFzc2lmaWNhdGlvbil9YCxcclxuICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlIHx8IHRoaXMubGF5b3V0T3B0aW9ucy53YXRlcm1hcmssXHJcbiAgICAgICAgICBjb2xvcjogaXRlbS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IGl0ZW0udXJsIHx8IHRoaXMudXJsQnVpbGRlcihpdGVtLmE0dklkLCBpdGVtLnRpdGxlLCBpdGVtLnR5cGUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2xhc3NpZmljYXRpb246IGl0ZW0uY2xhc3NpZmljYXRpb25cclxuICAgICAgICB9KSksXHJcbiAgICAgICAgdGV4dDogZC50ZXh0LFxyXG4gICAgICAgIHRpdGxlOiBkLnRpdGxlLFxyXG4gICAgICAgIHRvdGFsOiBkLnRvdGFsLFxyXG4gICAgICB9KSlcclxuICAgICkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZGF0YS50aXRsZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRUaXRsZSh0aGlzLnN0cmluZ0xpbWl0ZXIoZGF0YS50aXRsZSwge1xyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5oZWFkZXIubWF4TGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaGVhZGVyLmNoYXJcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uRGVzY3JpcHRpb24ubmV4dChkYXRhLnRleHQgPyB0aGlzLnN0cmluZ0xpbWl0ZXIoZGF0YS50ZXh0LCB7XHJcbiAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5kZXNjcmlwdGlvbi5tYXhMZW5ndGgsXHJcbiAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuZGVzY3JpcHRpb24uY2hhclxyXG4gICAgICAgIH0pIDogJycpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9mZnNldCArPSB0aGlzLnBhZ2VTaXplO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25EYXRhID0gIXJlbG9hZFxyXG4gICAgICAgICAgPyBbLi4uY29sbGVjdGlvbiwgLi4uZGF0YS5yZXNwb25zZV1cclxuICAgICAgICAgIDogWy4uLmRhdGEucmVzcG9uc2VdO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQ29sbGVjdGlvbnMubmV4dChjb2xsZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgdGhpcy5sb2FkTW9yZUJ1dHRvbi5uZXh0KFxyXG4gICAgICAgICAgZGF0YS50b3RhbCA+IHRoaXMubG9hZGVkQ29sbGVjdGlvbnMuZ2V0VmFsdWUoKS5sZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIHRoaXMubG9hZE1vcmVCdXR0b24ubmV4dChmYWxzZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBhIFVSTCBmcm9tIGVudGl0eSB0eXBlLFxyXG4gICAqIGVudGl0eSBpZCwgYW5kIGEgc2x1ZyBzdHJpbmcuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdHlwZSBlbnRpdHkgdHlwZVxyXG4gICAqIEBwYXJhbSBpZCBlbnRpdHkgSURcclxuICAgKiBAcGFyYW0gdGl0bGUgaHVtYW4tcmVhZGFibGUgdGl0bGVcclxuICAgKiBAcmV0dXJucyBVUkwgc3RyaW5nIGluY2x1ZGluZyBhIHNsdWdcclxuICAgKi9cclxuICB1cmxCdWlsZGVyKGlkLCB0aXRsZSwgdHlwZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChpZCAmJiB0aXRsZSkge1xyXG4gICAgICBjb25zdCB0aXRsZVNsdWcgPSBzbHVnaWZ5KHRpdGxlKTtcclxuICAgICAgY29uc3QgeyBzY2hlZGFCYXNlUGF0aCwgZW50aXRhQmFzZVBhdGggfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XHJcbiAgICAgIGNvbnN0IGJhc2VQYXRoID0gdHlwZSA9PT0gJ2VudGl0eScgPyBlbnRpdGFCYXNlUGF0aCA6IHNjaGVkYUJhc2VQYXRoO1xyXG4gICAgICByZXR1cm4gYC8ke2Jhc2VQYXRofS8ke2lkfS8ke3RpdGxlU2x1Z31gO1xyXG4gICAgfSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgc3RyaW5nTGltaXRlcihjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM6IHsgbWF4TGVuZ3RoOiBudW1iZXI7IGNoYXI6IHN0cmluZyB9KTogc3RyaW5nIHtcclxuICAgIGxldCByZXMgPSBjb250ZW50O1xyXG4gICAgaWYgKGNvbnRlbnQgJiYgb3B0aW9ucy5tYXhMZW5ndGgpIHtcclxuICAgICAgcmVzID0gY29udGVudC5zbGljZSgwLCBvcHRpb25zLm1heExlbmd0aCk7XHJcbiAgICAgIGlmIChvcHRpb25zLmNoYXIgJiYgcmVzICE9PSBjb250ZW50KSB7XHJcbiAgICAgICAgcmVzICs9IG9wdGlvbnMuY2hhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5uZXJUaXRsZURhdGEubmV4dCh7XHJcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogdGl0bGUgfSB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgY2xhc3NpZmljYXRpb24gc3RyaW5ncyB0byBjc3MgY2xhc3Nlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjbGFzc2lmaWNhdGlvbiBhIGNsYXNzaWZpY2F0aW9uIHN0cmluZyBsaWtlIFwiYTQub2MudWFcIlxyXG4gICAqIEByZXR1cm5zIGEgQ1NTIGNsYXNzXHJcbiAgICovXHJcbiAgY2xhc3NNYXAoY2xhc3NpZmljYXRpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWNsYXNzaWZpY2F0aW9uIHx8IGNsYXNzaWZpY2F0aW9uLmxlbmd0aCA8IDEpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29kZU1hdGNoID0gL1xcLihcXHcrKSQvZ2kuZXhlYyhjbGFzc2lmaWNhdGlvbik7XHJcbiAgICBpZiAoY29kZU1hdGNoKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZENvZGUgPSBjb2RlTWF0Y2hbMV0/LnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NpZmljYXRpb25zTWFwW3BhcnNlZENvZGVdO1xyXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGBpcy0ke2NsYXNzTmFtZX1gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYGlzLSR7Y2xhc3NpZmljYXRpb24ucmVwbGFjZSgnLicsICctJyl9YDtcclxuICB9XHJcbn1cclxuIl19