/**------------- contacts information -------------**/
export const EMAIL = 'mmeletricarservice@libero.it'
export const EMAIL_PEC = 'mmeletricarservice@pec.buffetti.it'
export const FACEBOOK = 'https://www.facebook.com/profile.php?id=61573235319851&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true'
export const PHONE = '0803267837'
export const P_IVA = '08650830725'
export const RAG_SOCIALE = 'Mm Eletricar Service Di Vacca Michele & Scalese Michele Società N Nome Collettivo'
export const SITE = "Via G. Bizet 63, 70024 Gravina in Puglia (BA), Italia"
export const REA = "640711"

/**------------- cookies -------------**/
export const COOKIE_CONSENT_BANNER_DESCRIPTION = "Questo sito utilizza i cookie. Cliccando su \"Accetta\", acconsenti all'uso dei cookie. Cliccando su \"Rifiuta\", rifiuti l'uso dei cookie. Per maggiori informazioni consulta la nostra "

/**------------- sections definition -------------**/
export const SECTIONS = [
    {
        id: 'home',
        title: 'Home'
    },
    {
        id: 'about-us',
        title: 'Chi siamo',
        children: [
            {
            id: 'our-values',
            title: 'I nostri valori'
            }
        ]
    },
    {
        id: 'services',
        title: 'Servizi',
        children: [
            {
                id: 'all-services',
                title: 'Tutti i servizi'
            },
            {
                id: 'used-cars',
                title: 'Auto usate'
            }
        ]
    },
    {
        id: 'where-we-are',
        title: 'Dove siamo'
    },
    {
        id: 'contacts',
        title: 'Contatti'
    }
];

/**------------- "Home" texts -------------**/
export const HOME_TITLE = "Dove la tua auto <br> trova l'eccellenza."
export const HOME_SUBTITLE = "Benvenuto nell'autofficina <br> <strong>MM Eletricar Service</strong>!"

/**------------- "About us" text -------------**/
export const ABOUT_US_SUBTITLE = 'Siamo <strong>Michele Vacca</strong> e <strong>Michele Scalese</strong>, fondatori di <strong>MM Eletricar Service</strong>,\n' +
    'un\'<strong>officina elettrauto</strong> a <strong>Gravina in Puglia (BA)</strong>. Con i nostri servizi di riparazione e manutenzione elettronica per auto, ' +
    'garantiamo sicurezza, affidabilità e prestazioni ottimali al tuo veicolo.'

/**------------- "Our values" texts -------------**/
export const OUR_VALUES_TITLE = "I nostri valori."
export const OUR_VALUES_SUBTITLE = 'In <strong>MM Eletricar Service</strong> crediamo che ogni veicolo meriti <strong>attenzione</strong> e <strong>cura</strong>,\n' +
    '                        poiché comprendiamo quanto sia importante per i nostri clienti.\n' +
    '                        La nostra <strong>missione</strong> è offrire <strong>soluzioni su misura</strong>, <strong>affidabili</strong> e\n' +
    '                        di <strong>qualità</strong>, per garantire la <strong>sicurezza</strong>,\n' +
    '                        <strong> l\'efficienza</strong> e la <strong>soddisfazione completa</strong> di chi si affida a noi.'

/**------------- "Services" texts -------------**/
export const SERVICES_TITLE = 'Per la tua auto, solo <br/> servizi di qualità.'
export const SERVICES_DESCRIPTION = 'Tutti i <strong>servizi da elettrauto</strong>, dalla <strong>manutenzione</strong> alle <strong>riparazioni elettroniche d\'auto</strong>, per garantire <strong>sicurezza</strong> e <strong>performance ottimali</strong>.'

