/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@n7-frontend/core';
export class AwHomeHeroPatrimonioDS extends DataSource {
    /**
     * @protected
     * @param {?} data
     * @return {?}
     */
    transform(data) {
        /** @type {?} */
        const HERO_PATRIMONIO_DATA = {
            title: "IL MAXXI",
            backgroundImage: "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-gray-solid-color-background.jpg",
            image: "https://i.imgur.com/8BgHOBi.png",
            text: "La storia del MAXXI inizia nell'autunno del 1997 quando l'allora Ministero per i beni culturali ottiene dal Ministero della Difesa la cessione di un'ampia area nel quartiene Flaminio di Roma, occupata da officine e padiglioni della ex Caserma Montello, in disuso da tempo, con il fine di creare un nuovo polo mseale nazionale dedicato alle arti contemporanee per la cui progettazione, nel 1998, viene bandito un concorso internazionale di idee in due fasi. Il bando di concorso prevedeva un piano funzionale complesso, con la presenza di vari poli museali: un museo per l'architettura e uno per le arti del XXI secolo, uno spazio per le produzioni sperimentali, la biblioteca, l'auditorium, spazi per eventi dal vivo e infine spazi didattici.",
            button: {
                text: "NAVIGA IL PATRIMONIO",
                payload: "naviga-patrimonio"
            }
        };
        return HERO_PATRIMONIO_DATA;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1oZXJvLXBhdHJpbW9uaW8uZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbjctZnJvbnRlbmQvYm9pbGVycGxhdGUvIiwic291cmNlcyI6WyJsaWIvYXJpYW5uYS13ZWIvZGF0YS1zb3VyY2VzL2hvbWUtaGVyby1wYXRyaW1vbmlvLmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFL0MsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFVBQVU7Ozs7OztJQUUxQyxTQUFTLENBQUMsSUFBSTs7Y0FDaEIsb0JBQW9CLEdBQUc7WUFDM0IsS0FBSyxFQUFFLFVBQVU7WUFDakIsZUFBZSxFQUFFLDZGQUE2RjtZQUM5RyxLQUFLLEVBQUUsaUNBQWlDO1lBQ3hDLElBQUksRUFBRSx3dUJBQXd1QjtZQUM5dUIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLE9BQU8sRUFBRSxtQkFBbUI7YUFDN0I7U0FDRjtRQUNELE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEF3SG9tZUhlcm9QYXRyaW1vbmlvRFMgZXh0ZW5kcyBEYXRhU291cmNlIHtcblxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtKGRhdGEpIHtcbiAgICBjb25zdCBIRVJPX1BBVFJJTU9OSU9fREFUQSA9IHtcbiAgICAgIHRpdGxlOiBcIklMIE1BWFhJXCIsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwiaHR0cHM6Ly93d3cuc29saWRiYWNrZ3JvdW5kcy5jb20vaW1hZ2VzLzI1NjB4MTQ0MC8yNTYweDE0NDAtZ3JheS1zb2xpZC1jb2xvci1iYWNrZ3JvdW5kLmpwZ1wiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS84QmdIT0JpLnBuZ1wiLFxuICAgICAgdGV4dDogXCJMYSBzdG9yaWEgZGVsIE1BWFhJIGluaXppYSBuZWxsJ2F1dHVubm8gZGVsIDE5OTcgcXVhbmRvIGwnYWxsb3JhIE1pbmlzdGVybyBwZXIgaSBiZW5pIGN1bHR1cmFsaSBvdHRpZW5lIGRhbCBNaW5pc3Rlcm8gZGVsbGEgRGlmZXNhIGxhIGNlc3Npb25lIGRpIHVuJ2FtcGlhIGFyZWEgbmVsIHF1YXJ0aWVuZSBGbGFtaW5pbyBkaSBSb21hLCBvY2N1cGF0YSBkYSBvZmZpY2luZSBlIHBhZGlnbGlvbmkgZGVsbGEgZXggQ2FzZXJtYSBNb250ZWxsbywgaW4gZGlzdXNvIGRhIHRlbXBvLCBjb24gaWwgZmluZSBkaSBjcmVhcmUgdW4gbnVvdm8gcG9sbyBtc2VhbGUgbmF6aW9uYWxlIGRlZGljYXRvIGFsbGUgYXJ0aSBjb250ZW1wb3JhbmVlIHBlciBsYSBjdWkgcHJvZ2V0dGF6aW9uZSwgbmVsIDE5OTgsIHZpZW5lIGJhbmRpdG8gdW4gY29uY29yc28gaW50ZXJuYXppb25hbGUgZGkgaWRlZSBpbiBkdWUgZmFzaS4gSWwgYmFuZG8gZGkgY29uY29yc28gcHJldmVkZXZhIHVuIHBpYW5vIGZ1bnppb25hbGUgY29tcGxlc3NvLCBjb24gbGEgcHJlc2VuemEgZGkgdmFyaSBwb2xpIG11c2VhbGk6IHVuIG11c2VvIHBlciBsJ2FyY2hpdGV0dHVyYSBlIHVubyBwZXIgbGUgYXJ0aSBkZWwgWFhJIHNlY29sbywgdW5vIHNwYXppbyBwZXIgbGUgcHJvZHV6aW9uaSBzcGVyaW1lbnRhbGksIGxhIGJpYmxpb3RlY2EsIGwnYXVkaXRvcml1bSwgc3BhemkgcGVyIGV2ZW50aSBkYWwgdml2byBlIGluZmluZSBzcGF6aSBkaWRhdHRpY2kuXCIsXG4gICAgICBidXR0b246IHtcbiAgICAgICAgdGV4dDogXCJOQVZJR0EgSUwgUEFUUklNT05JT1wiLFxuICAgICAgICBwYXlsb2FkOiBcIm5hdmlnYS1wYXRyaW1vbmlvXCJcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBIRVJPX1BBVFJJTU9OSU9fREFUQTtcbiAgfVxufSJdfQ==