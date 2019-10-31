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
        this.mainState.updateCustom('currentNav', 'aw/home');
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
        this.one('aw-linked-objects').updateOptions({
            context: 'home',
            config: this.configuration,
        });
        this.one('aw-linked-objects').update(response.itemsPagination);
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
                flip: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvbGF5b3V0cy9ob21lLWxheW91dC9ob21lLWxheW91dC5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBWSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RDtJQUFvQywwQ0FBZ0I7SUFBcEQ7UUFBQSxxRUEyYUM7UUF0YVMsZUFBUyxHQUFVLElBQUksQ0FBQztRQUN4QixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBVyxHQUFRLEVBQUUsQ0FBQzs7OztRQUl0QixnQkFBVSxHQUFVLElBQUksQ0FBQztRQUV6Qiw2QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMsMEJBQW9CLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7OztRQUd2RCxxQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixtQkFBYSxHQUFXLElBQUksQ0FBQzs7O1FBRzVCLGtCQUFZLEdBQVEsSUFBSSxDQUFDOztRQUV6QiwwQkFBb0IsR0FBVyxDQUFDLENBQUM7Ozs7OztRQU1qQyx1QkFBaUIsR0FBUSxFQUFFLENBQUM7OztRQUc1QixxQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGlCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLHdCQUFrQixHQUFRLElBQUksQ0FBQztRQUMvQix5QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUE0QnZCLHFCQUFlOzs7Ozs7UUFBRyxVQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUs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QUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDL0QsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNhRCxDQUFvQyxnQkFBZ0IsR0EyYW5EOzs7Ozs7O0lBMWFDLHVDQUEyQjs7Ozs7SUFDM0IsbUNBQXVCOzs7OztJQUN2QiwrQkFBbUI7Ozs7O0lBQ25CLHVDQUEyQjs7Ozs7SUFDM0IsbUNBQWdDOzs7OztJQUNoQyxzQ0FBMEI7Ozs7O0lBQzFCLHFDQUE4Qjs7Ozs7SUFJOUIsb0NBQWlDOzs7OztJQUNqQyw2Q0FBaUM7Ozs7O0lBQ2pDLGlEQUFpRDs7Ozs7SUFDakQsOENBQThEOztJQUc5RCx5Q0FBbUM7O0lBQ25DLHVDQUFvQzs7Ozs7SUFHcEMsc0NBQWlDOzs7OztJQUVqQyw4Q0FBeUM7Ozs7O0lBTXpDLDJDQUFvQzs7Ozs7SUFHcEMseUNBQXFDOzs7OztJQUNyQyxxQ0FBZ0M7O0lBQ2hDLDRDQUFzQzs7SUFDdEMsNkNBQTRDOztJQUM1Qyx3Q0FBOEI7O0lBQzlCLHdDQUE4Qjs7SUE0QjlCLHlDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2UsIGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIHByaXZhdGUgY29tbXVuaWNhdGlvbjogYW55O1xuICBwcml2YXRlIG1haW5TdGF0ZTogYW55O1xuICBwcml2YXRlIHRpcHB5OiBhbnk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvbjogYW55O1xuICBwcml2YXRlIGZhY2V0RGF0YTogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGxvY2tlZEZhY2V0cyA9IHt9O1xuICBwcml2YXRlIGZhY2V0SW5wdXRzOiBhbnkgPSB7fTtcbiAgLy8gYWxsIHRoZSBidWJibGVzIGFzIHRoZXkgaGF2ZSBiZWVuIGdpdmVuIGJ5IGFwb2xsb1xuICAvLyAodGhlIG9iamVjdHMgaW4gdGhlIGFsbEJ1YmJsZXMgYXJlIG5vdCB0aGUgc2FtZSBidWJibGUgb2JqZWN0c1xuICAvLyBwcmVzZW50IGluIHRoZSBidWJibGUgY2hhcnQpXG4gIHByaXZhdGUgYWxsQnViYmxlczogYW55W10gPSBudWxsO1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZVBvcG92ZXI6IGFueTtcbiAgcHJpdmF0ZSBhdXRvY29tcGxldGVQb3BvdmVyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGF1dG9jb21wbGV0ZUNoYW5nZWQkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICAvLyB0aGUgYnViYmxlcyBjdXJyZW50bHkgc2VsZWN0ZWQgKHRoaXMgYXJlIHNhdmVkIGZyb20gdGhlIGV2ZW50IGhhbmRsZXInc1xuICAvLyBhbmQgY29ycmVzcG9uZCBleGFjdGx5IHRvIHRoZSBidWJibGVjaGFydCdzIGJ1YmJsZSBvYmplY3RzKVxuICBwdWJsaWMgc2VsZWN0ZWRCdWJibGVzOiBhbnlbXSA9IFtdO1xuICBwdWJsaWMgbnVtT2ZJdGVtc1N0cjogc3RyaW5nID0gbnVsbDtcbiAgLy8gaW5zdGFuY2Ugb2YgdGhlIGJ1YmJsZSBjaGFydCAoZnJvbSB3aGljaCB5b3UgY2FuIGFjY2VzcyBhbGwgdGhlIHZhcmlvdXNcbiAgLy8gYnViYmxlIG9iamVjdHMpXG4gIHByaXZhdGUgX2J1YmJsZUNoYXJ0OiBhbnkgPSBudWxsO1xuICAvLyB0aGUgbWF4aW11bSBudW1iZXIgb2YgYnViYmxlcyB3aGljaCBjYW4gYmUgc2VsZWN0ZWQgYXQgdGhlIHNhbWUgdGltZVxuICBwcml2YXRlIG1heEJ1YmJsZXNTZWxlY3RhYmxlOiBudW1iZXIgPSAzO1xuICAvLyBlbnRpdGllcyBoYXZlIHRoZWlyIG93biB1bmlxdWUgaWQsIHRoZXNlIGlkcyBhcmUgZ2VuZXJpYyBhbmQgYXJlIHZlcnkgZmxleGlibGVcbiAgLy8gYnViYmxlcyAoYXMgdGhlIGJ1YmJsZSBjaGFydCdzIG9iamVjdHMpIGhhdmUgdW5pcXVlIGlkcyBidXQgZG8gbm90IGFsbG93IGNlcnRhaW5cbiAgLy8gY2hhcmFjdGVycywgc28gZWFjaCBidWJibGUgaGFzIGl0cyBvd24gaWQgZGlmZmVyZW50IGZyb20gdGhlIGlkIG9mIHRoZSBlbnRpdHkgd2hpY2hcbiAgLy8gdGhlIGJ1YmJsZSByZXByZXNlbnRzIChnaXZlbiBhbiBidWJibGUncyBpZCBjYWxsZWQgYnViYmxlSWQgeW91IGNhbiBvYnRhaW4gdGhlXG4gIC8vIHJlc3BlY3RpdmUgZW50aXR5J3MgaWQgd2l0aCBhczogZW50aXR5SWQgPSBlbnRpdHlCdWJibGVJZE1hcFtidWJibGVJZF0gKVxuICBwcml2YXRlIGVudGl0eUJ1YmJsZUlkTWFwOiBhbnkgPSB7fTtcbiAgLy8gd2lkaCBvZiB0aGUgd2luZG93IHdoaWNoIGlzIHVwZGF0ZWQgYXQgZWFjaCByZXNpemUgYW5kIGl0IGlzIHVzZWQgYnkgdGhlIGJ1YmJsZVxuICAvLyBjaGFydCB0byBjaGVjayBpZiB0aGUgd2lkdGggb2YgdGhlIHdpbmRvdyBoYXMgY2hhbmdlZCBkdXJpbmcgdGhlIGxhc3QgcmVzaXplXG4gIHByaXZhdGUgbGFzdFdpbmRvd1dpZHRoOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBidWJibGVQb3B1cDogYW55ID0gbnVsbDtcbiAgcHVibGljIGN1cnJlbnRIb3ZlckVudGl0eTogYW55ID0gbnVsbDtcbiAgcHVibGljIGhhc1Njcm9sbEJhY2tncm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGxvYWRpbmdCdWJibGVzID0gZmFsc2U7XG4gIHB1YmxpYyBidWJibGVzRW5hYmxlZCA9IGZhbHNlO1xuXG4gIG9uSW5pdCh7IGNvbW11bmljYXRpb24sIG1haW5TdGF0ZSwgY29uZmlndXJhdGlvbiwgdGlwcHkgfSkge1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IGNvbW11bmljYXRpb247XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB0aGlzLmZhY2V0RGF0YSA9IFtdO1xuICAgIHRoaXMubGFzdFdpbmRvd1dpZHRoID0gd2luZG93Lm91dGVyV2lkdGg7XG4gICAgdGhpcy5tYWluU3RhdGUgPSBtYWluU3RhdGU7XG4gICAgdGhpcy50aXBweSA9IHRpcHB5O1xuICAgIHRoaXMuYnViYmxlc0VuYWJsZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJykgPyB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdmZWF0dXJlcy1lbmFibGVkJylbJ2J1YmJsZWNoYXJ0J10gOiBmYWxzZTtcblxuICAgIHRoaXMub25lKCdhdy1oZXJvJykudXBkYXRlKHRoaXMuY29uZmlndXJhdGlvbi5nZXQoJ2hvbWUtbGF5b3V0JylbJ3RvcC1oZXJvJ10pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWhlcm8tcGF0cmltb25pbycpLnVwZGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdob21lLWxheW91dCcpWydib3R0b20taGVybyddKTtcbiAgICAvLyB1cGRhdGUgc3RyZWFtc1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgnaGVhZFRpdGxlJywgJ0FyaWFubmEgV2ViID4gSG9tZScpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZSgncGFnZVRpdGxlJywgJ0FyaWFubmEgV2ViOiBIb21lIExheW91dCcpO1xuICAgIHRoaXMubWFpblN0YXRlLnVwZGF0ZUN1c3RvbSgnY3VycmVudE5hdicsICdhdy9ob21lJyk7XG4gICAgLy8gbGlzdGVuIGF1dG9jb21wbGV0ZSBjaGFuZ2VzXG4gICAgdGhpcy5fbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIG1ha2VSZXF1ZXN0JChxdWVyeSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JChxdWVyeSwge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtc1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbXBvbmVudCA9IChpZCwgZGF0YSwgb3B0aW9ucykgPT4ge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLm9uZShpZCkudXBkYXRlT3B0aW9ucyhvcHRpb25zKVxuICAgIH1cbiAgICB0aGlzLm9uZShpZCkudXBkYXRlKGRhdGEpXG4gIH1cblxuICBpbml0aWFsRmlsdGVyUmVxdWVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdnbG9iYWxGaWx0ZXInLCB7XG4gICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLFxuICAgIH0pXG4gIH1cblxuICBwYXJzZUluaXRpYWxSZXF1ZXN0KHJlc3BvbnNlKSB7XG4gICAgcmVzcG9uc2UuZW50aXRpZXNEYXRhLmZvckVhY2goKGVudCkgPT4ge1xuICAgICAgY29uc3QgdGVvQ29uZmlnRGF0YSA9IHRoaXMuY29uZmlndXJhdGlvbi5nZXQoXCJjb25maWcta2V5c1wiKVtlbnQuY291bnREYXRhLnR5cGUuY29uZmlnS2V5XTtcbiAgICAgIGlmICh0ZW9Db25maWdEYXRhKVxuICAgICAgICB0aGlzLmZhY2V0RGF0YS5wdXNoKHtcbiAgICAgICAgICAuLi5lbnQuY291bnREYXRhLFxuICAgICAgICAgIC4uLnRlb0NvbmZpZ0RhdGEsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoe1xuICAgICAgZmFjZXREYXRhOiB0aGlzLmZhY2V0RGF0YSxcbiAgICAgIGxvY2tlZEZhY2V0czogdGhpcy5sb2NrZWRGYWNldHNcbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlT3B0aW9ucyh7XG4gICAgICBjb250ZXh0OiAnaG9tZScsXG4gICAgICBjb25maWdLZXlzOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KFwiY29uZmlnLWtleXNcIiksXG4gICAgICBidWJibGVDb250YWluZXJJZDogJ2J1YmJsZUNoYXJ0Q29udGFpbmVyJyxcbiAgICAgIGNvbnRhaW5lcklkOiAnYnViYmxlLWNoYXJ0LWNvbnRhaW5lcicsXG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZSk7XG4gIH1cblxuICByZW5kZXJQcmV2aWV3c0Zyb21BcG9sbG9RdWVyeShyZXNwb25zZTogYW55KSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9O1xuICAgIGxldCBudW1PZkl0ZW1zID0gcmVzcG9uc2UuaXRlbXNQYWdpbmF0aW9uLnRvdGFsQ291bnQ7XG4gICAgaWYgKG51bU9mSXRlbXMgPiAwKSB7XG4gICAgICBsZXQgbnVtT2ZUaG91c2FuZCA9IDA7XG4gICAgICB3aGlsZSAobnVtT2ZJdGVtcyA+IDk5OSkge1xuICAgICAgICBudW1PZkl0ZW1zIC09IDEwMDA7XG4gICAgICAgIG51bU9mVGhvdXNhbmQgKz0gMTtcbiAgICAgIH1cbiAgICAgIGxldCBudW1PZkl0ZW1zVG1wU3RyID0gbnVtT2ZJdGVtcyArICcnO1xuICAgICAgaWYgKG51bU9mSXRlbXMgPCAxMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwMCcgKyBudW1PZkl0ZW1zO1xuICAgICAgZWxzZSBpZiAobnVtT2ZJdGVtcyA8IDEwMCkgbnVtT2ZJdGVtc1RtcFN0ciA9ICcwJyArIG51bU9mSXRlbXM7XG4gICAgICBpZiAobnVtT2ZUaG91c2FuZCA+IDApXG4gICAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bU9mVGhvdXNhbmQgKyAnLicgKyBudW1PZkl0ZW1zVG1wU3RyO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLm51bU9mSXRlbXNTdHIgPSBudW1PZkl0ZW1zICsgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnVtT2ZJdGVtc1N0ciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMub25lKCdhdy1saW5rZWQtb2JqZWN0cycpLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgY29udGV4dDogJ2hvbWUnLFxuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAvLyBwYWdlOiAxLFxuICAgIH0pXG4gICAgdGhpcy5vbmUoJ2F3LWxpbmtlZC1vYmplY3RzJykudXBkYXRlKHJlc3BvbnNlLml0ZW1zUGFnaW5hdGlvbik7XG4gIH1cblxuICBvbkJ1YmJsZVRvb2x0aXBDbGljayhzb3VyY2U6IHN0cmluZywgcGF5bG9hZCkge1xuICAgIHN3aXRjaCAoc291cmNlKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICBpZiAoIXBheWxvYWQpIHJldHVybjtcbiAgICAgICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkLmJ1YmJsZUlkO1xuICAgICAgICBpZiAoIWJ1YmJsZUlkKSByZXR1cm47XG4gICAgICAgIGxldCBidWJibGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fYnViYmxlQ2hhcnQpIHtcbiAgICAgICAgICB0aGlzLl9idWJibGVDaGFydC5zZWxlY3RBbGwoYGdgKS5lYWNoKGIgPT4ge1xuICAgICAgICAgICAgaWYgKGIuaWQgPT09IGJ1YmJsZUlkKSBidWJibGUgPSBiO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChidWJibGUpIHRoaXMub25CdWJibGVTZWxlY3RlZChidWJibGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQnViYmxlU2VsZWN0ZWQoYnViYmxlKSB7XG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkQnViYmxlcy5pbmNsdWRlcyhidWJibGUpKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQnViYmxlcy5sZW5ndGggPCB0aGlzLm1heEJ1YmJsZXNTZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmxlbmd0aCA9PSAwO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLnB1c2goYnViYmxlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBvbkJ1YmJsZURlc2VsZWN0ZWQocGF5bG9hZCkge1xuICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuYnViYmxlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlcihcbiAgICAgICAgKGIpID0+IGIuaWQgIT09IHBheWxvYWQuYnViYmxlLmlkKTtcbiAgICAgIGlmIChwYXlsb2FkLmJ1YmJsZS5oYXNDbG9zZUljb24pIHtcbiAgICAgICAgcGF5bG9hZC5idWJibGUuaGFzQ2xvc2VJY29uID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlclJlcXVlc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QnViYmxlUGF5bG9hZChyZXNwb25zZSkge1xuICAgIGxldCBidWJibGVQYXlvbGFkID0ge1xuICAgICAgcmVzZXQ6IHRydWUsXG4gICAgICBzZXRCdWJibGVDaGFydDogKGJ1YmJsZUNyZWYpID0+IHRoaXMuX2J1YmJsZUNoYXJ0ID0gYnViYmxlQ3JlZixcbiAgICAgIGZhY2V0RGF0YTogdGhpcy5mYWNldERhdGEsXG4gICAgICBzb3VyY2U6IHJlc3BvbnNlLFxuICAgICAgc2VsZWN0ZWRCdWJibGVzOiB0aGlzLnNlbGVjdGVkQnViYmxlc1xuICAgIH07XG4gICAgcmV0dXJuIGJ1YmJsZVBheW9sYWQ7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlclJlcXVlc3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkRW50aXRpZXNJZHMgPSBbXTtcbiAgICBpZiAodGhpcy5lbnRpdHlCdWJibGVJZE1hcCkge1xuICAgICAgbGV0IGsgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpXG4gICAgICBsZXQgYWN0aXZlQnViYmxlcyA9IHtcbiAgICAgICAgcGxhY2VzOiBmYWxzZSxcbiAgICAgICAgcGVvcGxlOiBmYWxzZSxcbiAgICAgICAgY29uY2VwdHM6IGZhbHNlLFxuICAgICAgICBvcmdhbml6YXRpb25zOiBmYWxzZSxcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZvckVhY2goKHNCKSA9PiB7XG4gICAgICAgIGxldCBjID0gc0IuY29sb3JcbiAgICAgICAgbGV0IGZpbmRUeXBlRnJvbUNvbG9yID0gKG9iaiwgY29sb3IpID0+IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5maW5kKGtleSA9PiBvYmpba2V5XS5jb2xvci5oZXggPT09IGNvbG9yKVxuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZUJ1YmJsZXNbZmluZFR5cGVGcm9tQ29sb3IoaywgYyldID0gdHJ1ZVxuICAgICAgICBsZXQgZW50aXR5SWQgPSB0aGlzLmVudGl0eUJ1YmJsZUlkTWFwW3NCLmlkXTtcbiAgICAgICAgaWYgKGVudGl0eUlkKVxuICAgICAgICAgIHNlbGVjdGVkRW50aXRpZXNJZHMucHVzaChlbnRpdHlJZCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9ja2VkRmFjZXRzID0gYWN0aXZlQnViYmxlc1xuICAgICAgdGhpcy5vbmUoJ2F3LWhvbWUtZmFjZXRzLXdyYXBwZXInKS51cGRhdGUoe1xuICAgICAgICBmYWNldERhdGE6IHRoaXMuZmFjZXREYXRhLFxuICAgICAgICBsb2NrZWRGYWNldHM6IHRoaXMubG9ja2VkRmFjZXRzXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnZ2xvYmFsRmlsdGVyJywge1xuICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzZWxlY3RlZEVudGl0aWVzSWRzLFxuICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVCdWJibGVzKHJlc3BvbnNlLCBvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIW9ubHlCdWJibGVzKSB7XG4gICAgICB0aGlzLnJlbmRlclByZXZpZXdzRnJvbUFwb2xsb1F1ZXJ5KHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlQnViYmxlRmlsdGVyKGRhdGEpIHtcbiAgICB0aGlzLmFsbEJ1YmJsZXMgPSBkYXRhLmFsbEJ1YmJsZXM7XG4gICAgdGhpcy5lbnRpdHlCdWJibGVJZE1hcCA9IGRhdGEuZW50aXR5SWRtYXA7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVGFncyhvbmx5QnViYmxlcz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIW9ubHlCdWJibGVzKSB7XG4gICAgICB0aGlzLnJlbmRlckl0ZW1UYWdzKCk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyQnViYmxlc0Jhc2VkT25GYWNldHNFbmFibGVkKCkge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmFsbEJ1YmJsZXMuZmlsdGVyKFxuICAgICAgKGJ1YmJsZSkgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmFjZXREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGJ1YmJsZS5lbnRpdHkudHlwZU9mRW50aXR5LmlkID09PSB0aGlzLmZhY2V0RGF0YVtpXS50eXBlLmlkKVxuICAgICAgICAgICAgaWYgKCF0aGlzLmZhY2V0RGF0YVtpXS5lbmFibGVkKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGhhbmRsZUZhY2V0U2VhcmNoQ2hhbmdlKGNoYW5nZSkge1xuICAgIHZhciBwYXlsb2FkOiBzdHJpbmcgPSBjaGFuZ2UuaW5wdXRQYXlsb2FkO1xuICAgIHZhciB2YWx1ZTogc3RyaW5nID0gY2hhbmdlLnZhbHVlO1xuICAgIC8vIHN0b3JlIHRoZSBlbnRlcmVkIHRleHQgaW4gZmFjZXRJbnB1dHNcbiAgICB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdID0gdmFsdWU7XG4gIH1cblxuICBoYW5kbGVGYWNldFNlYXJjaEVudGVyKGVudGVyKSB7XG4gICAgdmFyIHBheWxvYWQ6IHN0cmluZyA9IGVudGVyLmlucHV0UGF5bG9hZDtcbiAgICAvLyBnZXQgdGhlIHRleHQgZW50ZXJlZCBpbiB0aGlzIGlucHV0XG4gICAgdmFyIHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZhY2V0SW5wdXRzW3BheWxvYWRdO1xuICB9XG5cbiAgaGFuZGxlRmFjZXRIZWFkZXJDbGljayhmYWNldElkKSB7XG4gICAgbGV0IHVwZGF0ZUJ1YmJsZXMgPSBmYWxzZTtcbiAgICBsZXQgZW5hYmxlZEZhY2V0cyA9IHRoaXMuZmFjZXREYXRhLmZpbHRlcihmID0+IGYuZW5hYmxlZCkubGVuZ3RoIC0gMTtcbiAgICB0aGlzLmZhY2V0RGF0YS5mb3JFYWNoKGYgPT4ge1xuICAgICAgaWYgKGYudHlwZS5pZCA9PT0gZmFjZXRJZCAmJiBmLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBpZiB1c2VyIGNsaWNrZWQgb24gYSBsb2NrZWQgZmFjZXQsIGlnbm9yZSBpdFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChmLnR5cGUuaWQgPT09IGZhY2V0SWQpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgY2xpY2tlZCBmYWNldFxuICAgICAgICBpZiAoZi5lbmFibGVkICYmIGVuYWJsZWRGYWNldHMgPj0gMSkge1xuICAgICAgICAgIGYuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgIGYubG9ja2VkID0gZmFsc2U7XG4gICAgICAgICAgdXBkYXRlQnViYmxlcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICBmLmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIHVwZGF0ZUJ1YmJsZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiB0aGlzIGlzIGFub3RoZXIgZmFjZXRcbiAgICAgICAgaWYgKGVuYWJsZWRGYWNldHMgPT09IDEgJiYgZi5lbmFibGVkKSB7XG4gICAgICAgICAgZi5sb2NrZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGYubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1mYWNldHMtd3JhcHBlcicpLnVwZGF0ZSh7XG4gICAgICBmYWNldERhdGE6IHRoaXMuZmFjZXREYXRhLFxuICAgICAgbG9ja2VkRmFjZXRzOiB0aGlzLmxvY2tlZEZhY2V0c1xuICAgIH0pO1xuICAgIGlmICh1cGRhdGVCdWJibGVzKSB7XG4gICAgICBsZXQgZGlzYWJsZUZhY2V0c0lkcyA9IFtdO1xuICAgICAgdGhpcy5mYWNldERhdGEuZm9yRWFjaCgoZkQpID0+IHtcbiAgICAgICAgaWYgKCFmRC5lbmFibGVkKSBkaXNhYmxlRmFjZXRzSWRzLnB1c2goZkQudHlwZS5pZCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChkaXNhYmxlRmFjZXRzSWRzKSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcyA9IHRoaXMuc2VsZWN0ZWRCdWJibGVzLmZpbHRlcigoYnViYmxlKSA9PiB7XG4gICAgICAgICAgbGV0IHR5cGVPZkVudGl0eSA9IFwiXCI7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFsbEJ1YmJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEJ1YmJsZXNbaV0uaWQgPT09IGJ1YmJsZS5pZCkge1xuICAgICAgICAgICAgICB0eXBlT2ZFbnRpdHkgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LnR5cGVPZkVudGl0eS5pZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChkaXNhYmxlRmFjZXRzSWRzLmluY2x1ZGVzKHR5cGVPZkVudGl0eSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcy5sZW5ndGggIT0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMgPSBmaWx0ZXJlZFNlbGVjdGVkQnViYmxlcztcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWxsQnViYmxlcy5mb3JFYWNoKChidWJibGUpID0+IHtcbiAgICAgICAgYnViYmxlLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEJ1YmJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEJ1YmJsZXNbaV0uaWQgPT09IGJ1YmJsZS5pZCkgYnViYmxlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9uZSgnYXctYnViYmxlLWNoYXJ0JykudXBkYXRlKHRoaXMuZ2V0QnViYmxlUGF5bG9hZChudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySXRlbVRhZ3MoKSB7XG4gICAgbGV0IHRhZ3NEYXRhID0gW107XG4gICAgdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZm9yRWFjaCgoc0J1YmJsZSkgPT4ge1xuICAgICAgbGV0IGxhYmVsID0gJyc7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsQnViYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5hbGxCdWJibGVzW2ldLmlkID09PSBzQnViYmxlLmlkKSB7XG4gICAgICAgICAgbGFiZWwgPSB0aGlzLmFsbEJ1YmJsZXNbaV0uZW50aXR5LmxhYmVsO1xuICAgICAgICAgIHRhZ3NEYXRhLnB1c2goe1xuICAgICAgICAgICAgbGFiZWwsIGljb246IFwibjctaWNvbi1jbG9zZVwiLFxuICAgICAgICAgICAgcGF5bG9hZDogc0J1YmJsZS5pZCxcbiAgICAgICAgICAgIGNsYXNzZXM6IFwidGFnLVwiICsgdGhpcy5hbGxCdWJibGVzW2ldLmVudGl0eS50eXBlT2ZFbnRpdHkuaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdhdy1ob21lLWl0ZW0tdGFncy13cmFwcGVyJykudXBkYXRlKHRhZ3NEYXRhKTtcbiAgfVxuXG4gIG9uVGFnQ2xpY2tlZChwYXlsb2FkKSB7XG4gICAgaWYgKCFwYXlsb2FkKSByZXR1cm47XG4gICAgY29uc3QgYnViYmxlSWQgPSBwYXlsb2FkO1xuICAgIGlmICh0aGlzLl9idWJibGVDaGFydCkge1xuICAgICAgdGhpcy5fYnViYmxlQ2hhcnQuc2VsZWN0QWxsKGBnYCkuZWFjaChiID0+IHtcbiAgICAgICAgaWYgKGIuaWQgPT09IGJ1YmJsZUlkKSBiLmhhc0Nsb3NlSWNvbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRCdWJibGVzID0gdGhpcy5zZWxlY3RlZEJ1YmJsZXMuZmlsdGVyKChiKSA9PiBiLmlkICE9PSBwYXlsb2FkKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJSZXF1ZXN0KCk7XG4gIH1cblxuICBvbkhlcm9DaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUNoYW5nZWQkLm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2Nyb2xsQmFja2dyb3VuZENvbnRyb2woKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLFxuICAgICAgc291cmNlJCA9IGZyb21FdmVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlLXJlc3VsdHMtbGlzdCcpLCAnc2Nyb2xsJyk7XG5cbiAgICAvLyBoZWlnaHQgY29udHJvbFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZChlbCk7XG4gICAgfSwgNTAwKTtcblxuICAgIC8vIHNjcm9sbCBsaXN0ZW5cbiAgICBzb3VyY2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoNTApXG4gICAgKS5zdWJzY3JpYmUoKHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBhbnkgfSkgPT4ge1xuICAgICAgdGhpcy5fc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh0YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SGFzU2Nyb2xsQmFja2dyb3VuZCh7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSkge1xuICAgIHRoaXMuaGFzU2Nyb2xsQmFja2dyb3VuZCA9IHNjcm9sbEhlaWdodCA+IChzY3JvbGxUb3AgKyBjbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuQXV0b0NvbXBsZXRlQ2hhbmdlcygpIHtcbiAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGVPcHRpb25zKHsgY29uZmlnOiB0aGlzLmNvbmZpZ3VyYXRpb24uZ2V0KCdjb25maWcta2V5cycpIH0pO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hhbmdlZCQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSg1MDApXG4gICAgKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tbXVuaWNhdGlvbi5yZXF1ZXN0JCgnYXV0b0NvbXBsZXRlJywge1xuICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBpbnB1dDogdmFsdWUsXG4gICAgICAgICAgICBpdGVtc1BhZ2luYXRpb246IHsgb2Zmc2V0OiAwLCBsaW1pdDogdGhpcy5jb25maWd1cmF0aW9uLmdldCgnaG9tZS1sYXlvdXQnKVsncmVzdWx0cy1saW1pdCddIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLm9uZSgnYXctaG9tZS1hdXRvY29tcGxldGUnKS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgICAgIGlmICghdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbikgdGhpcy5fdG9nZ2xlQXV0b2NvbXBsZXRlUG9wb3ZlcigpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUF1dG9jb21wbGV0ZVBvcG92ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXIpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F3LWhvbWUtYWR2YW5jZWQtYXV0b2NvbXBsZXRlLXBvcG92ZXInKTtcbiAgICAgIHRlbXBsYXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyID0gdGhpcy50aXBweSgnLmF3LWhvbWVfX3RvcC1oZXJvIC5uNy1oZXJvX19pbnB1dCcsIHtcbiAgICAgICAgY29udGVudDogdGVtcGxhdGUsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3c6IGZhbHNlLFxuICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgYXBwZW5kVG86ICdwYXJlbnQnLFxuICAgICAgICB0aGVtZTogJ2xpZ2h0LWJvcmRlcicsXG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG9uSGlkZGVuOiAoKSA9PiB0aGlzLmF1dG9jb21wbGV0ZVBvcG92ZXJPcGVuID0gZmFsc2UsXG4gICAgICB9KVswXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4pIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlci5zaG93KCk7XG4gICAgfVxuICAgIHRoaXMuYXV0b2NvbXBsZXRlUG9wb3Zlck9wZW4gPSAhdGhpcy5hdXRvY29tcGxldGVQb3BvdmVyT3BlbjtcbiAgfVxufSJdfQ==