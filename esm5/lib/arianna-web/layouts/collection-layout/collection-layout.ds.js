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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUs5QjtJQUEwQyx3Q0FBZ0I7SUFBMUQ7UUFBQSxxRUE0TEM7UUFqTFMsd0JBQWtCLEdBQUc7WUFDM0IsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixFQUFFLEVBQUUscUJBQXFCO1lBQ3pCLEVBQUUsRUFBRSxjQUFjO1lBQ2xCLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLElBQUksRUFBRSxZQUFZO1lBQ2xCLElBQUksRUFBRSxjQUFjO1lBQ3BCLEVBQUUsRUFBRSxvQkFBb0I7WUFDeEIsS0FBSyxFQUFFLFdBQVc7WUFDbEIsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLE1BQU0sRUFBRSwwQkFBMEI7U0FDbkMsQ0FBQTtRQUVELG9CQUFjLEdBQUcsSUFBSSxlQUFlLENBQWlCO1lBQ25ELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtTQUM5QixDQUFDLENBQUE7UUFFRiwyQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUV4RCxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWIsa0VBQWtFO1FBQ2xFLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxC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QUNELE9BQU8sUUFBTSxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUcsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBNUxELENBQTBDLGdCQUFnQixHQTRMekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbm5lclRpdGxlRGF0YSwgSXRlbVByZXZpZXdEYXRhIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25JdGVtLCBHZXRDb2xsZWN0aW9uUGFyYW1zLCBHZXRDb2xsZWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuL2NvbGxlY3Rpb24tbGF5b3V0LnR5cGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0NvbGxlY3Rpb25MYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvblNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgbGF5b3V0T3B0aW9ucztcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTtcclxuXHJcbiAgcHVibGljIGNvbGxlY3Rpb25JRDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNsYXNzaWZpY2F0aW9uc01hcCA9IHtcclxuICAgIGZmNDAwOiAnZm9uZG8tZm90b2dyYWZpY28nLFxyXG4gICAgYWw6ICdhZ2dyZWdhemlvbmUtbG9naWNhJyxcclxuICAgIGxhOiAnbGlicm8tYW50aWNvJyxcclxuICAgIHZlYWMzMDE6ICd2ZXN0aW1lbnRvJyxcclxuICAgIGY0MDA6ICdmb3RvZ3JhZmlhJyxcclxuICAgIHVhc2M6ICdjYXJ0b2dyYWZpY2EnLFxyXG4gICAgZGM6ICdzY2hlZGEtZHVibGluLWNvcmUnLFxyXG4gICAgb2EzMDA6ICdzY2hlZGEtb2EnLFxyXG4gICAgcm1tdXM6ICdtYXRlcmlhbGUtbXVzaWNhbGUnLFxyXG4gICAgdWE6ICd1bml0YS1hcmNoaXZpc3RpY2EnLFxyXG4gICAgb2FjMzAwOiAnb3BlcmEtYXJ0ZS1jb250ZW1wb3JhbmVhJyxcclxuICB9XHJcblxyXG4gIGlubmVyVGl0bGVEYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJbm5lclRpdGxlRGF0YT4oe1xyXG4gICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiAnJyB9IH0sXHJcbiAgfSlcclxuXHJcbiAgY29sbGVjdGlvbkRlc2NyaXB0aW9uID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcclxuXHJcbiAgcGFnZVNpemUgPSA2O1xyXG5cclxuICAvKiogTmVjZXNzYXJ5IHRvIGl0ZXJhdGUgd2l0aCB0aGUgbG9hZGluZyBpdGVtIHBsYWNlaG9sZGVyIEhUTUwgKi9cclxuICBwYWdlU2l6ZUxpc3QgPSBbXTtcclxuXHJcbiAgY3VycmVudE9mZnNldCA9IDA7XHJcblxyXG4gIGxvYWRlZENvbGxlY3Rpb25zOiBCZWhhdmlvclN1YmplY3Q8SXRlbVByZXZpZXdEYXRhW10gfCBbXT47XHJcblxyXG4gIC8qKiBCdXR0b24gdGhhdCBsb2FkcyBtb3JlIGNvbnRlbnQgaW50byB0aGUgbGF5b3V0ICovXHJcbiAgbG9hZE1vcmVCdXR0b24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cclxuICAvKiogQ29udHJvbHMgdGhlIGxvYWRpbmcgc3RhdGUgb2YgdGhlIGxheW91dCAqL1xyXG4gIGxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICBvbkluaXQocGF5bG9hZCkge1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xyXG4gICAgdGhpcy5yb3V0ZSA9IHBheWxvYWQucm91dGU7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XHJcbiAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb2xsZWN0aW9uLWxheW91dCcpO1xyXG4gICAgdGhpcy5wYWdlU2l6ZUxpc3QgPSBuZXcgQXJyYXkodGhpcy5wYWdlU2l6ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZnRlciB0aGUgY29sbGVjdGlvbiBJRCBoYXMgYmVlbiBsb2FkZWRcclxuICAgKi9cclxuICBvbkNvbGxlY3Rpb25JRCgpIHtcclxuICAgIC8vIHJlc2V0IHBhZ2luYXRpb24gcGFyYW1zXHJcbiAgICB0aGlzLnBhZ2VTaXplID0gNjtcclxuICAgIHRoaXMuY3VycmVudE9mZnNldCA9IDA7XHJcbiAgICAvLyBsb2FkXHJcbiAgICB0aGlzLmxvYWRNb3JlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZE1vcmUocmVsb2FkID0gZmFsc2UpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gdGhpcy5sb2FkZWRDb2xsZWN0aW9ucy5nZXRWYWx1ZSgpO1xyXG4gICAgY29uc3QgcGFyYW1zOiBHZXRDb2xsZWN0aW9uUGFyYW1zID0ge1xyXG4gICAgICBpZDogdGhpcy5jb2xsZWN0aW9uSUQsXHJcbiAgICAgIGl0ZW1QYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgbGltaXQ6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgICAgb2Zmc2V0OiB0aGlzLmN1cnJlbnRPZmZzZXQsXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ2dldENvbGxlY3Rpb24nLCB7XHJcbiAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXHJcbiAgICAgIHBhcmFtc1xyXG4gICAgfSkucGlwZShcclxuICAgICAgZmlyc3QoKGQpID0+ICEhZCksXHJcbiAgICAgIG1hcCgoZDogR2V0Q29sbGVjdGlvblJlc3BvbnNlKSA9PiAoe1xyXG4gICAgICAgIC8vIG1hcCB0aGUgYmFja2VuZCByZXNwb25zZSB0byB0aGUgZm9ybWF0IHVzZWQgYnkgSXRlbVByZXZpZXdDb21wb25lbnRcclxuICAgICAgICByZXNwb25zZTogZC5pdGVtcy5tYXAoKGl0ZW06IENvbGxlY3Rpb25JdGVtKSA9PiAoe1xyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuc3RyaW5nTGltaXRlcihpdGVtLnRpdGxlLCB7XHJcbiAgICAgICAgICAgIG1heExlbmd0aDogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0udGl0bGUubWF4TGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS50aXRsZS5jaGFyLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICB0ZXh0OiB0aGlzLnN0cmluZ0xpbWl0ZXIoaXRlbS5jb250ZW50LCB7XHJcbiAgICAgICAgICAgIG1heExlbmd0aDogdGhpcy5sYXlvdXRPcHRpb25zLml0ZW0uZGVzY3JpcHRpb24ubWF4TGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS5kZXNjcmlwdGlvbi5jaGFyXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGNsYXNzZXM6IGAke2l0ZW0uaW1hZ2UgPyAnaXMtb3ZlcmxheSBoYXMtaW1hZ2UnIDogJ2lzLW92ZXJsYXkgaGFzLWltYWdlIGhhcy13YXRlcm1hcmsnfSAke3RoaXMuY2xhc3NNYXAoaXRlbS5jbGFzc2lmaWNhdGlvbil9YCxcclxuICAgICAgICAgIGltYWdlOiBpdGVtLmltYWdlIHx8IHRoaXMubGF5b3V0T3B0aW9ucy53YXRlcm1hcmssXHJcbiAgICAgICAgICBjb2xvcjogaXRlbS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgYW5jaG9yOiB7XHJcbiAgICAgICAgICAgIGhyZWY6IGl0ZW0udXJsIHx8IHRoaXMudXJsQnVpbGRlcihpdGVtLmE0dklkLCBpdGVtLnRpdGxlLCBpdGVtLnR5cGUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2xhc3NpZmljYXRpb246IGl0ZW0uY2xhc3NpZmljYXRpb25cclxuICAgICAgICB9KSksXHJcbiAgICAgICAgdGV4dDogZC50ZXh0LFxyXG4gICAgICAgIHRpdGxlOiBkLnRpdGxlLFxyXG4gICAgICAgIHRvdGFsOiBkLnRvdGFsLFxyXG4gICAgICB9KSlcclxuICAgICkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKGRhdGEpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZGF0YS50aXRsZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRUaXRsZSh0aGlzLnN0cmluZ0xpbWl0ZXIoZGF0YS50aXRsZSwge1xyXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5oZWFkZXIubWF4TGVuZ3RoLFxyXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaGVhZGVyLmNoYXJcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uRGVzY3JpcHRpb24ubmV4dChkYXRhLnRleHQgPyB0aGlzLnN0cmluZ0xpbWl0ZXIoZGF0YS50ZXh0LCB7XHJcbiAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5kZXNjcmlwdGlvbi5tYXhMZW5ndGgsXHJcbiAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuZGVzY3JpcHRpb24uY2hhclxyXG4gICAgICAgIH0pIDogJycpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE9mZnNldCArPSB0aGlzLnBhZ2VTaXplO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25EYXRhID0gIXJlbG9hZFxyXG4gICAgICAgICAgPyBbLi4uY29sbGVjdGlvbiwgLi4uZGF0YS5yZXNwb25zZV1cclxuICAgICAgICAgIDogWy4uLmRhdGEucmVzcG9uc2VdO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQ29sbGVjdGlvbnMubmV4dChjb2xsZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgdGhpcy5sb2FkTW9yZUJ1dHRvbi5uZXh0KFxyXG4gICAgICAgICAgZGF0YS50b3RhbCA+IHRoaXMubG9hZGVkQ29sbGVjdGlvbnMuZ2V0VmFsdWUoKS5sZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIHRoaXMubG9hZE1vcmVCdXR0b24ubmV4dChmYWxzZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1aWxkcyBhIFVSTCBmcm9tIGVudGl0eSB0eXBlLFxyXG4gICAqIGVudGl0eSBpZCwgYW5kIGEgc2x1ZyBzdHJpbmcuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdHlwZSBlbnRpdHkgdHlwZVxyXG4gICAqIEBwYXJhbSBpZCBlbnRpdHkgSURcclxuICAgKiBAcGFyYW0gdGl0bGUgaHVtYW4tcmVhZGFibGUgdGl0bGVcclxuICAgKiBAcmV0dXJucyBVUkwgc3RyaW5nIGluY2x1ZGluZyBhIHNsdWdcclxuICAgKi9cclxuICB1cmxCdWlsZGVyKGlkLCB0aXRsZSwgdHlwZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChpZCAmJiB0aXRsZSkge1xyXG4gICAgICBjb25zdCB0aXRsZVNsdWcgPSBzbHVnaWZ5KHRpdGxlKTtcclxuICAgICAgY29uc3QgeyBzY2hlZGFCYXNlUGF0aCwgZW50aXRhQmFzZVBhdGggfSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ3BhdGhzJyk7XHJcbiAgICAgIGNvbnN0IGJhc2VQYXRoID0gdHlwZSA9PT0gJ2VudGl0eScgPyBlbnRpdGFCYXNlUGF0aCA6IHNjaGVkYUJhc2VQYXRoO1xyXG4gICAgICByZXR1cm4gYC8ke2Jhc2VQYXRofS8ke2lkfS8ke3RpdGxlU2x1Z31gO1xyXG4gICAgfSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgc3RyaW5nTGltaXRlcihjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM6IHsgbWF4TGVuZ3RoOiBudW1iZXI7IGNoYXI6IHN0cmluZyB9KTogc3RyaW5nIHtcclxuICAgIGxldCByZXMgPSBjb250ZW50O1xyXG4gICAgaWYgKGNvbnRlbnQgJiYgb3B0aW9ucy5tYXhMZW5ndGgpIHtcclxuICAgICAgcmVzID0gY29udGVudC5zbGljZSgwLCBvcHRpb25zLm1heExlbmd0aCk7XHJcbiAgICAgIGlmIChvcHRpb25zLmNoYXIgJiYgcmVzICE9PSBjb250ZW50KSB7XHJcbiAgICAgICAgcmVzICs9IG9wdGlvbnMuY2hhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5uZXJUaXRsZURhdGEubmV4dCh7XHJcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogdGl0bGUgfSB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgY2xhc3NpZmljYXRpb24gc3RyaW5ncyB0byBjc3MgY2xhc3Nlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjbGFzc2lmaWNhdGlvbiBhIGNsYXNzaWZpY2F0aW9uIHN0cmluZyBsaWtlIFwiYTQub2MudWFcIlxyXG4gICAqIEByZXR1cm5zIGEgQ1NTIGNsYXNzXHJcbiAgICovXHJcbiAgY2xhc3NNYXAoY2xhc3NpZmljYXRpb246IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWNsYXNzaWZpY2F0aW9uIHx8IGNsYXNzaWZpY2F0aW9uLmxlbmd0aCA8IDEpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29kZU1hdGNoID0gL1xcLihcXHcrKSQvZ2kuZXhlYyhjbGFzc2lmaWNhdGlvbik7XHJcbiAgICBpZiAoY29kZU1hdGNoKSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZENvZGUgPSBjb2RlTWF0Y2hbMV0/LnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NpZmljYXRpb25zTWFwW3BhcnNlZENvZGVdO1xyXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGBpcy0ke2NsYXNzTmFtZX1gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYGlzLSR7Y2xhc3NpZmljYXRpb24ucmVwbGFjZSgnLicsICctJyl9YDtcclxuICB9XHJcbn1cclxuIl19