/**------------- "All services" texts -------------**/
export const SERVICE_INFO_CARDS = [
    {
        title: "Manutenzione centralina",
        description: "Controllo ed aggiornamento della centralina elettronica per un funzionamento ottimale del veicolo.",
        icon: '/icons/cpu_icon.svg'
    },
    {
        title: "Riparazione parabrezza",
        description: "Sistemazione di crepe o scheggiature per una visibilità sicura e conforme alle norme.",
        icon: '/icons/wrench_icon.svg'
    },
    {
        title: "Pannello di controllo",
        description: "Riparazione e calibrazione di strumenti digitali ed analogici del cruscotto.",
        icon: '/icons/control_panel_icon.svg'
    },
    {
        title: "Riparazione conta km",
        description: "Sistemazione di contachilometri difettosi o malfunzionanti per un corretto monitoraggio del veicolo.",
        icon: '/icons/dashboard_icon.svg'
    },
    {
        title: "Ripristino EGR e DPF",
        description: "Pulizia o sostituzione di valvola EGR e filtro antiparticolato per ridurre emissioni e consumi.",
        icon: '/icons/filter_icon.svg'
    },
    {
        title: "Ricarica aria condizionata",
        description: "Ripristino del gas refrigerante per garantire un climatizzatore efficiente ed aria fresca.",
        icon: '/icons/air_icon.svg'
    },
    {
        title: "Diagnosi iniezione",
        description: "Analisi e riparazione dei sistemi di iniezione per ottimizzare le prestazioni del motore.",
        icon: '/icons/engine_icon.svg'
    },
    {
        title: "Duplicazione chiavi e telecomandi",
        description: "Realizzazione di copie di chiavi e telecomandi per ogni tipo di veicolo.",
        icon: '/icons/key_icon.svg'
    },
    {
        title: "Diagnosi elettronica",
        description: "Individuazione e risoluzione di guasti elettronici per un'analisi precisa del tuo veicolo.",
        icon: '/icons/diagnosis_icon.svg'
    },
    {
        title: "Veicoli ibridi ed elettrici",
        description: "Manutenzione specializzata per veicoli ibridi ed elettrici.",
        icon: '/icons/electric_icon.svg'
    },
    {
        title: "Installazione antifurti",
        description: "Soluzioni antifurto satellitari Igla e meccanici Defender per la protezione del tuo veicolo.",
        icon: '/icons/anti_theft_icon.svg'
    }
];

/**------------- "Used cars" texts -------------**/
export const USED_CARS_TITLE = "Cerchi di più? Scopri la tua \n" +
    "auto usata perfetta!";
export const USED_CARS_DESCRIPTION = "Non perdere le ultime novità! Seguici su Facebook per rimanere sempre aggiornato sulle nostre auto usate in vendita.";
export const USED_CARS_STATS = [
    {description: "Auto con chilometraggio verificato ✅"},
    {description: "Auto ispezionate e verificate ✅"},
    {description: "Auto tagliandate ✅"}
]
export const FACEBOOK_LINK_USED_CARS = "Scopri di più >"

/**------------- "Where we are" texts -------------**/
export const WHERE_WE_ARE_TITLE = "La nostra officina."
export const WHERE_WE_ARE_SUBTITLE = "<strong>MM Eletricar Service</strong> si trova a <strong>Gravina in Puglia (BA)</strong>, in <strong>Via G. Bizet, 63</strong>."
export const WHERE_WE_ARE_INFO_CARD = [
    {
        title: "Orari di apertura",
        description: "- <strong>Lunedì - Venerdì</strong>: 08:30-13:00/15:00-19:00 <br>- <strong>Sabato</strong>: 08:30-13:00",
    }
]
export const GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION = "Accetta i cookie di terze parti per visualizzare la nostra posizione sulla mappa."

/**------------- "Contacts" texts -------------**/
export const CONTACTS = [
    {
        value: PHONE,
        icon: '/icons/phone_icon.svg'
    },
    {
        value: EMAIL,
        icon: '/icons/email_icon.svg'
    },
    {
        value: EMAIL_PEC,
        icon: '/icons/email_icon.svg'
    },
    {
        value: 'MM Eletricar Service',
        icon: '/icons/facebook_icon.svg'
    }
]
export const CONTACTS_TITLE = "I nostri contatti.";
export const CONTACTS_SUBTITLE = "Per informazioni o per prenotare un appuntamento, non esitare a contattarci!";
export const FOOTER_TEXT = RAG_SOCIALE + ". " + SITE + ". P. IVA: " + P_IVA + ". REA: " + REA + "."