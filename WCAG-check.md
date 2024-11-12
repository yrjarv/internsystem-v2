# Sjekkliste for WCAG-sjekk (UU-tilsynet)
## 1.1.1 Ikke-tekstlig innhold
Gi brukeren et tekstalternativ for innhold som ikke er tekst.
__All pictures lack alt-text, except the pictures of each board member. Needs fixing.__
## 1.2.1 Bare lyd og bare video (forhåndsinnspilt)
Gi brukeren et alternativ når innholdet presenteres kun som video eller lyd.
__n/a__
## 1.2.2 Teksting (forhåndsinnspilt)
Tilby teksting for forhåndsinnspilt video med lyd.
__n/a__
## 1.3.1 Informasjon og relasjoner
Ting skal være kodet som det ser ut som. For eksempel skal en overskrift være kodet som en overskrift.
__Mostly ok, but the largest header on the pages are always `<h4>`, which doesn't signal that it is the main header for the page.__
## 1.3.2 Meningsfylt rekkefølge
Presenter innhold i en meningsfull rekkefølge.
__ok__
## 1.3.3 Sensoriske egenskaper
Instruksjoner må ikke utelukkende være avhengige av form, størrelse, visuell plassering, orientering, eller lyd for å kunne bli forstått.
__ok__
## 1.4.1 Bruk av farge
Ikke bruk presentasjon som bygger utelukkende på farge.
__ok__
## 1.4.2 Styring av lyd
Gi brukeren mulighet til å stoppe eller pause lyd som starter automatisk.
__n/a__
## 1.4.3 Kontrast (minimum)
Kontrastforholdet mellom teksten og bakgrunnen er minst 4,5:1.
__ok__
## 1.4.4 Endring av tekststørrelse
Tekst kan bli endret til 200 % størrelse uten tap av innhold eller funksjon.
__ok__
## 1.4.5 Bilder av tekst
Bruk tekst i stedet for bilder av tekst.
__ok__
## 2.1.1 Tastatur
All funksjonalitet skal kunne brukes kun ved hjelp av tastatur.
__ok__
## 2.1.2 Ingen tastaturfelle
Unngå tastaturfeller.
__ok__
## 2.2.1 Justerbar hastighet
Tidsbegrensninger skal kunne justeres av brukeren.
__n/a__
## 2.2.2 Pause, stopp, skjul
Gi brukeren mulighet til å stoppe, pause eller skjule innhold som automatisk endrer seg.
__n/a__
## 2.3.1 Terskelverdi på maksimalt tre glimt
Innhold skal ikke blinke mer enn tre ganger per sekund.
__ok__
## 2.4.1 Hoppe over blokker
Gi brukeren mulighet til å hoppe direkte til hovedinnholdet.
__Lacking option to jump past AppBar items__
## 2.4.2 Sidetitler
Bruk nyttige og tydelige sidetitler.
__ok__
## 2.4.3 Fokusrekkefølge
Presenter innholdet i en logisk rekkefølge.
__ok__
## 2.4.4 Formål med lenke (i kontekst)
Alle lenkers mål og funksjon fremgår tydelig av lenketeksten.
__ok__
## 2.4.5 Flere måter
Tilby brukeren flere måter å navigere på.
__This is somewhat lacking (#93)__
## 2.4.6 Overskrifter og ledetekster
Sørg for at ledetekster og overskrifter er beskrivende.
__ok__
## 2.4.7 Synlig fokus
Sørg for at alt innhold får synlig fokus når du navigerer med tastatur.
__ok__
## 3.1.1 Språk på siden
Sørg for at språket til innholdet på alle nettsider er angitt i koden.
__ok__
## 3.1.2 Språk på deler av innhold
Sørg for at alle deler av innholdet som er på et annet språk enn resten av siden er markert i koden.
__N/A__
## 3.2.1 Fokus
Når en komponent kommer i fokus medfører dette ikke automatisk betydelige endringer i siden.
__ok__
## 3.2.2 Inndata
Endring av verdien til et skjemafelt medfører ikke automatisk betydelige endringer i siden.
__ok__
## 3.2.3 Konsekvent navigering
Navigasjonslenker som gjentas på flere sider skal ha en konsekvent rekkefølge.
__ok__
## 3.2.4 Konsekvent identifikasjon
Elementer som har samme funksjonalitet på tvers av flere sider er utformet likt.
__ok__
## 3.3.1 Identifikasjon av feil
For feil som oppdages automatisk må du vise hvor feilen har oppstått og gi en tekstbeskrivelse av feilen.
__ok__
## 3.3.2 Ledetekster eller instruksjoner
Det vises ledetekster eller instruksjoner når du har skjemaelementer som må fylles ut.
__ok__
## 3.3.3 Forslag ved feil
Dersom feil blir oppdaget automatisk, gi brukeren et forslag til hvordan feilen kan rettes.
__Example: No hint is given when using 0 vouchers or logging 0 hours, the input field only becomes red.__
## 3.3.4 Forhindring av feil (juridiske feil, økonomiske feil, datafeil)
For sider som medfører juridiske forpliktelser må det være mulig å kunne angre, kontrollere eller bekrefte dataene som sendes inn.
__N/A__
## 4.1.1 Parsing (oppdeling)
Alle sider skal være uten store kodefeil.
__ok__
## 4.1.2 Navn, rolle, verdi
Alle komponenter har navn og rolle bestemt i koden.
__A lot of components do not have name and role__