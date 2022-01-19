import { __assign, __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import { get as _get } from 'lodash'; // used for cherry-picking object keys from app-config.json
import helpers from '../../common/helpers';
var AwLinkedObjectsDS = /** @class */ (function (_super) {
    __extends(AwLinkedObjectsDS, _super);
    function AwLinkedObjectsDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingData = false;
        _this.checkForMore = function (force) {
            /*
              Checks if it is possible to load more item previews.
              Can receive a boolean argument to force the button to be
              enabled or disabled. (Used while data is loading)
            */
            if (!_this.loadedData.actions) {
                // if not using actions, don't check
                return;
            }
            if (typeof force !== 'undefined') {
                _this.loadedData.actions[1].disabled = !force;
                return;
            }
            if (_this.loadedData.result.length >= _this.totalObjects) {
                _this.loadedData.actions[1].disabled = true;
            }
            else {
                _this.loadedData.actions[1].disabled = false;
            }
        };
        _this.handleIncomingData = function (incomingData) {
            /*
              Called by infinite scroller, adds the incoming
              data to the linked objects component.
            */
            _this.currentPage += 1;
            var newData = _this.unpackData(incomingData.itemsPagination);
            _this.loadedData.result = _this.loadedData.result.concat(newData.result);
            _this.checkForMore();
            _this.loadedData.isLoading = false;
        };
        /**
         * Dynamically returns the data object for each HTML component
         *  data: {
         *     previews: [ breadcrumbs: { items[] }, classes, image, metadata, payload, title ],
         *     pagination: { first, last, links, next, prev, select }
         *   }
         */
        _this.unpackData = function (data) {
            var config = _this.options.config; // app-config.json
            var paths = config.get('item-preview'); // item preview dynamic paths
            var totalCount = data.totalCount; // total amount of items available on backend
            var page = _this.currentPage; // current page (if using pagination)
            var context = _this.context; // parent layout name
            var size = _this.pageSize; // items per page (if using pagination)
            var labels = config.get('labels');
            var dynamicPagination = _this.options.dynamicPagination;
            var keys = config ? config.get('config-keys') : {};
            var lengthLimit;
            var resultsLimit;
            var d = data.items ? data.items : data.relatedItems; // items to iterate over
            if (config) {
                // dynamic search for max-item-length
                if (config.get(context + "-layout")) {
                    lengthLimit = config.get(context + "-layout")['max-item-length'];
                    resultsLimit = config.get(context + "-layout")['results-limit'];
                }
            }
            // resize data if necessary
            if (!dynamicPagination && size && page && d.length > size) {
                d = d.slice(page * size - size, page * size);
            }
            else if (size) {
                d = d.slice(0, size);
            }
            var result = [];
            var enabledKeys = paths.metadata.info.selection.map(function (info) { return info.key; });
            d.forEach(function (el) {
                var itemData = el.item ? el.item : el;
                var infoData = _get(el, paths.metadata.info.data, itemData.fields);
                var toeData = _get(el, paths.metadata.toe.data, itemData.relatedTypesOfEntity);
                var breadcrumbs = _get(el, paths.metadata.breadcrumbs.data, itemData.breadcrumbs);
                var infoDataItems = infoData
                    ? infoData.filter(function (info) { return enabledKeys.indexOf(info.key) !== -1; })
                    : [];
                // order metadata
                infoDataItems = infoDataItems.map(function (info) { return (__assign(__assign({}, info), { order: enabledKeys.indexOf(info.key) })); });
                infoDataItems.sort(function (a, b) { return a.order - b.order; });
                if (['entita', 'search', 'gallery'].includes(context)) {
                    if (itemData.typeOfEntity && itemData.typeOfEntity !== '') {
                        infoDataItems.push({ key: 'Tipo di entità', value: keys[itemData.typeOfEntity]['singular-label'] });
                    }
                }
                var classes = ['entita', 'search', 'oggetti-collegati'].includes(context) ? 'is-fullwidth' : '';
                classes += itemData.typeOfEntity ? " is-" + config.get('config-keys')[itemData.typeOfEntity]['class-name'] : ' is-oggetto-culturale';
                // gallery classes
                if (context === 'gallery') {
                    classes += ' is-vertical has-image';
                }
                // consider the lenght of <em> tags to exclude from count
                var highlights = _get(el, paths.title, itemData.label).match(/<em>/g) ? _get(el, paths.title, itemData.label).match(/<em>/g).length * 9 : 0;
                var itemTitle = +paths.title.maxLength
                    && _get(el, paths.title, itemData.label).length > +paths.title.maxLength + highlights
                    ? _get(el, paths.title, itemData.label).slice(0, +paths.title.maxLength + highlights) + "\u2026"
                    : _get(el, paths.title, itemData.label);
                var itemId = _get(el, paths.payload, itemData.id);
                var itemType = itemData.typeOfEntity;
                var itemHref = [
                    itemType ? config.get('paths').entitaBasePath : config.get('paths').schedaBasePath,
                    itemId,
                    helpers.slugify(itemTitle),
                ].join('/');
                var text;
                if (!paths.text) {
                    text = null;
                }
                else if (+paths.text.maxLength
                    && _get(el, paths.text.data, itemData.text).length > +paths.text.maxLength) {
                    text = _get(el, paths.text.data, itemData.text).slice(0, +paths.text.maxLength) + "\u2026";
                }
                else {
                    text = _get(el, paths.text.data, itemData.text);
                }
                var item = {
                    text: text,
                    classes: classes,
                    breadcrumbs: breadcrumbs,
                    image: _get(el, paths.image, itemData.image),
                    title: itemTitle,
                    anchor: {
                        href: itemHref,
                        target: ['gallery', 'search'].includes(context) ? '_blank' : '_self'
                    },
                    relation: { key: el.relationName, value: el.relation },
                    metadata: infoDataItems.length || toeData ? [] : null,
                };
                // metadata
                if (infoDataItems.length) {
                    item.metadata.push({
                        classes: 'aw-item-preview_metadata',
                        items: infoDataItems.map(function (infoDItem) { return ({
                            label: helpers.prettifySnakeCase(infoDItem.key, labels[infoDItem.key]),
                            value: infoDItem.value,
                        }); }),
                    });
                }
                if (toeData) {
                    item.metadata.push({
                        classes: 'aw-item-preview-entities',
                        items: toeData.map(function (toe) { return ({
                            value: _get(toe, paths.metadata.toe.value, toe.count),
                            // icon: 'n7-icon-bell' // TODO: link icon to config key
                            icon: keys[_get(toe, paths.metadata.toe.icon, toe.type)]
                                ? keys[_get(toe, paths.metadata.toe.icon, toe.type)].icon
                                : '',
                            classes: "color-" + keys[_get(toe, paths.metadata.toe.icon, toe.type)]['class-name'],
                        }); }),
                    });
                }
                // breadcrumbs
                if (breadcrumbs) {
                    item.breadcrumbs = {
                        items: _get(el, paths.metadata.breadcrumbs.data, el.item.breadcrumbs).map(function (crumb) {
                            var label = _get(crumb, paths.metadata.breadcrumbs.label, crumb.label);
                            return {
                                label: label,
                                anchor: {
                                    href: itemHref,
                                },
                            };
                        }),
                    };
                }
                result.push(item);
            });
            if (context === 'home') {
                var actions = [
                    {
                        label: "Mostra Tutti (" + totalCount + ")",
                    },
                    lengthLimit
                        ? {
                            label: "Mostra Altri (" + resultsLimit + ")",
                            disabled: false,
                        } : null,
                ];
                return {
                    result: result,
                    actions: actions,
                    isLoading: false,
                    fallback: config.get('home-layout')['linked-objects-fallback'],
                };
            }
            return { previews: result };
        };
        return _this;
    }
    AwLinkedObjectsDS.prototype.transform = function (data) {
        this.paths = this.options.config.get('item-preview');
        this.pageSize = this.options.size;
        this.totalObjects = data.totalCount;
        this.currentPage = this.options.page ? +this.options.page : 1;
        if (this.options.dynamicPagination && this.options.dynamicPagination.total) {
            this.totalPages = Math.ceil(this.options.dynamicPagination.total / this.pageSize);
        }
        else if (data.items) {
            this.totalPages = Math.ceil(data.items.length / this.pageSize);
        }
        else if (data.relatedItems) {
            this.totalPages = Math.ceil(data.relatedItems.length / this.pageSize);
        }
        this.context = this.options.context;
        this.loadedData = this.unpackData(data);
        this.checkForMore(); // checks if <Show More> button should be enabled
        this.loadedData.loaderData = {};
        return this.loadedData;
    };
    return AwLinkedObjectsDS;
}(DataSource));
export { AwLinkedObjectsDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLW9iamVjdHMuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2xpbmtlZC1vYmplY3RzLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUMsQ0FBQywyREFBMkQ7QUFDakcsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0M7SUFBdUMscUNBQVU7SUFBakQ7UUFBQSxxRUEwT0M7UUE3TlEsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUF1QmxCLGtCQUFZLEdBQUcsVUFBQyxLQUFlO1lBQ3BDOzs7O2NBSUU7WUFDRixJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLG9DQUFvQztnQkFDcEMsT0FBTzthQUNSO1lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ2hDLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDN0MsT0FBTzthQUNSO1lBQ0QsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFBO1FBRUksd0JBQWtCLEdBQUcsVUFBQyxZQUFZO1lB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SUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsaURBQWlEO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQXdNSCx3QkFBQztBQUFELENBQUMsQUExT0QsQ0FBdUMsVUFBVSxHQTBPaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7IC8vIHVzZWQgZm9yIGNoZXJyeS1waWNraW5nIG9iamVjdCBrZXlzIGZyb20gYXBwLWNvbmZpZy5qc29uXHJcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBd0xpbmtlZE9iamVjdHNEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgdG90YWxQYWdlczogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgdG90YWxPYmplY3RzOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29udGV4dDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgbG9hZGVkRGF0YTogYW55O1xyXG5cclxuICBwdWJsaWMgbG9hZGluZ0RhdGEgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHBhdGhzOiBhbnk7IC8vIHVzZSBkeW5hbWljIG9iamVjdCBwYXRocyBmcm9tIGNvbmZpZ1xyXG5cclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcclxuICAgIHRoaXMucGF0aHMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7XHJcbiAgICB0aGlzLnBhZ2VTaXplID0gdGhpcy5vcHRpb25zLnNpemU7XHJcbiAgICB0aGlzLnRvdGFsT2JqZWN0cyA9IGRhdGEudG90YWxDb3VudDtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLm9wdGlvbnMucGFnZSA/ICt0aGlzLm9wdGlvbnMucGFnZSA6IDE7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uICYmIHRoaXMub3B0aW9ucy5keW5hbWljUGFnaW5hdGlvbi50b3RhbCkge1xyXG4gICAgICB0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodGhpcy5vcHRpb25zLmR5bmFtaWNQYWdpbmF0aW9uLnRvdGFsIC8gdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuaXRlbXMpIHtcclxuICAgICAgdGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEuaXRlbXMubGVuZ3RoIC8gdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEucmVsYXRlZEl0ZW1zKSB7XHJcbiAgICAgIHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLnJlbGF0ZWRJdGVtcy5sZW5ndGggLyB0aGlzLnBhZ2VTaXplKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMub3B0aW9ucy5jb250ZXh0O1xyXG4gICAgdGhpcy5sb2FkZWREYXRhID0gdGhpcy51bnBhY2tEYXRhKGRhdGEpO1xyXG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKTsgLy8gY2hlY2tzIGlmIDxTaG93IE1vcmU+IGJ1dHRvbiBzaG91bGQgYmUgZW5hYmxlZFxyXG4gICAgdGhpcy5sb2FkZWREYXRhLmxvYWRlckRhdGEgPSB7fTtcclxuICAgIHJldHVybiB0aGlzLmxvYWRlZERhdGE7XHJcbiAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja0Zvck1vcmUgPSAoZm9yY2U/OiBib29sZWFuKSA9PiB7XHJcbiAgICAgIC8qXHJcbiAgICAgICAgQ2hlY2tzIGlmIGl0IGlzIHBvc3NpYmxlIHRvIGxvYWQgbW9yZSBpdGVtIHByZXZpZXdzLlxyXG4gICAgICAgIENhbiByZWNlaXZlIGEgYm9vbGVhbiBhcmd1bWVudCB0byBmb3JjZSB0aGUgYnV0dG9uIHRvIGJlXHJcbiAgICAgICAgZW5hYmxlZCBvciBkaXNhYmxlZC4gKFVzZWQgd2hpbGUgZGF0YSBpcyBsb2FkaW5nKVxyXG4gICAgICAqL1xyXG4gICAgICBpZiAoIXRoaXMubG9hZGVkRGF0YS5hY3Rpb25zKSB7XHJcbiAgICAgICAgLy8gaWYgbm90IHVzaW5nIGFjdGlvbnMsIGRvbid0IGNoZWNrXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgZm9yY2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWREYXRhLmFjdGlvbnNbMV0uZGlzYWJsZWQgPSAhZm9yY2U7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmxvYWRlZERhdGEucmVzdWx0Lmxlbmd0aCA+PSB0aGlzLnRvdGFsT2JqZWN0cykge1xyXG4gICAgICAgIHRoaXMubG9hZGVkRGF0YS5hY3Rpb25zWzFdLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvYWRlZERhdGEuYWN0aW9uc1sxXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0RhdGEgPSAoaW5jb21pbmdEYXRhKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICBDYWxsZWQgYnkgaW5maW5pdGUgc2Nyb2xsZXIsIGFkZHMgdGhlIGluY29taW5nXHJcbiAgICAgIGRhdGEgdG8gdGhlIGxpbmtlZCBvYmplY3RzIGNvbXBvbmVudC5cclxuICAgICovXHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlICs9IDE7XHJcbiAgICBjb25zdCBuZXdEYXRhOiBhbnkgPSB0aGlzLnVucGFja0RhdGEoaW5jb21pbmdEYXRhLml0ZW1zUGFnaW5hdGlvbik7XHJcbiAgICB0aGlzLmxvYWRlZERhdGEucmVzdWx0ID0gdGhpcy5sb2FkZWREYXRhLnJlc3VsdC5jb25jYXQobmV3RGF0YS5yZXN1bHQpO1xyXG4gICAgdGhpcy5jaGVja0Zvck1vcmUoKTtcclxuICAgIHRoaXMubG9hZGVkRGF0YS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIER5bmFtaWNhbGx5IHJldHVybnMgdGhlIGRhdGEgb2JqZWN0IGZvciBlYWNoIEhUTUwgY29tcG9uZW50XHJcbiAgICogIGRhdGE6IHtcclxuICAgKiAgICAgcHJldmlld3M6IFsgYnJlYWRjcnVtYnM6IHsgaXRlbXNbXSB9LCBjbGFzc2VzLCBpbWFnZSwgbWV0YWRhdGEsIHBheWxvYWQsIHRpdGxlIF0sXHJcbiAgICogICAgIHBhZ2luYXRpb246IHsgZmlyc3QsIGxhc3QsIGxpbmtzLCBuZXh0LCBwcmV2LCBzZWxlY3QgfVxyXG4gICAqICAgfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgdW5wYWNrRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdFxyXG4gICAgICB7IGNvbmZpZyB9ID0gdGhpcy5vcHRpb25zOyAvLyBhcHAtY29uZmlnLmpzb25cclxuICAgIGNvbnN0IHBhdGhzID0gY29uZmlnLmdldCgnaXRlbS1wcmV2aWV3Jyk7IC8vIGl0ZW0gcHJldmlldyBkeW5hbWljIHBhdGhzXHJcbiAgICBjb25zdCB7IHRvdGFsQ291bnQgfSA9IGRhdGE7IC8vIHRvdGFsIGFtb3VudCBvZiBpdGVtcyBhdmFpbGFibGUgb24gYmFja2VuZFxyXG4gICAgY29uc3QgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2U7IC8vIGN1cnJlbnQgcGFnZSAoaWYgdXNpbmcgcGFnaW5hdGlvbilcclxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpczsgLy8gcGFyZW50IGxheW91dCBuYW1lXHJcbiAgICBjb25zdCBzaXplID0gdGhpcy5wYWdlU2l6ZTsgLy8gaXRlbXMgcGVyIHBhZ2UgKGlmIHVzaW5nIHBhZ2luYXRpb24pXHJcbiAgICBjb25zdCBsYWJlbHMgPSBjb25maWcuZ2V0KCdsYWJlbHMnKTtcclxuICAgIGNvbnN0IHsgZHluYW1pY1BhZ2luYXRpb24gfSA9IHRoaXMub3B0aW9ucztcclxuICAgIGNvbnN0IGtleXMgPSBjb25maWcgPyBjb25maWcuZ2V0KCdjb25maWcta2V5cycpIDoge307XHJcbiAgICBsZXRcclxuICAgICAgbGVuZ3RoTGltaXQ6IG51bGw7XHJcbiAgICBsZXQgcmVzdWx0c0xpbWl0OiBudWxsO1xyXG4gICAgbGV0IGQgPSBkYXRhLml0ZW1zID8gZGF0YS5pdGVtcyA6IGRhdGEucmVsYXRlZEl0ZW1zOyAvLyBpdGVtcyB0byBpdGVyYXRlIG92ZXJcclxuICAgIGlmIChjb25maWcpIHtcclxuICAgICAgLy8gZHluYW1pYyBzZWFyY2ggZm9yIG1heC1pdGVtLWxlbmd0aFxyXG4gICAgICBpZiAoY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKSkge1xyXG4gICAgICAgIGxlbmd0aExpbWl0ID0gY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKVsnbWF4LWl0ZW0tbGVuZ3RoJ107XHJcbiAgICAgICAgcmVzdWx0c0xpbWl0ID0gY29uZmlnLmdldChgJHtjb250ZXh0fS1sYXlvdXRgKVsncmVzdWx0cy1saW1pdCddO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZXNpemUgZGF0YSBpZiBuZWNlc3NhcnlcclxuICAgIGlmICghZHluYW1pY1BhZ2luYXRpb24gJiYgc2l6ZSAmJiBwYWdlICYmIGQubGVuZ3RoID4gc2l6ZSkge1xyXG4gICAgICBkID0gZC5zbGljZShwYWdlICogc2l6ZSAtIHNpemUsIHBhZ2UgKiBzaXplKTtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZSkge1xyXG4gICAgICBkID0gZC5zbGljZSgwLCBzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIGNvbnN0IGVuYWJsZWRLZXlzID0gcGF0aHMubWV0YWRhdGEuaW5mby5zZWxlY3Rpb24ubWFwKChpbmZvKSA9PiBpbmZvLmtleSk7XHJcbiAgICBkLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1EYXRhID0gZWwuaXRlbSA/IGVsLml0ZW0gOiBlbDtcclxuXHJcbiAgICAgIGNvbnN0IGluZm9EYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEuaW5mby5kYXRhLCBpdGVtRGF0YS5maWVsZHMpO1xyXG4gICAgICBjb25zdCB0b2VEYXRhID0gX2dldChlbCwgcGF0aHMubWV0YWRhdGEudG9lLmRhdGEsIGl0ZW1EYXRhLnJlbGF0ZWRUeXBlc09mRW50aXR5KTtcclxuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBpdGVtRGF0YS5icmVhZGNydW1icyk7XHJcbiAgICAgIGxldCBpbmZvRGF0YUl0ZW1zID0gaW5mb0RhdGFcclxuICAgICAgICA/IGluZm9EYXRhLmZpbHRlcigoaW5mbykgPT4gZW5hYmxlZEtleXMuaW5kZXhPZihpbmZvLmtleSkgIT09IC0xKVxyXG4gICAgICAgIDogW107XHJcblxyXG4gICAgICAvLyBvcmRlciBtZXRhZGF0YVxyXG4gICAgICBpbmZvRGF0YUl0ZW1zID0gaW5mb0RhdGFJdGVtcy5tYXAoKGluZm8pID0+ICh7XHJcbiAgICAgICAgLi4uaW5mbyxcclxuICAgICAgICBvcmRlcjogZW5hYmxlZEtleXMuaW5kZXhPZihpbmZvLmtleSlcclxuICAgICAgfSkpO1xyXG4gICAgICBpbmZvRGF0YUl0ZW1zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuXHJcbiAgICAgIGlmIChbJ2VudGl0YScsICdzZWFyY2gnLCAnZ2FsbGVyeSddLmluY2x1ZGVzKGNvbnRleHQpKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1EYXRhLnR5cGVPZkVudGl0eSAmJiBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgIT09ICcnKSB7XHJcbiAgICAgICAgICBpbmZvRGF0YUl0ZW1zLnB1c2goeyBrZXk6ICdUaXBvIGRpIGVudGl0w6AnLCB2YWx1ZToga2V5c1tpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydzaW5ndWxhci1sYWJlbCddIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgY2xhc3NlcyA9IFsnZW50aXRhJywgJ3NlYXJjaCcsICdvZ2dldHRpLWNvbGxlZ2F0aSddLmluY2x1ZGVzKGNvbnRleHQpID8gJ2lzLWZ1bGx3aWR0aCcgOiAnJztcclxuICAgICAgY2xhc3NlcyArPSBpdGVtRGF0YS50eXBlT2ZFbnRpdHkgPyBgIGlzLSR7Y29uZmlnLmdldCgnY29uZmlnLWtleXMnKVtpdGVtRGF0YS50eXBlT2ZFbnRpdHldWydjbGFzcy1uYW1lJ119YCA6ICcgaXMtb2dnZXR0by1jdWx0dXJhbGUnO1xyXG5cclxuICAgICAgLy8gZ2FsbGVyeSBjbGFzc2VzXHJcbiAgICAgIGlmIChjb250ZXh0ID09PSAnZ2FsbGVyeScpIHtcclxuICAgICAgICBjbGFzc2VzICs9ICcgaXMtdmVydGljYWwgaGFzLWltYWdlJztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY29uc2lkZXIgdGhlIGxlbmdodCBvZiA8ZW0+IHRhZ3MgdG8gZXhjbHVkZSBmcm9tIGNvdW50XHJcbiAgICAgIGNvbnN0IGhpZ2hsaWdodHMgPSBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLm1hdGNoKC88ZW0+L2cpID8gX2dldChlbCwgcGF0aHMudGl0bGUsIGl0ZW1EYXRhLmxhYmVsKS5tYXRjaCgvPGVtPi9nKS5sZW5ndGggKiA5IDogMDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9ICtwYXRocy50aXRsZS5tYXhMZW5ndGhcclxuICAgICAgICAmJiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLmxlbmd0aCA+ICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzXHJcbiAgICAgICAgPyBgJHtfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpLnNsaWNlKDAsICtwYXRocy50aXRsZS5tYXhMZW5ndGggKyBoaWdobGlnaHRzKX3igKZgXHJcbiAgICAgICAgOiBfZ2V0KGVsLCBwYXRocy50aXRsZSwgaXRlbURhdGEubGFiZWwpO1xyXG4gICAgICBjb25zdCBpdGVtSWQgPSBfZ2V0KGVsLCBwYXRocy5wYXlsb2FkLCBpdGVtRGF0YS5pZCk7XHJcbiAgICAgIGNvbnN0IGl0ZW1UeXBlID0gaXRlbURhdGEudHlwZU9mRW50aXR5O1xyXG4gICAgICBjb25zdCBpdGVtSHJlZiA9IFtcclxuICAgICAgICBpdGVtVHlwZSA/IGNvbmZpZy5nZXQoJ3BhdGhzJykuZW50aXRhQmFzZVBhdGggOiBjb25maWcuZ2V0KCdwYXRocycpLnNjaGVkYUJhc2VQYXRoLFxyXG4gICAgICAgIGl0ZW1JZCxcclxuICAgICAgICBoZWxwZXJzLnNsdWdpZnkoaXRlbVRpdGxlKSxcclxuICAgICAgXS5qb2luKCcvJyk7XHJcbiAgICAgIGxldCB0ZXh0O1xyXG4gICAgICBpZiAoIXBhdGhzLnRleHQpIHtcclxuICAgICAgICB0ZXh0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICArcGF0aHMudGV4dC5tYXhMZW5ndGhcclxuICAgICAgICAmJiBfZ2V0KGVsLCBwYXRocy50ZXh0LmRhdGEsIGl0ZW1EYXRhLnRleHQpLmxlbmd0aCA+ICtwYXRocy50ZXh0Lm1heExlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICB0ZXh0ID0gYCR7X2dldChlbCwgcGF0aHMudGV4dC5kYXRhLCBpdGVtRGF0YS50ZXh0KS5zbGljZSgwLCArcGF0aHMudGV4dC5tYXhMZW5ndGgpfeKApmA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGV4dCA9IF9nZXQoZWwsIHBhdGhzLnRleHQuZGF0YSwgaXRlbURhdGEudGV4dCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaXRlbSA9IHtcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGNsYXNzZXMsXHJcbiAgICAgICAgYnJlYWRjcnVtYnMsXHJcbiAgICAgICAgaW1hZ2U6IF9nZXQoZWwsIHBhdGhzLmltYWdlLCBpdGVtRGF0YS5pbWFnZSksXHJcbiAgICAgICAgdGl0bGU6IGl0ZW1UaXRsZSxcclxuICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxyXG4gICAgICAgICAgdGFyZ2V0OiBbJ2dhbGxlcnknLCAnc2VhcmNoJ10uaW5jbHVkZXMoY29udGV4dCkgPyAnX2JsYW5rJyA6ICdfc2VsZidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbGF0aW9uOiB7IGtleTogZWwucmVsYXRpb25OYW1lLCB2YWx1ZTogZWwucmVsYXRpb24gfSxcclxuICAgICAgICBtZXRhZGF0YTogaW5mb0RhdGFJdGVtcy5sZW5ndGggfHwgdG9lRGF0YSA/IFtdIDogbnVsbCxcclxuICAgICAgfTtcclxuICAgICAgLy8gbWV0YWRhdGFcclxuICAgICAgaWYgKGluZm9EYXRhSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaXRlbS5tZXRhZGF0YS5wdXNoKHtcclxuICAgICAgICAgIGNsYXNzZXM6ICdhdy1pdGVtLXByZXZpZXdfbWV0YWRhdGEnLFxyXG4gICAgICAgICAgaXRlbXM6IGluZm9EYXRhSXRlbXMubWFwKChpbmZvREl0ZW0pID0+ICh7XHJcbiAgICAgICAgICAgIGxhYmVsOiBoZWxwZXJzLnByZXR0aWZ5U25ha2VDYXNlKGluZm9ESXRlbS5rZXksIGxhYmVsc1tpbmZvREl0ZW0ua2V5XSksXHJcbiAgICAgICAgICAgIHZhbHVlOiBpbmZvREl0ZW0udmFsdWUsXHJcbiAgICAgICAgICB9KSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRvZURhdGEpIHtcclxuICAgICAgICBpdGVtLm1ldGFkYXRhLnB1c2goe1xyXG4gICAgICAgICAgY2xhc3NlczogJ2F3LWl0ZW0tcHJldmlldy1lbnRpdGllcycsXHJcbiAgICAgICAgICBpdGVtczogdG9lRGF0YS5tYXAoKHRvZSkgPT4gKHsgLy8gcGVyc29uYTogNiwgT3JnYW5peno6IDEyLCBMdW9naGk6IDIsIENvbmNldHRpOiAzMlxyXG4gICAgICAgICAgICB2YWx1ZTogX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS52YWx1ZSwgdG9lLmNvdW50KSxcclxuICAgICAgICAgICAgLy8gaWNvbjogJ243LWljb24tYmVsbCcgLy8gVE9ETzogbGluayBpY29uIHRvIGNvbmZpZyBrZXlcclxuICAgICAgICAgICAgaWNvbjoga2V5c1tfZ2V0KHRvZSwgcGF0aHMubWV0YWRhdGEudG9lLmljb24sIHRvZS50eXBlKV1cclxuICAgICAgICAgICAgICA/IGtleXNbX2dldCh0b2UsIHBhdGhzLm1ldGFkYXRhLnRvZS5pY29uLCB0b2UudHlwZSldLmljb25cclxuICAgICAgICAgICAgICA6ICcnLFxyXG4gICAgICAgICAgICBjbGFzc2VzOiBgY29sb3ItJHtrZXlzW19nZXQodG9lLCBwYXRocy5tZXRhZGF0YS50b2UuaWNvbiwgdG9lLnR5cGUpXVsnY2xhc3MtbmFtZSddfWAsXHJcbiAgICAgICAgICB9KSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gYnJlYWRjcnVtYnNcclxuICAgICAgaWYgKGJyZWFkY3J1bWJzKSB7XHJcbiAgICAgICAgaXRlbS5icmVhZGNydW1icyA9IHsgLy8gbjctYnJlYWRjcnVtYnMgdXNlcyB0aGlzIGFzIGl0J3Mgb3duIGRhdGFcclxuICAgICAgICAgIGl0ZW1zOiBfZ2V0KGVsLCBwYXRocy5tZXRhZGF0YS5icmVhZGNydW1icy5kYXRhLCBlbC5pdGVtLmJyZWFkY3J1bWJzKS5tYXAoKGNydW1iKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gX2dldChjcnVtYiwgcGF0aHMubWV0YWRhdGEuYnJlYWRjcnVtYnMubGFiZWwsIGNydW1iLmxhYmVsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgICBhbmNob3I6IHtcclxuICAgICAgICAgICAgICAgIGhyZWY6IGl0ZW1IcmVmLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY29udGV4dCA9PT0gJ2hvbWUnKSB7XHJcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IGBNb3N0cmEgVHV0dGkgKCR7dG90YWxDb3VudH0pYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlbmd0aExpbWl0XHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgbGFiZWw6IGBNb3N0cmEgQWx0cmkgKCR7cmVzdWx0c0xpbWl0fSlgLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICB9IDogbnVsbCxcclxuICAgICAgXTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZXN1bHQsXHJcbiAgICAgICAgYWN0aW9ucyxcclxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGZhbGxiYWNrOiBjb25maWcuZ2V0KCdob21lLWxheW91dCcpWydsaW5rZWQtb2JqZWN0cy1mYWxsYmFjayddLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcHJldmlld3M6IHJlc3VsdCB9O1xyXG4gIH1cclxufVxyXG4iXX0=