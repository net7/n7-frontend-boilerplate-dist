/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwTreeDS extends DataSource {
    /**
     * @return {?}
     */
    toggleNav() {
    }
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        return data;
    }
    /**
     * @param {?} data
     * @param {?} parents
     * @param {?} id
     * @return {?}
     */
    updateTree(data, parents, id) {
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        (it) => {
            if (it['_meta'] == id) {
                if (it['classes'] == "is-expanded") {
                    it['classes'] = "is-collapsed";
                }
                else {
                    it['classes'] = "is-expanded";
                }
            }
            else if (parents.indexOf(it['_meta']) >= 0) {
                it['classes'] = "is-expanded";
            }
            if (typeof it['items'] != "undefined" && it['items'].length > 0) {
                this.updateTree(it, parents, id);
            }
        }));
        this.update(data);
    }
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    selectTreeItem(id, data) {
        if (!data) {
            data = this.output;
        }
        data.items.forEach((/**
         * @param {?} it
         * @return {?}
         */
        (it) => {
            if (it['_meta'] == id) {
                it['classes'] = it['classes'] + " is-active";
                this.currentItem = it;
            }
            else {
                /** @type {?} */
                let classes = it['classes'];
                it['classes'] = classes.replace("is-active", "");
            }
            if (typeof it['items'] != "undefined" && it['items'].length > 0) {
                this.selectTreeItem(id, it);
            }
        }));
        this.update(data);
    }
    /**
     * @return {?}
     */
    toggleSidebar() {
        /** @type {?} */
        let sidebarData = this.output;
        if (sidebarData.classes == "is-expanded") {
            sidebarData.classes = "is-collapsed";
        }
        else {
            sidebarData.classes = "is-expanded";
        }
        this.update(sidebarData);
    }
}
if (false) {
    /** @type {?} */
    AwTreeDS.prototype.currentItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvdHJlZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7OztJQUl0QyxTQUFTO0lBRVQsQ0FBQzs7Ozs7O0lBRVMsU0FBUyxDQUFDLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUMxQixJQUFLLENBQUMsSUFBSSxFQUFHO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3pCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRztnQkFDdEIsSUFBSyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksYUFBYSxFQUFHO29CQUNwQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsY0FBYyxDQUFDO2lCQUNoQztxQkFBTTtvQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBYSxDQUFDO2lCQUMvQjthQUNGO2lCQUNJLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUUsSUFBSSxDQUFDLEVBQUc7Z0JBQzNDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxhQUFhLENBQUM7YUFDakM7WUFDRCxJQUFJLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFdBQVcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRztnQkFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxFQUFFLEVBQUUsSUFBSTtRQUNyQixJQUFLLENBQUMsSUFBSSxFQUFHO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRztnQkFDcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxZQUFZLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNOztvQkFDRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUc7Z0JBQ2hFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxhQUFhOztZQUNQLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTTtRQUM3QixJQUFLLFdBQVcsQ0FBQyxPQUFPLElBQUksYUFBYSxFQUFHO1lBQzFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxXQUFXLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGOzs7SUE5REMsK0JBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3VHJlZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHVibGljIGN1cnJlbnRJdGVtOiBzdHJpbmc7XG5cbiAgdG9nZ2xlTmF2KCkge1xuICAgIFxuICB9XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKSB7ICAgICBcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHVwZGF0ZVRyZWUoZGF0YSwgcGFyZW50cywgaWQpeyBcbiAgICBpZiAoICFkYXRhICkge1xuICAgICAgZGF0YSA9IHRoaXMub3V0cHV0OyAgICBcbiAgICB9XG4gICAgXG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHsgICAgXG4gICAgICBpZiggaXRbJ19tZXRhJ10gPT0gaWQgKSB7ICAgICAgXG4gICAgICAgIGlmICggaXRbJ2NsYXNzZXMnXSA9PSBcImlzLWV4cGFuZGVkXCIgKSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IFwiaXMtY29sbGFwc2VkXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IFwiaXMtZXhwYW5kZWRcIjtcbiAgICAgICAgfSAgXG4gICAgICB9ICAgIFxuICAgICAgZWxzZSBpZiggcGFyZW50cy5pbmRleE9mKCBpdFsnX21ldGEnXSApID49IDAgKSB7ICAgICAgICAgIFxuICAgICAgICAgIGl0WydjbGFzc2VzJ10gPSBcImlzLWV4cGFuZGVkXCI7XG4gICAgICB9XG4gICAgICBpZiggdHlwZW9mIGl0WydpdGVtcyddICE9IFwidW5kZWZpbmVkXCIgJiYgaXRbJ2l0ZW1zJ10ubGVuZ3RoID4gMCApIHsgICAgICAgICAgICBcbiAgICAgICAgdGhpcy51cGRhdGVUcmVlKGl0LCBwYXJlbnRzLCBpZCk7ICAgICAgICAgICAgXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGUoZGF0YSk7XG4gIH1cblxuICBzZWxlY3RUcmVlSXRlbShpZCwgZGF0YSl7XG4gICAgaWYgKCAhZGF0YSApIHtcbiAgICAgIGRhdGEgPSB0aGlzLm91dHB1dDsgICAgXG4gICAgfVxuXG4gICAgZGF0YS5pdGVtcy5mb3JFYWNoKCAoaXQpID0+IHtcbiAgICAgICAgaWYoIGl0WydfbWV0YSddID09IGlkICkge1xuICAgICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGl0WydjbGFzc2VzJ10gKyBcIiBpcy1hY3RpdmVcIjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSBpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY2xhc3NlcyA9IGl0WydjbGFzc2VzJ107XG4gICAgICAgICAgaXRbJ2NsYXNzZXMnXSA9IGNsYXNzZXMucmVwbGFjZShcImlzLWFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggdHlwZW9mIGl0WydpdGVtcyddICE9IFwidW5kZWZpbmVkXCIgJiYgaXRbJ2l0ZW1zJ10ubGVuZ3RoID4gMCApIHsgICAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnNlbGVjdFRyZWVJdGVtKGlkLCBpdCk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZShkYXRhKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgbGV0IHNpZGViYXJEYXRhID0gdGhpcy5vdXRwdXQ7ICAgIFxuICAgIGlmICggc2lkZWJhckRhdGEuY2xhc3NlcyA9PSBcImlzLWV4cGFuZGVkXCIgKSB7XG4gICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1jb2xsYXBzZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlYmFyRGF0YS5jbGFzc2VzID0gXCJpcy1leHBhbmRlZFwiO1xuICAgIH0gICAgXG4gICAgdGhpcy51cGRhdGUoc2lkZWJhckRhdGEpO1xuICB9XG59Il19