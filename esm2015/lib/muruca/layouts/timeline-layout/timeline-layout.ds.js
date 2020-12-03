import { LayoutDataSource } from '@n7-frontend/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
// demo page: http://localhost:4200/timeline/2992/missione-venezia
export class MrTimelineLayoutDS extends LayoutDataSource {
    constructor() {
        super(...arguments);
        this.loadedResourceDetails = false;
        this.yearHeader = {
            title: { main: { text: 'La vita di Petrarca' } },
        };
        this.eventDescription = 'In questa sezione, curata da Silvia Rizzo, si trova la vita di Petrarca organizzata anno per anno, e, quando sia possibile, mese per mese o addirittura giorno per giorno. Il lavoro è stato condotto mediante uno spoglio delle opere di Petrarca, delle lettere dei suoi corrispondenti e della principale bibliografia relativa alla sua vita. Non possediamo purtroppo ancora un codice diplomatico petrarchesco ma si è ovviamente tenuto conto dei documenti segnalati e pubblicati. Negli studi più recenti si tende spesso a sottolineare l\'attività di falsificazione di se stesso svolta da Petrarca nella sua opera letteraria e a diffidare di quanto lui stesso ci dice.Ma il punto di partenza di qualsiasi tentativo di fare la biografia di Petrarca resta - volenti o nolenti - il molto che ci dice lui stesso: come scrive E.H.Wilkins, Vita del Petrarca, trad.di R.Ceserani, nuova edizione a c.di L.C.Rossi, Milano 2003, p. 3, «Egli è anche grande - grazie soprattutto alle centinaia di lettere e alle note scritte sui margini delle pagine dei suoi libri, che sono state con tanta devozione studiate - per il fatto che noi conosciamo le sue esperienze di vita con molta maggiore profondità che non quelle di qualsiasi altro essere umano vissuto prima di lui».Dunque nello stendere questa cronologia ci si è attenuti il più possibile a quanto Petrarca racconta di sé, tranne quando la deviazione dalla realtà sia evidente e comprovata da altre testimonianze o deducibile con un buon grado di sicurezza.In sintesi, questa cronologia accetta il racconto di sé che lui ha voluto tramandare ai posteri.Com\'è noto, Petrarca in genere non segnava l\'anno in calce alle lettere e molto spesso la data è discussa.Si è sempre cercato di prendere posizione seguendo la proposta che a me appare più convincente, talvolta accennando anche ad altre.Si è dato qualche peso al criterio della posizione di una lettera all\'interno delle raccolte, considerato l\'ordine quasi cronologico che Petrarca stesso dichiara di aver seguito(Fam. 24, 13, 4 «preter has enim ultimas veteribus inscriptas illustribus, quas propter similitudinem novitatis sciens unum simul in locum contuli, ac preter primam, que dictata serius prevenit comites et locum prefationis obtinuit, cetera pene omnia quo inciderant scripta sunt ordine») e a cui in linea di massima si è realmente attenuto(quando ci sono patenti scostamenti dall\'ordine cronologico non di rado se ne capisce la causa, come per esempio l\'esigenza di collocare all\'inizio o alla fine dei libri lettere di particolare rilievo). <br>I titoletti nella timeline segnalano in breve gli avvenimenti salienti degli anni o dei periodi considerati.Aprendo la scheda l\'utente troverà le notizie organizzate in modo che ogni capoverso corrisponde a una data diversa. Differenti avvenimenti aventi la stessa data hanno ognuno un capoverso. Quando il capoverso non comincia con una data vuol dire che è impossibile fissarla, ma la sua collocazione all\'interno della cronologia indica approssimativamente anteriorità o seriorità rispetto ad altri eventi dello stesso anno o dello stesso periodo.Gli avvenimenti che possono solo essere ricondotti genericamente a un determinato anno sono di norma raggruppati in fondo.La cronologia è collegata alle opere e ai manoscritti via via menzionati e a una mappa che mostra sulla carta geografica le varie località toccate da Petrarca. All\'interno delle singole schede le opere di Petrarca e la bibliografia sono citate in forma abbreviata: le abbreviazioni delle opere sono quelle utilizzate all\'interno del portale; le altre sono sciolte nel campo specifico deputato alla bibliografia.';
        this.timelineListener$ = new Subject();
        this.bibliographyMock = [
            { title: 'M.J.L. Hocker, Bibliotheca Heilsbronnensis sive Catalogus librorum omnium..., Nkirnberg 1731, 56 n. 68 ' },
            { title: 'J.C. Irmischer, Handschriften-Katalog der Kgl. Universitàtsbibliothek Erlangen, Frankfurt a. M.-Erlangen 1852, 191-192 n. 686 ' },
            { title: 'H. Flischer, Die lateinischen Papierhandschriften der Universitàtsbibliothek Erlangen, Erlangen 1936, 371 ' },
            { title: 'A. Sottili, I codici del Petrarca nella Germania Occidentale, in «IMU», X (1967), pp. 486-487 ' },
            { title: 'F. Petrarca, Senile V 2, a cura di M. Berté, Firenze 1998, pp. 38-39 ' },
            { title: 'H. Fischer, Die lateinischen Papierhandschriften der Universitàtsbibliothek Erlangen, Erlangen 1936, 371 ' },
        ];
        this.connectedMapsMock = [
            { title: 'Kunyu Wanguo Quantu', text: 'Complete Map of all mountains and seas', image: '/assets/mocks/paper.png' }
        ];
        this.images = [
            'https://i.imgur.com/WM3EG9d.png',
            'https://i.imgur.com/ZDQmlnX.png',
            'https://i.imgur.com/HhKxoZb.png',
            'https://i.imgur.com/c3tonAj.png',
            'https://i.imgur.com/Ef7izGP.png',
            'https://i.imgur.com/8Xpzoig.png',
            'https://i.imgur.com/yhF0LCt.png',
            'https://i.imgur.com/bMfHfEh.png',
        ];
    }
    ;
    onInit(payload) {
        this.configuration = payload.configuration;
        this.communication = payload.communication;
        this.route = payload.route;
        this.one('mr-map').update({});
        this.communication.request$('timeline', {
            method: 'GET',
            onError: (e) => console.error(e)
        }).subscribe((d) => {
            this.one('mr-timeline').update(d);
        });
        this.getWidgetDataSource('mr-timeline').timelineLoaded$.pipe(first()).subscribe((timeline) => {
            this.timelineListener$.next(timeline);
        });
    }
    updatePageDetails(id) {
        this.communication.request$('resource', {
            onError: (e) => console.error(e),
            method: 'POST',
            params: {
                id, type: 'views/time-events'
            }
        }).subscribe((res) => {
            if (!res || res == null)
                return;
            this.eventHeader = res.sections.header.title;
            this.eventDescription = res.sections.header.content;
            this.yearHeader = {
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
            this.loadedResourceDetails = true;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtbGF5b3V0LmRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG43LWZyb250ZW5kL2JvaWxlcnBsYXRlLyIsInNvdXJjZXMiOlsibGliL211cnVjYS9sYXlvdXRzL3RpbWVsaW5lLWxheW91dC90aW1lbGluZS1sYXlvdXQuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNdkMsa0VBQWtFO0FBRWxFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFBeEQ7O1FBV1UsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBRS9CLGVBQVUsR0FBbUI7WUFDbEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEVBQUU7U0FDakQsQ0FBQztRQUlLLHFCQUFnQixHQUFHLDZqSEFBNmpILENBQUE7UUFFaGxILHNCQUFpQixHQUEwQixJQUFJLE9BQU8sRUFBRSxDQUFBO1FBRXhELHFCQUFnQixHQUFzQjtZQUMzQyxFQUFFLEtBQUssRUFBRSx5R0FBeUcsRUFBRTtZQUNwSCxFQUFFLEtBQUssRUFBRSxnSUFBZ0ksRUFBRTtZQUMzSSxFQUFFLEtBQUssRUFBRSw0R0FBNEcsRUFBRTtZQUN2SCxFQUFFLEtBQUssRUFBRSxnR0FBZ0csRUFBRTtZQUMzRyxFQUFFLEtBQUssRUFBRSx1RUFBdUUsRUFBRTtZQUNsRixFQUFFLEtBQUssRUFBRSwyR0FBMkcsRUFBRTtTQUN2SCxDQUFDO1FBRUssc0JBQWlCLEdBQXNCO1lBQzVDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSx3Q0FBd0MsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUU7U0FDbkgsQ0FBQTtRQUVNLFdBQU0sR0FBYTtZQUN4QixpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsaUNBQWlDO1lBQ2pDLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsaUNBQWlDO1NBQ2xDLENBQUE7SUE4Q0gsQ0FBQztJQTVFRyxDQUFDO0lBa0NILE1BQU0sQ0FBQyxPQUFPO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3RDLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQXNCLEVBQUUsRUFBRTtZQUN6RyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQUU7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLElBQUksRUFBRSxtQkFBbUI7YUFDOUI7U0FDRixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSTtnQkFBRSxPQUFPO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDaEIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDcEMsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDOzRCQUNSLElBQUksRUFBRSxFQUFFOzRCQUNSLElBQUksRUFBRSxlQUFlOzRCQUNyQixNQUFNLEVBQUU7Z0NBQ04sSUFBSSxFQUFFLFdBQVc7NkJBQ2xCO3lCQUNGLENBQUM7aUJBQ0g7YUFDRixDQUFDO1lBQ0YsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExheW91dERhdGFTb3VyY2UgfSBmcm9tICdAbjctZnJvbnRlbmQvY29yZSc7XHJcbmltcG9ydCB7IElubmVyVGl0bGVEYXRhLCBJdGVtUHJldmlld0RhdGEgfSBmcm9tICdAbjctZnJvbnRlbmQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgdmlzIGZyb20gJ3Zpcy10aW1lbGluZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbW11bmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IE1haW5TdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWFpbi1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTXJMYXlvdXRTdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtc3RhdGUuc2VydmljZSc7XHJcblxyXG4vLyBkZW1vIHBhZ2U6IGh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC90aW1lbGluZS8yOTkyL21pc3Npb25lLXZlbmV6aWFcclxuXHJcbmV4cG9ydCBjbGFzcyBNclRpbWVsaW5lTGF5b3V0RFMgZXh0ZW5kcyBMYXlvdXREYXRhU291cmNlIHtcclxuICBwcml2YXRlIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGNvbW11bmljYXRpb246IENvbW11bmljYXRpb25TZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIG1haW5TdGF0ZTogTWFpblN0YXRlU2VydmljZTtcclxuXHJcbiAgcHJpdmF0ZSBsYXlvdXRTdGF0ZTogTXJMYXlvdXRTdGF0ZVNlcnZpY2U7XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG5cclxuICBwcml2YXRlIGxvYWRlZFJlc291cmNlRGV0YWlscyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgeWVhckhlYWRlcjogSW5uZXJUaXRsZURhdGEgPSB7XHJcbiAgICB0aXRsZTogeyBtYWluOiB7IHRleHQ6ICdMYSB2aXRhIGRpIFBldHJhcmNhJyB9IH0sXHJcbiAgfTs7XHJcblxyXG4gIHB1YmxpYyBldmVudEhlYWRlcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbiA9ICdJbiBxdWVzdGEgc2V6aW9uZSwgY3VyYXRhIGRhIFNpbHZpYSBSaXp6bywgc2kgdHJvdmEgbGEgdml0YSBkaSBQZXRyYXJjYSBvcmdhbml6emF0YSBhbm5vIHBlciBhbm5vLCBlLCBxdWFuZG8gc2lhIHBvc3NpYmlsZSwgbWVzZSBwZXIgbWVzZSBvIGFkZGlyaXR0dXJhIGdpb3JubyBwZXIgZ2lvcm5vLiBJbCBsYXZvcm8gw6ggc3RhdG8gY29uZG90dG8gbWVkaWFudGUgdW5vIHNwb2dsaW8gZGVsbGUgb3BlcmUgZGkgUGV0cmFyY2EsIGRlbGxlIGxldHRlcmUgZGVpIHN1b2kgY29ycmlzcG9uZGVudGkgZSBkZWxsYSBwcmluY2lwYWxlIGJpYmxpb2dyYWZpYSByZWxhdGl2YSBhbGxhIHN1YSB2aXRhLiBOb24gcG9zc2VkaWFtbyBwdXJ0cm9wcG8gYW5jb3JhIHVuIGNvZGljZSBkaXBsb21hdGljbyBwZXRyYXJjaGVzY28gbWEgc2kgw6ggb3Z2aWFtZW50ZSB0ZW51dG8gY29udG8gZGVpIGRvY3VtZW50aSBzZWduYWxhdGkgZSBwdWJibGljYXRpLiBOZWdsaSBzdHVkaSBwacO5IHJlY2VudGkgc2kgdGVuZGUgc3Blc3NvIGEgc290dG9saW5lYXJlIGxcXCdhdHRpdml0w6AgZGkgZmFsc2lmaWNhemlvbmUgZGkgc2Ugc3Rlc3NvIHN2b2x0YSBkYSBQZXRyYXJjYSBuZWxsYSBzdWEgb3BlcmEgbGV0dGVyYXJpYSBlIGEgZGlmZmlkYXJlIGRpIHF1YW50byBsdWkgc3Rlc3NvIGNpIGRpY2UuTWEgaWwgcHVudG8gZGkgcGFydGVuemEgZGkgcXVhbHNpYXNpIHRlbnRhdGl2byBkaSBmYXJlIGxhIGJpb2dyYWZpYSBkaSBQZXRyYXJjYSByZXN0YSAtIHZvbGVudGkgbyBub2xlbnRpIC0gaWwgbW9sdG8gY2hlIGNpIGRpY2UgbHVpIHN0ZXNzbzogY29tZSBzY3JpdmUgRS5ILldpbGtpbnMsIFZpdGEgZGVsIFBldHJhcmNhLCB0cmFkLmRpIFIuQ2VzZXJhbmksIG51b3ZhIGVkaXppb25lIGEgYy5kaSBMLkMuUm9zc2ksIE1pbGFubyAyMDAzLCBwLiAzLCDCq0VnbGkgw6ggYW5jaGUgZ3JhbmRlIC0gZ3JhemllIHNvcHJhdHR1dHRvIGFsbGUgY2VudGluYWlhIGRpIGxldHRlcmUgZSBhbGxlIG5vdGUgc2NyaXR0ZSBzdWkgbWFyZ2luaSBkZWxsZSBwYWdpbmUgZGVpIHN1b2kgbGlicmksIGNoZSBzb25vIHN0YXRlIGNvbiB0YW50YSBkZXZvemlvbmUgc3R1ZGlhdGUgLSBwZXIgaWwgZmF0dG8gY2hlIG5vaSBjb25vc2NpYW1vIGxlIHN1ZSBlc3BlcmllbnplIGRpIHZpdGEgY29uIG1vbHRhIG1hZ2dpb3JlIHByb2ZvbmRpdMOgIGNoZSBub24gcXVlbGxlIGRpIHF1YWxzaWFzaSBhbHRybyBlc3NlcmUgdW1hbm8gdmlzc3V0byBwcmltYSBkaSBsdWnCuy5EdW5xdWUgbmVsbG8gc3RlbmRlcmUgcXVlc3RhIGNyb25vbG9naWEgY2kgc2kgw6ggYXR0ZW51dGkgaWwgcGnDuSBwb3NzaWJpbGUgYSBxdWFudG8gUGV0cmFyY2EgcmFjY29udGEgZGkgc8OpLCB0cmFubmUgcXVhbmRvIGxhIGRldmlhemlvbmUgZGFsbGEgcmVhbHTDoCBzaWEgZXZpZGVudGUgZSBjb21wcm92YXRhIGRhIGFsdHJlIHRlc3RpbW9uaWFuemUgbyBkZWR1Y2liaWxlIGNvbiB1biBidW9uIGdyYWRvIGRpIHNpY3VyZXp6YS5JbiBzaW50ZXNpLCBxdWVzdGEgY3Jvbm9sb2dpYSBhY2NldHRhIGlsIHJhY2NvbnRvIGRpIHPDqSBjaGUgbHVpIGhhIHZvbHV0byB0cmFtYW5kYXJlIGFpIHBvc3RlcmkuQ29tXFwnw6ggbm90bywgUGV0cmFyY2EgaW4gZ2VuZXJlIG5vbiBzZWduYXZhIGxcXCdhbm5vIGluIGNhbGNlIGFsbGUgbGV0dGVyZSBlIG1vbHRvIHNwZXNzbyBsYSBkYXRhIMOoIGRpc2N1c3NhLlNpIMOoIHNlbXByZSBjZXJjYXRvIGRpIHByZW5kZXJlIHBvc2l6aW9uZSBzZWd1ZW5kbyBsYSBwcm9wb3N0YSBjaGUgYSBtZSBhcHBhcmUgcGnDuSBjb252aW5jZW50ZSwgdGFsdm9sdGEgYWNjZW5uYW5kbyBhbmNoZSBhZCBhbHRyZS5TaSDDqCBkYXRvIHF1YWxjaGUgcGVzbyBhbCBjcml0ZXJpbyBkZWxsYSBwb3NpemlvbmUgZGkgdW5hIGxldHRlcmEgYWxsXFwnaW50ZXJubyBkZWxsZSByYWNjb2x0ZSwgY29uc2lkZXJhdG8gbFxcJ29yZGluZSBxdWFzaSBjcm9ub2xvZ2ljbyBjaGUgUGV0cmFyY2Egc3Rlc3NvIGRpY2hpYXJhIGRpIGF2ZXIgc2VndWl0byhGYW0uIDI0LCAxMywgNCDCq3ByZXRlciBoYXMgZW5pbSB1bHRpbWFzIHZldGVyaWJ1cyBpbnNjcmlwdGFzIGlsbHVzdHJpYnVzLCBxdWFzIHByb3B0ZXIgc2ltaWxpdHVkaW5lbSBub3ZpdGF0aXMgc2NpZW5zIHVudW0gc2ltdWwgaW4gbG9jdW0gY29udHVsaSwgYWMgcHJldGVyIHByaW1hbSwgcXVlIGRpY3RhdGEgc2VyaXVzIHByZXZlbml0IGNvbWl0ZXMgZXQgbG9jdW0gcHJlZmF0aW9uaXMgb2J0aW51aXQsIGNldGVyYSBwZW5lIG9tbmlhIHF1byBpbmNpZGVyYW50IHNjcmlwdGEgc3VudCBvcmRpbmXCuykgZSBhIGN1aSBpbiBsaW5lYSBkaSBtYXNzaW1hIHNpIMOoIHJlYWxtZW50ZSBhdHRlbnV0byhxdWFuZG8gY2kgc29ubyBwYXRlbnRpIHNjb3N0YW1lbnRpIGRhbGxcXCdvcmRpbmUgY3Jvbm9sb2dpY28gbm9uIGRpIHJhZG8gc2UgbmUgY2FwaXNjZSBsYSBjYXVzYSwgY29tZSBwZXIgZXNlbXBpbyBsXFwnZXNpZ2VuemEgZGkgY29sbG9jYXJlIGFsbFxcJ2luaXppbyBvIGFsbGEgZmluZSBkZWkgbGlicmkgbGV0dGVyZSBkaSBwYXJ0aWNvbGFyZSByaWxpZXZvKS4gPGJyPkkgdGl0b2xldHRpIG5lbGxhIHRpbWVsaW5lIHNlZ25hbGFubyBpbiBicmV2ZSBnbGkgYXZ2ZW5pbWVudGkgc2FsaWVudGkgZGVnbGkgYW5uaSBvIGRlaSBwZXJpb2RpIGNvbnNpZGVyYXRpLkFwcmVuZG8gbGEgc2NoZWRhIGxcXCd1dGVudGUgdHJvdmVyw6AgbGUgbm90aXppZSBvcmdhbml6emF0ZSBpbiBtb2RvIGNoZSBvZ25pIGNhcG92ZXJzbyBjb3JyaXNwb25kZSBhIHVuYSBkYXRhIGRpdmVyc2EuIERpZmZlcmVudGkgYXZ2ZW5pbWVudGkgYXZlbnRpIGxhIHN0ZXNzYSBkYXRhIGhhbm5vIG9nbnVubyB1biBjYXBvdmVyc28uIFF1YW5kbyBpbCBjYXBvdmVyc28gbm9uIGNvbWluY2lhIGNvbiB1bmEgZGF0YSB2dW9sIGRpcmUgY2hlIMOoIGltcG9zc2liaWxlIGZpc3NhcmxhLCBtYSBsYSBzdWEgY29sbG9jYXppb25lIGFsbFxcJ2ludGVybm8gZGVsbGEgY3Jvbm9sb2dpYSBpbmRpY2EgYXBwcm9zc2ltYXRpdmFtZW50ZSBhbnRlcmlvcml0w6AgbyBzZXJpb3JpdMOgIHJpc3BldHRvIGFkIGFsdHJpIGV2ZW50aSBkZWxsbyBzdGVzc28gYW5ubyBvIGRlbGxvIHN0ZXNzbyBwZXJpb2RvLkdsaSBhdnZlbmltZW50aSBjaGUgcG9zc29ubyBzb2xvIGVzc2VyZSByaWNvbmRvdHRpIGdlbmVyaWNhbWVudGUgYSB1biBkZXRlcm1pbmF0byBhbm5vIHNvbm8gZGkgbm9ybWEgcmFnZ3J1cHBhdGkgaW4gZm9uZG8uTGEgY3Jvbm9sb2dpYSDDqCBjb2xsZWdhdGEgYWxsZSBvcGVyZSBlIGFpIG1hbm9zY3JpdHRpIHZpYSB2aWEgbWVuemlvbmF0aSBlIGEgdW5hIG1hcHBhIGNoZSBtb3N0cmEgc3VsbGEgY2FydGEgZ2VvZ3JhZmljYSBsZSB2YXJpZSBsb2NhbGl0w6AgdG9jY2F0ZSBkYSBQZXRyYXJjYS4gQWxsXFwnaW50ZXJubyBkZWxsZSBzaW5nb2xlIHNjaGVkZSBsZSBvcGVyZSBkaSBQZXRyYXJjYSBlIGxhIGJpYmxpb2dyYWZpYSBzb25vIGNpdGF0ZSBpbiBmb3JtYSBhYmJyZXZpYXRhOiBsZSBhYmJyZXZpYXppb25pIGRlbGxlIG9wZXJlIHNvbm8gcXVlbGxlIHV0aWxpenphdGUgYWxsXFwnaW50ZXJubyBkZWwgcG9ydGFsZTsgbGUgYWx0cmUgc29ubyBzY2lvbHRlIG5lbCBjYW1wbyBzcGVjaWZpY28gZGVwdXRhdG8gYWxsYSBiaWJsaW9ncmFmaWEuJ1xyXG5cclxuICBwdWJsaWMgdGltZWxpbmVMaXN0ZW5lciQ6IFN1YmplY3Q8dmlzLlRpbWVsaW5lPiA9IG5ldyBTdWJqZWN0KClcclxuXHJcbiAgcHVibGljIGJpYmxpb2dyYXBoeU1vY2s6IEl0ZW1QcmV2aWV3RGF0YVtdID0gW1xyXG4gICAgeyB0aXRsZTogJ00uSi5MLiBIb2NrZXIsIEJpYmxpb3RoZWNhIEhlaWxzYnJvbm5lbnNpcyBzaXZlIENhdGFsb2d1cyBsaWJyb3J1bSBvbW5pdW0uLi4sIE5raXJuYmVyZyAxNzMxLCA1NiBuLiA2OCAnIH0sXHJcbiAgICB7IHRpdGxlOiAnSi5DLiBJcm1pc2NoZXIsIEhhbmRzY2hyaWZ0ZW4tS2F0YWxvZyBkZXIgS2dsLiBVbml2ZXJzaXTDoHRzYmlibGlvdGhlayBFcmxhbmdlbiwgRnJhbmtmdXJ0IGEuIE0uLUVybGFuZ2VuIDE4NTIsIDE5MS0xOTIgbi4gNjg2ICcgfSxcclxuICAgIHsgdGl0bGU6ICdILiBGbGlzY2hlciwgRGllIGxhdGVpbmlzY2hlbiBQYXBpZXJoYW5kc2NocmlmdGVuIGRlciBVbml2ZXJzaXTDoHRzYmlibGlvdGhlayBFcmxhbmdlbiwgRXJsYW5nZW4gMTkzNiwgMzcxICcgfSxcclxuICAgIHsgdGl0bGU6ICdBLiBTb3R0aWxpLCBJIGNvZGljaSBkZWwgUGV0cmFyY2EgbmVsbGEgR2VybWFuaWEgT2NjaWRlbnRhbGUsIGluIMKrSU1VwrssIFggKDE5NjcpLCBwcC4gNDg2LTQ4NyAnIH0sXHJcbiAgICB7IHRpdGxlOiAnRi4gUGV0cmFyY2EsIFNlbmlsZSBWIDIsIGEgY3VyYSBkaSBNLiBCZXJ0w6ksIEZpcmVuemUgMTk5OCwgcHAuIDM4LTM5ICcgfSxcclxuICAgIHsgdGl0bGU6ICdILiBGaXNjaGVyLCBEaWUgbGF0ZWluaXNjaGVuIFBhcGllcmhhbmRzY2hyaWZ0ZW4gZGVyIFVuaXZlcnNpdMOgdHNiaWJsaW90aGVrIEVybGFuZ2VuLCBFcmxhbmdlbiAxOTM2LCAzNzEgJyB9LFxyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0ZWRNYXBzTW9jazogSXRlbVByZXZpZXdEYXRhW10gPSBbXHJcbiAgICB7IHRpdGxlOiAnS3VueXUgV2FuZ3VvIFF1YW50dScsIHRleHQ6ICdDb21wbGV0ZSBNYXAgb2YgYWxsIG1vdW50YWlucyBhbmQgc2VhcycsIGltYWdlOiAnL2Fzc2V0cy9tb2Nrcy9wYXBlci5wbmcnIH1cclxuICBdXHJcblxyXG4gIHB1YmxpYyBpbWFnZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vV00zRUc5ZC5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vWkRRbWxuWC5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vSGhLeG9aYi5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vYzN0b25Bai5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vRWY3aXpHUC5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vOFhwem9pZy5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20veWhGMExDdC5wbmcnLFxyXG4gICAgJ2h0dHBzOi8vaS5pbWd1ci5jb20vYk1mSGZFaC5wbmcnLFxyXG4gIF1cclxuXHJcbiAgcHVibGljIGV2ZW50VGl0bGU6IHN0cmluZztcclxuXHJcbiAgb25Jbml0KHBheWxvYWQpIHtcclxuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IHBheWxvYWQuY29uZmlndXJhdGlvbjtcclxuICAgIHRoaXMuY29tbXVuaWNhdGlvbiA9IHBheWxvYWQuY29tbXVuaWNhdGlvbjtcclxuICAgIHRoaXMucm91dGUgPSBwYXlsb2FkLnJvdXRlO1xyXG4gICAgdGhpcy5vbmUoJ21yLW1hcCcpLnVwZGF0ZSh7fSk7XHJcbiAgICB0aGlzLmNvbW11bmljYXRpb24ucmVxdWVzdCQoJ3RpbWVsaW5lJywge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBvbkVycm9yOiAoZSkgPT4gY29uc29sZS5lcnJvcihlKVxyXG4gICAgfSkuc3Vic2NyaWJlKChkKSA9PiB7XHJcbiAgICAgIHRoaXMub25lKCdtci10aW1lbGluZScpLnVwZGF0ZShkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nZXRXaWRnZXREYXRhU291cmNlKCdtci10aW1lbGluZScpLnRpbWVsaW5lTG9hZGVkJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgodGltZWxpbmU6IHZpcy5UaW1lbGluZSkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWVsaW5lTGlzdGVuZXIkLm5leHQodGltZWxpbmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYWdlRGV0YWlscyhpZCkge1xyXG4gICAgdGhpcy5jb21tdW5pY2F0aW9uLnJlcXVlc3QkKCdyZXNvdXJjZScsIHtcclxuICAgICAgb25FcnJvcjogKGUpID0+IGNvbnNvbGUuZXJyb3IoZSksXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZCwgdHlwZTogJ3ZpZXdzL3RpbWUtZXZlbnRzJ1xyXG4gICAgICB9XHJcbiAgICB9KS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICBpZiAoIXJlcyB8fCByZXMgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmV2ZW50SGVhZGVyID0gcmVzLnNlY3Rpb25zLmhlYWRlci50aXRsZTtcclxuICAgICAgdGhpcy5ldmVudERlc2NyaXB0aW9uID0gcmVzLnNlY3Rpb25zLmhlYWRlci5jb250ZW50O1xyXG4gICAgICB0aGlzLnllYXJIZWFkZXIgPSB7XHJcbiAgICAgICAgdGl0bGU6IHsgbWFpbjogeyB0ZXh0OiByZXMudGl0bGUgfSB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBpY29uOiAnbjctaWNvbi1jbG9zZScsXHJcbiAgICAgICAgICAgIGFuY2hvcjoge1xyXG4gICAgICAgICAgICAgIGhyZWY6ICcvdGltZWxpbmUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmxvYWRlZFJlc291cmNlRGV0YWlscyA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19