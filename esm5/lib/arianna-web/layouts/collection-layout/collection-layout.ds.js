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
        this.loadMore();
    };
    AwCollectionLayoutDS.prototype.loadMore = function () {
        var _this = this;
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
                    href: item.url || _this.urlBuilder(item.a4vId, item.title)
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
                if (data.text) {
                    _this.collectionDescription.next(_this.stringLimiter(data.text, {
                        maxLength: _this.layoutOptions.description.maxLength,
                        char: _this.layoutOptions.description.char
                    }));
                }
                _this.currentOffset += _this.pageSize;
                _this.loadedCollections.next(__spread(collection, data.response));
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
    AwCollectionLayoutDS.prototype.urlBuilder = function (id, title) {
        if (id && title) {
            var titleSlug = slugify(title);
            var basePath = this.configuration.get('paths').schedaBasePath;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9jb2xsZWN0aW9uLWxheW91dC9jb2xsZWN0aW9uLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUs5QjtJQUEwQyx3Q0FBZ0I7SUFBMUQ7UUFBQSxxRUF5SUM7UUE5SEMsb0JBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBaUI7WUFDbkQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO1NBQzlCLENBQUMsQ0FBQTtRQUVGLDJCQUFxQixHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRXhELGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUlsQixvQkFBYyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBOztJQWtINUMsQ0FBQztJQWhIQyxxQ0FBTSxHQUFOLFVBQU8sT0FBTztRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJ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QUFDLENBQUM7WUFDakMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDO1lBQ2hFLE9BQU8sTUFBSSxRQUFRLFNBQUksRUFBRSxTQUFJLFNBQVcsQ0FBQztTQUMxQztRQUFDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsT0FBZSxFQUFFLE9BQTRDO1FBQ3pFLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNsQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ2hDLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ25DLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ3JCO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQXpJRCxDQUEwQyxnQkFBZ0IsR0F5SXpEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZXJUaXRsZURhdGEsIEl0ZW1QcmV2aWV3RGF0YSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcbmltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5JztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb21tdW5pY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkl0ZW0sIEdldENvbGxlY3Rpb25QYXJhbXMsIEdldENvbGxlY3Rpb25SZXNwb25zZSB9IGZyb20gJy4vY29sbGVjdGlvbi1sYXlvdXQudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgQXdDb2xsZWN0aW9uTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBDb21tdW5pY2F0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgbGF5b3V0T3B0aW9ucztcblxuICBwcml2YXRlIHJvdXRlO1xuXG4gIHB1YmxpYyBjb2xsZWN0aW9uSUQ6IHN0cmluZztcblxuICBpbm5lclRpdGxlRGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SW5uZXJUaXRsZURhdGE+KHtcbiAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICcnIH0gfSxcbiAgfSlcblxuICBjb2xsZWN0aW9uRGVzY3JpcHRpb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xuXG4gIHBhZ2VTaXplID0gNjtcblxuICBjdXJyZW50T2Zmc2V0ID0gMDtcblxuICBsb2FkZWRDb2xsZWN0aW9uczogQmVoYXZpb3JTdWJqZWN0PEl0ZW1QcmV2aWV3RGF0YVtdIHwgW10+O1xuXG4gIGxvYWRNb3JlQnV0dG9uID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKVxuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gcGF5bG9hZC5jb21tdW5pY2F0aW9uO1xuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29sbGVjdGlvbi1sYXlvdXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciB0aGUgY29sbGVjdGlvbiBJRCBoYXMgYmVlbiBsb2FkZWRcbiAgICovXG4gIG9uQ29sbGVjdGlvbklEKCkge1xuICAgIHRoaXMubG9hZE1vcmUoKTtcbiAgfVxuXG4gIGxvYWRNb3JlKCkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBHZXRDb2xsZWN0aW9uUGFyYW1zID0ge1xuICAgICAgaWQ6IHRoaXMuY29sbGVjdGlvbklELFxuICAgICAgaXRlbVBhZ2luYXRpb246IHtcbiAgICAgICAgbGltaXQ6IHRoaXMucGFnZVNpemUsXG4gICAgICAgIG9mZnNldDogdGhpcy5jdXJyZW50T2Zmc2V0LFxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnZXRDb2xsZWN0aW9uJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtc1xuICAgIH0pLnBpcGUoXG4gICAgICBmaXJzdCgoZCkgPT4gISFkKSxcbiAgICAgIG1hcCgoZDogR2V0Q29sbGVjdGlvblJlc3BvbnNlKSA9PiAoe1xuICAgICAgICAvLyBtYXAgdGhlIGJhY2tlbmQgcmVzcG9uc2UgdG8gdGhlIGZvcm1hdCB1c2VkIGJ5IEl0ZW1QcmV2aWV3Q29tcG9uZW50XG4gICAgICAgIHJlc3BvbnNlOiBkLml0ZW1zLm1hcCgoaXRlbTogQ29sbGVjdGlvbkl0ZW0pID0+ICh7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuc3RyaW5nTGltaXRlcihpdGVtLnRpdGxlLCB7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLnRpdGxlLm1heExlbmd0aCxcbiAgICAgICAgICAgIGNoYXI6IHRoaXMubGF5b3V0T3B0aW9ucy5pdGVtLnRpdGxlLmNoYXIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGV4dDogdGhpcy5zdHJpbmdMaW1pdGVyKGl0ZW0uY29udGVudCwge1xuICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS5kZXNjcmlwdGlvbi5tYXhMZW5ndGgsXG4gICAgICAgICAgICBjaGFyOiB0aGlzLmxheW91dE9wdGlvbnMuaXRlbS5kZXNjcmlwdGlvbi5jaGFyXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2xhc3NlczogYCR7aXRlbS5pbWFnZSA/ICdpcy1vdmVybGF5IGhhcy1pbWFnZScgOiAnaXMtb3ZlcmxheSBoYXMtaW1hZ2UgaGFzLXdhdGVybWFyayd9ICR7aXRlbS5jbGFzc2lmaWNhdGlvbiA/IGBpcy0ke2l0ZW0uY2xhc3NpZmljYXRpb259YCA6ICcnfWAsXG4gICAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UgfHwgdGhpcy5sYXlvdXRPcHRpb25zLndhdGVybWFyayxcbiAgICAgICAgICBjb2xvcjogaXRlbS5iYWNrZ3JvdW5kLFxuICAgICAgICAgIGFuY2hvcjoge1xuICAgICAgICAgICAgaHJlZjogaXRlbS51cmwgfHwgdGhpcy51cmxCdWlsZGVyKGl0ZW0uYTR2SWQsIGl0ZW0udGl0bGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc2lmaWNhdGlvbjogaXRlbS5jbGFzc2lmaWNhdGlvblxuICAgICAgICB9KSksXG4gICAgICAgIHRleHQ6IGQudGV4dCxcbiAgICAgICAgdGl0bGU6IGQudGl0bGUsXG4gICAgICAgIHRvdGFsOiBkLnRvdGFsLFxuICAgICAgfSkpXG4gICAgKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEudGl0bGUpIHtcbiAgICAgICAgICB0aGlzLnNldFRpdGxlKHRoaXMuc3RyaW5nTGltaXRlcihkYXRhLnRpdGxlLCB7XG4gICAgICAgICAgICBtYXhMZW5ndGg6IHRoaXMubGF5b3V0T3B0aW9ucy5oZWFkZXIubWF4TGVuZ3RoLFxuICAgICAgICAgICAgY2hhcjogdGhpcy5sYXlvdXRPcHRpb25zLmhlYWRlci5jaGFyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLnRleHQpIHtcbiAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25EZXNjcmlwdGlvbi5uZXh0KHRoaXMuc3RyaW5nTGltaXRlcihkYXRhLnRleHQsIHtcbiAgICAgICAgICAgIG1heExlbmd0aDogdGhpcy5sYXlvdXRPcHRpb25zLmRlc2NyaXB0aW9uLm1heExlbmd0aCxcbiAgICAgICAgICAgIGNoYXI6IHRoaXMubGF5b3V0T3B0aW9ucy5kZXNjcmlwdGlvbi5jaGFyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudE9mZnNldCArPSB0aGlzLnBhZ2VTaXplO1xuICAgICAgICB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLm5leHQoWy4uLmNvbGxlY3Rpb24sIC4uLmRhdGEucmVzcG9uc2VdKTtcbiAgICAgICAgdGhpcy5sb2FkTW9yZUJ1dHRvbi5uZXh0KFxuICAgICAgICAgIGRhdGEudG90YWwgPiB0aGlzLmxvYWRlZENvbGxlY3Rpb25zLmdldFZhbHVlKCkubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHRoaXMubG9hZE1vcmVCdXR0b24ubmV4dChmYWxzZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhIFVSTCBmcm9tIGVudGl0eSB0eXBlLFxuICAgKiBlbnRpdHkgaWQsIGFuZCBhIHNsdWcgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gdHlwZSBlbnRpdHkgdHlwZVxuICAgKiBAcGFyYW0gaWQgZW50aXR5IElEXG4gICAqIEBwYXJhbSB0aXRsZSBodW1hbi1yZWFkYWJsZSB0aXRsZVxuICAgKiBAcmV0dXJucyBVUkwgc3RyaW5nIGluY2x1ZGluZyBhIHNsdWdcbiAgICovXG4gIHVybEJ1aWxkZXIoaWQsIHRpdGxlKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoaWQgJiYgdGl0bGUpIHtcbiAgICAgIGNvbnN0IHRpdGxlU2x1ZyA9IHNsdWdpZnkodGl0bGUpO1xuICAgICAgY29uc3QgYmFzZVBhdGggPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoO1xuICAgICAgcmV0dXJuIGAvJHtiYXNlUGF0aH0vJHtpZH0vJHt0aXRsZVNsdWd9YDtcbiAgICB9IHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBzdHJpbmdMaW1pdGVyKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9uczogeyBtYXhMZW5ndGg6IG51bWJlcjsgY2hhcjogc3RyaW5nIH0pOiBzdHJpbmcge1xuICAgIGxldCByZXMgPSBjb250ZW50O1xuICAgIGlmIChjb250ZW50ICYmIG9wdGlvbnMubWF4TGVuZ3RoKSB7XG4gICAgICByZXMgPSBjb250ZW50LnNsaWNlKDAsIG9wdGlvbnMubWF4TGVuZ3RoKTtcbiAgICAgIGlmIChvcHRpb25zLmNoYXIgJiYgcmVzICE9PSBjb250ZW50KSB7XG4gICAgICAgIHJlcyArPSBvcHRpb25zLmNoYXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbm5lclRpdGxlRGF0YS5uZXh0KHtcbiAgICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogdGl0bGUgfSB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==