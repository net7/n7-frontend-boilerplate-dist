/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LayoutDataSource } from '@n7-frontend/core/dist/layout-data-source';
export class MrHomeLayoutDS extends LayoutDataSource {
    /**
     * @return {?}
     */
    onInit() {
        this.one('mr-resources').updateOptions({ source: 'resources' });
        this.one('mr-collections').updateOptions({ source: 'collections' });
        this.some(['mr-resources', 'mr-collections']).update({});
        this.one('mr-res-header').update({
            title: 'Le mappe',
            subtitle: 'Una selezione di alcune mappe di Totus Mundus.',
            button: {
                text: 'Visita il catalogo',
                link: '/catalogo'
            }
        });
        this.one('mr-coll-header').update({
            title: 'I percorsi',
            subtitle: 'Visita il mondo di Totus Mundus con una serie di percorsi per te.',
            button: {
                text: 'Visita il catalogo',
                link: '/catalogo'
            }
        });
        this.one('mr-hero').update({
            text: 'The Totus Mundus project presents a series of information and data about the jesuit Matteo Ricci, its life, the maps he created and the people he collaborated with',
            button: {
                title: '',
                text: 'Cerca',
                anchor: {
                    href: '/button-url',
                    target: '_blank'
                }
            },
            image: 'https://i.imgur.com/VHTbVbm.png'
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTdFLE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCOzs7O0lBQ2xELE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDL0IsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLGdEQUFnRDtZQUMxRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxFQUFFLFdBQVc7YUFDbEI7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxZQUFZO1lBQ25CLFFBQVEsRUFBRSxtRUFBbUU7WUFDN0UsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLElBQUksRUFBRSxXQUFXO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxFQUFFLHFLQUFxSztZQUMzSyxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFO29CQUNOLElBQUksRUFBRSxhQUFhO29CQUNuQixNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjtZQUNELEtBQUssRUFBRSxpQ0FBaUM7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlL2Rpc3QvbGF5b3V0LWRhdGEtc291cmNlJztcblxuZXhwb3J0IGNsYXNzIE1ySG9tZUxheW91dERTIGV4dGVuZHMgTGF5b3V0RGF0YVNvdXJjZSB7XG4gIG9uSW5pdCgpIHtcbiAgICB0aGlzLm9uZSgnbXItcmVzb3VyY2VzJykudXBkYXRlT3B0aW9ucyh7IHNvdXJjZTogJ3Jlc291cmNlcycgfSk7XG4gICAgdGhpcy5vbmUoJ21yLWNvbGxlY3Rpb25zJykudXBkYXRlT3B0aW9ucyh7IHNvdXJjZTogJ2NvbGxlY3Rpb25zJyB9KTtcbiAgICB0aGlzLnNvbWUoWydtci1yZXNvdXJjZXMnLCAnbXItY29sbGVjdGlvbnMnXSkudXBkYXRlKHt9KTtcbiAgICB0aGlzLm9uZSgnbXItcmVzLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICB0aXRsZTogJ0xlIG1hcHBlJyxcbiAgICAgIHN1YnRpdGxlOiAnVW5hIHNlbGV6aW9uZSBkaSBhbGN1bmUgbWFwcGUgZGkgVG90dXMgTXVuZHVzLicsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogJ1Zpc2l0YSBpbCBjYXRhbG9nbycsXG4gICAgICAgIGxpbms6ICcvY2F0YWxvZ28nXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ21yLWNvbGwtaGVhZGVyJykudXBkYXRlKHtcbiAgICAgIHRpdGxlOiAnSSBwZXJjb3JzaScsXG4gICAgICBzdWJ0aXRsZTogJ1Zpc2l0YSBpbCBtb25kbyBkaSBUb3R1cyBNdW5kdXMgY29uIHVuYSBzZXJpZSBkaSBwZXJjb3JzaSBwZXIgdGUuJyxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICB0ZXh0OiAnVmlzaXRhIGlsIGNhdGFsb2dvJyxcbiAgICAgICAgbGluazogJy9jYXRhbG9nbydcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9uZSgnbXItaGVybycpLnVwZGF0ZSh7XG4gICAgICB0ZXh0OiAnVGhlIFRvdHVzIE11bmR1cyBwcm9qZWN0IHByZXNlbnRzIGEgc2VyaWVzIG9mIGluZm9ybWF0aW9uIGFuZCBkYXRhIGFib3V0IHRoZSBqZXN1aXQgTWF0dGVvIFJpY2NpLCBpdHMgbGlmZSwgdGhlIG1hcHMgaGUgY3JlYXRlZCBhbmQgdGhlIHBlb3BsZSBoZSBjb2xsYWJvcmF0ZWQgd2l0aCcsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB0ZXh0OiAnQ2VyY2EnLFxuICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICBocmVmOiAnL2J1dHRvbi11cmwnLFxuICAgICAgICAgIHRhcmdldDogJ19ibGFuaydcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9WSFRiVmJtLnBuZydcbiAgICB9KTtcbiAgfVxufVxuIl19