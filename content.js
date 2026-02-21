/*
===========================================
CONTENT BESTAND — ANNE WEINANS PRAKTIJK
===========================================

HOE WERKT DIT BESTAND?
-----------------------
Dit bestand bevat ALLE teksten van de website.
Je kunt dit bestand bewerken via GitHub of in een teksteditor.
Na het opslaan worden de wijzigingen direct zichtbaar op de website.

STRUCTUUR:
----------
Het bestand is opgebouwd als een JavaScript object (vergelijkbaar met JSON).
Elke sectie van de website heeft een eigen blok, bijvoorbeeld "hero", "behandelingen", etc.

REGELS VOOR HET BEWERKEN:
--------------------------
1. Verander ALLEEN de tekst tussen de aanhalingstekens " "
2. Gebruik \n als je een nieuwe regel wilt (of gebruik backticks ` voor langere teksten)
3. Raak de structuur NIET aan (geen accolades {}, haakjes [] of komma's , verwijderen)
4. Bij lijsten: voeg items toe of verwijder ze, maar houd het formaat aan:
      { "titel": "Jouw titel", "tekst": "Jouw tekst" }
5. Test na elke wijziging of de website nog werkt door hem te openen in je browser

VOORBEELD — tekst aanpassen:
  VOOR:  "intro": "Oude tekst hier"
  NA:    "intro": "Nieuwe tekst hier"

VOORBEELD — lijstitem toevoegen:
  Kopieer een bestaand item en pas de tekst aan.
  Vergeet de komma niet tussen items!

BIJ PROBLEMEN:
  Als de website leeg blijft na een wijziging, heb je waarschijnlijk
  een aanhalingsteken of komma per ongeluk verwijderd. Gebruik CTRL+Z
  om terug te gaan naar de vorige versie.
===========================================
*/

