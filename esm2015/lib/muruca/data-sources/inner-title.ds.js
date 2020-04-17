/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class MrInnerTitleDS extends DataSource {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        const { title, subtitle, button } = data;
        return {
            title: {
                main: {
                    text: title,
                    classes: 'bold'
                },
                secondary: {
                    text: subtitle,
                    classes: 'italic'
                }
            },
            actions: {
                buttons: [
                    {
                        text: button.text,
                        payload: button.link,
                        classes: 'n7-btn-cta'
                    }
                ]
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItdGl0bGUuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2RhdGEtc291cmNlcy9pbm5lci10aXRsZS5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTs7Ozs7OztJQUVsQyxTQUFTLENBQUMsSUFBUztjQUNyQixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSTtRQUN4QyxPQUFPO1lBQ0wsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsS0FBSztvQkFDWCxPQUFPLEVBQUUsTUFBTTtpQkFDaEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRTtvQkFDUDt3QkFDRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7d0JBQ2pCLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSTt3QkFDcEIsT0FBTyxFQUFFLFlBQVk7cUJBQ3RCO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1ySW5uZXJUaXRsZURTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHN1YnRpdGxlLCBidXR0b24gfSA9IGRhdGE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIG1haW46IHtcbiAgICAgICAgICB0ZXh0OiB0aXRsZSxcbiAgICAgICAgICBjbGFzc2VzOiAnYm9sZCdcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgICAgdGV4dDogc3VidGl0bGUsXG4gICAgICAgICAgY2xhc3NlczogJ2l0YWxpYydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IGJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgcGF5bG9hZDogYnV0dG9uLmxpbmssXG4gICAgICAgICAgICBjbGFzc2VzOiAnbjctYnRuLWN0YSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=