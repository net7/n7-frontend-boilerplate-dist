import { __extends } from "tslib";
import { DataSource } from '@n7-frontend/core';
import tippy from 'tippy.js';
var AwHomeFacetsWrapperDS = /** @class */ (function (_super) {
    __extends(AwHomeFacetsWrapperDS, _super);
    function AwHomeFacetsWrapperDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoComplete = {}; // autocomplete data for each facet
        _this.lockedFacets = {}; // locked means that the eye cannot be closed
        // store the last response so the component can be rendered again with the same data
        _this.lastData = {};
        _this.closedEyes = []; // list of closed eyes
        _this.openTippy = ''; // tipe of entity of the currently open tippy
        _this.tippyMaker = function (id) {
            /*
              Builds or updates Tippy for the input in use (id)
            */
            var newId = id.replace(/ /g, '-');
            // create data for this facet
            if (!_this.autoComplete[newId]) {
                _this.autoComplete[newId] = {
                    tippy: undefined,
                    open: true,
                };
                var ac_1 = _this.autoComplete[newId];
                var getContent = function () {
                    var contentNode = document.getElementsByClassName('aw-simple-autocomplete__template')[0];
                    contentNode.setAttribute('style', 'display: block');
                    return contentNode;
                };
                if (!ac_1.tippy) {
                    // target the correct this.autoComplete[id] input class
                    var target = document.getElementsByClassName(newId)[1];
                    ac_1.tippy = tippy(target, {
                        content: getContent(),
                        trigger: 'manual',
                        interactive: true,
                        arrow: false,
                        flip: false,
                        appendTo: 'parent',
                        theme: 'light-border aw-home__facet-tippy',
                        placement: 'bottom-start',
                        maxWidth: '100%',
                    }); // attach tippy to input type text
                }
            }
            var ac = _this.autoComplete[newId];
            if (ac.tippy) {
                ac.tippy.show();
            }
        };
        _this.tippyClose = function (id) {
            var newId = id.replace(/ /g, '-');
            if (_this.autoComplete[newId]) {
                var ac = _this.autoComplete[newId];
                if (ac.tippy) {
                    ac.tippy.hide();
                }
            }
        };
        return _this;
    }
    AwHomeFacetsWrapperDS.prototype.transform = function (data) {
        var _this = this;
        this.lastData = data;
        var headers = [];
        var inputs = [];
        var facetData = data;
        var lockedFacets = this.lockedFacets; // locked means that the eye cannot be closed
        var closedEyes = this.closedEyes; // list of closed eyes
        // when facet data changes, destroy every tippy and reset autocomplete data.
        Object.keys(this.autoComplete).forEach(function (id) {
            if (_this.autoComplete[id] && _this.autoComplete[id].tippy) {
                _this.autoComplete[id].tippy.destroy(); // destroy
            }
        });
        this.autoComplete = {}; // reset data
        facetData.forEach(function (facet, j) {
            /*
             For each facet on back-end, push a header-component
             and a facet-component (search input only) to each array.
             ---//---
             # LOGIC:
             Each facet can be "locked" or "enabled".
             if a facet is locked, it means that it cannot be enabled or disabled.
             if a facet is enabled or disabled it means that the filter is active or inactive.
      
             there are 2 ways that a facet can be "locked"
               1. When a bubble of the same type is selected in the chart
               2. When that facet is the only enabled facet
      
             The first case is managed by pushing the selected bubble's ID to the corresponding array
             of lockedFacets.
             The second case is managed by pushing a "LOCK_LAST" string
             to the lockedFacets array of the last
             enabled facet.
            */
            Object.keys(lockedFacets).forEach(function (key) {
                // clear all locked facets arrays from "LOCK_LAST" values (reset all locks)
                var index = lockedFacets[key].indexOf('LOCK_LAST');
                if (index >= 0) {
                    lockedFacets[key].splice(index, 1);
                }
            });
            if (closedEyes) {
                if (closedEyes.length === facetData.length - 1) {
                    var lastFacet = facetData.find(function (f) { return !closedEyes.includes(f.type.replace(/ /g, '-')); });
                    if (lastFacet) {
                        if (closedEyes[lastFacet.type]) {
                            lockedFacets[lastFacet.type].push('LOCK_LAST');
                        }
                        else {
                            lockedFacets[lastFacet.type] = ['LOCK_LAST'];
                        }
                    }
                }
                if (closedEyes.includes(facet.type.replace(/ /g, '-'))) { // check if the eyes are open
                    facet.enabled = false;
                }
                else {
                    facet.enabled = true;
                }
            }
            if (Object.keys(lockedFacets).length) { // check if bubble chart wants to lock this facet
                if (lockedFacets[facet.type] && lockedFacets[facet.type].length > 0) {
                    // if bubble chart say lock this facet, lock it
                    facet.locked = true;
                }
                else {
                    facet.locked = false;
                }
            }
            else {
                facet.locked = false;
            }
            var headerClasses = [];
            var iconClasses = [facet.icon];
            if (!facet.enabled) {
                headerClasses.push('is-disabled');
            }
            if (facet['class-name']) {
                headerClasses.push("color-" + facet['class-name']);
                iconClasses.push("color-" + facet['class-name']);
            }
            // make array of headers data
            headers.push({
                iconLeft: iconClasses.join(' '),
                text: facet.label,
                additionalText: facet.count,
                iconRight: facet.enabled ? 'n7-icon-eye' : 'n7-icon-eye-slash',
                classes: headerClasses.join(' ')
                    + (facet.locked
                        ? ' is-blocked'
                        : ' not-blocked'),
                payload: facet.locked === true ? null : facet.type.replace(/ /g, '-'),
            });
            // make array of inputs data
            inputs.push({
                sections: [
                    {
                        inputs: [
                            {
                                id: facet.type.replace(/ /g, '-') + "-" + j,
                                type: 'text',
                                placeholder: facet['input-placeholder'],
                                icon: 'n7-icon-search',
                                disabled: !facet.enabled,
                                inputPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                iconPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                enterPayload: String(facet.type.replace(/ /g, '-')) + "-search",
                                classes: String(facet.type.replace(' ', '-')) + "-search",
                            },
                        ],
                    },
                ],
            });
        });
        // zipping arrays to render widgets with separate data (see home-layout.html)
        return headers.map(function (h, i) { return ({ header: h, input: inputs[i] }); });
    };
    return AwHomeFacetsWrapperDS;
}(DataSource));
export { AwHomeFacetsWrapperDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1mYWNldHMtd3JhcHBlci5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaG9tZS1mYWNldHMtd3JhcHBlci5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUU3QjtJQUEyQyx5Q0FBVTtJQUFyRDtRQUFBLHFFQW1MQztRQWxMUyxrQkFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQztRQUV2RCxrQkFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDZDQUE2QztRQUV2RSxvRkFBb0Y7UUFDN0UsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLGdCQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsc0JBQXNCO1FBRXZDLGVBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyw2Q0FBNkM7UUFzSDdELGdCQUFVLEdBQUcsVUFBQyxFQUFFO1lBQ3JCOztjQUVFO1lBQ0YsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDcEMsNkJBQTZCO1lBQzdCLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM3QixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHO29CQUN6QixLQUFLLEVBQUUsU0FBUztvQkFDaEIsSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQztnQkFDRixJQUFNLElBQUUsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxJQUFNLFVBQVUsR0FBRztvQkFDakIsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUNqRCxrQ0FBa0MsQ0FDbkMsQ0FBQyxDQUFD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LENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQXFESCw0QkFBQztBQUFELENBQUMsQUFuTEQsQ0FBMkMsVUFBVSxHQW1McEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnQG43LWZyb250ZW5kL2NvcmUnO1xyXG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF3SG9tZUZhY2V0c1dyYXBwZXJEUyBleHRlbmRzIERhdGFTb3VyY2Uge1xyXG4gIHByaXZhdGUgYXV0b0NvbXBsZXRlID0ge307IC8vIGF1dG9jb21wbGV0ZSBkYXRhIGZvciBlYWNoIGZhY2V0XHJcblxyXG4gIHB1YmxpYyBsb2NrZWRGYWNldHMgPSB7fTsgLy8gbG9ja2VkIG1lYW5zIHRoYXQgdGhlIGV5ZSBjYW5ub3QgYmUgY2xvc2VkXHJcblxyXG4gIC8vIHN0b3JlIHRoZSBsYXN0IHJlc3BvbnNlIHNvIHRoZSBjb21wb25lbnQgY2FuIGJlIHJlbmRlcmVkIGFnYWluIHdpdGggdGhlIHNhbWUgZGF0YVxyXG4gIHB1YmxpYyBsYXN0RGF0YSA9IHt9O1xyXG5cclxuICBwdWJsaWMgY2xvc2VkRXllcyA9IFtdOyAvLyBsaXN0IG9mIGNsb3NlZCBleWVzXHJcblxyXG4gIHB1YmxpYyBvcGVuVGlwcHkgPSAnJzsgLy8gdGlwZSBvZiBlbnRpdHkgb2YgdGhlIGN1cnJlbnRseSBvcGVuIHRpcHB5XHJcblxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm0oZGF0YSkge1xyXG4gICAgdGhpcy5sYXN0RGF0YSA9IGRhdGE7XHJcbiAgICBjb25zdCBoZWFkZXJzOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgaW5wdXRzOiBhbnlbXSA9IFtdO1xyXG4gICAgY29uc3QgZmFjZXREYXRhID0gZGF0YTtcclxuICAgIGNvbnN0IHsgbG9ja2VkRmFjZXRzIH0gPSB0aGlzOyAvLyBsb2NrZWQgbWVhbnMgdGhhdCB0aGUgZXllIGNhbm5vdCBiZSBjbG9zZWRcclxuICAgIGNvbnN0IHsgY2xvc2VkRXllcyB9ID0gdGhpczsgLy8gbGlzdCBvZiBjbG9zZWQgZXllc1xyXG5cclxuICAgIC8vIHdoZW4gZmFjZXQgZGF0YSBjaGFuZ2VzLCBkZXN0cm95IGV2ZXJ5IHRpcHB5IGFuZCByZXNldCBhdXRvY29tcGxldGUgZGF0YS5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXV0b0NvbXBsZXRlKS5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5hdXRvQ29tcGxldGVbaWRdICYmIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweSkge1xyXG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlW2lkXS50aXBweS5kZXN0cm95KCk7IC8vIGRlc3Ryb3lcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmF1dG9Db21wbGV0ZSA9IHt9OyAvLyByZXNldCBkYXRhXHJcblxyXG4gICAgZmFjZXREYXRhLmZvckVhY2goKGZhY2V0LCBqKSA9PiB7XHJcbiAgICAgIC8qXHJcbiAgICAgICBGb3IgZWFjaCBmYWNldCBvbiBiYWNrLWVuZCwgcHVzaCBhIGhlYWRlci1jb21wb25lbnRcclxuICAgICAgIGFuZCBhIGZhY2V0LWNvbXBvbmVudCAoc2VhcmNoIGlucHV0IG9ubHkpIHRvIGVhY2ggYXJyYXkuXHJcbiAgICAgICAtLS0vLy0tLVxyXG4gICAgICAgIyBMT0dJQzpcclxuICAgICAgIEVhY2ggZmFjZXQgY2FuIGJlIFwibG9ja2VkXCIgb3IgXCJlbmFibGVkXCIuXHJcbiAgICAgICBpZiBhIGZhY2V0IGlzIGxvY2tlZCwgaXQgbWVhbnMgdGhhdCBpdCBjYW5ub3QgYmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cclxuICAgICAgIGlmIGEgZmFjZXQgaXMgZW5hYmxlZCBvciBkaXNhYmxlZCBpdCBtZWFucyB0aGF0IHRoZSBmaWx0ZXIgaXMgYWN0aXZlIG9yIGluYWN0aXZlLlxyXG5cclxuICAgICAgIHRoZXJlIGFyZSAyIHdheXMgdGhhdCBhIGZhY2V0IGNhbiBiZSBcImxvY2tlZFwiXHJcbiAgICAgICAgIDEuIFdoZW4gYSBidWJibGUgb2YgdGhlIHNhbWUgdHlwZSBpcyBzZWxlY3RlZCBpbiB0aGUgY2hhcnRcclxuICAgICAgICAgMi4gV2hlbiB0aGF0IGZhY2V0IGlzIHRoZSBvbmx5IGVuYWJsZWQgZmFjZXRcclxuXHJcbiAgICAgICBUaGUgZmlyc3QgY2FzZSBpcyBtYW5hZ2VkIGJ5IHB1c2hpbmcgdGhlIHNlbGVjdGVkIGJ1YmJsZSdzIElEIHRvIHRoZSBjb3JyZXNwb25kaW5nIGFycmF5XHJcbiAgICAgICBvZiBsb2NrZWRGYWNldHMuXHJcbiAgICAgICBUaGUgc2Vjb25kIGNhc2UgaXMgbWFuYWdlZCBieSBwdXNoaW5nIGEgXCJMT0NLX0xBU1RcIiBzdHJpbmdcclxuICAgICAgIHRvIHRoZSBsb2NrZWRGYWNldHMgYXJyYXkgb2YgdGhlIGxhc3RcclxuICAgICAgIGVuYWJsZWQgZmFjZXQuXHJcbiAgICAgICovXHJcbiAgICAgIE9iamVjdC5rZXlzKGxvY2tlZEZhY2V0cykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGxvY2tlZCBmYWNldHMgYXJyYXlzIGZyb20gXCJMT0NLX0xBU1RcIiB2YWx1ZXMgKHJlc2V0IGFsbCBsb2NrcylcclxuICAgICAgICBjb25zdCBpbmRleCA9IGxvY2tlZEZhY2V0c1trZXldLmluZGV4T2YoJ0xPQ0tfTEFTVCcpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICBsb2NrZWRGYWNldHNba2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChjbG9zZWRFeWVzKSB7XHJcbiAgICAgICAgaWYgKGNsb3NlZEV5ZXMubGVuZ3RoID09PSBmYWNldERhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgY29uc3QgbGFzdEZhY2V0ID0gZmFjZXREYXRhLmZpbmQoKGYpID0+ICFjbG9zZWRFeWVzLmluY2x1ZGVzKGYudHlwZS5yZXBsYWNlKC8gL2csICctJykpKTtcclxuICAgICAgICAgIGlmIChsYXN0RmFjZXQpIHtcclxuICAgICAgICAgICAgaWYgKGNsb3NlZEV5ZXNbbGFzdEZhY2V0LnR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgbG9ja2VkRmFjZXRzW2xhc3RGYWNldC50eXBlXS5wdXNoKCdMT0NLX0xBU1QnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBsb2NrZWRGYWNldHNbbGFzdEZhY2V0LnR5cGVdID0gWydMT0NLX0xBU1QnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xvc2VkRXllcy5pbmNsdWRlcyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSkpIHsgLy8gY2hlY2sgaWYgdGhlIGV5ZXMgYXJlIG9wZW5cclxuICAgICAgICAgIGZhY2V0LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmFjZXQuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhsb2NrZWRGYWNldHMpLmxlbmd0aCkgeyAvLyBjaGVjayBpZiBidWJibGUgY2hhcnQgd2FudHMgdG8gbG9jayB0aGlzIGZhY2V0XHJcbiAgICAgICAgaWYgKGxvY2tlZEZhY2V0c1tmYWNldC50eXBlXSAmJiBsb2NrZWRGYWNldHNbZmFjZXQudHlwZV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8gaWYgYnViYmxlIGNoYXJ0IHNheSBsb2NrIHRoaXMgZmFjZXQsIGxvY2sgaXRcclxuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZhY2V0LmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmYWNldC5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBoZWFkZXJDbGFzc2VzID0gW107XHJcbiAgICAgIGNvbnN0IGljb25DbGFzc2VzID0gW2ZhY2V0Lmljb25dO1xyXG4gICAgICBpZiAoIWZhY2V0LmVuYWJsZWQpIHsgaGVhZGVyQ2xhc3Nlcy5wdXNoKCdpcy1kaXNhYmxlZCcpOyB9XHJcbiAgICAgIGlmIChmYWNldFsnY2xhc3MtbmFtZSddKSB7XHJcbiAgICAgICAgaGVhZGVyQ2xhc3Nlcy5wdXNoKGBjb2xvci0ke2ZhY2V0WydjbGFzcy1uYW1lJ119YCk7XHJcbiAgICAgICAgaWNvbkNsYXNzZXMucHVzaChgY29sb3ItJHtmYWNldFsnY2xhc3MtbmFtZSddfWApO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaGVhZGVycyBkYXRhXHJcbiAgICAgIGhlYWRlcnMucHVzaCh7XHJcbiAgICAgICAgaWNvbkxlZnQ6IGljb25DbGFzc2VzLmpvaW4oJyAnKSxcclxuICAgICAgICB0ZXh0OiBmYWNldC5sYWJlbCxcclxuICAgICAgICBhZGRpdGlvbmFsVGV4dDogZmFjZXQuY291bnQsXHJcbiAgICAgICAgaWNvblJpZ2h0OiBmYWNldC5lbmFibGVkID8gJ243LWljb24tZXllJyA6ICduNy1pY29uLWV5ZS1zbGFzaCcsXHJcbiAgICAgICAgY2xhc3NlczpcclxuICAgICAgICAgIGhlYWRlckNsYXNzZXMuam9pbignICcpXHJcbiAgICAgICAgICArIChmYWNldC5sb2NrZWRcclxuICAgICAgICAgICAgPyAnIGlzLWJsb2NrZWQnXHJcbiAgICAgICAgICAgIDogJyBub3QtYmxvY2tlZCcpLFxyXG4gICAgICAgIHBheWxvYWQ6IGZhY2V0LmxvY2tlZCA9PT0gdHJ1ZSA/IG51bGwgOiBmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIG1ha2UgYXJyYXkgb2YgaW5wdXRzIGRhdGFcclxuICAgICAgaW5wdXRzLnB1c2goe1xyXG4gICAgICAgIHNlY3Rpb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlucHV0czogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBgJHtmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKX0tJHtqfWAsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZmFjZXRbJ2lucHV0LXBsYWNlaG9sZGVyJ10sXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbjctaWNvbi1zZWFyY2gnLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFmYWNldC5lbmFibGVkLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRQYXlsb2FkOiBgJHtTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKC8gL2csICctJykpfS1zZWFyY2hgLFxyXG4gICAgICAgICAgICAgICAgaWNvblBheWxvYWQ6IGAke1N0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSl9LXNlYXJjaGAsXHJcbiAgICAgICAgICAgICAgICBlbnRlclBheWxvYWQ6IGAke1N0cmluZyhmYWNldC50eXBlLnJlcGxhY2UoLyAvZywgJy0nKSl9LXNlYXJjaGAsXHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBgJHtTdHJpbmcoZmFjZXQudHlwZS5yZXBsYWNlKCcgJywgJy0nKSl9LXNlYXJjaGAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB6aXBwaW5nIGFycmF5cyB0byByZW5kZXIgd2lkZ2V0cyB3aXRoIHNlcGFyYXRlIGRhdGEgKHNlZSBob21lLWxheW91dC5odG1sKVxyXG4gICAgcmV0dXJuIGhlYWRlcnMubWFwKChoLCBpKSA9PiAoeyBoZWFkZXI6IGgsIGlucHV0OiBpbnB1dHNbaV0gfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRpcHB5TWFrZXIgPSAoaWQpID0+IHtcclxuICAgIC8qXHJcbiAgICAgIEJ1aWxkcyBvciB1cGRhdGVzIFRpcHB5IGZvciB0aGUgaW5wdXQgaW4gdXNlIChpZClcclxuICAgICovXHJcbiAgICBjb25zdCBuZXdJZCA9IGlkLnJlcGxhY2UoLyAvZywgJy0nKTtcclxuICAgIC8vIGNyZWF0ZSBkYXRhIGZvciB0aGlzIGZhY2V0XHJcbiAgICBpZiAoIXRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXSkge1xyXG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF0gPSB7XHJcbiAgICAgICAgdGlwcHk6IHVuZGVmaW5lZCwgLy8gdGlwcHkgZGF0YSAvIGNvbmZpZ1xyXG4gICAgICAgIG9wZW46IHRydWUsIC8vIHNob3cgb3IgaGlkZSB0aXBweVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBhYyA9IHRoaXMuYXV0b0NvbXBsZXRlW25ld0lkXTtcclxuICAgICAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXHJcbiAgICAgICAgICAnYXctc2ltcGxlLWF1dG9jb21wbGV0ZV9fdGVtcGxhdGUnLFxyXG4gICAgICAgIClbMF07XHJcbiAgICAgICAgY29udGVudE5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jaycpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50Tm9kZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICghYWMudGlwcHkpIHtcclxuICAgICAgICAvLyB0YXJnZXQgdGhlIGNvcnJlY3QgdGhpcy5hdXRvQ29tcGxldGVbaWRdIGlucHV0IGNsYXNzXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuZXdJZClbMV07XHJcbiAgICAgICAgYWMudGlwcHkgPSB0aXBweSh0YXJnZXQsIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IGdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxyXG4gICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICBhcnJvdzogZmFsc2UsXHJcbiAgICAgICAgICBmbGlwOiBmYWxzZSxcclxuICAgICAgICAgIGFwcGVuZFRvOiAncGFyZW50JyxcclxuICAgICAgICAgIHRoZW1lOiAnbGlnaHQtYm9yZGVyIGF3LWhvbWVfX2ZhY2V0LXRpcHB5JyxcclxuICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbS1zdGFydCcsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxyXG4gICAgICAgIH0pOyAvLyBhdHRhY2ggdGlwcHkgdG8gaW5wdXQgdHlwZSB0ZXh0XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGFjID0gdGhpcy5hdXRvQ29tcGxldGVbbmV3SWRdO1xyXG4gICAgaWYgKGFjLnRpcHB5KSB7XHJcbiAgICAgIGFjLnRpcHB5LnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0aXBweUNsb3NlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJZCA9IGlkLnJlcGxhY2UoLyAvZywgJy0nKTtcclxuICAgIGlmICh0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF0pIHtcclxuICAgICAgY29uc3QgYWMgPSB0aGlzLmF1dG9Db21wbGV0ZVtuZXdJZF07XHJcbiAgICAgIGlmIChhYy50aXBweSkge1xyXG4gICAgICAgIGFjLnRpcHB5LmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=