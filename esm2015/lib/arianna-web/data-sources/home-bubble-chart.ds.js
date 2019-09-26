/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeBubbleChartDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        if (!data)
            return null;
        /** @type {?} */
        const cWidth = (data.width ? data.width : 1000);
        /** @type {?} */
        const cHeight = 700;
        /** @type {?} */
        let bubblesData = {
            containerId: "bubbleChartContainer",
            containerWidth: cWidth,
            containerHeight: cHeight,
            isForceSimulationEnabled: true,
            maxBubblesSelected: 3
        };
        bubblesData['bubblesData'] = [];
        data.bubbles.forEach((/**
         * @param {?} bubble
         * @return {?}
         */
        bubble => {
            /** @type {?} */
            let bId = bubble.entity.id;
            /** @type {?} */
            let bubbleData = {
                id: bubble.entity.id,
                texts: [
                    {
                        id: bId + "_label0",
                        label: bubble.entity.label,
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.x),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.y - (d.radius / 9)),
                        "user_select": "none",
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 5),
                        color: "white",
                        "classes": ""
                    },
                    {
                        id: bId + "_label1",
                        label: bubble.count,
                        x_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.x),
                        y_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.y + (d.radius / 9)),
                        "user_select": "none",
                        fontSize_function: (/**
                         * @param {?} d
                         * @return {?}
                         */
                        (d) => d.radius / 6),
                        color: "white",
                        "classes": ""
                    }
                ],
                x: cWidth / 2 + 50,
                y: cHeight / 2 + 50,
                "radius": bubble.count / 55,
                color: bubble.color,
                hasCloseIcon: false,
                payload: {
                    id: bId
                },
                selectable: true,
                selected: (bubble.selected ? bubble.selected : false)
            };
            bubblesData['bubblesData'].push(bubbleData);
        }));
        bubblesData['forceSimulationData'] = {
            xPull: cWidth / 2,
            xPullStrength: -0.01,
            yPull: cHeight / 2,
            yPullStrength: -0.01,
            collisionStrengh: 0.99,
            collisionIterations: 1,
            velocityDecay: 0.65
        };
        if (data.reset)
            bubblesData['reset'] = data.reset;
        return bubblesData;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1idWJibGUtY2hhcnQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtYnViYmxlLWNoYXJ0LmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHL0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7Ozs7OztJQUV2QyxTQUFTLENBQUMsSUFBSTtRQUN0QixJQUFHLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDOztjQUNoQixNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O2NBQ3pDLE9BQU8sR0FBRyxHQUFHOztZQUVmLFdBQVcsR0FBRztZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLGNBQWMsRUFBRyxNQUFNO1lBQ3ZCLGVBQWUsRUFBRyxPQUFPO1lBQ3pCLHdCQUF3QixFQUFFLElBQUk7WUFDOUIsa0JBQWtCLEVBQUMsQ0FBQztTQUNyQjtRQUVELFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUUsTUFBTSxDQUFDLEVBQUU7O2dCQUN6QixHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFOztnQkFDdEIsVUFBVSxHQUFHO2dCQUNmLEVBQUUsRUFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ25CLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxFQUFFLEVBQUMsR0FBRyxHQUFDLFNBQVM7d0JBQ2hCLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUs7d0JBQzFCLFVBQVU7Ozs7d0JBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3RCLFVBQVU7Ozs7d0JBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNuQyxhQUFhLEVBQUMsTUFBTTt3QkFDcEIsaUJBQWlCOzs7O3dCQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQTt3QkFDcEMsS0FBSyxFQUFFLE9BQU87d0JBQ2QsU0FBUyxFQUFDLEVBQUU7cUJBQ2I7b0JBQ0Q7d0JBQ0UsRUFBRSxFQUFDLEdBQUcsR0FBQyxTQUFTO3dCQUNoQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7d0JBQ25CLFVBQVU7Ozs7d0JBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3RCLFVBQVU7Ozs7d0JBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNuQyxhQUFhLEVBQUMsTUFBTTt3QkFDcEIsaUJBQWlCOzs7O3dCQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQTt3QkFDcEMsS0FBSyxFQUFFLE9BQU87d0JBQ2QsU0FBUyxFQUFDLEVBQUU7cUJBQ2Y7aUJBQ0E7Z0JBQ0QsQ0FBQyxFQUFFLE1BQU0sR0FBQyxDQUFDLEdBQUMsRUFBRTtnQkFDZCxDQUFDLEVBQUUsT0FBTyxHQUFDLENBQUMsR0FBQyxFQUFFO2dCQUNmLFFBQVEsRUFBQyxNQUFNLENBQUMsS0FBSyxHQUFDLEVBQUU7Z0JBQ3hCLEtBQUssRUFBQyxNQUFNLENBQUMsS0FBSztnQkFDbEIsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLE9BQU8sRUFBQztvQkFDTixFQUFFLEVBQUUsR0FBRztpQkFDUjtnQkFDRCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLENBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFO2FBQ3hEO1lBRUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUdILFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHO1lBQ25DLEtBQUssRUFBRSxNQUFNLEdBQUMsQ0FBQztZQUNmLGFBQWEsRUFBRSxDQUFDLElBQUk7WUFDcEIsS0FBSyxFQUFFLE9BQU8sR0FBQyxDQUFDO1lBQ2hCLGFBQWEsRUFBRSxDQUFDLElBQUk7WUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixtQkFBbUIsRUFBRSxDQUFDO1lBQ3RCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUE7UUFFRCxJQUFHLElBQUksQ0FBQyxLQUFLO1lBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFakQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEJVQkJMRUNIQVJUX01PQ0sgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBd0hvbWVCdWJibGVDaGFydERTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBpZighZGF0YSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgY1dpZHRoID0gKGRhdGEud2lkdGggPyBkYXRhLndpZHRoIDogMTAwMCk7XG4gICAgY29uc3QgY0hlaWdodCA9IDcwMDtcblxuICAgIGxldCBidWJibGVzRGF0YSA9IHtcbiAgICAgIGNvbnRhaW5lcklkOiBcImJ1YmJsZUNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICBjb250YWluZXJXaWR0aCA6IGNXaWR0aCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCA6IGNIZWlnaHQsXG4gICAgICBpc0ZvcmNlU2ltdWxhdGlvbkVuYWJsZWQ6IHRydWUsXG4gICAgICBtYXhCdWJibGVzU2VsZWN0ZWQ6M1xuICAgIH07XG5cbiAgICBidWJibGVzRGF0YVsnYnViYmxlc0RhdGEnXSA9IFtdO1xuXG4gICAgZGF0YS5idWJibGVzLmZvckVhY2goIGJ1YmJsZSA9PiB7XG4gICAgICBsZXQgYklkID0gYnViYmxlLmVudGl0eS5pZDtcbiAgICAgIGxldCBidWJibGVEYXRhID0ge1xuICAgICAgICBpZDpidWJibGUuZW50aXR5LmlkLFxuICAgICAgICB0ZXh0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDBcIixcbiAgICAgICAgICAgIGxhYmVsOiBidWJibGUuZW50aXR5LmxhYmVsLFxuICAgICAgICAgICAgeF9mdW5jdGlvbjogKGQpID0+IGQueCxcbiAgICAgICAgICAgIHlfZnVuY3Rpb246IChkKSA9PiBkLnktKGQucmFkaXVzLzkpLFxuICAgICAgICAgICAgXCJ1c2VyX3NlbGVjdFwiOlwibm9uZVwiLFxuICAgICAgICAgICAgZm9udFNpemVfZnVuY3Rpb246IChkKSA9PiBkLnJhZGl1cy81LFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3Nlc1wiOlwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOmJJZCtcIl9sYWJlbDFcIixcbiAgICAgICAgICAgIGxhYmVsOiBidWJibGUuY291bnQsXG4gICAgICAgICAgICB4X2Z1bmN0aW9uOiAoZCkgPT4gZC54LFxuICAgICAgICAgICAgeV9mdW5jdGlvbjogKGQpID0+IGQueSsoZC5yYWRpdXMvOSksXG4gICAgICAgICAgICBcInVzZXJfc2VsZWN0XCI6XCJub25lXCIsXG4gICAgICAgICAgICBmb250U2l6ZV9mdW5jdGlvbjogKGQpID0+IGQucmFkaXVzLzYsXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJjbGFzc2VzXCI6XCJcIlxuICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHg6IGNXaWR0aC8yKzUwLFxuICAgICAgICB5OiBjSGVpZ2h0LzIrNTAsXG4gICAgICAgIFwicmFkaXVzXCI6YnViYmxlLmNvdW50LzU1LFxuICAgICAgICBjb2xvcjpidWJibGUuY29sb3IsXG4gICAgICAgIGhhc0Nsb3NlSWNvbjogZmFsc2UsXG4gICAgICAgIHBheWxvYWQ6e1xuICAgICAgICAgIGlkOiBiSWRcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgc2VsZWN0ZWQ6ICggYnViYmxlLnNlbGVjdGVkID8gYnViYmxlLnNlbGVjdGVkIDogZmFsc2UgKVxuICAgICAgfTtcblxuICAgICAgYnViYmxlc0RhdGFbJ2J1YmJsZXNEYXRhJ10ucHVzaChidWJibGVEYXRhKTtcbiAgICB9KTtcblxuXG4gICAgYnViYmxlc0RhdGFbJ2ZvcmNlU2ltdWxhdGlvbkRhdGEnXSA9IHtcbiAgICAgIHhQdWxsOiBjV2lkdGgvMixcbiAgICAgIHhQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgeVB1bGw6IGNIZWlnaHQvMixcbiAgICAgIHlQdWxsU3RyZW5ndGg6IC0wLjAxLFxuICAgICAgY29sbGlzaW9uU3RyZW5naDogMC45OSxcbiAgICAgIGNvbGxpc2lvbkl0ZXJhdGlvbnM6IDEsXG4gICAgICB2ZWxvY2l0eURlY2F5OiAwLjY1XG4gICAgfVxuXG4gICAgaWYoZGF0YS5yZXNldCkgYnViYmxlc0RhdGFbJ3Jlc2V0J10gPSBkYXRhLnJlc2V0O1xuXG4gICAgcmV0dXJuIGJ1YmJsZXNEYXRhO1xuICB9XG59Il19