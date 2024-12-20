/** constants definition **/

export const WHATSAPP_LINK = 'https://wa.me/3908650830725';
export const EMAIL = 'mmeletricarservice@libero.it';
export const EMAIL_PEC = 'mmeletricarservice@pec.buffetti.it'
export const FACEBOOK = ""
export const PHONE = '080 3267837'
export const P_IVA = '08650830725'
export const CONTATTI = [
    {value: PHONE, icon: '/icons/phoneIconBlack.svg'},
    {value: EMAIL, icon: '/icons/emailIconBlack.svg'},
    {value: EMAIL_PEC, icon: '/icons/emailIconBlack.svg'},
    {value: 'MM Eletricar Service', icon: '/icons/facebookIconBlack.svg'}
]

export const HOME_TITLE = "Dove la tua auto <br> trova l'eccellenza."
export const HOME_SUBTITLE = "Benvenuto nell'autofficina <br> <strong>MM Eletricar Service<strong/>!"

export const SECTIONS = [
    { id: 'home', title: 'Home' },
    { id: 'chi-siamo', title: 'Chi siamo', children: [{ id: 'nostri-valori', title: 'I nostri valori' }] },
    { id: 'intro-servizi', title: 'Servizi', children: [{ id: 'altri-servizi', title: 'Altri servizi' }, { id: 'auto-usate', title: 'Auto usate' }] },
    { id: 'dove-siamo', title: 'Dove siamo' },
    { id: 'contatti', title: 'Contatti' }
];

export const CHI_SIAMO_TITLE = "MM Eletricar Service";
export const CHI_SIAMO_DESCRIPTION = 'Siamo <strong>Michele Vacca</strong> e <strong>Michele Scalese</strong>, fondatori di MM Eletricar Service,\n' +
    '                        un’officina specializzata in elettronica per autoveicoli. Con sede a Gravina in Puglia (BA),\n' +
    '                        offriamo servizi per garantire sicurezza, affidabilità e prestazioni ottimali ad ogni veicolo.'

export const NOSTRI_VALORI_TITLE = "I nostri valori"
export const NOSTRI_VALORI_DESCRIPTION = 'In MM Eletricar Service, crediamo che ogni veicolo meriti <strong>attenzione</strong> e <strong>cura</strong>,\n' +
    '                        poiché comprendiamo quanto sia importante per i nostri clienti.\n' +
    '                        La nostra missione è offrire <strong>soluzioni su misura</strong>, <strong>affidabili</strong> e\n' +
    '                        di <strong>qualità</strong>, per garantire la <strong>sicurezza</strong>,\n' +
    '                        <strong> l’efficienza</strong> e la <strong>soddisfazione</strong> completa di chi si affida a noi.'

export const INTRO_SERVIZI_TITLE = 'Per la tua auto, solo <br/> servizi di qualità.'
export const INTRO_SERVIZI_DESCRIPTION = 'Tutti i servizi classici da elettrauto, dalla manutenzione alle riparazioni, per garantire sicurezza e performance ottimali.'
export const ARROW_LABEL = 'Scopri tutti i nostri servizi specializzati'

export const SERVIZI = [
    {title: "Manutenzione centralina", description: "Controllo e aggiornamento della centralina elettronica per un funzionamento ottimale del veicolo.", icon: '/icons/cpuIcon.svg'},
    {title: "Riparazione parabrezza", description: "Sistemazione di crepe o scheggiature per una visibilità sicura e conforme alle norme.", icon: '/icons/hammerIcon.svg'},
    {title: "Pannello di controllo", description: "Riparazione e calibrazione di strumenti digitali e analogici del cruscotto.", icon: '/icons/controlPanelIcon.svg'},
    {title: "Riparazione conta km", description: "Sistemazione di contachilometri difettosi o malfunzionanti per un corretto monitoraggio del veicolo.", icon: '/icons/dashboardIcon.svg'},
    {title: "Ripristino EGR e DPF", description: "Pulizia o sostituzione di valvola EGR e filtro antiparticolato per ridurre emissioni e consumi.", icon: '/icons/filterIcon.svg'},
    {title: "Ricarica aria condizionata", description: "Ripristino del gas refrigerante per garantire un climatizzatore efficiente e aria fresca.", icon: '/icons/airIcon.svg'},
    {title: "Diagnosi iniezione", description: "Analisi e riparazione dei sistemi di iniezione per ottimizzare le prestazioni del motore.", icon: '/icons/fuelIcon.svg'},
    {title: "Duplicazione chiavi e telecomandi", description: "Realizzazione di copie di chiavi e telecomandi per ogni tipo di veicolo.", icon: '/icons/keyIcon.svg'},
    {title: "Diagnosi elettronica", description: "Individuazione e risoluzione di guasti elettronici per un’analisi precisa del tuo veicolo.", icon: '/icons/diagnosisIcon.svg'},
    {title: "Veicoli ibridi ed elettrici", description: "Manutenzione specializzata per veicoli ibridi ed elettrici.", icon: '/icons/electricar.svg'},
    {title: "Installazione antifurto Igla, meccanici defender e satellitari", description: "Soluzioni antifurto avanzate per la protezione del tuo veicolo: blocco motore elettronico, protezioni meccaniche per Defender e tracciamento satellitare in tempo reale.", icon: '/icons/antiTheftIcon.svg'}
];

export const CONTATTI_TITLE = "Sempre al tuo <br> servizio.";
export const CONTATTI_SUBTITLE = "Se hai bisogno di assistenza o informazioni, non esitare a contattarci!";

export const FOOTER_TEXT = "© Copyright 2024 | All Rights Reserved | P. IVA: " + P_IVA

export const AUTO_USATE_TITLE = "Cerchi di più? Scopri la tua \n" +
    "auto usata perfetta!";
export const AUTO_USATE_DESCRIPTION = "Non perdere le ultime novità! Seguici su Facebook per rimanere sempre aggiornato sulle nostre auto usate in vendita.";
export const CARD_AUTO_USATE = [
    {description: "Auto con chilometraggio verificato ✅"},
    {description: "Auto ispezionate e verificate ✅"},
    {description: "Auto tagliandate ✅"}
]
export const FACEBOOK_LINK_AUTO_USATE = "Scopri le nostre auto usate >"

export const DOVE_SIAMO_TITLE = "Vieni a trovarci in officina!"
export const DOVE_SIAMO_DIVISIONS = [
    {title: "Dove siamo", description: "Gravina in Puglia (BA), in Via Bizet, 63, 70024.", icon: '/icons/mapIcon.svg'},
    {title: "Orari di apertura", description: "- <strong>Lun-Ven</strong>: 08:30-13:00/15:00-19:00 <br>- <strong>Sab</strong>: 08:30-13:00", icon: '/icons/clockIcon.svg'},
]
export const MAPS_LINK_TITLE = "Scopri come raggiungerci >"
export const ADDRESS = "Via Bizet, 63, Gravina in Puglia, Italia";