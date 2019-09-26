/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHeroDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        console.log({ data });
        /** @type {?} */
        const HERO_DATA = {
            title: "Arte, architettura e fotografia nel XXII secolo",
            text: "Consulta il patrimonio completo del polo nazionale per l\'arte e l\'architettura contemporanee.",
            button: {
                text: "CERCA",
                payload: "cerca"
            },
            backgroundImage: "https://i.imgur.com/FgsxSYR.png",
            input: {
                placeholder: "Cerca in MAXXI",
                payload: "cerca-in-maxxi"
            }
        };
        return HERO_DATA;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuNy1mcm9udGVuZC9ib2lsZXJwbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9hcmlhbm5hLXdlYi9kYXRhLXNvdXJjZXMvaGVyby5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxRQUFTLFNBQVEsVUFBVTs7Ozs7O0lBRTVCLFNBQVMsQ0FBQyxJQUFJO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDOztjQUNkLFNBQVMsR0FBRztZQUNoQixLQUFLLEVBQUUsaURBQWlEO1lBQ3hELElBQUksRUFBRSxpR0FBaUc7WUFDdkcsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1lBQ0QsZUFBZSxFQUFFLGlDQUFpQztZQUNsRCxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLGdCQUFnQjtnQkFDN0IsT0FBTyxFQUFFLGdCQUFnQjthQUMxQjtTQUNGO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IEhFUk9fTU9DSyB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb21wb25lbnRzJztcblxuZXhwb3J0IGNsYXNzIEF3SGVyb0RTIGV4dGVuZHMgRGF0YVNvdXJjZSB7XG5cbiAgcHJvdGVjdGVkIHRyYW5zZm9ybShkYXRhKXtcbiAgICBjb25zb2xlLmxvZyh7ZGF0YX0pO1xuICAgIGNvbnN0IEhFUk9fREFUQSA9IHtcbiAgICAgIHRpdGxlOiBcIkFydGUsIGFyY2hpdGV0dHVyYSBlIGZvdG9ncmFmaWEgbmVsIFhYSUkgc2Vjb2xvXCIsXG4gICAgICB0ZXh0OiBcIkNvbnN1bHRhIGlsIHBhdHJpbW9uaW8gY29tcGxldG8gZGVsIHBvbG8gbmF6aW9uYWxlIHBlciBsXFwnYXJ0ZSBlIGxcXCdhcmNoaXRldHR1cmEgY29udGVtcG9yYW5lZS5cIixcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiBcIkNFUkNBXCIsXG4gICAgICAgIHBheWxvYWQ6IFwiY2VyY2FcIlxuICAgICAgfSxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tL0Znc3hTWVIucG5nXCIsXG4gICAgICBpbnB1dDoge1xuICAgICAgICBwbGFjZWhvbGRlcjogXCJDZXJjYSBpbiBNQVhYSVwiLFxuICAgICAgICBwYXlsb2FkOiBcImNlcmNhLWluLW1heHhpXCJcbiAgICAgIH1cbiAgICB9OyAgXG4gICAgcmV0dXJuIEhFUk9fREFUQTtcbiAgfVxufSJdfQ==