// LET OP: gebruik hier 'var' (niet 'const') zodat main.js erbij kan
var SITE_CONTENT = {
  /* ==================
       NAVIGATIE — Links in het menu
       ================== */
  nav: {
    heading: "ACT Therapie",
    behandelingen: "Behandeling",
    overMij: "Over mij",
    praktisch: "Praktisch",
    contact: "Contact",
    kwaliteit: "Kwaliteit",
  },

  /* ==================
       SITE — Algemene website-instellingen
       ================== */
  site: {
    titel: "Anne Weinans — Psychosociale ACT Therapie & Coaching",
  },

  /* ==================
       HERO — De bovenste sectie met je naam en introductie
       ================== */
  hero: {
    label: "Psychosociale Therapie & Coaching",
    naam: "Anne Weinans",
    intro:
      "Een veilige plek om stil te staan, te ontdekken en te groeien. Samen kijken we naar wat er speelt en vinden we ruimte voor verandering.",
    cta: "Neem contact op",
  },

  /* ==================
       BEHANDELINGEN — Het tabblad-gedeelte met Voor wie, Methoden en Traject
       ================== */
  behandelingen: {
    titel: "Behandeling",
    intro:
      "Hoe kan ik je helpen? \n Iedereen loopt wel eens vast.Soms helpt het om samen te kijken naar wat er speelt en wat je nodig hebt om weer verder te komen.",

    /* Voor wie — lijst van klachten/situaties */
    voorWie: [
      {
        titel: "Stressklachten",
        tekst:
          "Wanneer de balans verstoord is geraakt en je niet meer weet hoe het anders kan",
      },
      {
        titel: "Zelfbeeld",
        tekst: "Als je worstelt met hoe je naar jezelf kijkt",
      },
      {
        titel: "Onzekerheid",
        tekst: "Wanneer twijfel je in de weg staat",
      },
      {
        titel: "Burnout",
        tekst: "Als je lichaam en geest aangeven dat het te veel is geworden",
      },
      {
        titel: "Somberheid & depressie",
        tekst: "Wanneer het donker voelt en de energie ontbreekt",
      },
      {
        titel: "Patronen doorbreken",
        tekst: "Bij eetproblemen, verslaving of andere terugkerende patronen",
      },
      {
        titel: "Zorgen voor anderen",
        tekst:
          "Als mantelzorger of naaste van iemand met verslaving of psychische problemen",
      },
    ],

    /* Tab-labels */
    tabVoorWie: "Voor wie",
    tabMethoden: "Methoden",
    tabTraject: "Traject",

    /* Voor wie niet — kopje en uitleg */
    voorWieNietTitel: "Voor wie niet?",
    voorWieNiet:
      "Mijn praktijk is niet geschikt voor mensen met acute psychiatrische problematiek, ernstige persoonlijkheidsstoornissen of actieve psychoses. In die gevallen verwijs ik je graag door naar een passende behandelaar. Bij twijfel kun je altijd contact opnemen voor een vrijblijvend gesprek.",

    /* Behandelmethoden — elke methode heeft een titel en uitleg */
    methoden: [
      {
        titel: "Psychosociale therapie",
        tekst:
          "Psychosociale therapie richt zich op de wisselwerking tussen jou als persoon en je omgeving. We kijken niet alleen naar klachten, maar ook naar de context waarin ze zijn ontstaan. Door inzicht te krijgen in patronen en relaties, ontstaat er ruimte om anders te kiezen.",
      },
      {
        titel: "ACT — Acceptance and Commitment Therapy",
        tekst:
          "ACT helpt je om een rijker en betekenisvoller leven te leiden, ook als er moeilijke gedachten en gevoelens zijn. Je leert ruimte te maken voor wat er is, los te komen van onhelpzame patronen en stappen te zetten richting wat voor jou belangrijk is.",
      },
      {
        titel: "Mindfulness en Compassie",
        tekst:
          "Door mindfulness leer je met aandacht en vriendelijkheid aanwezig te zijn in het hier en nu. Compassietraining helpt je om zachter voor jezelf te zijn, juist op momenten dat het moeilijk is. Samen vormen ze een krachtige basis voor verandering.",
      },
      {
        titel: "Voice Dialogue",
        tekst:
          "Voice Dialogue is een methode om de verschillende 'stemmen' of kanten in jezelf te leren kennen. Door bewust contact te maken met deze innerlijke delen, ontstaat er meer begrip en keuzevrijheid in hoe je reageert op situaties.",
      },
      {
        titel: "Coaching",
        tekst:
          "Coaching is gericht op persoonlijke groei en ontwikkeling. Het is toekomstgericht en helpt je om heldere doelen te stellen en concrete stappen te zetten. Coaching is geschikt wanneer er geen sprake is van psychische klachten, maar je wel behoefte hebt aan begeleiding bij verandering.",
      },
    ],

    /* Traject — de stappen van aanmelding tot evaluatie */
    traject: [
      {
        titel: "Aanmelden",
        tekst:
          "Je kunt je aanmelden via het contactformulier of telefonisch. Ik neem zo snel mogelijk contact met je op.",
      },
      {
        titel: "Kennismaking",
        tekst:
          "In een kort telefonisch gesprek bespreken we je hulpvraag en kijken we of mijn praktijk de juiste plek is voor jou.",
      },
      {
        titel: "Intake",
        tekst:
          "Tijdens de intake (1-2 sessies) verkennen we samen je situatie, je achtergrond en wat je wilt bereiken. We stellen samen een behandelplan op.",
      },
      {
        titel: "Behandeling",
        tekst:
          "De behandeling bestaat uit regelmatige gesprekken, meestal wekelijks of tweewekelijks. De duur hangt af van je hulpvraag en hoe het traject verloopt.",
      },
      {
        titel: "Evaluatie",
        tekst:
          "We evalueren regelmatig hoe het gaat en of de behandeling aansluit bij je behoeften. Samen bepalen we wanneer het traject kan worden afgerond.",
      },
    ],
  },

  /* ==================
       OVER MIJ — Informatie over Anne (accordion items)
       ================== */
  overMij: {
    titel: "Over mij",
    intro:
      "Ik ben Anne Weinans, psychosociaal therapeut en coach. Met warmte en oprechte aandacht begeleid ik mensen die vastlopen in hun leven.",

    /* Elk item wordt een uitklapbaar blok */
    items: [
      {
        titel: "Mijn manier van kijken",
        tekst:
          "Ik geloof dat ieder mens de wijsheid in zich draagt om te groeien en te veranderen. Soms is die wijsheid alleen even uit beeld geraakt. In mijn werk vertrek ik vanuit verbinding: met jezelf, met anderen en met wat voor jou van waarde is. Ik kijk niet alleen naar klachten, maar vooral naar de mens erachter — met al je ervaringen, kwaliteiten en kwetsbaarheden.",
      },
      {
        titel: "Over mij",
        tekst:
          "Na jaren werkzaam te zijn geweest in de zorg, heb ik mijn passie gevolgd en ben ik mij gaan specialiseren in psychosociale therapie en ACT. Ik ben opgeleid als psychosociaal therapeut en heb aanvullende opleidingen gevolgd in ACT, mindfulness, compassietraining en voice dialogue. Ik ben aangesloten bij een beroepsvereniging en werk volgens de geldende kwaliteitsnormen.",
      },
    ],
  },

  /* ==================
       PRAKTISCH — Praktische info (accordion items)
       ================== */
  praktisch: {
    titel: "Praktische informatie",
    intro:
      "Hieronder vind je praktische informatie over de gang van zaken in mijn praktijk.",

    /* Elk item wordt een uitklapbaar blok */
    items: [
      {
        titel: "Locatie of online",
        tekst:
          "Sessies vinden plaats in mijn praktijk of online via beeldbellen. Online sessies zijn net zo effectief en bieden flexibiliteit wanneer het voor jou prettiger is om vanuit huis te werken. De praktijkruimte is goed bereikbaar en biedt een rustige, vertrouwde omgeving.",
      },
      {
        titel: "Kosten en vergoedingen",
        tekst:
          "De kosten per sessie bedragen €95,- voor een gesprek van 50 minuten. Een intake gesprek duurt 75 minuten en kost €125,-. Ik hanteer deze tarieven voor zowel therapie als coaching.",
      },
      {
        titel: "Vergoede zorg",
        tekst:
          "Psychosociale therapie wordt door een aantal zorgverzekeraars (gedeeltelijk) vergoed vanuit de aanvullende verzekering. Raadpleeg je zorgverzekeraar om te achterhalen of en hoeveel jij vergoed krijgt. Ik kan je hier ook bij helpen.",
      },
      {
        titel: "Andere manieren van vergoeden",
        tekst:
          "In sommige gevallen is het mogelijk om de kosten te laten vergoeden via je werkgever, het UWV of de gemeente. Neem gerust contact op om de mogelijkheden te bespreken.",
      },
      {
        titel: "Zelf betalen",
        tekst:
          "Uiteraard kun je de sessies ook zelf betalen. Je ontvangt altijd een factuur die je eventueel kunt indienen bij je zorgverzekeraar.",
      },
      {
        titel: "No show",
        tekst:
          "Als je een afspraak niet kunt nakomen, verzoek ik je om dit minimaal 24 uur van tevoren te laten weten. Bij een no-show of te late afzegging wordt het volledige tarief in rekening gebracht.",
      },
      {
        titel: "Wachttijd",
        tekst:
          "Op dit moment is er geen wachttijd. Na aanmelding kun je meestal binnen één tot twee weken terecht voor een kennismakingsgesprek.",
      },
    ],
  },

  /* ==================
       CONTACT — Contactpagina teksten
       ================== */
  contact: {
    titel: "Neem contact op",
    intro:
      "Wil je je aanmelden of heb je een vraag? Neem gerust contact op. Ik reageer zo snel mogelijk.",
    wachttijd: "Op dit moment is er geen wachttijd bij de praktijk.",
    bereikbaarheid:
      "Buiten mijn werktijden en tijdens vakanties ben ik niet bereikbaar.",
    crisisTitel: "Crisis",
    crisis:
      "Ben je bij mij in behandeling en is er sprake van een crisis, maar kun je mij niet bereiken? Neem dan contact op met je eigen huisarts (tijdens kantooruren) of de huisartsenpost (buiten kantooruren). Zij kunnen indien nodig de crisisdienst inschakelen.",

    /* Contactformulier — veldlabels en placeholders */
    veldNaam: "Naam",
    veldEmail: "E-mailadres",
    veldTelefoon: "Telefoonnummer",
    veldBericht: "Bericht",
    placeholderNaam: "Je volledige naam",
    placeholderEmail: "je@email.nl",
    placeholderTelefoon: "06-12345678",
    placeholderBericht: "Vertel kort wat je hulpvraag is...",
    versturen: "Versturen",

    /* Succesmelding na verzenden */
    successTitel: "Bedankt voor je bericht!",
    successTekst: "Ik neem zo snel mogelijk contact met je op.",
  },

  /* ==================
       KWALITEIT — Kwaliteitsinformatie (accordion items)
       ================== */
  kwaliteit: {
    titel: "Kwaliteit & waarborgen",
    intro:
      "Ik hecht veel waarde aan de kwaliteit van mijn zorg en werk volgens de geldende beroepsnormen.",

    /* Elk item wordt een uitklapbaar blok */
    items: [
      {
        titel: "Kwaliteitsnormen",
        tekst:
          "Ik werk volgens de richtlijnen en beroepscodes die gelden voor psychosociaal therapeuten. Dat betekent dat ik regelmatig bijscholing volg, deelneem aan intervisie en supervisie, en mijn werkwijze toets aan de laatste inzichten. Zo waarborg ik dat je zorg van hoge kwaliteit ontvangt.",
      },
      {
        titel: "Beroepsvereniging",
        tekst:
          "Ik ben aangesloten bij een erkende beroepsvereniging voor psychosociaal therapeuten. Dit lidmaatschap garandeert dat ik voldoe aan de gestelde opleidings- en kwaliteitseisen en dat er onafhankelijk toezicht is op mijn beroepsuitoefening.",
      },
      {
        titel: "Privacy",
        tekst:
          "Ik ga zorgvuldig om met je persoonlijke gegevens en houd mij aan de Algemene Verordening Gegevensbescherming (AVG). Alles wat je met mij deelt is vertrouwelijk. Alleen met jouw uitdrukkelijke toestemming deel ik informatie met derden, tenzij er sprake is van een wettelijke verplichting.",
      },
      {
        titel: "Klachten",
        tekst:
          "Mocht je ontevreden zijn over de behandeling, dan hoor ik dat graag. Samen kijken we of we tot een oplossing kunnen komen. Lukt dat niet, dan kun je een klacht indienen bij de klachtenfunctionaris van mijn beroepsvereniging. Ik informeer je hier graag over.",
      },
    ],
  },

  /* ==================
       FOOTER — Teksten onderaan de pagina
       ================== */
  footer: {
    tagline: "Psychosociale ACT Therapie & Coaching",
    copyright: "Alle rechten voorbehouden.",
  },
};
