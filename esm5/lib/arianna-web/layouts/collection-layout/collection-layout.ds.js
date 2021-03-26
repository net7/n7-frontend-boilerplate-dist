import { __extends, __read, __spread } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { BehaviorSubject } from 'rxjs';
import { first, map } from 'rxjs/operators';
import slugify from 'slugify';
var AwCollectionLayoutDS = /** @class */ (function (_super) {
    __extends(AwCollectionLayoutDS, _super);
    function AwCollectionLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.innerTitleData = new BehaviorSubject({
            title: { main: { text: '' } },
        });
        _this.collectionDescription = new BehaviorSubject('');
        _this.pageSize = 6;
        _this.currentOffset = 0;
        _this.loadMoreButton = new BehaviorSubject(true);
        return _this;
    }
    AwCollectionLayoutDS.prototype.onInit = function (payload) {
        this.communication = payload.communication;
        this.route = payload.route;
        this.configuration = payload.configuration;
        this.loadedCollections = new BehaviorSubject([]);
        this.layoutOptions = this.configuration.get('collection-layout');
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
                classes: (item.image ? 'is-overlay has-image' : 'is-overlay has-image has-watermark') + " " + (item.classification ? "is-" + item.classification : ''),
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
    return AwCollectionLayoutDS;
}(LayoutDataSource));
export { AwCollectionLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUs5QjtJQUEwQyx3Q0FBZ0I7SUFBMUQ7UUFBQSxxRUErSUM7UUFwSUMsb0JBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBaUI7WUFDbkQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO1NBQzlCLENBQUMsQ0FBQTtRQUVGLDJCQUFxQixHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXhELGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUlsQixvQkFBYyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBOztJQXdINUMsQ0FBQztJQXRIQyxxQ0FBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJ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QUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUEvSUQsQ0FBMEMsZ0JBQWdCLEdBK0l6RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElubmVyVGl0bGVEYXRhLCBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29tbXVuaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbGxlY3Rpb25JdGVtLCBHZXRDb2xsZWN0aW9uUGFyYW1zLCBHZXRDb2xsZWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuL2NvbGxlY3Rpb24tbGF5b3V0LnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIEF3Q29sbGVjdGlvbkxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogQ29tbXVuaWNhdGlvblNlcnZpY2U7XG5cbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGxheW91dE9wdGlvbnM7XG5cbiAgcHJpdmF0ZSByb3V0ZTtcblxuICBwdWJsaWMgY29sbGVjdGlvbklEOiBzdHJpbmc7XG5cbiAgaW5uZXJUaXRsZURhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElubmVyVGl0bGVEYXRhPih7XG4gICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiAnJyB9IH0sXG4gIH0pXG5cbiAgY29sbGVjdGlvbkRlc2NyaXB0aW9uID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCcnKTtcblxuICBwYWdlU2l6ZSA9IDY7XG5cbiAgY3VycmVudE9mZnNldCA9IDA7XG5cbiAgbG9hZGVkQ29sbGVjdGlvbnM6IEJlaGF2aW9yU3ViamVjdDxJdGVtUHJldmlld0RhdGFbXSB8IFtdPjtcblxuICBsb2FkTW9yZUJ1dHRvbiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSlcblxuICBvbkluaXQocGF5bG9hZCkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBwYXlsb2FkLmNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5sb2FkZWRDb2xsZWN0aW9ucyA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbGxlY3Rpb24tbGF5b3V0Jyk7XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgdGhlIGNvbGxlY3Rpb24gSUQgaGFzIGJlZW4gbG9hZGVkXG4gICAqL1xuICBvbkNvbGxlY3Rpb25JRCgpIHtcbiAgICAvLyByZXNldCBwYWdpbmF0aW9uIHBhcmFtc1xuICAgIHRoaXMucGFnZVNpemUgPSA2O1xuICAgIHRoaXMuY3VycmVudE9mZnNldCA9IDA7XG4gICAgLy8gbG9hZFxuICAgIHRoaXMubG9hZE1vcmUodHJ1ZSk7XG4gIH1cblxuICBsb2FkTW9yZShyZWxvYWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBHZXRDb2xsZWN0aW9uUGFyYW1zID0ge1xuICAgICAgaWQ6IHRoaXMuY29sbGVjdGlvbklELFxuICAgICAgaXRlbVBhZ2luYXRpb246IHtcbiAgICAgICAgbGltaXQ6IHRoaXMucGFnZVNpemUsXG4gICAgICAgIG9mZnNldDogdGhpcy5jdXJyZW50T2Zmc2V0LFxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRDb2xsZWN0aW9uJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtc1xuICAgIH0pLnBpcGUoXG4gICAgICBmaXJzdCgoZCkgPT4gISFkKSxcbiAgICAgIG1hcCgoZDogR2V0Q29sbGVjdGlvblJlc3BvbnNlKSA9PiAoe1xuICAgICAgICAvLyBtYXAgdGhlIGJhY2tlbmQgcmVzcG9uc2UgdG8gdGhlIGZvcm1hdCB1c2VkIGJ5IEl0ZW1QcmV2aWV3Q29tcG9uZW50XG4gICAgICAgIHJlc3BvbnNlOiBkLml0ZW1zLm1hcCgoaXRlbTogQ29sbGVjdGlvbkl0ZW0pID0+ICh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuc3RyaW5nTGltaXRlcihpdGVtLnRpdGxlLCB7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLnRpdGxlLm1heExlbmd0aCxcbiAgICAgICAgICAgIGNoYXI6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLnRpdGxlLmNoYXIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGV4dDogdGhpcy5zdHJpbmdMaW1pdGVyKGl0ZW0uY29udGVudCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS5kZXNjcmlwdGlvbi5tYXhMZW5ndGgsXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS5kZXNjcmlwdGlvbi5jaGFyXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2xhc3NlczogYCR7aXRlbS5pbWFnZSA/ICdpcy1vdmVybGF5IGhhcy1pbWFnZScgOiAnaXMtb3ZlcmxheSBoYXMtaW1hZ2UgaGFzLXdhdGVybWFyayd9ICR7aXRlbS5jbGFzc2lmaWNhdGlvbiA/IGBpcy0ke2l0ZW0uY2xhc3NpZmljYXRpb259YCA6ICcnfWAsXG4gICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UgfHwgdGhpcy5sYXlvdXRPcHRpb25zLndhdGVybWFyayxcbiAgICAgICAgICBjb2xvcjogaXRlbS5iYWNrZ3JvdW5kLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgaHJlZjogaXRlbS51cmwgfHwgdGhpcy51cmxCdWlsZGVyKGl0ZW0uYTR2SWQsIGl0ZW0udGl0bGUsIGl0ZW0udHlwZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzaWZpY2F0aW9uOiBpdGVtLmNsYXNzaWZpY2F0aW9uXG4gICAgICAgIH0pKSxcbiAgICAgICAgdGV4dDogZC50ZXh0LFxuICAgICAgICB0aXRsZTogZC50aXRsZSxcbiAgICAgICAgdG90YWw6IGQudG90YWwsXG4gICAgICB9KSlcbiAgICApLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgICAgIHRoaXMuc2V0VGl0bGUodGhpcy5zdHJpbmdMaW1pdGVyKGRhdGEudGl0bGUsIHtcbiAgICAgICAgICAgIG1heExlbmd0aDogdGhpcy5sYXlvdXRPcHRpb25zLmhlYWRlci5tYXhMZW5ndGgsXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaGVhZGVyLmNoYXJcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uRGVzY3JpcHRpb24ubmV4dChkYXRhLnRleHQgPyB0aGlzLnN0cmluZ0xpbWl0ZXIoZGF0YS50ZXh0LCB7XG4gICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuZGVzY3JpcHRpb24ubWF4TGVuZ3RoLFxuICAgICAgICAgIGNoYXI6IHRoaXMubGF5b3V0T3B0aW9ucy5kZXNjcmlwdGlvbi5jaGFyXG4gICAgICAgIH0pIDogJycpO1xuICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgKz0gdGhpcy5wYWdlU2l6ZTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkRhdGEgPSAhcmVsb2FkXG4gICAgICAgICAgPyBbLi4uY29sbGVjdGlvbiwgLi4uZGF0YS5yZXNwb25zZV1cbiAgICAgICAgICA6IFsuLi5kYXRhLnJlc3BvbnNlXTtcbiAgICAgICAgdGhpcy5sb2FkZWRDb2xsZWN0aW9ucy5uZXh0KGNvbGxlY3Rpb25EYXRhKTtcbiAgICAgICAgdGhpcy5sb2FkTW9yZUJ1dHRvbi5uZXh0KFxuICAgICAgICAgIGRhdGEudG90YWwgPiB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCkubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHRoaXMubG9hZE1vcmVCdXR0b24ubmV4dChmYWxzZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhIFVSTCBmcm9tIGVudGl0eSB0eXBlLFxuICAgKiBlbnRpdHkgaWQsIGFuZCBhIHNsdWcgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBlbnRpdHkgdHlwZVxuICAgKiBAcGFyYW0gaWQgZW50aXR5IElEXG4gICAqIEBwYXJhbSB0aXRsZSBodW1hbi1yZWFkYWJsZSB0aXRsZVxuICAgKiBAcmV0dXJucyBVUkwgc3RyaW5nIGluY2x1ZGluZyBhIHNsdWdcbiAgICovXG4gIHVybEJ1aWxkZXIoaWQsIHRpdGxlLCB0eXBlOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGlmIChpZCAmJiB0aXRsZSkge1xuICAgICAgY29uc3QgdGl0bGVTbHVnID0gc2x1Z2lmeSh0aXRsZSk7XG4gICAgICBjb25zdCB7IHNjaGVkYUJhc2VQYXRoLCBlbnRpdGFCYXNlUGF0aCB9ID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKTtcbiAgICAgIGNvbnN0IGJhc2VQYXRoID0gdHlwZSA9PT0gJ2VudGl0eScgPyBlbnRpdGFCYXNlUGF0aCA6IHNjaGVkYUJhc2VQYXRoO1xuICAgICAgcmV0dXJuIGAvJHtiYXNlUGF0aH0vJHtpZH0vJHt0aXRsZVNsdWd9YDtcbiAgICB9IHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBzdHJpbmdMaW1pdGVyKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9uczogeyBtYXhMZW5ndGg6IG51bWJlcjsgY2hhcjogc3RyaW5nIH0pOiBzdHJpbmcge1xuICAgIGxldCByZXMgPSBjb250ZW50O1xuICAgIGlmIChjb250ZW50ICYmIG9wdGlvbnMubWF4TGVuZ3RoKSB7XG4gICAgICByZXMgPSBjb250ZW50LnNsaWNlKDAsIG9wdGlvbnMubWF4TGVuZ3RoKTtcbiAgICAgIGlmIChvcHRpb25zLmNoYXIgJiYgcmVzICE9PSBjb250ZW50KSB7XG4gICAgICAgIHJlcyArPSBvcHRpb25zLmNoYXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbm5lclRpdGxlRGF0YS5uZXh0KHtcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogdGl0bGUgfSB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==