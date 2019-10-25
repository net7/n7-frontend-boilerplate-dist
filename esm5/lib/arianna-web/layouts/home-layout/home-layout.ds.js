/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var AwHomeLayoutDS = /** @class */ (function (_super) {
    tslib_1.__extends(AwHomeLayoutDS, _super);
    function AwHomeLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facetData = null;
        _this.lockedFacets = {};
        _this.facetInputs = {};
        // all the bubbles as they have been given by apollo
        // (the objects in the allBubbles are not the same bubble objects
        // present in the bubble chart)
        _this.allBubbles = null;
        _this.autocompletePopoverOpen = false;
        _this.autocompleteChanged$ = new Subject();
        // the bubbles currently selected (this are saved from the event handler's
        // and correspond exactly to the bubblechart's bubble objects)
        _this.selectedBubbles = [];
        _this.numOfItemsStr = null;
        // instance of the bubble chart (from which you can access all the various
        // bubble objects)
        _this._bubbleChart = null;
        // the maximum number of bubbles which can be selected at the same time
        _this.maxBubblesSelectable = 3;
        // entities have their own unique id, these ids are generic and are very flexible
        // bubbles (as the bubble chart's objects) have unique ids but do not allow certain
        // characters, so each bubble has its own id different from the id of the entity which
        // the bubble represents (given an bubble's id called bubbleId you can obtain the
        // respective entity's id with as: entityId = entityBubbleIdMap[bubbleId] )
        _this.entityBubbleIdMap = {};
        // widh of the window which is updated at each resize and it is used by the bubble
        // chart to check if the width of the window has changed during the last resize
        _this.lastWindowWidth = -1;
        _this.bubblePopup = null;
        _this.currentHoverEntity = null;
        _this.hasScrollBackground = false;
        _this.loadingBubbles = false;
        _this.bubblesEnabled = false;
        _this.updateComponent = (/**
         * @param {?} id
         * @param {?} data
         * @param {?} options
         * @return {?}
         */
        function (id, data, options) {
            if (options) {
                _this.one(id).updateOptions(options);
            }
            _this.one(id).update(data);
        });
        return _this;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onInit = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var communication = _a.communication, mainState = _a.mainState, configuration = _a.configuration, tippy = _a.tippy;
        this.communication = communication;
        this.configuration = configuration;
        this.facetData = [];
        this.lastWindowWidth = window.outerWidth;
        this.mainState = mainState;
        this.tippy = tippy;
        this.bubblesEnabled = this.configuration.get('features-enabled') ? this.configuration.get('features-enabled')['bubblechart'] : false;
        this.one('aw-hero').update(this.configuration.get('home-layout')['top-hero']);
        this.one('aw-home-hero-patrimonio').update(this.configuration.get('home-layout')['bottom-hero']);
        // update streams
        this.mainState.update('headTitle', 'Arianna Web > Home');
        this.mainState.update('pageTitle', 'Arianna Web: Home Layout');
        // listen autocomplete changes
        this._listenAutoCompleteChanges();
    };
    /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    AwHomeLayoutDS.prototype.makeRequest$ = /**
     * @param {?} query
     * @param {?} params
     * @return {?}
     */
    function (query, params) {
        return this.communication.request$(query, {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: params
        });
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.initialFilterRequest = /**
     * @return {?}
     */
    function () {
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
        });
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.parseInitialRequest = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        response.entitiesData.forEach((/**
         * @param {?} ent
         * @return {?}
         */
        function (ent) {
            /** @type {?} */
            var teoConfigData = _this.configuration.get("config-keys")[ent.countData.type.configKey];
            if (teoConfigData)
                _this.facetData.push(tslib_1.__assign({}, ent.countData, teoConfigData, { enabled: true }));
        }));
        this.one('aw-home-facets-wrapper').update({
            facetData: this.facetData,
            lockedFacets: this.lockedFacets
        });
        this.one('aw-bubble-chart').updateOptions({
            context: 'home',
            configKeys: this.configuration.get("config-keys"),
            bubbleContainerId: 'bubbleChartContainer',
            containerId: 'bubble-chart-container',
        });
        this.renderPreviewsFromApolloQuery(response);
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderPreviewsFromApolloQuery = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (!response || !response.itemsPagination) {
            return;
        }
        ;
        /** @type {?} */
        var numOfItems = response.itemsPagination.totalCount;
        if (numOfItems > 0) {
            /** @type {?} */
            var numOfThousand = 0;
            while (numOfItems > 999) {
                numOfItems -= 1000;
                numOfThousand += 1;
            }
            /** @type {?} */
            var numOfItemsTmpStr = numOfItems + '';
            if (numOfItems < 10)
                numOfItemsTmpStr = '00' + numOfItems;
            else if (numOfItems < 100)
                numOfItemsTmpStr = '0' + numOfItems;
            if (numOfThousand > 0)
                this.numOfItemsStr = numOfThousand + '.' + numOfItemsTmpStr;
            else
                this.numOfItemsStr = numOfItems + '';
        }
        else {
            this.numOfItemsStr = null;
        }
        this.one('aw-linked-objects').updateOptions({ context: 'home', config: this.configuration });
        this.one('aw-linked-objects').update(response.itemsPagination.items);
    };
    /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleTooltipClick = /**
     * @param {?} source
     * @param {?} payload
     * @return {?}
     */
    function (source, payload) {
        switch (source) {
            case 'select':
                if (!payload)
                    return;
                /** @type {?} */
                var bubbleId_1 = payload.bubbleId;
                if (!bubbleId_1)
                    return;
                /** @type {?} */
                var bubble_1 = null;
                if (this._bubbleChart) {
                    this._bubbleChart.selectAll("g").each((/**
                     * @param {?} b
                     * @return {?}
                     */
                    function (b) {
                        if (b.id === bubbleId_1)
                            bubble_1 = b;
                    }));
                    if (bubble_1)
                        this.onBubbleSelected(bubble_1);
                }
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} bubble
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleSelected = /**
     * @param {?} bubble
     * @return {?}
     */
    function (bubble) {
        if (bubble) {
            if (!this.selectedBubbles.includes(bubble)) {
                if (this.selectedBubbles.length < this.maxBubblesSelectable) {
                    this.loadingBubbles = this.selectedBubbles.length == 0;
                    this.selectedBubbles.push(bubble);
                    return true;
                }
            }
        }
        return null;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onBubbleDeselected = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (payload && payload.bubble) {
            this.selectedBubbles = this.selectedBubbles.filter((/**
             * @param {?} b
             * @return {?}
             */
            function (b) { return b.id !== payload.bubble.id; }));
            if (payload.bubble.hasCloseIcon) {
                payload.bubble.hasCloseIcon = false;
                return this.filterRequest();
            }
        }
    };
    /**
     * @param {?} response
     * @return {?}
     */
    AwHomeLayoutDS.prototype.getBubblePayload = /**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _this = this;
        /** @type {?} */
        var bubblePayolad = {
            reset: true,
            setBubbleChart: (/**
             * @param {?} bubbleCref
             * @return {?}
             */
            function (bubbleCref) { return _this._bubbleChart = bubbleCref; }),
            facetData: this.facetData,
            source: response,
            selectedBubbles: this.selectedBubbles
        };
        return bubblePayolad;
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype.filterRequest = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedEntitiesIds = [];
        if (this.entityBubbleIdMap) {
            /** @type {?} */
            var k_1 = this.configuration.get('config-keys');
            /** @type {?} */
            var activeBubbles_1 = {
                places: false,
                people: false,
                concepts: false,
                organizations: false,
            };
            this.selectedBubbles.forEach((/**
             * @param {?} sB
             * @return {?}
             */
            function (sB) {
                /** @type {?} */
                var c = sB.color;
                /** @type {?} */
                var findTypeFromColor = (/**
                 * @param {?} obj
                 * @param {?} color
                 * @return {?}
                 */
                function (obj, color) {
                    return Object.keys(obj).find((/**
                     * @param {?} key
                     * @return {?}
                     */
                    function (key) { return obj[key].color.hex === color; }));
                });
                activeBubbles_1[findTypeFromColor(k_1, c)] = true;
                /** @type {?} */
                var entityId = _this.entityBubbleIdMap[sB.id];
                if (entityId)
                    selectedEntitiesIds.push(entityId);
            }));
            this.lockedFacets = activeBubbles_1;
            this.one('aw-home-facets-wrapper').update({
                facetData: this.facetData,
                lockedFacets: this.lockedFacets
            });
        }
        return this.communication.request$('globalFilter', {
            onError: (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return console.error(error); }),
            params: {
                selectedEntitiesIds: selectedEntitiesIds,
                itemsPagination: { offset: 0, limit: this.configuration.get('home-layout')['results-limit'] }
            },
        });
    };
    /**
     * @param {?} response
     * @param {?=} onlyBubbles
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubbles = /**
     * @param {?} response
     * @param {?=} onlyBubbles
     * @return {?}
     */
    function (response, onlyBubbles) {
        if (!onlyBubbles) {
            this.renderPreviewsFromApolloQuery(response);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateBubbleFilter = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.allBubbles = data.allBubbles;
        this.entityBubbleIdMap = data.entityIdmap;
    };
    /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    AwHomeLayoutDS.prototype.updateTags = /**
     * @param {?=} onlyBubbles
     * @return {?}
     */
    function (onlyBubbles) {
        if (!onlyBubbles) {
            this.renderItemTags();
        }
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.filterBubblesBasedOnFacetsEnabled = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var result = this.allBubbles.filter((/**
         * @param {?} bubble
         * @return {?}
         */
        function (bubble) {
            for (var i = 0; i < _this.facetData.length; i++) {
                if (bubble.entity.typeOfEntity.id === _this.facetData[i].type.id)
                    if (!_this.facetData[i].enabled) {
                        return false;
                    }
            }
            return true;
        }));
        return result;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var payload = change.inputPayload;
        /** @type {?} */
        var value = change.value;
        // store the entered text in facetInputs
        this.facetInputs[payload] = value;
    };
    /**
     * @param {?} enter
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetSearchEnter = /**
     * @param {?} enter
     * @return {?}
     */
    function (enter) {
        /** @type {?} */
        var payload = enter.inputPayload;
        // get the text entered in this input
        /** @type {?} */
        var value = this.facetInputs[payload];
    };
    /**
     * @param {?} facetId
     * @return {?}
     */
    AwHomeLayoutDS.prototype.handleFacetHeaderClick = /**
     * @param {?} facetId
     * @return {?}
     */
    function (facetId) {
        var _this = this;
        /** @type {?} */
        var updateBubbles = false;
        /** @type {?} */
        var enabledFacets = this.facetData.filter((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.enabled; })).length - 1;
        this.facetData.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            if (f.type.id === facetId && f.locked === true) {
                // if user clicked on a locked facet, ignore it
                return;
            }
            if (f.type.id === facetId) {
                // if this is the clicked facet
                if (f.enabled && enabledFacets >= 1) {
                    f.enabled = false;
                    f.locked = false;
                    updateBubbles = true;
                }
                else {
                    f.enabled = true;
                    f.locked = false;
                    updateBubbles = true;
                }
            }
            else {
                // if this is another facet
                if (enabledFacets === 1 && f.enabled) {
                    f.locked = true;
                }
                else {
                    f.locked = false;
                }
            }
        }));
        this.one('aw-home-facets-wrapper').update({
            facetData: this.facetData,
            lockedFacets: this.lockedFacets
        });
        if (updateBubbles) {
            /** @type {?} */
            var disableFacetsIds_1 = [];
            this.facetData.forEach((/**
             * @param {?} fD
             * @return {?}
             */
            function (fD) {
                if (!fD.enabled)
                    disableFacetsIds_1.push(fD.type.id);
            }));
            if (disableFacetsIds_1) {
                /** @type {?} */
                var filteredSelectedBubbles = this.selectedBubbles.filter((/**
                 * @param {?} bubble
                 * @return {?}
                 */
                function (bubble) {
                    /** @type {?} */
                    var typeOfEntity = "";
                    for (var i = 0; i < _this.allBubbles.length; i++) {
                        if (_this.allBubbles[i].id === bubble.id) {
                            typeOfEntity = _this.allBubbles[i].entity.typeOfEntity.id;
                            break;
                        }
                    }
                    if (disableFacetsIds_1.includes(typeOfEntity))
                        return false;
                    return true;
                }));
                if (filteredSelectedBubbles.length != this.selectedBubbles.length) {
                    this.selectedBubbles = filteredSelectedBubbles;
                }
                ;
            }
            this.allBubbles.forEach((/**
             * @param {?} bubble
             * @return {?}
             */
            function (bubble) {
                bubble.selected = false;
                for (var i = 0; i < _this.selectedBubbles.length; i++) {
                    if (_this.selectedBubbles[i].id === bubble.id)
                        bubble.selected = true;
                }
            }));
            this.one('aw-bubble-chart').update(this.getBubblePayload(null));
        }
    };
    /**
     * @return {?}
     */
    AwHomeLayoutDS.prototype.renderItemTags = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var tagsData = [];
        this.selectedBubbles.forEach((/**
         * @param {?} sBubble
         * @return {?}
         */
        function (sBubble) {
            /** @type {?} */
            var label = '';
            for (var i = 0; i < _this.allBubbles.length; i++) {
                if (_this.allBubbles[i].id === sBubble.id) {
                    label = _this.allBubbles[i].entity.label;
                    tagsData.push({
                        label: label, icon: "n7-icon-close",
                        payload: sBubble.id,
                        classes: "tag-" + _this.allBubbles[i].entity.typeOfEntity.id
                    });
                    break;
                }
            }
        }));
        this.one('aw-home-item-tags-wrapper').update(tagsData);
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onTagClicked = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        if (!payload)
            return;
        /** @type {?} */
        var bubbleId = payload;
        if (this._bubbleChart) {
            this._bubbleChart.selectAll("g").each((/**
             * @param {?} b
             * @return {?}
             */
            function (b) {
                if (b.id === bubbleId)
                    b.hasCloseIcon = false;
            }));
        }
        this.selectedBubbles = this.selectedBubbles.filter((/**
         * @param {?} b
         * @return {?}
         */
        function (b) { return b.id !== payload; }));
        return this.filterRequest();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AwHomeLayoutDS.prototype.onHeroChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.autocompleteChanged$.next(value);
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._scrollBackgroundControl = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var el = document.getElementById('bubble-results-list');
        /** @type {?} */
        var source$ = fromEvent(document.getElementById('bubble-results-list'), 'scroll');
        // height control
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._setHasScrollBackground(el);
        }), 500);
        // scroll listen
        source$.pipe(debounceTime(50)).subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var target = _a.target;
            _this._setHasScrollBackground(target);
        }));
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    AwHomeLayoutDS.prototype._setHasScrollBackground = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
        this.hasScrollBackground = scrollHeight > (scrollTop + clientHeight);
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._listenAutoCompleteChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.one('aw-home-autocomplete').updateOptions({ config: this.configuration.get('config-keys') });
        this.autocompleteChanged$.pipe(debounceTime(500)).subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                _this.communication.request$('autoComplete', {
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return console.error(error); }),
                    params: {
                        input: value,
                        itemsPagination: { offset: 0, limit: _this.configuration.get('home-layout')['results-limit'] }
                    }
                }).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.one('aw-home-autocomplete').update(response);
                    if (!_this.autocompletePopoverOpen)
                        _this._toggleAutocompletePopover();
                }));
            }
            else {
                _this._toggleAutocompletePopover();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    AwHomeLayoutDS.prototype._toggleAutocompletePopover = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autocompletePopover) {
            /** @type {?} */
            var template = document.getElementById('aw-home-advanced-autocomplete-popover');
            template.style.display = 'block';
            this.autocompletePopover = this.tippy('.aw-home__top-hero .n7-hero__input', {
                content: template,
                trigger: 'manual',
                interactive: true,
                arrow: false,
                appendTo: 'parent',
                theme: 'light-border',
                placement: 'bottom-start',
                maxWidth: '100%',
                onHidden: (/**
                 * @return {?}
                 */
                function () { return _this.autocompletePopoverOpen = false; }),
            })[0];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.communication;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.mainState;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.tippy;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.configuration;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetData;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.lockedFacets;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.facetInputs;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.allBubbles;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompletePopover;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompletePopoverOpen;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.autocompleteChanged$;
    /** @type {?} */
    AwHomeLayoutDS.prototype.selectedBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.numOfItemsStr;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype._bubbleChart;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.maxBubblesSelectable;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.entityBubbleIdMap;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.lastWindowWidth;
    /**
     * @type {?}
     * @private
     */
    AwHomeLayoutDS.prototype.bubblePopup;
    /** @type {?} */
    AwHomeLayoutDS.prototype.currentHoverEntity;
    /** @type {?} */
    AwHomeLayoutDS.prototype.hasScrollBackground;
    /** @type {?} */
    AwHomeLayoutDS.prototype.loadingBubbles;
    /** @type {?} */
    AwHomeLayoutDS.prototype.bubblesEnabled;
    /** @type {?} */
    AwHomeLayoutDS.prototype.updateComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBWSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RDtJQUFvQywwQ0FBZ0I7SUFBcEQ7UUFBQSxxRUFxYUM7UUFoYVMsZUFBUyxHQUFVLElBQUksQ0FBQztRQUN4QixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBVyxHQUFRLEVBQUUsQ0FBQzs7OztRQUl0QixnQkFBVSxHQUFVLElBQUksQ0FBQztRQUV6Qiw2QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMsMEJBQW9CLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7OztRQUd2RCxxQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixtQkFBYSxHQUFXLElBQUksQ0FBQzs7O1FBRzVCLGtCQUFZLEdBQVEsSUFBSSxDQUFDOztRQUV6QiwwQkFBb0IsR0FBVyxDQUFDLENBQUM7Ozs7OztRQU1qQyx1QkFBaUIsR0FBUSxFQUFFLENBQUM7OztRQUc1QixxQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGlCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLHdCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix5QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUEyQnZCLHFCQUFlOzs7Ozs7UUFBRyxVQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUs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Q0FBQyx1QkFBdUIsQ0FBQztJQUMvRCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBcmFELENBQW9DLGdCQUFnQixHQXFhbkQ7Ozs7Ozs7SUFwYUMsdUNBQTJCOzs7OztJQUMzQixtQ0FBdUI7Ozs7O0lBQ3ZCLCtCQUFtQjs7Ozs7SUFDbkIsdUNBQTJCOzs7OztJQUMzQixtQ0FBZ0M7Ozs7O0lBQ2hDLHNDQUEwQjs7Ozs7SUFDMUIscUNBQThCOzs7OztJQUk5QixvQ0FBaUM7Ozs7O0lBQ2pDLDZDQUFpQzs7Ozs7SUFDakMsaURBQWlEOzs7OztJQUNqRCw4Q0FBOEQ7O0lBRzlELHlDQUFtQzs7SUFDbkMsdUNBQW9DOzs7OztJQUdwQyxzQ0FBaUM7Ozs7O0lBRWpDLDhDQUF5Qzs7Ozs7SUFNekMsMkNBQW9DOzs7OztJQUdwQyx5Q0FBcUM7Ozs7O0lBQ3JDLHFDQUFnQzs7SUFDaEMsNENBQXNDOztJQUN0Qyw2Q0FBNEM7O0lBQzVDLHdDQUE4Qjs7SUFDOUIsd0NBQThCOztJQTJCOUIseUNBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYXlvdXREYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXdIb21lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb21tdW5pY2F0aW9uOiBhbnk7XG4gIHByaXZhdGUgbWFpblN0YXRlOiBhbnk7XG4gIHByaXZhdGUgdGlwcHk6IGFueTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBhbnk7XG4gIHByaXZhdGUgZmFjZXREYXRhOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgbG9ja2VkRmFjZXRzID0ge307XG4gIHByaXZhdGUgZmFjZXRJbnB1dHM6IGFueSA9IHt9O1xuICAvLyBhbGwgdGhlIGJ1YmJsZXMgYXMgdGhleSBoYXZlIGJlZW4gZ2l2ZW4gYnkgYXBvbGxvXG4gIC8vICh0aGUgb2JqZWN0cyBpbiB0aGUgYWxsQnViYmxlcyBhcmUgbm90IHRoZSBzYW1lIGJ1YmJsZSBvYmplY3RzXG4gIC8vIHByZXNlbnQgaW4gdGhlIGJ1YmJsZSBjaGFydClcbiAgcHJpdmF0ZSBhbGxCdWJibGVzOiBhbnlbXSA9IG51bGw7XG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlUG9wb3ZlcjogYW55O1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlQ2hhbmdlZCQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIC8vIHRoZSBidWJibGVzIGN1cnJlbnRseSBzZWxlY3RlZCAodGhpcyBhcmUgc2F2ZWQgZnJvbSB0aGUgZXZlbnQgaGFuZGxlcidzXG4gIC8vIGFuZCBjb3JyZXNwb25kIGV4YWN0bHkgdG8gdGhlIGJ1YmJsZWNoYXJ0J3MgYnViYmxlIG9iamVjdHMpXG4gIHB1YmxpYyBzZWxlY3RlZEJ1YmJsZXM6IGFueVtdID0gW107XG4gIHB1YmxpYyBudW1PZkl0ZW1zU3RyOiBzdHJpbmcgPSBudWxsO1xuICAvLyBpbnN0YW5jZSBvZiB0aGUgYnViYmxlIGNoYXJ0IChmcm9tIHdoaWNoIHlvdSBjYW4gYWNjZXNzIGFsbCB0aGUgdmFyaW91c1xuICAvLyBidWJibGUgb2JqZWN0cylcbiAgcHJpdmF0ZSBfYnViYmxlQ2hhcnQ6IGFueSA9IG51bGw7XG4gIC8vIHRoZSBtYXhpbXVtIG51bWJlciBvZiBidWJibGVzIHdoaWNoIGNhbiBiZSBzZWxlY3RlZCBhdCB0aGUgc2FtZSB0aW1lXG4gIHByaXZhdGUgbWF4QnViYmxlc1NlbGVjdGFibGU6IG51bWJlciA9IDM7XG4gIC8vIGVudGl0aWVzIGhhdmUgdGhlaXIgb3duIHVuaXF1ZSBpZCwgdGhlc2UgaWRzIGFyZSBnZW5lcmljIGFuZCBhcmUgdmVyeSBmbGV4aWJsZVxuICAvLyBidWJibGVzIChhcyB0aGUgYnViYmxlIGNoYXJ0J3Mgb2JqZWN0cykgaGF2ZSB1bmlxdWUgaWRzIGJ1dCBkbyBub3QgYWxsb3cgY2VydGFpblxuICAvLyBjaGFyYWN0ZXJzLCBzbyBlYWNoIGJ1YmJsZSBoYXMgaXRzIG93biBpZCBkaWZmZXJlbnQgZnJvbSB0aGUgaWQgb2YgdGhlIGVudGl0eSB3aGljaFxuICAvLyB0aGUgYnViYmxlIHJlcHJlc2VudHMgKGdpdmVuIGFuIGJ1YmJsZSdzIGlkIGNhbGxlZCBidWJibGVJZCB5b3UgY2FuIG9idGFpbiB0aGVcbiAgLy8gcmVzcGVjdGl2ZSBlbnRpdHkncyBpZCB3aXRoIGFzOiBlbnRpdHlJZCA9IGVudGl0eUJ1YmJsZUlkTWFwW2J1YmJsZUlkXSApXG4gIHByaXZhdGUgZW50aXR5QnViYmxlSWRNYXA6IGFueSA9IHt9O1xuICAvLyB3aWRoIG9mIHRoZSB3aW5kb3cgd2hpY2ggaXMgdXBkYXRlZCBhdCBlYWNoIHJlc2l6ZSBhbmQgaXQgaXMgdXNlZCBieSB0aGUgYnViYmxlXG4gIC8vIGNoYXJ0IHRvIGNoZWNrIGlmIHRoZSB3aWR0aCBvZiB0aGUgd2luZG93IGhhcyBjaGFuZ2VkIGR1cmluZyB0aGUgbGFzdCByZXNpemVcbiAgcHJpdmF0ZSBsYXN0V2luZG93V2lkdGg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGJ1YmJsZVBvcHVwOiBhbnkgPSBudWxsO1xuICBwdWJsaWMgY3VycmVudEhvdmVyRW50aXR5OiBhbnkgPSBudWxsO1xuICBwdWJsaWMgaGFzU2Nyb2xsQmFja2dyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbG9hZGluZ0J1YmJsZXMgPSBmYWxzZTtcbiAgcHVibGljIGJ1YmJsZXNFbmFibGVkID0gZmFsc2U7XG5cbiAgb25Jbml0KHsgY29tbXVuaWNhdGlvbiwgbWFpblN0YXRlLCBjb25maWd1cmF0aW9uLCB0aXBweSB9KSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uID0gY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMuZmFjZXREYXRhID0gW107XG4gICAgdGhpcy5sYXN0V2luZG93V2lkdGggPSB3aW5kb3cub3V0ZXJXaWR0aDtcbiAgICB0aGlzLm1haW5TdGF0ZSA9IG1haW5TdGF0ZTtcbiAgICB0aGlzLnRpcHB5ID0gdGlwcHk7XG4gICAgdGhpcy5idWJibGVzRW5hYmxlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKSA/IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2ZlYXR1cmVzLWVuYWJsZWQnKVsnYnViYmxlY2hhcnQnXSA6IGZhbHNlO1xuXG4gICAgdGhpcy5vbmUoJ2F3LWhlcm8nKS51cGRhdGUodGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsndG9wLWhlcm8nXSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtaGVyby1wYXRyaW1vbmlvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ2JvdHRvbS1oZXJvJ10pO1xuICAgIC8vIHVwZGF0ZSBzdHJlYW1zXG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdoZWFkVGl0bGUnLCAnQXJpYW5uYSBXZWIgPiBIb21lJyk7XG4gICAgdGhpcy5tYWluU3RhdGUudXBkYXRlKCdwYWdlVGl0bGUnLCAnQXJpYW5uYSBXZWI6IEhvbWUgTGF5b3V0Jyk7XG4gICAgLy8gbGlzdGVuIGF1dG9jb21wbGV0ZSBjaGFuZ2VzXG4gICAgdGhpcy5fbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIG1ha2VSZXF1ZXN0JChxdWVyeSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChxdWVyeSwge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtc1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucykgPT4ge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgIH1cbiAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpXG4gIH1cblxuICBpbml0aWFsRmlsdGVyUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgIH0pXG4gIH1cblxuICBwYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKSB7XG4gICAgcmVzcG9uc2UuZW50aXRpZXNEYXRhLmZvckVhY2goKGVudCkgPT4ge1xuICAgICAgY29uc3QgdGVvQ29uZmlnRGF0YSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVtlbnQuY291bnREYXRhLnR5cGUuY29uZmlnS2V5XTtcbiAgICAgIGlmICh0ZW9Db25maWdEYXRhKVxuICAgICAgICB0aGlzLmZhY2V0RGF0YS5wdXNoKHtcbiAgICAgICAgICAuLi5lbnQuY291bnREYXRhLFxuICAgICAgICAgIC4uLnRlb0NvbmZpZ0RhdGEsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoe1xuICAgICAgZmFjZXREYXRhOiB0aGlzLmZhY2V0RGF0YSxcbiAgICAgIGxvY2tlZEZhY2V0czogdGhpcy5sb2NrZWRGYWNldHNcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiAnaG9tZScsXG4gICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIiksXG4gICAgICBidWJibGVDb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gIH1cblxuICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9O1xuICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgaWYgKG51bU9mSXRlbXMgPiAwKSB7XG4gICAgICBsZXQgbnVtT2ZUaG91c2FuZCA9IDA7XG4gICAgICB3aGlsZSAobnVtT2ZJdGVtcyA+IDk5OSkge1xuICAgICAgICBudW1PZkl0ZW1zIC09IDEwMDA7XG4gICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgICAgaWYgKG51bU9mSXRlbXMgPCAxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwMCcgKyBudW1PZkl0ZW1zO1xuICAgICAgZWxzZSBpZiAobnVtT2ZJdGVtcyA8IDEwMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwJyArIG51bU9mSXRlbXM7XG4gICAgICBpZiAobnVtT2ZUaG91c2FuZCA+IDApXG4gICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mVGhvdXNhbmQgKyAnLicgKyBudW1PZkl0ZW1zVG1wU3RyO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoeyBjb250ZXh0OiAnaG9tZScsIGNvbmZpZzogdGhpcy5jb25maWd1cmF0aW9uIH0pXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbi5pdGVtcyk7XG4gIH1cblxuICBvbkJ1YmJsZVRvb2x0aXBDbGljayhzb3VyY2U6IHN0cmluZywgcGF5bG9hZCkge1xuICAgIHN3aXRjaCAoc291cmNlKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBpZiAoIXBheWxvYWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkLmJ1YmJsZUlkO1xuICAgICAgICBpZiAoIWJ1YmJsZUlkKSByZXR1cm47XG4gICAgICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fYnViYmxlQ2hhcnQpIHtcbiAgICAgICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKGIgPT4ge1xuICAgICAgICAgICAgaWYgKGIuaWQgPT09IGJ1YmJsZUlkKSBidWJibGUgPSBiO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChidWJibGUpIHRoaXMub25CdWJibGVTZWxlY3RlZChidWJibGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKSB7XG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkQnViYmxlcy5pbmNsdWRlcyhidWJibGUpKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGggPCB0aGlzLm1heEJ1YmJsZXNTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCA9PSAwO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLnB1c2goYnViYmxlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZURlc2VsZWN0ZWQocGF5bG9hZCkge1xuICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuYnViYmxlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlcihcbiAgICAgICAgKGIpID0+IGIuaWQgIT09IHBheWxvYWQuYnViYmxlLmlkKTtcbiAgICAgIGlmIChwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb24pIHtcbiAgICAgICAgcGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlclJlcXVlc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QnViYmxlUGF5bG9hZChyZXNwb25zZSkge1xuICAgIGxldCBidWJibGVQYXlvbGFkID0ge1xuICAgICAgcmVzZXQ6IHRydWUsXG4gICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgIGZhY2V0RGF0YTogdGhpcy5mYWNldERhdGEsXG4gICAgICBzb3VyY2U6IHJlc3BvbnNlLFxuICAgICAgc2VsZWN0ZWRCdWJibGVzOiB0aGlzLnNlbGVjdGVkQnViYmxlc1xuICAgIH07XG4gICAgcmV0dXJuIGJ1YmJsZVBheW9sYWQ7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlclJlcXVlc3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcbiAgICBpZiAodGhpcy5lbnRpdHlCdWJibGVJZE1hcCkge1xuICAgICAgbGV0IGsgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpXG4gICAgICBsZXQgYWN0aXZlQnViYmxlcyA9IHtcbiAgICAgICAgcGxhY2VzOiBmYWxzZSxcbiAgICAgICAgcGVvcGxlOiBmYWxzZSxcbiAgICAgICAgY29uY2VwdHM6IGZhbHNlLFxuICAgICAgICBvcmdhbml6YXRpb25zOiBmYWxzZSxcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goKHNCKSA9PiB7XG4gICAgICAgIGxldCBjID0gc0IuY29sb3JcbiAgICAgICAgbGV0IGZpbmRUeXBlRnJvbUNvbG9yID0gKG9iaiwgY29sb3IpID0+IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5maW5kKGtleSA9PiBvYmpba2V5XS5jb2xvci5oZXggPT09IGNvbG9yKVxuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZUJ1YmJsZXNbZmluZFR5cGVGcm9tQ29sb3IoaywgYyldID0gdHJ1ZVxuICAgICAgICBsZXQgZW50aXR5SWQgPSB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW3NCLmlkXTtcbiAgICAgICAgaWYgKGVudGl0eUlkKVxuICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChlbnRpdHlJZCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9ja2VkRmFjZXRzID0gYWN0aXZlQnViYmxlc1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoe1xuICAgICAgICBmYWNldERhdGE6IHRoaXMuZmFjZXREYXRhLFxuICAgICAgICBsb2NrZWRGYWNldHM6IHRoaXMubG9ja2VkRmFjZXRzXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVCdWJibGVzKHJlc3BvbnNlLCBvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIW9ubHlCdWJibGVzKSB7XG4gICAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQnViYmxlRmlsdGVyKGRhdGEpIHtcbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBkYXRhLmFsbEJ1YmJsZXM7XG4gICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcCA9IGRhdGEuZW50aXR5SWRtYXA7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVGFncyhvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIW9ubHlCdWJibGVzKSB7XG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCkge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgKGJ1YmJsZSkgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmFjZXREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5LmlkID09PSB0aGlzLmZhY2V0RGF0YVtpXS50eXBlLmlkKVxuICAgICAgICAgICAgaWYgKCF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoQ2hhbmdlKGNoYW5nZSkge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBjaGFuZ2UuaW5wdXRQYXlsb2FkO1xuICAgIHZhciB2YWx1ZTogc3RyaW5nID0gY2hhbmdlLnZhbHVlO1xuICAgIC8vIHN0b3JlIHRoZSBlbnRlcmVkIHRleHQgaW4gZmFjZXRJbnB1dHNcbiAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XG4gIH1cblxuICBoYW5kbGVGYWNldFNlYXJjaEVudGVyKGVudGVyKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGVudGVyLmlucHV0UGF5bG9hZDtcbiAgICAvLyBnZXQgdGhlIHRleHQgZW50ZXJlZCBpbiB0aGlzIGlucHV0XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICB9XG5cbiAgaGFuZGxlRmFjZXRIZWFkZXJDbGljayhmYWNldElkKSB7XG4gICAgbGV0IHVwZGF0ZUJ1YmJsZXMgPSBmYWxzZTtcbiAgICBsZXQgZW5hYmxlZEZhY2V0cyA9IHRoaXMuZmFjZXREYXRhLmZpbHRlcihmID0+IGYuZW5hYmxlZCkubGVuZ3RoIC0gMTtcbiAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKGYgPT4ge1xuICAgICAgaWYgKGYudHlwZS5pZCA9PT0gZmFjZXRJZCAmJiBmLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBpZiB1c2VyIGNsaWNrZWQgb24gYSBsb2NrZWQgZmFjZXQsIGlnbm9yZSBpdFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChmLnR5cGUuaWQgPT09IGZhY2V0SWQpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgY2xpY2tlZCBmYWNldFxuICAgICAgICBpZiAoZi5lbmFibGVkICYmIGVuYWJsZWRGYWNldHMgPj0gMSkge1xuICAgICAgICAgIGYuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIGYubG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICBmLmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGlzIGlzIGFub3RoZXIgZmFjZXRcbiAgICAgICAgaWYgKGVuYWJsZWRGYWNldHMgPT09IDEgJiYgZi5lbmFibGVkKSB7XG4gICAgICAgICAgZi5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGYubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7XG4gICAgICBmYWNldERhdGE6IHRoaXMuZmFjZXREYXRhLFxuICAgICAgbG9ja2VkRmFjZXRzOiB0aGlzLmxvY2tlZEZhY2V0c1xuICAgIH0pO1xuICAgIGlmICh1cGRhdGVCdWJibGVzKSB7XG4gICAgICBsZXQgZGlzYWJsZUZhY2V0c0lkcyA9IFtdO1xuICAgICAgdGhpcy5mYWNldERhdGEuZm9yRWFjaCgoZkQpID0+IHtcbiAgICAgICAgaWYgKCFmRC5lbmFibGVkKSBkaXNhYmxlRmFjZXRzSWRzLnB1c2goZkQudHlwZS5pZCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChkaXNhYmxlRmFjZXRzSWRzKSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlcigoYnViYmxlKSA9PiB7XG4gICAgICAgICAgbGV0IHR5cGVPZkVudGl0eSA9IFwiXCI7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEJ1YmJsZXNbaV0uaWQgPT09IGJ1YmJsZS5pZCkge1xuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHkgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkaXNhYmxlRmFjZXRzSWRzLmluY2x1ZGVzKHR5cGVPZkVudGl0eSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcy5sZW5ndGggIT0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKChidWJibGUpID0+IHtcbiAgICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQgPT09IGJ1YmJsZS5pZCkgYnViYmxlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlKHRoaXMuZ2V0QnViYmxlUGF5bG9hZChudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVRhZ3MoKSB7XG4gICAgbGV0IHRhZ3NEYXRhID0gW107XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCgoc0J1YmJsZSkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hbGxCdWJibGVzW2ldLmlkID09PSBzQnViYmxlLmlkKSB7XG4gICAgICAgICAgbGFiZWwgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmxhYmVsO1xuICAgICAgICAgIHRhZ3NEYXRhLnB1c2goe1xuICAgICAgICAgICAgbGFiZWwsIGljb246IFwibjctaWNvbi1jbG9zZVwiLFxuICAgICAgICAgICAgcGF5bG9hZDogc0J1YmJsZS5pZCxcbiAgICAgICAgICAgIGNsYXNzZXM6IFwidGFnLVwiICsgdGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkuaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgfVxuXG4gIG9uVGFnQ2xpY2tlZChwYXlsb2FkKSB7XG4gICAgaWYgKCFwYXlsb2FkKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkO1xuICAgIGlmICh0aGlzLl9idWJibGVDaGFydCkge1xuICAgICAgdGhpcy5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaChiID0+IHtcbiAgICAgICAgaWYgKGIuaWQgPT09IGJ1YmJsZUlkKSBiLmhhc0Nsb3NlSWNvbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKChiKSA9PiBiLmlkICE9PSBwYXlsb2FkKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJSZXF1ZXN0KCk7XG4gIH1cblxuICBvbkhlcm9DaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2Nyb2xsQmFja2dyb3VuZENvbnRyb2woKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLFxuICAgICAgc291cmNlJCA9IGZyb21FdmVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLCAnc2Nyb2xsJyk7XG5cbiAgICAvLyBoZWlnaHQgY29udHJvbFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZChlbCk7XG4gICAgfSwgNTAwKTtcblxuICAgIC8vIHNjcm9sbCBsaXN0ZW5cbiAgICBzb3VyY2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTApXG4gICAgKS5zdWJzY3JpYmUoKHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBhbnkgfSkgPT4ge1xuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSkge1xuICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHNjcm9sbEhlaWdodCA+IChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpIH0pO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywge1xuICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpbnB1dDogdmFsdWUsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgICAgIGlmICghdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbikgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F3LWhvbWUtYWR2YW5jZWQtYXV0b2NvbXBsZXRlLXBvcG92ZXInKTtcbiAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyID0gdGhpcy50aXBweSgnLmF3LWhvbWVfX3RvcC1oZXJvIC5uNy1oZXJvX19pbnB1dCcsIHtcbiAgICAgICAgY29udGVudDogdGVtcGxhdGUsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICBhcHBlbmRUbzogJ3BhcmVudCcsXG4gICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyJyxcbiAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXN0YXJ0JyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb25IaWRkZW46ICgpID0+IHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSBmYWxzZSxcbiAgICAgIH0pWzBdO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3Blbikge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyLnNob3coKTtcbiAgICB9XG4gICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbiA9ICF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuO1xuICB9XG59Il19