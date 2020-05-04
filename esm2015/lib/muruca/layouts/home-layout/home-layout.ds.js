/**
 * @fileoverview added by tsickle
 * Generated from: lib/muruca/layouts/home-layout/home-layout.ds.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sYXlvdXQuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvbXVydWNhL2xheW91dHMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU3RSxNQUFNLE9BQU8sY0FBZSxTQUFRLGdCQUFnQjs7OztJQUNsRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQy9CLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFFBQVEsRUFBRSxnREFBZ0Q7WUFDMUQsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLElBQUksRUFBRSxXQUFXO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxLQUFLLEVBQUUsWUFBWTtZQUNuQixRQUFRLEVBQUUsbUVBQW1FO1lBQzdFLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixJQUFJLEVBQUUsV0FBVzthQUNsQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksRUFBRSxxS0FBcUs7WUFDM0ssTUFBTSxFQUFFO2dCQUNOLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxPQUFPO2dCQUNiLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsYUFBYTtvQkFDbkIsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsaUNBQWlDO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZS9kaXN0L2xheW91dC1kYXRhLXNvdXJjZSc7XG5cbmV4cG9ydCBjbGFzcyBNckhvbWVMYXlvdXREUyBleHRlbmRzIExheW91dERhdGFTb3VyY2Uge1xuICBvbkluaXQoKSB7XG4gICAgdGhpcy5vbmUoJ21yLXJlc291cmNlcycpLnVwZGF0ZU9wdGlvbnMoeyBzb3VyY2U6ICdyZXNvdXJjZXMnIH0pO1xuICAgIHRoaXMub25lKCdtci1jb2xsZWN0aW9ucycpLnVwZGF0ZU9wdGlvbnMoeyBzb3VyY2U6ICdjb2xsZWN0aW9ucycgfSk7XG4gICAgdGhpcy5zb21lKFsnbXItcmVzb3VyY2VzJywgJ21yLWNvbGxlY3Rpb25zJ10pLnVwZGF0ZSh7fSk7XG4gICAgdGhpcy5vbmUoJ21yLXJlcy1oZWFkZXInKS51cGRhdGUoe1xuICAgICAgdGl0bGU6ICdMZSBtYXBwZScsXG4gICAgICBzdWJ0aXRsZTogJ1VuYSBzZWxlemlvbmUgZGkgYWxjdW5lIG1hcHBlIGRpIFRvdHVzIE11bmR1cy4nLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRleHQ6ICdWaXNpdGEgaWwgY2F0YWxvZ28nLFxuICAgICAgICBsaW5rOiAnL2NhdGFsb2dvJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub25lKCdtci1jb2xsLWhlYWRlcicpLnVwZGF0ZSh7XG4gICAgICB0aXRsZTogJ0kgcGVyY29yc2knLFxuICAgICAgc3VidGl0bGU6ICdWaXNpdGEgaWwgbW9uZG8gZGkgVG90dXMgTXVuZHVzIGNvbiB1bmEgc2VyaWUgZGkgcGVyY29yc2kgcGVyIHRlLicsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogJ1Zpc2l0YSBpbCBjYXRhbG9nbycsXG4gICAgICAgIGxpbms6ICcvY2F0YWxvZ28nXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5vbmUoJ21yLWhlcm8nKS51cGRhdGUoe1xuICAgICAgdGV4dDogJ1RoZSBUb3R1cyBNdW5kdXMgcHJvamVjdCBwcmVzZW50cyBhIHNlcmllcyBvZiBpbmZvcm1hdGlvbiBhbmQgZGF0YSBhYm91dCB0aGUgamVzdWl0IE1hdHRlbyBSaWNjaSwgaXRzIGxpZmUsIHRoZSBtYXBzIGhlIGNyZWF0ZWQgYW5kIHRoZSBwZW9wbGUgaGUgY29sbGFib3JhdGVkIHdpdGgnLFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdGV4dDogJ0NlcmNhJyxcbiAgICAgICAgYW5jaG9yOiB7XG4gICAgICAgICAgaHJlZjogJy9idXR0b24tdXJsJyxcbiAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vaS5pbWd1ci5jb20vVkhUYlZibS5wbmcnXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==