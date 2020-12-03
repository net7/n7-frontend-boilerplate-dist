import { __extends } from "tslib";
import { LayoutDataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
var MrTimelineLayoutDS = /** @class */ (function (_super) {
    __extends(MrTimelineLayoutDS, _super);
    function MrTimelineLayoutDS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadedResourceDetails = false;
        _this.yearHeader = {
            title: { main: { text: 'La vita di Petrarca' } },
        };
        _this.eventDescription = 'In questa sezione, curata da Silvia Rizzo, si trova la vita di Petrarca organizzata anno per anno, e, quando sia possibile, mese per mese o addirittura giorno per giorno. Il lavoro è stato condotto mediante uno spoglio delle opere di Petrarca, delle lettere dei suoi corrispondenti e della principale bibliografia relativa alla sua vita. Non possediamo purtroppo ancora un codice diplomatico petrarchesco ma si è ovviamente tenuto conto dei documenti segnalati e pubblicati. Negli studi più recenti si tende spesso a sottolineare l\'attività di falsificazione di se stesso svolta da Petrarca nella sua opera letteraria e a diffidare di quanto lui stesso ci dice.Ma il punto di partenza di qualsiasi tentativo di fare la biografia di Petrarca resta - volenti o nolenti - il molto che ci dice lui stesso: come scrive E.H.Wilkins, Vita del Petrarca, trad.di R.Ceserani, nuova edizione a c.di L.C.Rossi, Milano 2003, p. 3, «Egli è anche grande - grazie soprattutto alle centinaia di lettere e alle note scritte sui margini delle pagine dei suoi libri, che sono state con tanta devozione studiate - per il fatto che noi conosciamo le sue esperienze di vita con molta maggiore profondità che non quelle di qualsiasi altro essere umano vissuto prima di lui».Dunque nello stendere questa cronologia ci si è attenuti il più possibile a quanto Petrarca racconta di sé, tranne quando la deviazione dalla realtà sia evidente e comprovata da altre testimonianze o deducibile con un buon grado di sicurezza.In sintesi, questa cronologia accetta il racconto di sé che lui ha voluto tramandare ai posteri.Com\'è noto, Petrarca in genere non segnava l\'anno in calce alle lettere e molto spesso la data è discussa.Si è sempre cercato di prendere posizione seguendo la proposta che a me appare più convincente, talvolta accennando anche ad altre.Si è dato qualche peso al criterio della posizione di una lettera all\'interno delle raccolte, considerato l\'ordine quasi cronologico che Petrarca stesso dichiara di aver seguito(Fam. 24, 13, 4 «preter has enim ultimas veteribus inscriptas illustribus, quas propter similitudinem novitatis sciens unum simul in locum contuli, ac preter primam, que dictata serius prevenit comites et locum prefationis obtinuit, cetera pene omnia quo inciderant scripta sunt ordine») e a cui in linea di massima si è realmente attenuto(quando ci sono patenti scostamenti dall\'ordine cronologico non di rado se ne capisce la causa, come per esempio l\'esigenza di collocare all\'inizio o alla fine dei libri lettere di particolare rilievo). <br>I titoletti nella timeline segnalano in breve gli avvenimenti salienti degli anni o dei periodi considerati.Aprendo la scheda l\'utente troverà le notizie organizzate in modo che ogni capoverso corrisponde a una data diversa. Differenti avvenimenti aventi la stessa data hanno ognuno un capoverso. Quando il capoverso non comincia con una data vuol dire che è impossibile fissarla, ma la sua collocazione all\'interno della cronologia indica approssimativamente anteriorità o seriorità rispetto ad altri eventi dello stesso anno o dello stesso periodo.Gli avvenimenti che possono solo essere ricondotti genericamente a un determinato anno sono di norma raggruppati in fondo.La cronologia è collegata alle opere e ai manoscritti via via menzionati e a una mappa che mostra sulla carta geografica le varie località toccate da Petrarca. All\'interno delle singole schede le opere di Petrarca e la bibliografia sono citate in forma abbreviata: le abbreviazioni delle opere sono quelle utilizzate all\'interno del portale; le altre sono sciolte nel campo specifico deputato alla bibliografia.';
        _this.timelineListener$ = new Subject();
        _this.bibliographyMock = [
            { title: 'M.J.L. Hocker, Bibliotheca Heilsbronnensis sive Catalogus librorum omnium..., Nkirnberg 1731, 56 n. 68 ' },
            { title: 'J.C. Irmischer, Handschriften-Katalog der Kgl. Universitàtsbibliothek Erlangen, Frankfurt a. M.-Erlangen 1852, 191-192 n. 686 ' },
            { title: 'H. Flischer, Die lateinischen Papierhandschriften der Universitàtsbibliothek Erlangen, Erlangen 1936, 371 ' },
            { title: 'A. Sottili, I codici del Petrarca nella Germania Occidentale, in «IMU», X (1967), pp. 486-487 ' },
            { title: 'F. Petrarca, Senile V 2, a cura di M. Berté, Firenze 1998, pp. 38-39 ' },
            { title: 'H. Fischer, Die lateinischen Papierhandschriften der Universitàtsbibliothek Erlangen, Erlangen 1936, 371 ' },
        ];
        _this.connectedMapsMock = [
            { title: 'Kunyu Wanguo Quantu', text: 'Complete Map of all mountains and seas', image: '/assets/mocks/paper.png' }
        ];
        _this.images = [
            'https://i.imgur.com/WM3EG9d.png',
            'https://i.imgur.com/ZDQmlnX.png',
            'https://i.imgur.com/HhKxoZb.png',
            'https://i.imgur.com/c3tonAj.png',
            'https://i.imgur.com/Ef7izGP.png',
            'https://i.imgur.com/8Xpzoig.png',
            'https://i.imgur.com/yhF0LCt.png',
            'https://i.imgur.com/bMfHfEh.png',
        ];
        return _this;
    }
    ;
    MrTimelineLayoutDS.prototype.onInit = function (payload) {
        var _this = this;
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.one('mr-map').update({});
        this.communication.request$('timeline', {
            method: 'GET',
            onError: function (e) { return console.error(e); }
        }).subscribe(function (d) {
            _this.one('mr-timeline').update(d);
        });
        this.getWidgetDataSource('mr-timeline').timelineLoaded$.pipe(first()).subscribe(function (timeline) {
            _this.timelineListener$.next(timeline);
        });
    };
    MrTimelineLayoutDS.prototype.updatePageDetails = function (id) {
        var _this = this;
        this.communication.request$('resource', {
            onError: function (e) { return console.error(e); },
            method: 'POST',
            params: {
                id: id, type: 'views/time-events'
            }
        }).subscribe(function (res) {
            if (!res || res == null)
                return;
            _this.eventHeader = res.sections.header.title;
            _this.eventDescription = res.sections.header.content;
            _this.yearHeader = {
                title: { main: { text: res.title } },
                actions: {
                    buttons: [{
                            text: '',
                            icon: 'n7-icon-close',
                            anchor: {
                                href: '/timeline'
                            }
                        }]
                }
            };
            _this.loadedResourceDetails = true;
        });
    };
    return MrTimelineLayoutDS;
}(LayoutDataSource));
export { MrTimelineLayoutDS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXJELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXZDLGtFQUFrRTtBQUVsRTtJQUF3QyxzQ0FBZ0I7SUFBeEQ7UUFBQSxxRUEyRkM7UUFoRlMsMkJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRS9CLGdCQUFVLEdBQW1CO1lBQ2xDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxFQUFFO1NBQ2pELENBQUM7UUFJSyxzQkFBZ0IsR0FBRyw2akhBQTZqSCxDQUFBO1FBRWhsSCx1QkFBaUIsR0FBMEIsSUFBSSxPQUFPLEVBQUUsQ0FBQTtRQUV4RCxzQkFBZ0IsR0FBc0I7WUFDM0MsRUFBRSxLQUFLLEVBQUUseUdBQXlHLEVBQUU7WUFDcEgsRUFBRSxLQUFLLEVBQUUsZ0lBQWdJLEVBQUU7WUFDM0ksRUFBRSxLQUFLLEVBQUUsNEdBQTRHLEVBQUU7WUFDdkgsRUFBRSxLQUFLLEVBQUUsZ0dBQWdHLEVBQUU7WUFDM0csRUFBRSxLQUFLLEVBQUUsdUVBQXVFLEVBQUU7WUFDbEYsRUFBRSxLQUFLLEVBQUUsMkdBQTJHLEVBQUU7U0FDdkgsQ0FBQztRQUVLLHVCQUFpQixHQUFzQjtZQUM1QyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsd0NBQXdDLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFO1NBQ25ILENBQUE7UUFFTSxZQUFNLEdBQWE7WUFDeEIsaUNBQWlDO1lBQ2pDLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLGlDQUFpQztTQUNsQyxDQUFBOztJQThDSCxDQUFDO0lBNUVHLENBQUM7SUFrQ0gsbUNBQU0sR0FBTixVQUFPLE9BQU87UUFBZCxpQkFjQztRQWJDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCO1NBQ2pDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO1lBQ2IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQXNCO1lBQ3JHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQWlCLEdBQWpCLFVBQWtCLEVBQUU7UUFBcEIsaUJBeUJDO1FBeEJDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxPQUFPLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQjtZQUNoQyxNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRTtnQkFDTixFQUFFLElBQUEsRUFBRSxJQUFJLEVBQUUsbUJBQW1CO2FBQzlCO1NBQ0YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJO2dCQUFFLE9BQU87WUFDaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDN0MsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNwRCxLQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNoQixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNwQyxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLENBQUM7NEJBQ1IsSUFBSSxFQUFFLEVBQUU7NEJBQ1IsSUFBSSxFQUFFLGVBQWU7NEJBQ3JCLE1BQU0sRUFBRTtnQ0FDTixJQUFJLEVBQUUsV0FBVzs2QkFDbEI7eUJBQ0YsQ0FBQztpQkFDSDthQUNGLENBQUM7WUFDRixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQTNGRCxDQUF3QyxnQkFBZ0IsR0EyRnZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF5b3V0RGF0YVNvdXJjZSB9IGZyb20gJ0BuNy1mcm9udGVuZC9jb3JlJztcbmltcG9ydCB7IElubmVyVGl0bGVEYXRhLCBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyB2aXMgZnJvbSAndmlzLXRpbWVsaW5lJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBNYWluU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL21haW4tc3RhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBNckxheW91dFN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1zdGF0ZS5zZXJ2aWNlJztcblxuLy8gZGVtbyBwYWdlOiBodHRwOi8vbG9jYWxob3N0OjQyMDAvdGltZWxpbmUvMjk5Mi9taXNzaW9uZS12ZW5lemlhXG5cbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uU2VydmljZTtcblxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xuXG4gIHByaXZhdGUgbWFpblN0YXRlOiBNYWluU3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgbGF5b3V0U3RhdGU6IE1yTGF5b3V0U3RhdGVTZXJ2aWNlO1xuXG4gIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuXG4gIHByaXZhdGUgbG9hZGVkUmVzb3VyY2VEZXRhaWxzID0gZmFsc2U7XG5cbiAgcHVibGljIHllYXJIZWFkZXI6IElubmVyVGl0bGVEYXRhID0ge1xuICAgIHRpdGxlOiB7IG1haW46IHsgdGV4dDogJ0xhIHZpdGEgZGkgUGV0cmFyY2EnIH0gfSxcbiAgfTs7XG5cbiAgcHVibGljIGV2ZW50SGVhZGVyOiBzdHJpbmc7XG5cbiAgcHVibGljIGV2ZW50RGVzY3JpcHRpb24gPSAnSW4gcXVlc3RhIHNlemlvbmUsIGN1cmF0YSBkYSBTaWx2aWEgUml6em8sIHNpIHRyb3ZhIGxhIHZpdGEgZGkgUGV0cmFyY2Egb3JnYW5penphdGEgYW5ubyBwZXIgYW5ubywgZSwgcXVhbmRvIHNpYSBwb3NzaWJpbGUsIG1lc2UgcGVyIG1lc2UgbyBhZGRpcml0dHVyYSBnaW9ybm8gcGVyIGdpb3Juby4gSWwgbGF2b3JvIMOoIHN0YXRvIGNvbmRvdHRvIG1lZGlhbnRlIHVubyBzcG9nbGlvIGRlbGxlIG9wZXJlIGRpIFBldHJhcmNhLCBkZWxsZSBsZXR0ZXJlIGRlaSBzdW9pIGNvcnJpc3BvbmRlbnRpIGUgZGVsbGEgcHJpbmNpcGFsZSBiaWJsaW9ncmFmaWEgcmVsYXRpdmEgYWxsYSBzdWEgdml0YS4gTm9uIHBvc3NlZGlhbW8gcHVydHJvcHBvIGFuY29yYSB1biBjb2RpY2UgZGlwbG9tYXRpY28gcGV0cmFyY2hlc2NvIG1hIHNpIMOoIG92dmlhbWVudGUgdGVudXRvIGNvbnRvIGRlaSBkb2N1bWVudGkgc2VnbmFsYXRpIGUgcHViYmxpY2F0aS4gTmVnbGkgc3R1ZGkgcGnDuSByZWNlbnRpIHNpIHRlbmRlIHNwZXNzbyBhIHNvdHRvbGluZWFyZSBsXFwnYXR0aXZpdMOgIGRpIGZhbHNpZmljYXppb25lIGRpIHNlIHN0ZXNzbyBzdm9sdGEgZGEgUGV0cmFyY2EgbmVsbGEgc3VhIG9wZXJhIGxldHRlcmFyaWEgZSBhIGRpZmZpZGFyZSBkaSBxdWFudG8gbHVpIHN0ZXNzbyBjaSBkaWNlLk1hIGlsIHB1bnRvIGRpIHBhcnRlbnphIGRpIHF1YWxzaWFzaSB0ZW50YXRpdm8gZGkgZmFyZSBsYSBiaW9ncmFmaWEgZGkgUGV0cmFyY2EgcmVzdGEgLSB2b2xlbnRpIG8gbm9sZW50aSAtIGlsIG1vbHRvIGNoZSBjaSBkaWNlIGx1aSBzdGVzc286IGNvbWUgc2NyaXZlIEUuSC5XaWxraW5zLCBWaXRhIGRlbCBQZXRyYXJjYSwgdHJhZC5kaSBSLkNlc2VyYW5pLCBudW92YSBlZGl6aW9uZSBhIGMuZGkgTC5DLlJvc3NpLCBNaWxhbm8gMjAwMywgcC4gMywgwqtFZ2xpIMOoIGFuY2hlIGdyYW5kZSAtIGdyYXppZSBzb3ByYXR0dXR0byBhbGxlIGNlbnRpbmFpYSBkaSBsZXR0ZXJlIGUgYWxsZSBub3RlIHNjcml0dGUgc3VpIG1hcmdpbmkgZGVsbGUgcGFnaW5lIGRlaSBzdW9pIGxpYnJpLCBjaGUgc29ubyBzdGF0ZSBjb24gdGFudGEgZGV2b3ppb25lIHN0dWRpYXRlIC0gcGVyIGlsIGZhdHRvIGNoZSBub2kgY29ub3NjaWFtbyBsZSBzdWUgZXNwZXJpZW56ZSBkaSB2aXRhIGNvbiBtb2x0YSBtYWdnaW9yZSBwcm9mb25kaXTDoCBjaGUgbm9uIHF1ZWxsZSBkaSBxdWFsc2lhc2kgYWx0cm8gZXNzZXJlIHVtYW5vIHZpc3N1dG8gcHJpbWEgZGkgbHVpwrsuRHVucXVlIG5lbGxvIHN0ZW5kZXJlIHF1ZXN0YSBjcm9ub2xvZ2lhIGNpIHNpIMOoIGF0dGVudXRpIGlsIHBpw7kgcG9zc2liaWxlIGEgcXVhbnRvIFBldHJhcmNhIHJhY2NvbnRhIGRpIHPDqSwgdHJhbm5lIHF1YW5kbyBsYSBkZXZpYXppb25lIGRhbGxhIHJlYWx0w6Agc2lhIGV2aWRlbnRlIGUgY29tcHJvdmF0YSBkYSBhbHRyZSB0ZXN0aW1vbmlhbnplIG8gZGVkdWNpYmlsZSBjb24gdW4gYnVvbiBncmFkbyBkaSBzaWN1cmV6emEuSW4gc2ludGVzaSwgcXVlc3RhIGNyb25vbG9naWEgYWNjZXR0YSBpbCByYWNjb250byBkaSBzw6kgY2hlIGx1aSBoYSB2b2x1dG8gdHJhbWFuZGFyZSBhaSBwb3N0ZXJpLkNvbVxcJ8OoIG5vdG8sIFBldHJhcmNhIGluIGdlbmVyZSBub24gc2VnbmF2YSBsXFwnYW5ubyBpbiBjYWxjZSBhbGxlIGxldHRlcmUgZSBtb2x0byBzcGVzc28gbGEgZGF0YSDDqCBkaXNjdXNzYS5TaSDDqCBzZW1wcmUgY2VyY2F0byBkaSBwcmVuZGVyZSBwb3NpemlvbmUgc2VndWVuZG8gbGEgcHJvcG9zdGEgY2hlIGEgbWUgYXBwYXJlIHBpw7kgY29udmluY2VudGUsIHRhbHZvbHRhIGFjY2VubmFuZG8gYW5jaGUgYWQgYWx0cmUuU2kgw6ggZGF0byBxdWFsY2hlIHBlc28gYWwgY3JpdGVyaW8gZGVsbGEgcG9zaXppb25lIGRpIHVuYSBsZXR0ZXJhIGFsbFxcJ2ludGVybm8gZGVsbGUgcmFjY29sdGUsIGNvbnNpZGVyYXRvIGxcXCdvcmRpbmUgcXVhc2kgY3Jvbm9sb2dpY28gY2hlIFBldHJhcmNhIHN0ZXNzbyBkaWNoaWFyYSBkaSBhdmVyIHNlZ3VpdG8oRmFtLiAyNCwgMTMsIDQgwqtwcmV0ZXIgaGFzIGVuaW0gdWx0aW1hcyB2ZXRlcmlidXMgaW5zY3JpcHRhcyBpbGx1c3RyaWJ1cywgcXVhcyBwcm9wdGVyIHNpbWlsaXR1ZGluZW0gbm92aXRhdGlzIHNjaWVucyB1bnVtIHNpbXVsIGluIGxvY3VtIGNvbnR1bGksIGFjIHByZXRlciBwcmltYW0sIHF1ZSBkaWN0YXRhIHNlcml1cyBwcmV2ZW5pdCBjb21pdGVzIGV0IGxvY3VtIHByZWZhdGlvbmlzIG9idGludWl0LCBjZXRlcmEgcGVuZSBvbW5pYSBxdW8gaW5jaWRlcmFudCBzY3JpcHRhIHN1bnQgb3JkaW5lwrspIGUgYSBjdWkgaW4gbGluZWEgZGkgbWFzc2ltYSBzaSDDqCByZWFsbWVudGUgYXR0ZW51dG8ocXVhbmRvIGNpIHNvbm8gcGF0ZW50aSBzY29zdGFtZW50aSBkYWxsXFwnb3JkaW5lIGNyb25vbG9naWNvIG5vbiBkaSByYWRvIHNlIG5lIGNhcGlzY2UgbGEgY2F1c2EsIGNvbWUgcGVyIGVzZW1waW8gbFxcJ2VzaWdlbnphIGRpIGNvbGxvY2FyZSBhbGxcXCdpbml6aW8gbyBhbGxhIGZpbmUgZGVpIGxpYnJpIGxldHRlcmUgZGkgcGFydGljb2xhcmUgcmlsaWV2bykuIDxicj5JIHRpdG9sZXR0aSBuZWxsYSB0aW1lbGluZSBzZWduYWxhbm8gaW4gYnJldmUgZ2xpIGF2dmVuaW1lbnRpIHNhbGllbnRpIGRlZ2xpIGFubmkgbyBkZWkgcGVyaW9kaSBjb25zaWRlcmF0aS5BcHJlbmRvIGxhIHNjaGVkYSBsXFwndXRlbnRlIHRyb3ZlcsOgIGxlIG5vdGl6aWUgb3JnYW5penphdGUgaW4gbW9kbyBjaGUgb2duaSBjYXBvdmVyc28gY29ycmlzcG9uZGUgYSB1bmEgZGF0YSBkaXZlcnNhLiBEaWZmZXJlbnRpIGF2dmVuaW1lbnRpIGF2ZW50aSBsYSBzdGVzc2EgZGF0YSBoYW5ubyBvZ251bm8gdW4gY2Fwb3ZlcnNvLiBRdWFuZG8gaWwgY2Fwb3ZlcnNvIG5vbiBjb21pbmNpYSBjb24gdW5hIGRhdGEgdnVvbCBkaXJlIGNoZSDDqCBpbXBvc3NpYmlsZSBmaXNzYXJsYSwgbWEgbGEgc3VhIGNvbGxvY2F6aW9uZSBhbGxcXCdpbnRlcm5vIGRlbGxhIGNyb25vbG9naWEgaW5kaWNhIGFwcHJvc3NpbWF0aXZhbWVudGUgYW50ZXJpb3JpdMOgIG8gc2VyaW9yaXTDoCByaXNwZXR0byBhZCBhbHRyaSBldmVudGkgZGVsbG8gc3Rlc3NvIGFubm8gbyBkZWxsbyBzdGVzc28gcGVyaW9kby5HbGkgYXZ2ZW5pbWVudGkgY2hlIHBvc3Nvbm8gc29sbyBlc3NlcmUgcmljb25kb3R0aSBnZW5lcmljYW1lbnRlIGEgdW4gZGV0ZXJtaW5hdG8gYW5ubyBzb25vIGRpIG5vcm1hIHJhZ2dydXBwYXRpIGluIGZvbmRvLkxhIGNyb25vbG9naWEgw6ggY29sbGVnYXRhIGFsbGUgb3BlcmUgZSBhaSBtYW5vc2NyaXR0aSB2aWEgdmlhIG1lbnppb25hdGkgZSBhIHVuYSBtYXBwYSBjaGUgbW9zdHJhIHN1bGxhIGNhcnRhIGdlb2dyYWZpY2EgbGUgdmFyaWUgbG9jYWxpdMOgIHRvY2NhdGUgZGEgUGV0cmFyY2EuIEFsbFxcJ2ludGVybm8gZGVsbGUgc2luZ29sZSBzY2hlZGUgbGUgb3BlcmUgZGkgUGV0cmFyY2EgZSBsYSBiaWJsaW9ncmFmaWEgc29ubyBjaXRhdGUgaW4gZm9ybWEgYWJicmV2aWF0YTogbGUgYWJicmV2aWF6aW9uaSBkZWxsZSBvcGVyZSBzb25vIHF1ZWxsZSB1dGlsaXp6YXRlIGFsbFxcJ2ludGVybm8gZGVsIHBvcnRhbGU7IGxlIGFsdHJlIHNvbm8gc2Npb2x0ZSBuZWwgY2FtcG8gc3BlY2lmaWNvIGRlcHV0YXRvIGFsbGEgYmlibGlvZ3JhZmlhLidcblxuICBwdWJsaWMgdGltZWxpbmVMaXN0ZW5lciQ6IFN1YmplY3Q8dmlzLlRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KClcblxuICBwdWJsaWMgYmlibGlvZ3JhcGh5TW9jazogSXRlbVByZXZpZXdEYXRhW10gPSBbXG4gICAgeyB0aXRsZTogJ00uSi5MLiBIb2NrZXIsIEJpYmxpb3RoZWNhIEhlaWxzYnJvbm5lbnNpcyBzaXZlIENhdGFsb2d1cyBsaWJyb3J1bSBvbW5pdW0uLi4sIE5raXJuYmVyZyAxNzMxLCA1NiBuLiA2OCAnIH0sXG4gICAgeyB0aXRsZTogJ0ouQy4gSXJtaXNjaGVyLCBIYW5kc2NocmlmdGVuLUthdGFsb2cgZGVyIEtnbC4gVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEZyYW5rZnVydCBhLiBNLi1FcmxhbmdlbiAxODUyLCAxOTEtMTkyIG4uIDY4NiAnIH0sXG4gICAgeyB0aXRsZTogJ0guIEZsaXNjaGVyLCBEaWUgbGF0ZWluaXNjaGVuIFBhcGllcmhhbmRzY2hyaWZ0ZW4gZGVyIFVuaXZlcnNpdMOgdHNiaWJsaW90aGVrIEVybGFuZ2VuLCBFcmxhbmdlbiAxOTM2LCAzNzEgJyB9LFxuICAgIHsgdGl0bGU6ICdBLiBTb3R0aWxpLCBJIGNvZGljaSBkZWwgUGV0cmFyY2EgbmVsbGEgR2VybWFuaWEgT2NjaWRlbnRhbGUsIGluIMKrSU1VwrssIFggKDE5NjcpLCBwcC4gNDg2LTQ4NyAnIH0sXG4gICAgeyB0aXRsZTogJ0YuIFBldHJhcmNhLCBTZW5pbGUgViAyLCBhIGN1cmEgZGkgTS4gQmVydMOpLCBGaXJlbnplIDE5OTgsIHBwLiAzOC0zOSAnIH0sXG4gICAgeyB0aXRsZTogJ0guIEZpc2NoZXIsIERpZSBsYXRlaW5pc2NoZW4gUGFwaWVyaGFuZHNjaHJpZnRlbiBkZXIgVW5pdmVyc2l0w6B0c2JpYmxpb3RoZWsgRXJsYW5nZW4sIEVybGFuZ2VuIDE5MzYsIDM3MSAnIH0sXG4gIF07XG5cbiAgcHVibGljIGNvbm5lY3RlZE1hcHNNb2NrOiBJdGVtUHJldmlld0RhdGFbXSA9IFtcbiAgICB7IHRpdGxlOiAnS3VueXUgV2FuZ3VvIFF1YW50dScsIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsIGltYWdlOiAnL2Fzc2V0cy9tb2Nrcy9wYXBlci5wbmcnIH1cbiAgXVxuXG4gIHB1YmxpYyBpbWFnZXM6IHN0cmluZ1tdID0gW1xuICAgICdodHRwczovL2kuaW1ndXIuY29tL1dNM0VHOWQucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9aRFFtbG5YLnBuZycsXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vSGhLeG9aYi5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL2MzdG9uQWoucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9FZjdpekdQLnBuZycsXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vOFhwem9pZy5wbmcnLFxuICAgICdodHRwczovL2kuaW1ndXIuY29tL3loRjBMQ3QucG5nJyxcbiAgICAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9iTWZIZkVoLnBuZycsXG4gIF1cblxuICBwdWJsaWMgZXZlbnRUaXRsZTogc3RyaW5nO1xuXG4gIG9uSW5pdChwYXlsb2FkKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gcGF5bG9hZC5jb25maWd1cmF0aW9uO1xuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcbiAgICB0aGlzLnJvdXRlID0gcGF5bG9hZC5yb3V0ZTtcbiAgICB0aGlzLm9uZSgnbXItbWFwJykudXBkYXRlKHt9KTtcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XG4gICAgICB0aGlzLm9uZSgnbXItdGltZWxpbmUnKS51cGRhdGUoZCk7XG4gICAgfSk7XG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgodGltZWxpbmU6IHZpcy5UaW1lbGluZSkgPT4ge1xuICAgICAgdGhpcy50aW1lbGluZUxpc3RlbmVyJC5uZXh0KHRpbWVsaW5lKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVBhZ2VEZXRhaWxzKGlkKSB7XG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcbiAgICAgIG9uRXJyb3I6IChlKSA9PiBjb25zb2xlLmVycm9yKGUpLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQsIHR5cGU6ICd2aWV3cy90aW1lLWV2ZW50cydcbiAgICAgIH1cbiAgICB9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMgfHwgcmVzID09IG51bGwpIHJldHVybjtcbiAgICAgIHRoaXMuZXZlbnRIZWFkZXIgPSByZXMuc2VjdGlvbnMuaGVhZGVyLnRpdGxlO1xuICAgICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gcmVzLnNlY3Rpb25zLmhlYWRlci5jb250ZW50O1xuICAgICAgdGhpcy55ZWFySGVhZGVyID0ge1xuICAgICAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6IHJlcy50aXRsZSB9IH0sXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXG4gICAgICAgICAgICBhbmNob3I6IHtcbiAgICAgICAgICAgICAgaHJlZjogJy90aW1lbGluZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5sb2FkZWRSZXNvdXJjZURldGFpbHMgPSB0cnVlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=