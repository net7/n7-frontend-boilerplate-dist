import { __assign, __extends, __read } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
import { Subject, forkJoin, fromEvent } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import helpers from '../../../common/helpers';
var AwHomeLayoutDS = /** @class */ (function (_super) {
    __extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetInputs = {};
        _this.autocompletePopoverOpen = false;
        _this.autocompleteChanged$ = new Subject();
        _this.numOfItemsStr = null;
        _this.currentHoverEntity = null;
        _this.hasScrollBackground = false;
        _this.resultsLimit = -1;
        _this.selectedEntitiesIds = [];
        _this.destroyed$ = new Subject();
        _this.homeAutocompleteIsLoading = false;
        _this.resultsListIsLoading = false;
        // ===== BUBBLE CHART =====
        _this.bubblesEnabled = false; // true if this Arianna Web project has the bubble chart module
        _this.selectedBubbles = []; // array of IDs
        _this.updateComponent = function (id, data, options) {
            // update components from EH
            if (options) {
                _this.one(id).updateOptions(options);
            }
            _this.one(id).update(data);
        };
        return _this;
    }
    // ========================
    AwHomeLayoutDS.prototype.onInit = function (_a) {
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
        this.communication = communication;
        this.configuration = configuration;
        // this.facetData = [];
        this.mainState = mainState;
        this.tippy = tippy;
        this.resultsLimit = this.configuration.get('home-layout')['results-limit'];
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled').bubblechart : false;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna4View - Homepage');
        this.mainState.update('pageTitle', 'Arianna4View - Homepage');
        this.mainState.updateCustom('currentNav', 'home');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
        this.outerLinks = this.configuration.get('home-layout')['outer-links'].test;
        this.outerLinksTitle = this.configuration.get('home-layout')['outer-links'].title;
        this.one('aw-bubble-chart').updateOptions({
            selectable: true,
            config: this.configuration,
            limit: this.configuration.get('bubble-chart').bubbleLimit,
        });
        this.one('aw-chart-tippy').updateOptions({
            basePath: this.configuration.get('paths').entitaBasePath,
            selectable: true,
        });
    };
    AwHomeLayoutDS.prototype.onDestroy = function () {
        this.destroyed$.next();
    };
    AwHomeLayoutDS.prototype.makeRequest$ = function (query, params) {
        // make request from EH
        return this.communication.request$(query, {
            onError: function (error) { return console.error(error); },
            params: params,
        });
    };
    AwHomeLayoutDS.prototype.initialFilterRequest = function () {
        return this.communication.request$('globalFilter', {
            onError: function (error) { return console.error(error); },
            params: {
                entitiesListSize: this.configuration.get('bubble-chart').bubbleLimit,
            },
        });
    };
    AwHomeLayoutDS.prototype.parseInitialRequest = function (response) {
        var _this = this;
        this.firstBubbleResponse = response.entitiesData;
        var facetData = [];
        response.typeOfEntityData.forEach(function (toe) {
            var TOEconfigData = _this.configuration.get('config-keys')[toe.type];
            facetData.push(__assign(__assign(__assign({}, toe), { enabled: true, locked: false }), TOEconfigData));
        });
        this.one('aw-home-facets-wrapper').update(facetData);
    };
    AwHomeLayoutDS.prototype.renderPreviewsFromApolloQuery = function (response) {
        var _this = this;
        if (!response || !response.itemsPagination) {
            return;
        }
        var numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            var numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            var numOfItemsTmpStr = "" + numOfItems;
            if (numOfItems < 10)
                numOfItemsTmpStr = "00" + numOfItems;
            else if (numOfItems < 100)
                numOfItemsTmpStr = "0" + numOfItems;
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + "." + numOfItemsTmpStr;
            else
                this.numOfItemsStr = "" + numOfItems;
        }
        else {
            this.numOfItemsStr = '0';
        }
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
        // scroll control
        setTimeout(function () {
            _this._scrollBackgroundControl();
        });
    };
    AwHomeLayoutDS.prototype.updateTags = function (onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
    };
    AwHomeLayoutDS.prototype.handleFacetSearchChange = function (change) {
        var payload = change.inputPayload;
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    };
    AwHomeLayoutDS.prototype.renderItemTags = function () {
        var _this = this;
        /*
              Try to build an item tag for each selected query looking at the data from the
              first response. If the needed bubble data cannot be found, ask the backend
              for that bubble's data.
          */
        var queryList = []; // list of pending queries
        var tagsData = []; // list of tags data built from query
        this.selectedBubbles.forEach(function (b) {
            var theBubble = _this.firstBubbleResponse.find(function (el) { return el.entity.id === b; });
            if (theBubble) { // if a bubble was found
                var bubbleConfig = _this.configuration.get('config-keys')[theBubble.entity.typeOfEntity];
                tagsData.push({
                    label: theBubble.entity.label,
                    icon: 'n7-icon-close',
                    payload: b,
                    classes: "tag-" + bubbleConfig['class-name'],
                });
            }
            else { // if the bubble was not found, make a query
                var params = { entityId: b, entitiesListSize: 1 };
                queryList.push(_this.makeRequest$('getMissingBubble', params));
            }
        });
        if (queryList.length > 0) { // if there are pending bubble queries
            forkJoin(queryList).subscribe(function (forkres) {
                forkres.forEach(function (r) {
                    var bubbleConfig = _this.configuration.get('config-keys')[r.typeOfEntity];
                    tagsData.push({
                        label: r.label,
                        icon: 'n7-icon-close',
                        payload: r.id,
                        classes: "tag-" + bubbleConfig['class-name'],
                    });
                });
                _this.one('aw-home-item-tags-wrapper').update(tagsData);
            });
        }
        else {
            this.one('aw-home-item-tags-wrapper').update(tagsData);
        }
    };
    AwHomeLayoutDS.prototype.onHeroChange = function (value) {
        if (value) {
            var escapedValue = helpers.escapeQuotes(value);
            this.autocompleteChanged$.next(escapedValue);
            this.homeAutocompleteIsLoading = true;
            this.homeAutocompleteQuery = escapedValue;
            if (!this.autocompletePopoverOpen) {
                this._toggleAutocompletePopover();
            }
        }
        else if (this.autocompletePopoverOpen) {
            this._toggleAutocompletePopover();
        }
    };
    AwHomeLayoutDS.prototype._scrollBackgroundControl = function () {
        var _this = this;
        var node = document.getElementById('bubble-results-list');
        if (!node)
            return;
        var source$ = fromEvent(node, 'scroll');
        // height control
        setTimeout(function () {
            _this._setHasScrollBackground(node);
        }, 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe(function (_a) {
            var target = _a.target;
            _this._setHasScrollBackground(target);
        });
    };
    AwHomeLayoutDS.prototype._setHasScrollBackground = function (target) {
        this.hasScrollBackground = target ? (target.scrollHeight > (target.scrollTop + target.clientHeight)) : false;
    };
    AwHomeLayoutDS.prototype._listenAutoCompleteChanges = function () {
        var _this = this;
        this.one('aw-home-autocomplete').updateOptions({
            keys: this.configuration.get('config-keys'),
            config: this.configuration,
            labels: this.configuration.get('labels'),
            paths: this.configuration.get('paths'),
        });
        this.autocompleteChanged$.pipe(debounceTime(500), takeUntil(this.destroyed$)).subscribe(function (value) {
            _this.communication.request$('autoComplete', {
                onError: function (error) { return console.error(error); },
                params: {
                    input: value,
                    itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] },
                },
            }).subscribe(function (response) {
                _this.homeAutocompleteIsLoading = false;
                _this.one('aw-home-autocomplete').update({
                    response: response,
                    query: value,
                });
            });
        });
    };
    AwHomeLayoutDS.prototype._toggleAutocompletePopover = function () {
        var _this = this;
        if (!this.autocompletePopover) {
            var template = document.getElementById('aw-home-advanced-autocomplete-popover');
            template.style.display = 'block';
            var _a = __read(this.tippy('.aw-home__top-hero .n7-hero__input', {
                content: template,
                trigger: 'manual',
                interactive: true,
                arrow: false,
                flip: false,
                appendTo: 'parent',
                theme: 'light-border',
                placement: 'bottom-start',
                maxWidth: '100%',
                onHidden: function () { _this.autocompletePopoverOpen = false; },
            }), 1), popOver = _a[0];
            this.autocompletePopover = popOver;
        }
        if (this.autocompletePopoverOpen) {
            this.autocompletePopover.hide();
        }
        else {
            this.autocompletePopover.show();
        }
        this.autocompletePopoverOpen = !this.autocompletePopoverOpen;
    };
    return AwHomeLayoutDS;
}(LayoutDataSource));
export { AwHomeLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUM7SUFBb0Msa0NBQWdCO0lBQXBEO1FBQUEscUVBNlNDO1FBcFNTLGlCQUFXLEdBQVEsRUFBRSxDQUFDO1FBSXRCLDZCQUF1QixHQUFHLEtBQUssQ0FBQztRQUVoQywwQkFBb0IsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV2RCxtQkFBYSxHQUFXLElBQUksQ0FBQztRQUU3Qix3QkFBa0IsR0FBUSxJQUFJLENBQUM7UUFFL0IseUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBRTVCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbEIseUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBUXhCLGdCQUFVLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFMUMsK0JBQXlCLEdBQUcsS0FBSyxDQUFDO1FBRWxDLDBCQUFvQixHQUFHLEtBQUssQ0FBQztRQUVwQywyQkFBMkI7UUFDcEIsb0JBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQywrREFBK0Q7UUFFdkYscUJBQWUsR0FBVSxFQUFFLENBQUEsQ0FBQyxlQUFlO1FBb0QzQyxxQkFBZSxHQUFHLFVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFRO1lBQzFDLDRCQUE0QjtZQUM1QixJQUFJLE9BQU8sRUFBRTtnQkFDWCxLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQztZQUNELEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQTs7SUF5TUgsQ0FBQztJQTVQQywyQkFBMkI7SUFFM0IsK0JBQU0sR0FBTixVQUFPLEVBRU47WUFEQyxnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsZ0NBQWEsRUFBRSxnQkFBSztRQUU5QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDakcsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDNUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN4QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDMUIsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVc7U0FDMUQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYztZQUN4RCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLHFDQUFZLEdBQW5CLFVBQW9CLEtBQUssRUFBRSxNQUFNO1FBQy9CLHVCQUF1QjtRQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN4QyxPQUFPLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQjtZQUN4QyxNQUFNLFFBQUE7U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBVUQsNkNBQW9CLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7WUFDakQsT0FBTyxFQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0I7WUFDeEMsTUFBTSxFQUFFO2dCQUNOLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVc7YUFDckU7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQW1CLEdBQW5CLFVBQW9CLFFBQVE7UUFBNUIsaUJBYUM7UUFaQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUNqRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDcEMsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RFLFNBQVMsQ0FBQyxJQUFJLGdDQUNULEdBQUcsS0FDTixPQUFPLEVBQUUsSUFBSSxFQUNiLE1BQU0sRUFBRSxLQUFLLEtBQ1YsYUFBYSxFQUNoQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxzREFBNkIsR0FBN0IsVUFBOEIsUUFBYTtRQUEzQyxpQkE2QkM7UUE1QkMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFDMUMsT0FBTztTQUNSO1FBQ0QsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDckQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPLFVBQVUsR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZCLFVBQVUsSUFBSSxJQUFJLENBQUM7Z0JBQ25CLGFBQWEsSUFBSSxDQUFDLENBQUM7YUFDcEI7WUFDRCxJQUFJLGdCQUFnQixHQUFHLEtBQUcsVUFBWSxDQUFDO1lBQ3ZDLElBQUksVUFBVSxHQUFHLEVBQUU7Z0JBQUUsZ0JBQWdCLEdBQUcsT0FBSyxVQUFZLENBQUM7aUJBQ3JELElBQUksVUFBVSxHQUFHLEdBQUc7Z0JBQUUsZ0JBQWdCLEdBQUcsTUFBSSxVQUFZLENBQUM7WUFDL0QsSUFBSSxhQUFhLEdBQUcsQ0FBQztnQkFBRSxJQUFJLENBQUMsYUFBYSxHQUFNLGFBQWEsU0FBSSxnQkFBa0IsQ0FBQzs7Z0JBQzlFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBRyxVQUFZLENBQUM7U0FDM0M7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTtTQUMzQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUUvRCxpQkFBaUI7UUFDakIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sbUNBQVUsR0FBakIsVUFBa0IsV0FBcUI7UUFDckMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsZ0RBQXVCLEdBQXZCLFVBQXdCLE1BQU07UUFDNUIsSUFBTSxPQUFPLEdBQVcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNwQyxJQUFBLG9CQUFLLENBQVk7UUFDekIsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQUEsaUJBdUNDO1FBdENDOzs7O1lBSUk7UUFDSixJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQywwQkFBMEI7UUFDaEQsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMscUNBQXFDO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztZQUM3QixJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7WUFDNUUsSUFBSSxTQUFTLEVBQUUsRUFBRSx3QkFBd0I7Z0JBQ3ZDLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFGLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ1osS0FBSyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDN0IsSUFBSSxFQUFFLGVBQWU7b0JBQ3JCLE9BQU8sRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxTQUFPLFlBQVksQ0FBQyxZQUFZLENBQUc7aUJBQzdDLENBQUMsQ0FBQzthQUNKO2lCQUFNLEVBQUUsNENBQTRDO2dCQUNuRCxJQUFNLE1BQU0sR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BELFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsc0NBQXNDO1lBQ2hFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPO2dCQUNwQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTTtvQkFDckIsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMzRSxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNaLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSzt3QkFDZCxJQUFJLEVBQUUsZUFBZTt3QkFDckIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO3dCQUNiLE9BQU8sRUFBRSxTQUFPLFlBQVksQ0FBQyxZQUFZLENBQUc7cUJBQzdDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO2FBQ25DO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUN2QyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFTyxpREFBd0IsR0FBaEM7UUFBQSxpQkFnQkM7UUFmQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFMUMsaUJBQWlCO1FBQ2pCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixnQkFBZ0I7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FDVixZQUFZLENBQUMsRUFBRSxDQUFDLENBQ2pCLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBMkI7Z0JBQXpCLGtCQUFNO1lBQ25CLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxnREFBdUIsR0FBL0IsVUFBZ0MsTUFBTTtRQUNwQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUNsQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQy9ELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNaLENBQUM7SUFFTyxtREFBMEIsR0FBbEM7UUFBQSxpQkF5QkM7UUF4QkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUM3QyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1lBQzNDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTtZQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDdkMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FDNUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDaEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO2dCQUMxQyxPQUFPLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQjtnQkFDeEMsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxLQUFLO29CQUNaLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2lCQUM5RjthQUNGLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO2dCQUNwQixLQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDO29CQUN0QyxRQUFRLFVBQUE7b0JBQ1IsS0FBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxtREFBMEIsR0FBbEM7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDbEYsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQzNCLElBQUE7Ozs7Ozs7Ozs7O2tCQVdKLEVBWEssZUFXTCxDQUFDO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztTQUNwQztRQUNELElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQy9ELENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE3U0QsQ0FBb0MsZ0JBQWdCLEdBNlNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBmb3JrSm9pbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9oZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG5cbiAgcHJpdmF0ZSB0aXBweTogYW55O1xuXG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuXG4gIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3ZlcjogYW55O1xuXG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBudW1PZkl0ZW1zU3RyOiBzdHJpbmcgPSBudWxsO1xuXG4gIHB1YmxpYyBjdXJyZW50SG92ZXJFbnRpdHk6IGFueSA9IG51bGw7XG5cbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQgPSBmYWxzZTtcblxuICBwdWJsaWMgcmVzdWx0c0xpbWl0ID0gLTE7XG5cbiAgcHVibGljIHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcblxuICBwdWJsaWMgb3V0ZXJMaW5rczogYW55O1xuXG4gIHB1YmxpYyBvdXRlckxpbmtzVGl0bGU6IHN0cmluZztcblxuICBwdWJsaWMgaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgcHVibGljIHJlc3VsdHNMaXN0SXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgLy8gPT09PT0gQlVCQkxFIENIQVJUID09PT09XG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZCA9IGZhbHNlOyAvLyB0cnVlIGlmIHRoaXMgQXJpYW5uYSBXZWIgcHJvamVjdCBoYXMgdGhlIGJ1YmJsZSBjaGFydCBtb2R1bGVcblxuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdIC8vIGFycmF5IG9mIElEc1xuXG4gIC8vIHN0b3JlIGxhc3QgYnViYmxlIHJlc3BvbnNlIHRvIHJlZnJlc2ggdGhlIGdyYXBoIHdpdGggdGhlIHNhbWUgZGF0YVxuICBwdWJsaWMgbGFzdEJ1YmJsZVJlc3BvbnNlOiBhbnlcblxuICAvLyBzdG9yZSB0aGUgZmlyc3QgYXJyYXkgb2YgYnViYmxlcywgdG8gZmluZCB0aGVtIGluIGNhc2Ugb2Ygbm8gcmVzdWx0cy5cbiAgcHVibGljIGZpcnN0QnViYmxlUmVzcG9uc2U6IGFueVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBvbkluaXQoe1xuICAgIGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiwgdGlwcHksXG4gIH0pIHtcbiAgICB0aGlzLmNvbW11bmljYXRpb24gPSBjb21tdW5pY2F0aW9uO1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgLy8gdGhpcy5mYWNldERhdGEgPSBbXTtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgdGhpcy5yZXN1bHRzTGltaXQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydyZXN1bHRzLWxpbWl0J107XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKS5idWJibGVjaGFydCA6IGZhbHNlO1xuICAgIHRoaXMub25lKCdhdy1oZXJvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3RvcC1oZXJvJ10pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWhlcm8tcGF0cmltb25pbycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydib3R0b20taGVybyddKTtcbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmE0VmlldyAtIEhvbWVwYWdlJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYTRWaWV3IC0gSG9tZXBhZ2UnKTtcbiAgICB0aGlzLm1haW5TdGF0ZS51cGRhdGVDdXN0b20oJ2N1cnJlbnROYXYnLCAnaG9tZScpO1xuICAgIC8vIGxpc3RlbiBhdXRvY29tcGxldGUgY2hhbmdlc1xuICAgIHRoaXMuX2xpc3RlbkF1dG9Db21wbGV0ZUNoYW5nZXMoKTtcbiAgICB0aGlzLm91dGVyTGlua3MgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydvdXRlci1saW5rcyddLnRlc3Q7XG4gICAgdGhpcy5vdXRlckxpbmtzVGl0bGUgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydvdXRlci1saW5rcyddLnRpdGxlO1xuICAgIHRoaXMub25lKCdhdy1idWJibGUtY2hhcnQnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGxpbWl0OiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctY2hhcnQtdGlwcHknKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGJhc2VQYXRoOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdwYXRocycpLmVudGl0YUJhc2VQYXRoLFxuICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIG1ha2VSZXF1ZXN0JChxdWVyeSwgcGFyYW1zKSB7XG4gICAgLy8gbWFrZSByZXF1ZXN0IGZyb20gRUhcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKHF1ZXJ5LCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgICAgcGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucz8pID0+IHtcbiAgICAvLyB1cGRhdGUgY29tcG9uZW50cyBmcm9tIEVIXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub25lKGlkKS51cGRhdGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpO1xuICB9XG5cbiAgaW5pdGlhbEZpbHRlclJlcXVlc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBlbnRpdGllc0xpc3RTaXplOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdidWJibGUtY2hhcnQnKS5idWJibGVMaW1pdCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKSB7XG4gICAgdGhpcy5maXJzdEJ1YmJsZVJlc3BvbnNlID0gcmVzcG9uc2UuZW50aXRpZXNEYXRhO1xuICAgIGNvbnN0IGZhY2V0RGF0YSA9IFtdO1xuICAgIHJlc3BvbnNlLnR5cGVPZkVudGl0eURhdGEuZm9yRWFjaCgodG9lKSA9PiB7XG4gICAgICBjb25zdCBUT0Vjb25maWdEYXRhID0gdGhpcy5jb25maWd1cmF0aW9uLmdldCgnY29uZmlnLWtleXMnKVt0b2UudHlwZV07XG4gICAgICBmYWNldERhdGEucHVzaCh7XG4gICAgICAgIC4uLnRvZSxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgbG9ja2VkOiBmYWxzZSxcbiAgICAgICAgLi4uVE9FY29uZmlnRGF0YSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWZhY2V0cy13cmFwcGVyJykudXBkYXRlKGZhY2V0RGF0YSk7XG4gIH1cblxuICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgaWYgKG51bU9mSXRlbXMgPiAwKSB7XG4gICAgICBsZXQgbnVtT2ZUaG91c2FuZCA9IDA7XG4gICAgICB3aGlsZSAobnVtT2ZJdGVtcyA+IDk5OSkge1xuICAgICAgICBudW1PZkl0ZW1zIC09IDEwMDA7XG4gICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gYCR7bnVtT2ZJdGVtc31gO1xuICAgICAgaWYgKG51bU9mSXRlbXMgPCAxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9IGAwMCR7bnVtT2ZJdGVtc31gO1xuICAgICAgZWxzZSBpZiAobnVtT2ZJdGVtcyA8IDEwMCkgbnVtT2ZJdGVtc1RtcFN0ciA9IGAwJHtudW1PZkl0ZW1zfWA7XG4gICAgICBpZiAobnVtT2ZUaG91c2FuZCA+IDApIHRoaXMubnVtT2ZJdGVtc1N0ciA9IGAke251bU9mVGhvdXNhbmR9LiR7bnVtT2ZJdGVtc1RtcFN0cn1gO1xuICAgICAgZWxzZSB0aGlzLm51bU9mSXRlbXNTdHIgPSBgJHtudW1PZkl0ZW1zfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9ICcwJztcbiAgICB9XG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiAnaG9tZScsXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctbGlua2VkLW9iamVjdHMnKS51cGRhdGUocmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKTtcblxuICAgIC8vIHNjcm9sbCBjb250cm9sXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVRhZ3Mob25seUJ1YmJsZXM/OiBib29sZWFuKSB7XG4gICAgaWYgKCFvbmx5QnViYmxlcykge1xuICAgICAgdGhpcy5yZW5kZXJJdGVtVGFncygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoQ2hhbmdlKGNoYW5nZSkge1xuICAgIGNvbnN0IHBheWxvYWQ6IHN0cmluZyA9IGNoYW5nZS5pbnB1dFBheWxvYWQ7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gY2hhbmdlO1xuICAgIC8vIHN0b3JlIHRoZSBlbnRlcmVkIHRleHQgaW4gZmFjZXRJbnB1dHNcbiAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XG4gIH1cblxuICByZW5kZXJJdGVtVGFncygpIHtcbiAgICAvKlxuICAgICAgICAgIFRyeSB0byBidWlsZCBhbiBpdGVtIHRhZyBmb3IgZWFjaCBzZWxlY3RlZCBxdWVyeSBsb29raW5nIGF0IHRoZSBkYXRhIGZyb20gdGhlXG4gICAgICAgICAgZmlyc3QgcmVzcG9uc2UuIElmIHRoZSBuZWVkZWQgYnViYmxlIGRhdGEgY2Fubm90IGJlIGZvdW5kLCBhc2sgdGhlIGJhY2tlbmRcbiAgICAgICAgICBmb3IgdGhhdCBidWJibGUncyBkYXRhLlxuICAgICAgKi9cbiAgICBjb25zdCBxdWVyeUxpc3QgPSBbXTsgLy8gbGlzdCBvZiBwZW5kaW5nIHF1ZXJpZXNcbiAgICBjb25zdCB0YWdzRGF0YSA9IFtdOyAvLyBsaXN0IG9mIHRhZ3MgZGF0YSBidWlsdCBmcm9tIHF1ZXJ5XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCgoYikgPT4geyAvLyB0cnkgdG8gZ2V0IHRoZSBkYXRhIG9mIGVhY2ggc2VsZWN0ZWQgYnViYmxlXG4gICAgICBjb25zdCB0aGVCdWJibGUgPSB0aGlzLmZpcnN0QnViYmxlUmVzcG9uc2UuZmluZCgoZWwpID0+IGVsLmVudGl0eS5pZCA9PT0gYik7XG4gICAgICBpZiAodGhlQnViYmxlKSB7IC8vIGlmIGEgYnViYmxlIHdhcyBmb3VuZFxuICAgICAgICBjb25zdCBidWJibGVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3RoZUJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5XTtcbiAgICAgICAgdGFnc0RhdGEucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IHRoZUJ1YmJsZS5lbnRpdHkubGFiZWwsXG4gICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgIHBheWxvYWQ6IGIsXG4gICAgICAgICAgY2xhc3NlczogYHRhZy0ke2J1YmJsZUNvbmZpZ1snY2xhc3MtbmFtZSddfWAsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHsgLy8gaWYgdGhlIGJ1YmJsZSB3YXMgbm90IGZvdW5kLCBtYWtlIGEgcXVlcnlcbiAgICAgICAgY29uc3QgcGFyYW1zID0geyBlbnRpdHlJZDogYiwgZW50aXRpZXNMaXN0U2l6ZTogMSB9O1xuICAgICAgICBxdWVyeUxpc3QucHVzaCh0aGlzLm1ha2VSZXF1ZXN0JCgnZ2V0TWlzc2luZ0J1YmJsZScsIHBhcmFtcykpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChxdWVyeUxpc3QubGVuZ3RoID4gMCkgeyAvLyBpZiB0aGVyZSBhcmUgcGVuZGluZyBidWJibGUgcXVlcmllc1xuICAgICAgZm9ya0pvaW4ocXVlcnlMaXN0KS5zdWJzY3JpYmUoKGZvcmtyZXMpID0+IHtcbiAgICAgICAgZm9ya3Jlcy5mb3JFYWNoKChyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBidWJibGVDb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpW3IudHlwZU9mRW50aXR5XTtcbiAgICAgICAgICB0YWdzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiByLmxhYmVsLFxuICAgICAgICAgICAgaWNvbjogJ243LWljb24tY2xvc2UnLFxuICAgICAgICAgICAgcGF5bG9hZDogci5pZCxcbiAgICAgICAgICAgIGNsYXNzZXM6IGB0YWctJHtidWJibGVDb25maWdbJ2NsYXNzLW5hbWUnXX1gLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtaXRlbS10YWdzLXdyYXBwZXInKS51cGRhdGUodGFnc0RhdGEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgICB9XG4gIH1cblxuICBvbkhlcm9DaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IGhlbHBlcnMuZXNjYXBlUXVvdGVzKHZhbHVlKTtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQubmV4dChlc2NhcGVkVmFsdWUpO1xuICAgICAgdGhpcy5ob21lQXV0b2NvbXBsZXRlSXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZVF1ZXJ5ID0gZXNjYXBlZFZhbHVlO1xuICAgICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuKSB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zY3JvbGxCYWNrZ3JvdW5kQ29udHJvbCgpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZS1yZXN1bHRzLWxpc3QnKTtcbiAgICBpZiAoIW5vZGUpIHJldHVybjtcbiAgICBjb25zdCBzb3VyY2UkID0gZnJvbUV2ZW50KG5vZGUsICdzY3JvbGwnKTtcblxuICAgIC8vIGhlaWdodCBjb250cm9sXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKG5vZGUpO1xuICAgIH0sIDUwMCk7XG5cbiAgICAvLyBzY3JvbGwgbGlzdGVuXG4gICAgc291cmNlJC5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKDUwKSxcbiAgICApLnN1YnNjcmliZSgoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IGFueSB9KSA9PiB7XG4gICAgICB0aGlzLl9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRIYXNTY3JvbGxCYWNrZ3JvdW5kKHRhcmdldCkge1xuICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHRhcmdldCA/IChcbiAgICAgIHRhcmdldC5zY3JvbGxIZWlnaHQgPiAodGFyZ2V0LnNjcm9sbFRvcCArIHRhcmdldC5jbGllbnRIZWlnaHQpXG4gICAgKSA6IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGVPcHRpb25zKHtcbiAgICAgIGtleXM6IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2NvbmZpZy1rZXlzJyksXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlndXJhdGlvbixcbiAgICAgIGxhYmVsczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnbGFiZWxzJyksXG4gICAgICBwYXRoczogdGhpcy5jb25maWd1cmF0aW9uLmdldCgncGF0aHMnKSxcbiAgICB9KTtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpLFxuICAgICkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdhdXRvQ29tcGxldGUnLCB7XG4gICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGlucHV0OiB2YWx1ZSxcbiAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH0sXG4gICAgICAgIH0sXG4gICAgICB9KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuaG9tZUF1dG9jb21wbGV0ZUlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGUoe1xuICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgIHF1ZXJ5OiB2YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F3LWhvbWUtYWR2YW5jZWQtYXV0b2NvbXBsZXRlLXBvcG92ZXInKTtcbiAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY29uc3QgW3BvcE92ZXJdID0gdGhpcy50aXBweSgnLmF3LWhvbWVfX3RvcC1oZXJvIC5uNy1oZXJvX19pbnB1dCcsIHtcbiAgICAgICAgY29udGVudDogdGVtcGxhdGUsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9uSGlkZGVuOiAoKSA9PiB7IHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZTsgfSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyID0gcG9wT3ZlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5zaG93KCk7XG4gICAgfVxuICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSAhdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbjtcbiAgfVxufVxuIl19