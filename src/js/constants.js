//constants definition
export const WHATSAPP_LINK = 'https://wa.me/3908650830725';
export const EMAIL = 'mmeletricarservice@libero.it';
export const EMAIL_PEC = 'mmeletricarservice@pec.buffetti.it'
export const FACEBOOK = ""
export const PHONE = '080 3267837'
export const P_IVA = '08650830725'
export const HOME_TITLE = "Dove la tua auto <br> trova l'eccellenza."
export const HOME_SUBTITLE = "Benvenuto nell'autofficina MM Eletricar Service!"
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
    {title: "Manutenzione centralina", description: "Controllo e aggiornamento della centralina elettronica per un funzionamento ottimale del veicolo.", color: "rgb(34, 193, 87, 0.10)", borderColor: "rgb(34, 193, 87)", icon: '/icons/cpuIcon.svg'},
    {title: "Riparazione parabrezza", description: "Sistemazione di crepe o scheggiature per una visibilità sicura e conforme alle norme.", color: "rgb(0, 255, 204, 0.10)", borderColor: "rgb(0, 255, 204)", icon: '/icons/hammerIcon.svg'},
    {title: "Pannello di controllo", description: "Riparazione e calibrazione di strumenti digitali e analogici del cruscotto.", color: "rgb(255, 211, 0, 0.10)", borderColor: "rgb(255, 211, 0)", icon: '/icons/controlPanelIcon.svg'},
    {title: "Riparazione conta km", description: "Sistemazione di contachilometri difettosi o malfunzionanti per un corretto monitoraggio del veicolo.", color: "rgb(255, 165, 0, 0.10)", borderColor: "rgb(255, 165, 0)", icon: '/icons/dashboardIcon.svg'},
    {title: "Ripristino EGR e DPF", description: "Pulizia o sostituzione di valvola EGR e filtro antiparticolato per ridurre emissioni e consumi.", color: "rgb(102, 178, 255, 0.10)", borderColor: "rgb(102, 178, 255)", icon: '/icons/filterIcon.svg'},
    {title: "Ricarica aria condizionata", description: "Ripristino del gas refrigerante per garantire un climatizzatore efficiente e aria fresca.", color: "rgb(0, 123, 255, 0.10)", borderColor: "rgb(0, 123, 255)", icon: '/icons/airIcon.svg'},
    {title: "Diagnosi iniezione", description: "Analisi e riparazione dei sistemi di iniezione per ottimizzare le prestazioni del motore.", color: "rgb(255, 0, 0, 0.10)", borderColor: "rgb(255, 0, 0)", icon: '/icons/fuelIcon.svg'},
    {title: "Duplicazione chiavi e telecomandi", description: "Realizzazione di copie di chiavi e telecomandi per ogni tipo di veicolo.", color: "rgb(138, 43, 226, 0.10)", borderColor: "rgb(138, 43, 226)", icon: '/icons/keyIcon.svg'}
];