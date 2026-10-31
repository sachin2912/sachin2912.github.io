/* ============================================================================
 *  data.js  —  THE ONLY FILE YOU NORMALLY NEED TO EDIT
 * ----------------------------------------------------------------------------
 *  Everything on the site is rendered from the objects below.
 *
 *  HOW TO ADD THINGS (quick guide):
 *    • New job / study / internship : add an object to SITE.timeline.<group>.items
 *    • New project                  : add an object to SITE.projects
 *    • New skill bar                : add an object to SITE.skills
 *    • New certification            : add an object to SITE.certifications
 *    • New volunteering entry       : add an object to SITE.volunteering
 *    • Change links / email / name  : edit SITE.profile
 *    • Add / change a language      : edit the I18N object at the bottom
 *
 *  Style note: date ranges use the arrow glyph "→" (reads as "to") instead of
 *  a dash, to keep the writing dash-free. Keep that convention when you add
 *  new entries so everything stays consistent.
 * ========================================================================== */

const SITE = {
  /* --- Identity & links -------------------------------------------------- */
  profile: {
    name: "Sachin Sahil",
    handle: "sachin",                 // used for the console prompt: sachin@portfolio:~$
    role: "Security Engineer",
    email: "sahi2959@gmail.com",
    phone: "+44 7393 197982",
    location: "Manchester, UK",
    // Rotating one-liners typed under the name in the hero
    taglines: [
      "Security engineer who writes code to make controls real",
      "Building and evaluating agentic AI penetration testing at Cytix",
      "Identity, application and cloud security",
      "MSc Cyber Security, Distinction (Lancaster)",
    ],
    // Top stat cards in the hero
    stats: [
      { label: "focus", value: "Security engineering and AI pentest evaluation" },
      { label: "education", value: "MSc Cyber Security, Distinction (Lancaster)" },
      { label: "certified", value: "CompTIA Security+ and Okta Professional" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/sachin-sahil",
      github: "https://github.com/sachin2912",
      medium: "https://medium.com/@sahi2959",
    },
  },

  /* --- "whoami" tags (short, scannable) ---------------------------------- */
  badges: [
    "Okta & SailPoint",
    "Cloudflare WAF",
    "Python / Flask APIs",
    "Anomaly detection",
    "Agentic AI security",
    "Power BI & Automate",
  ],

  /* --- Current focus chips (shown in the "now" section) ------------------ */
  nowChips: ["AI pentesting", "agent evaluation", "benchmarking", "LLM safety"],

  /* --- Experience timeline ----------------------------------------------
   * Groups render in this order. Add an item = add one object to `items`.
   * Fields: date, title, org, desc, chips? (optional array)
   * -------------------------------------------------------------------- */
  timeline: {
    work: {
      label: "professional experience",
      heading: "Making security controls real in production",
      items: [
        {
          date: "Jun 2026 → Present",
          title: "Security Engineer / Researcher",
          org: "Cytix Ltd.",
          desc:
            "I develop and test an AI agent that performs penetration testing. I extend its tooling and document where it produces unreliable or unsafe output during live assessments. I also built a benchmarking harness that scores each version on accuracy, false positive rate, coverage and running cost.",
          chips: ["Agentic AI", "Pen testing", "Benchmarking", "Python"],
        },
        {
          date: "Sep 2023 → Sep 2025",
          title: "Staff Specialist Information Security Engineer",
          org: "BMC Software Inc.",
          desc:
            "I built anomaly detection on Okta and Beyond Identity authentication events, owned the enterprise WAF migration from ThreatX to Cloudflare, and ran SailPoint access reviews that internal audit relied on. My Python and Power BI reporting automated control status updates and saved around 40 hours of manual work each month. I also shipped internal Flask tools, including a HAR sanitiser that strips credentials and personal data from support captures.",
          chips: ["Okta", "Cloudflare WAF", "SailPoint", "Python", "Power BI"],
        },
        {
          date: "Jun 2022 → Aug 2023",
          title: "Senior Software Engineer",
          org: "Metron Security Pvt. Ltd.",
          desc:
            "I built and maintained integrations with third party security vendor platforms, working through their APIs and authentication schemes. I also led on call incident response for critical production issues, from triage through to root cause and documented resolution.",
          chips: ["REST APIs", "Integrations", "Incident response"],
        },
        {
          date: "Jul 2021 → Jan 2022",
          title: "Software Engineering Associate",
          org: "Amdocs Development Centre India LLP",
          desc:
            "I developed Python automation to provision and manage cloud infrastructure, integrating with CI/CD pipelines and REST APIs. This removed repetitive manual deployment steps and improved reliability.",
          chips: ["Python", "CI/CD", "Cloud"],
        },
      ],
    },
    education: {
      label: "education",
      heading: "Security first foundations",
      items: [
        {
          date: "Sep 2025 → Sep 2026",
          title: "MSc Cyber Security, Distinction",
          org: "Lancaster University, UK",
          desc:
            "Graduated with Distinction. Modules covered Information System Security Management, Risk Management, Penetration Testing, Digital Forensics, Network and System Security, and Cyber Law. My dissertation, completed in collaboration with Cytix, evaluated an agentic AI penetration testing system.",
          chips: ["Distinction", "Dissertation with Cytix"],
        },
        {
          date: "Aug 2017 → Jun 2021",
          title: "B.Tech, Information Technology",
          org: "Savitribai Phule Pune University (MIT Academy of Engineering)",
          desc:
            "CGPA 8.82, First Class (UK equivalent). Covered Operating Systems, OOP, Distributed Systems, DBMS, Web Technology, Cloud Computing, Machine Learning and Deep Learning.",
        },
      ],
    },
    internships: {
      label: "internships (alongside study)",
      heading: "Hands on practice while studying",
      items: [
        {
          date: "May 2026 → Present · Dec 2025 → Feb 2026",
          title: "Intern",
          org: "Everlink",
          desc:
            "I threat modelled and security tested core product features with the product team, documenting vulnerabilities and remediation plans. I also prepared investor data room documentation evidencing the identity security market and the product's security.",
          chips: ["Threat modelling", "Security testing"],
        },
      ],
    },
    community: {
      label: "part time and community",
      heading: "Supporting the Lancaster community",
      items: [
        {
          date: "Dec 2025 → Present",
          title: "Student Ambassador, Cyber Security",
          org: "Lancaster University",
          desc:
            "Peer ambassador for the MSc Cyber Security programme. I support prospective and current students at open days, virtual events and online forums, sharing insight on course content and career pathways.",
        },
        {
          date: "Oct 2025 → Mar 2026",
          title: "Teaching Assistant",
          org: "Lancaster University",
          desc:
            "Teaching assistant for core security and systems modules. I guide labs, grade coursework, and mentor project teams.",
          chips: ["SCC351 Adv. Cyber Security", "SCC352 Secure CPS", "SCC331 Distributed Systems", "SCC211 Software Design"],
        },
      ],
    },
  },

  /* --- Skill bars (label + level out of 100) ----------------------------- */
  skills: [
    { label: "Identity & Access (Okta / SailPoint / Beyond Identity)", level: 90 },
    { label: "Cloud WAF (Cloudflare / ThreatX)", level: 88 },
    { label: "Python automation & Flask APIs", level: 87 },
    { label: "Anomaly detection & incident triage", level: 84 },
    { label: "Data & reporting (ETL · Power BI · Power Automate)", level: 82 },
    { label: "Agentic AI security & evaluation", level: 78 },
  ],

  /* --- Projects ---------------------------------------------------------
   * Fields: title, blurb, chips, details (array of bullet strings), link? (url)
   * -------------------------------------------------------------------- */
  projects: [
    {
      title: "AI Pen-Test Benchmarking Harness",
      blurb:
        "A harness that evaluates an agentic AI penetration testing agent after every change, so improvements are judged on evidence rather than impressions.",
      chips: ["Python", "LLM agents", "Evaluation"],
      details: [
        "Scores each agent version on accuracy, false positive rate, coverage and running cost.",
        "Analysed 207 test cases and surfaced a fallback label that made results look better than they were.",
        "Found token cost did not track detection success, which informs where to spend compute.",
      ],
    },
    {
      title: "HAR Sanitiser",
      blurb:
        "Internal Flask tool that strips credentials and personal data out of support HAR captures before they are shared.",
      chips: ["Flask", "Python", "Data protection"],
      details: [
        "Removes tokens, cookies and personal data from browser network captures.",
        "Shipped to production with authentication, input validation and CI/CD.",
        "Protects both staff and customer data during support workflows.",
      ],
    },
    {
      title: "Cloudflare WAF Migration",
      blurb:
        "I owned the enterprise WAF migration from ThreatX to Cloudflare, with staged rollouts, OWASP and custom rules, tuned after release.",
      chips: ["Cloudflare WAF", "OWASP", "Change management"],
      details: [
        "Mapped rules and staged rollouts with rollback plans.",
        "Tuned rules to cut false positives while keeping genuine threats blocked.",
        "Improved application layer coverage with a smoother user experience.",
      ],
    },
    {
      title: "Phishing Page Analyser",
      blurb:
        "GUI tool that parses a webpage and surfaces external redirects to help spot phishing infrastructure.",
      chips: ["Python", "GUI", "Security automation"],
      details: [
        "Parses target page content and lists outbound redirects.",
        "Provides a simple GUI workflow for quick inspection.",
      ],
      link: "https://github.com/sachin2912/Phishing-page-analyser",
    },
  ],

  /* --- Certifications ---------------------------------------------------- */
  certifications: [
    {
      name: "CompTIA Security+",
      date: "Aug 2025",
      desc: "Validated foundational security skills across network, cloud and identity domains.",
      link: "https://www.credly.com/badges/97c55943-3ca9-47e2-a503-68696904717f/public_url",
    },
    {
      name: "Okta Professional Certified",
      date: "Jun 2024",
      desc: "Proficiency administering Okta tenants, policies, lifecycle and access workflows.",
      link: "https://www.credly.com/badges/e516eb40-10db-4156-a263-3e79a41e7e3d/public_url",
    },
  ],

  /* --- Volunteering ------------------------------------------------------ */
  volunteering: [
    {
      name: "Nullcon 2025 : Audio Visual Volunteer",
      desc: "AV team member handling setup, live troubleshooting and speaker liaison to keep sessions running smoothly.",
      link: "https://credsverse.com/credentials/df068461-f0bb-4b25-a61b-6b15b3bfc2f7",
    },
  ],

  /* --- Interactive console --------------------------------------------- */
  // Lines printed when the console first loads.
  terminalBoot: [
    "[ok]    identity automations loaded (okta, sailpoint, beyond identity)",
    "[ok]    cloudflare waf ruleset validated (owasp + custom)",
    "[done]  msc cyber security complete, distinction. dissertation with cytix shipped.",
    "[focus] building and evaluating an agentic ai pen testing agent @ cytix",
    "[ctf]   capture the flag: a flag is hidden in this console. type 'hint' to begin.",
    "[help]  type 'help' to list every command.",
  ],
  // The CTF flag revealed by the `flag` command.
  flag: "flag{stay_curious_keep_proving_it_works}",

  /* --- Contact footer line ---------------------------------------------- */
};

/* ============================================================================
 *  I18N  —  translations for UI chrome, section titles and prose.
 *  To add a language: copy the `en` block, translate the values, and add an
 *  <option> with the same key in index.html's language picker.
 *  Any missing key automatically falls back to English.
 * ========================================================================== */
const I18N = {
  en: {
    nav_home: "home", nav_about: "about", nav_now: "now", nav_timeline: "experience",
    nav_skills: "skills", nav_projects: "projects", nav_certs: "certs",
    nav_terminal: "console", nav_contact: "contact",
    hero_eyebrow: "access granted",
    hero_cta_projects: "view projects", hero_cta_resume: "download cv", hero_cta_contact: "contact",
    about_title: "whoami",
    about_p1: "Security engineer based in Manchester with nearly four years across identity, application and cloud security, at BMC Software, Metron Security and now Cytix. I like the part of the job that actually reduces risk: investigating issues, gathering the evidence, and following fixes through to the end.",
    about_p2: "I am at my best where a security standard has to become something engineers will actually use, and where proving it works matters as much as building it. I hold an MSc in Cyber Security from Lancaster, awarded with Distinction, and CompTIA Security+.",
    now_title: "current focus",
    now_intro: "At Cytix I build and evaluate an agentic AI penetration testing agent. It started as my MSc dissertation, which I completed with Distinction, and it continues as research. The questions are simple: does the AI find real vulnerabilities, and can you trust what it reports?",
    now_goal: "I built a benchmarking harness that scores each version of the agent on accuracy, false positives, coverage and running cost, so every change is judged on evidence rather than impressions.",
    now_cta_title: "Want to compare notes?",
    now_cta_copy: "If you work on offensive security tooling, LLM agents, or evaluation and benchmarking, I would love to swap findings.",
    now_cta_btn: "start a conversation",
    now_cta_note: "I am especially keen to hear how others measure whether an AI agent is actually any good.",
    timeline_title: "experience",
    skills_title: "skills", projects_title: "projects",
    certs_title: "certifications", volunteering_title: "volunteering",
    terminal_title: "console", terminal_subtitle: "a real console. run commands, and capture the hidden flag. start with 'help'.",
    contact_title: "contact",
    contact_intro: "Always up for a conversation about security engineering, AI agent evaluation, or teaching.",
    footer_text: "Stay curious. Keep proving it works.",
    a11y_text: "text size", a11y_contrast: "contrast", a11y_theme: "theme", a11y_lang: "language",
    now_email_subject: "Comparing notes on AI pen test evaluation",
    now_email_body: "Hi Sachin,\n\nI work on offensive security tooling or AI agents and would love to compare notes. A bit about what I am doing:\n",
  },
  es: {
    nav_home: "inicio", nav_about: "sobre mí", nav_now: "ahora", nav_timeline: "experiencia",
    nav_skills: "habilidades", nav_projects: "proyectos", nav_certs: "certificaciones",
    nav_terminal: "consola", nav_contact: "contacto",
    hero_eyebrow: "acceso concedido",
    hero_cta_projects: "ver proyectos", hero_cta_resume: "descargar cv", hero_cta_contact: "contacto",
    about_title: "whoami",
    about_p1: "Ingeniero de seguridad con base en Mánchester y casi cuatro años en seguridad de identidad, aplicaciones y nube, en BMC Software, Metron Security y ahora Cytix. Me gusta la parte del trabajo que realmente reduce el riesgo: investigar, reunir evidencia y llevar las correcciones hasta el final.",
    about_p2: "Doy lo mejor donde un estándar de seguridad debe convertirse en algo que los ingenieros usarán de verdad, y donde demostrar que funciona importa tanto como construirlo. Tengo un MSc en Ciberseguridad por Lancaster, con Distinción, y CompTIA Security+.",
    now_title: "foco actual",
    now_intro: "En Cytix construyo y evalúo un agente de pentesting con IA agéntica. Empezó como mi tesis de máster, que completé con Distinción, y continúa como investigación. Las preguntas son simples: ¿la IA encuentra vulnerabilidades reales y se puede confiar en lo que reporta?",
    now_goal: "Construí un banco de pruebas que puntúa cada versión del agente en precisión, falsos positivos, cobertura y coste, para juzgar cada cambio con evidencia y no con intuición.",
    now_cta_title: "¿Comparamos ideas?",
    now_cta_copy: "Si trabajas en herramientas de seguridad ofensiva, agentes LLM o evaluación y benchmarking, me encantaría intercambiar hallazgos.",
    now_cta_btn: "iniciar conversación",
    now_cta_note: "Me interesa cómo otros miden si un agente de IA es realmente bueno.",
    timeline_title: "experiencia",
    skills_title: "habilidades", projects_title: "proyectos",
    certs_title: "certificaciones", volunteering_title: "voluntariado",
    terminal_title: "consola", terminal_subtitle: "una consola real. ejecuta comandos y captura la bandera oculta. empieza con 'help'.",
    contact_title: "contacto",
    contact_intro: "Siempre dispuesto a hablar de ingeniería de seguridad, evaluación de agentes de IA o docencia.",
    footer_text: "Sigue con curiosidad. Sigue demostrando que funciona.",
    a11y_text: "tamaño de texto", a11y_contrast: "contraste", a11y_theme: "tema", a11y_lang: "idioma",
    now_email_subject: "Intercambiar ideas sobre evaluación de pentesting con IA",
    now_email_body: "Hola Sachin,\n\nTrabajo en herramientas de seguridad ofensiva o agentes de IA y me gustaría intercambiar ideas. Sobre lo que hago:\n",
  },
  hi: {
    nav_home: "होम", nav_about: "परिचय", nav_now: "अभी", nav_timeline: "अनुभव",
    nav_skills: "कौशल", nav_projects: "प्रोजेक्ट्स", nav_certs: "प्रमाणपत्र",
    nav_terminal: "कंसोल", nav_contact: "संपर्क",
    hero_eyebrow: "एक्सेस मिला",
    hero_cta_projects: "प्रोजेक्ट देखें", hero_cta_resume: "सीवी डाउनलोड करें", hero_cta_contact: "संपर्क",
    about_title: "whoami",
    about_p1: "मैनचेस्टर में स्थित सुरक्षा इंजीनियर, पहचान, एप्लिकेशन और क्लाउड सुरक्षा में लगभग चार वर्षों का अनुभव, BMC Software, Metron Security और अब Cytix में। मुझे काम का वह हिस्सा पसंद है जो वास्तव में जोखिम घटाता है: जाँच करना, साक्ष्य जुटाना और सुधार को अंत तक पहुँचाना।",
    about_p2: "मैं वहाँ सर्वश्रेष्ठ हूँ जहाँ किसी सुरक्षा मानक को ऐसा बनाना हो जिसे इंजीनियर सच में उपयोग करें, और जहाँ यह साबित करना कि यह काम करता है उतना ही ज़रूरी है जितना उसे बनाना। मेरे पास Lancaster से MSc साइबर सुरक्षा (Distinction सहित) और CompTIA Security+ है।",
    now_title: "वर्तमान फोकस",
    now_intro: "Cytix में मैं एक एजेंटिक AI पेनिट्रेशन टेस्टिंग एजेंट बनाता और उसका मूल्यांकन करता हूँ। यह मेरी MSc थीसिस के रूप में शुरू हुआ, जिसे मैंने Distinction के साथ पूरा किया, और यह शोध के रूप में जारी है। सवाल सरल हैं: क्या AI असली कमज़ोरियाँ ढूँढता है, और क्या उसकी रिपोर्ट पर भरोसा किया जा सकता है?",
    now_goal: "मैंने एक बेंचमार्किंग हार्नेस बनाया जो एजेंट के हर संस्करण को सटीकता, फॉल्स पॉज़िटिव, कवरेज और लागत पर अंक देता है, ताकि हर बदलाव साक्ष्य के आधार पर आँका जाए, धारणा के नहीं।",
    now_cta_title: "विचार साझा करें?",
    now_cta_copy: "यदि आप ऑफेंसिव सिक्योरिटी टूलिंग, LLM एजेंट, या मूल्यांकन और बेंचमार्किंग पर काम करते हैं, तो निष्कर्ष साझा करना अच्छा लगेगा।",
    now_cta_btn: "बातचीत शुरू करें",
    now_cta_note: "खासकर यह जानने में रुचि है कि दूसरे कैसे मापते हैं कि कोई AI एजेंट सचमुच अच्छा है या नहीं।",
    timeline_title: "अनुभव",
    skills_title: "कौशल", projects_title: "प्रोजेक्ट्स",
    certs_title: "प्रमाणपत्र", volunteering_title: "स्वेच्छा",
    terminal_title: "कंसोल", terminal_subtitle: "एक असली कंसोल। कमांड चलाएँ और छिपा हुआ फ्लैग कैप्चर करें। 'help' से शुरू करें।",
    contact_title: "संपर्क",
    contact_intro: "सुरक्षा इंजीनियरिंग, AI एजेंट मूल्यांकन या शिक्षण पर बात करने के लिए हमेशा तैयार।",
    footer_text: "जिज्ञासु बने रहें। साबित करते रहें कि यह काम करता है।",
    a11y_text: "टेक्स्ट आकार", a11y_contrast: "कंट्रास्ट", a11y_theme: "थीम", a11y_lang: "भाषा",
    now_email_subject: "AI पेन टेस्ट मूल्यांकन पर विचार साझा करना",
    now_email_body: "Hi Sachin,\n\nमैं ऑफेंसिव सिक्योरिटी टूलिंग या AI एजेंट पर काम करता हूँ और विचार साझा करना चाहूँगा। मेरे बारे में:\n",
  },
  de: {
    nav_home: "start", nav_about: "über mich", nav_now: "aktuell", nav_timeline: "erfahrung",
    nav_skills: "fähigkeiten", nav_projects: "projekte", nav_certs: "zertifikate",
    nav_terminal: "konsole", nav_contact: "kontakt",
    hero_eyebrow: "zugriff gewährt",
    hero_cta_projects: "projekte ansehen", hero_cta_resume: "cv herunterladen", hero_cta_contact: "kontakt",
    about_title: "whoami",
    about_p1: "In Manchester ansässiger Security Engineer mit fast vier Jahren in Identity, Application und Cloud Security, bei BMC Software, Metron Security und jetzt Cytix. Ich mag den Teil der Arbeit, der das Risiko wirklich senkt: untersuchen, Belege sammeln und Fixes bis zum Ende verfolgen.",
    about_p2: "Am stärksten bin ich dort, wo ein Security Standard zu etwas werden muss, das Engineers tatsächlich nutzen, und wo der Nachweis, dass es funktioniert, so wichtig ist wie das Bauen. Ich habe einen MSc in Cyber Security aus Lancaster, mit Auszeichnung, und CompTIA Security+.",
    now_title: "aktueller fokus",
    now_intro: "Bei Cytix baue und bewerte ich einen agentischen KI Agenten für Penetrationstests. Es begann als meine MSc Dissertation, die ich mit Auszeichnung abgeschlossen habe, und läuft als Forschung weiter. Die Fragen sind einfach: Findet die KI echte Schwachstellen, und kann man den Berichten trauen?",
    now_goal: "Ich habe ein Benchmarking Harness gebaut, das jede Version des Agents nach Genauigkeit, False Positives, Abdeckung und Kosten bewertet, damit jede Änderung an Belegen statt an Eindrücken gemessen wird.",
    now_cta_title: "Ideen austauschen?",
    now_cta_copy: "Wenn du an offensiven Security Tools, LLM Agents oder Evaluation und Benchmarking arbeitest, tausche ich mich gern aus.",
    now_cta_btn: "gespräch starten",
    now_cta_note: "Besonders interessiert daran, wie andere messen, ob ein KI Agent wirklich gut ist.",
    timeline_title: "erfahrung",
    skills_title: "fähigkeiten", projects_title: "projekte",
    certs_title: "zertifikate", volunteering_title: "ehrenamt",
    terminal_title: "konsole", terminal_subtitle: "eine echte konsole. führe befehle aus und fange die versteckte flagge. starte mit 'help'.",
    contact_title: "kontakt",
    contact_intro: "Immer offen für ein Gespräch über Security Engineering, KI Agent Evaluation oder Lehre.",
    footer_text: "Bleib neugierig. Beweise weiter, dass es funktioniert.",
    a11y_text: "textgröße", a11y_contrast: "kontrast", a11y_theme: "thema", a11y_lang: "sprache",
    now_email_subject: "Austausch zur Bewertung von KI Pentests",
    now_email_body: "Hi Sachin,\n\nich arbeite an offensiven Security Tools oder KI Agents und würde mich gern austauschen. Kurz zu mir:\n",
  },
  it: {
    nav_home: "home", nav_about: "su di me", nav_now: "ora", nav_timeline: "esperienza",
    nav_skills: "competenze", nav_projects: "progetti", nav_certs: "certificazioni",
    nav_terminal: "console", nav_contact: "contatti",
    hero_eyebrow: "accesso consentito",
    hero_cta_projects: "vedi progetti", hero_cta_resume: "scarica il cv", hero_cta_contact: "contatti",
    about_title: "whoami",
    about_p1: "Security engineer con base a Manchester e quasi quattro anni tra sicurezza di identità, applicazioni e cloud, in BMC Software, Metron Security e ora Cytix. Mi piace la parte del lavoro che riduce davvero il rischio: indagare, raccogliere le prove e portare le correzioni fino in fondo.",
    about_p2: "Rendo al meglio dove uno standard di sicurezza deve diventare qualcosa che gli ingegneri useranno davvero, e dove dimostrare che funziona conta quanto costruirlo. Ho un MSc in Cyber Security a Lancaster, con lode, e CompTIA Security+.",
    now_title: "focus attuale",
    now_intro: "In Cytix costruisco e valuto un agente di pentesting con IA agentica. È nato come la mia tesi di laurea, che ho completato con lode, e prosegue come ricerca. Le domande sono semplici: l'IA trova vulnerabilità reali e ci si può fidare di ciò che riporta?",
    now_goal: "Ho costruito un harness di benchmarking che valuta ogni versione dell'agente su accuratezza, falsi positivi, copertura e costo, così ogni modifica è giudicata sulle prove e non sulle impressioni.",
    now_cta_title: "Confrontiamo idee?",
    now_cta_copy: "Se lavori su tooling di sicurezza offensiva, agenti LLM o valutazione e benchmarking, mi piacerebbe scambiare risultati.",
    now_cta_btn: "inizia una conversazione",
    now_cta_note: "Mi interessa come altri misurano se un agente IA è davvero valido.",
    timeline_title: "esperienza",
    skills_title: "competenze", projects_title: "progetti",
    certs_title: "certificazioni", volunteering_title: "volontariato",
    terminal_title: "console", terminal_subtitle: "una console vera. esegui comandi e cattura la bandiera nascosta. inizia con 'help'.",
    contact_title: "contatti",
    contact_intro: "Sempre disponibile a parlare di security engineering, valutazione di agenti IA o insegnamento.",
    footer_text: "Resta curioso. Continua a dimostrare che funziona.",
    a11y_text: "dimensione testo", a11y_contrast: "contrasto", a11y_theme: "tema", a11y_lang: "lingua",
    now_email_subject: "Confronto sulla valutazione di pentest con IA",
    now_email_body: "Ciao Sachin,\n\nlavoro su tooling di sicurezza offensiva o agenti IA e vorrei confrontarmi. In breve:\n",
  },
  fr: {
    nav_home: "accueil", nav_about: "à propos", nav_now: "actuel", nav_timeline: "expérience",
    nav_skills: "compétences", nav_projects: "projets", nav_certs: "certifications",
    nav_terminal: "console", nav_contact: "contact",
    hero_eyebrow: "accès autorisé",
    hero_cta_projects: "voir les projets", hero_cta_resume: "télécharger le cv", hero_cta_contact: "contact",
    about_title: "whoami",
    about_p1: "Ingénieur sécurité basé à Manchester avec près de quatre ans en sécurité de l'identité, des applications et du cloud, chez BMC Software, Metron Security et maintenant Cytix. J'aime la partie du travail qui réduit vraiment le risque : enquêter, rassembler les preuves et mener les correctifs jusqu'au bout.",
    about_p2: "Je suis au meilleur là où un standard de sécurité doit devenir quelque chose que les ingénieurs utiliseront vraiment, et où prouver que ça marche compte autant que le construire. J'ai un MSc en Cyber Security de Lancaster, obtenu avec mention, et CompTIA Security+.",
    now_title: "focus actuel",
    now_intro: "Chez Cytix je construis et j'évalue un agent de pentest à IA agentique. Il est né de mon mémoire de master, que j'ai complété avec mention, et se poursuit comme recherche. Les questions sont simples : l'IA trouve-t-elle de vraies vulnérabilités, et peut-on faire confiance à ses rapports ?",
    now_goal: "J'ai construit un harnais de benchmarking qui note chaque version de l'agent sur la précision, les faux positifs, la couverture et le coût, pour juger chaque changement sur des preuves et non des impressions.",
    now_cta_title: "Échanger ?",
    now_cta_copy: "Si tu travailles sur l'outillage de sécurité offensive, les agents LLM ou l'évaluation et le benchmarking, j'adorerais échanger.",
    now_cta_btn: "démarrer une conversation",
    now_cta_note: "Surtout curieux de voir comment d'autres mesurent si un agent d'IA est vraiment bon.",
    timeline_title: "expérience",
    skills_title: "compétences", projects_title: "projets",
    certs_title: "certifications", volunteering_title: "bénévolat",
    terminal_title: "console", terminal_subtitle: "une vraie console. lance des commandes et capture le drapeau caché. commence par 'help'.",
    contact_title: "contact",
    contact_intro: "Toujours partant pour parler d'ingénierie sécurité, d'évaluation d'agents IA ou d'enseignement.",
    footer_text: "Reste curieux. Continue de prouver que ça marche.",
    a11y_text: "taille du texte", a11y_contrast: "contraste", a11y_theme: "thème", a11y_lang: "langue",
    now_email_subject: "Échange sur l'évaluation de pentest par IA",
    now_email_body: "Bonjour Sachin,\n\nje travaille sur l'outillage de sécurité offensive ou les agents IA et j'aimerais échanger. En bref :\n",
  },
  nl: {
    nav_home: "start", nav_about: "over mij", nav_now: "nu", nav_timeline: "ervaring",
    nav_skills: "skills", nav_projects: "projecten", nav_certs: "certificaten",
    nav_terminal: "console", nav_contact: "contact",
    hero_eyebrow: "toegang verleend",
    hero_cta_projects: "bekijk projecten", hero_cta_resume: "cv downloaden", hero_cta_contact: "contact",
    about_title: "whoami",
    about_p1: "Security engineer gevestigd in Manchester met bijna vier jaar in identity, applicatie en cloud security, bij BMC Software, Metron Security en nu Cytix. Ik hou van het deel van het werk dat het risico echt verlaagt: onderzoeken, bewijs verzamelen en fixes tot het einde volgen.",
    about_p2: "Ik ben op mijn best waar een securitystandaard iets moet worden dat engineers echt gebruiken, en waar bewijzen dat het werkt even belangrijk is als het bouwen. Ik heb een MSc Cyber Security uit Lancaster, met onderscheiding, en CompTIA Security+.",
    now_title: "huidige focus",
    now_intro: "Bij Cytix bouw en evalueer ik een agentic AI agent voor penetratietesten. Het begon als mijn MSc scriptie, die ik met onderscheiding afrondde, en gaat door als onderzoek. De vragen zijn simpel: vindt de AI echte kwetsbaarheden, en kun je de rapporten vertrouwen?",
    now_goal: "Ik bouwde een benchmarking harnas dat elke versie van de agent scoort op nauwkeurigheid, false positives, dekking en kosten, zodat elke wijziging op bewijs wordt beoordeeld en niet op indrukken.",
    now_cta_title: "Ideeën uitwisselen?",
    now_cta_copy: "Werk je aan offensieve security tooling, LLM agents of evaluatie en benchmarking? Dan wissel ik graag bevindingen uit.",
    now_cta_btn: "start een gesprek",
    now_cta_note: "Vooral benieuwd hoe anderen meten of een AI agent echt goed is.",
    timeline_title: "ervaring",
    skills_title: "skills", projects_title: "projecten",
    certs_title: "certificaten", volunteering_title: "vrijwilligerswerk",
    terminal_title: "console", terminal_subtitle: "een echte console. voer commando's uit en verover de verborgen vlag. begin met 'help'.",
    contact_title: "contact",
    contact_intro: "Altijd in voor een gesprek over security engineering, AI agent evaluatie of lesgeven.",
    footer_text: "Blijf nieuwsgierig. Blijf bewijzen dat het werkt.",
    a11y_text: "tekstgrootte", a11y_contrast: "contrast", a11y_theme: "thema", a11y_lang: "taal",
    now_email_subject: "Uitwisselen over evaluatie van AI pentests",
    now_email_body: "Hoi Sachin,\n\nik werk aan offensieve security tooling of AI agents en wil graag uitwisselen. Kort over mij:\n",
  },
  cy: {
    nav_home: "cartref", nav_about: "amdanaf i", nav_now: "nawr", nav_timeline: "profiad",
    nav_skills: "sgiliau", nav_projects: "prosiectau", nav_certs: "ardystiadau",
    nav_terminal: "consol", nav_contact: "cyswllt",
    hero_eyebrow: "mynediad wedi'i ganiatáu",
    hero_cta_projects: "gweld prosiectau", hero_cta_resume: "lawrlwytho cv", hero_cta_contact: "cyswllt",
    about_title: "whoami",
    about_p1: "Peiriannydd diogelwch wedi'i leoli ym Manceinion gyda bron i bedair blynedd ar draws diogelwch hunaniaeth, cymwysiadau a chwmwl, yn BMC Software, Metron Security a Cytix bellach. Rwy'n hoffi'r rhan sy'n lleihau risg go iawn: ymchwilio, casglu tystiolaeth a dilyn atebion hyd y diwedd.",
    about_p2: "Rwyf ar fy ngorau lle mae'n rhaid i safon ddiogelwch ddod yn rhywbeth y bydd peirianwyr yn ei ddefnyddio go iawn, a lle mae profi ei fod yn gweithio yr un mor bwysig â'i adeiladu. Mae gennyf MSc mewn Diogelwch Seiber o Lancaster, gyda Rhagoriaeth, a CompTIA Security+.",
    now_title: "ffocws cyfredol",
    now_intro: "Yn Cytix rwy'n adeiladu ac yn gwerthuso asiant AI agentig ar gyfer profi treiddiad. Dechreuodd fel fy nhraethawd MSc, a gwblheais gyda Rhagoriaeth, ac mae'n parhau fel ymchwil. Mae'r cwestiynau'n syml: a yw'r AI yn canfod gwendidau go iawn, ac a ellir ymddiried yn ei adroddiadau?",
    now_goal: "Adeiladais harnais meincnodi sy'n sgorio pob fersiwn o'r asiant ar gywirdeb, positif ffug, cwmpas a chost, fel bod pob newid yn cael ei farnu ar dystiolaeth yn hytrach nag argraffiadau.",
    now_cta_title: "Cyfnewid syniadau?",
    now_cta_copy: "Os ydych yn gweithio ar offer diogelwch ymosodol, asiantau LLM, neu werthuso a meincnodi, byddwn wrth fy modd yn cyfnewid canfyddiadau.",
    now_cta_btn: "dechrau sgwrs",
    now_cta_note: "Yn arbennig o awyddus i glywed sut mae eraill yn mesur a yw asiant AI yn dda mewn gwirionedd.",
    timeline_title: "profiad",
    skills_title: "sgiliau", projects_title: "prosiectau",
    certs_title: "ardystiadau", volunteering_title: "gwirfoddoli",
    terminal_title: "consol", terminal_subtitle: "consol go iawn. rhedwch orchmynion a daliwch y faner gudd. dechreuwch gyda 'help'.",
    contact_title: "cyswllt",
    contact_intro: "Bob amser yn barod i sgwrsio am beirianneg diogelwch, gwerthuso asiantau AI neu addysgu.",
    footer_text: "Arhoswch yn chwilfrydig. Daliwch i brofi ei fod yn gweithio.",
    a11y_text: "maint testun", a11y_contrast: "cyferbyniad", a11y_theme: "thema", a11y_lang: "iaith",
    now_email_subject: "Cyfnewid syniadau am werthuso prawf treiddiad AI",
    now_email_body: "Helo Sachin,\n\nrwy'n gweithio ar offer diogelwch ymosodol neu asiantau AI a hoffwn gyfnewid syniadau. Yn fyr:\n",
  },
  ga: {
    nav_home: "baile", nav_about: "fúm féin", nav_now: "anois", nav_timeline: "taithí",
    nav_skills: "scileanna", nav_projects: "tionscadail", nav_certs: "deimhnithe",
    nav_terminal: "consól", nav_contact: "teagmháil",
    hero_eyebrow: "rochtain ceadaithe",
    hero_cta_projects: "féach tionscadail", hero_cta_resume: "íoslódáil cv", hero_cta_contact: "teagmháil",
    about_title: "whoami",
    about_p1: "Innealtóir slándála atá lonnaithe i Manchain le beagnach ceithre bliana i slándáil aitheantais, feidhmchlár agus néil, ag BMC Software, Metron Security agus Cytix anois. Is maith liom an chuid den obair a laghdaíonn an riosca i ndáiríre: fiosrú, fianaise a bhailiú agus réitigh a leanúint go deireadh.",
    about_p2: "Táim ag mo bhuaic nuair a chaithfidh caighdeán slándála a bheith ina rud a úsáidfidh innealtóirí i ndáiríre, agus nuair atá cruthú go n-oibríonn sé chomh tábhachtach lena thógáil. Tá MSc sa tSlándáil Chibear agam ó Lancaster, le Gradam, agus CompTIA Security+.",
    now_title: "fócas reatha",
    now_intro: "Ag Cytix tógaim agus déanaim meastóireacht ar ghníomhaire AI gníomhaireachta le haghaidh tástála treáite. Thosaigh sé mar mo thráchtas MSc, a chríochnaigh mé le Gradam, agus leanann sé mar thaighde. Tá na ceisteanna simplí: an aimsíonn an AI leochaileachtaí fíora, agus an féidir muinín a chur ina thuairiscí?",
    now_goal: "Thóg mé úimléad tagarmharcála a scóráileann gach leagan den ghníomhaire ar chruinneas, dearfacha bréagacha, clúdach agus costas, ionas go measfar gach athrú ar fhianaise seachas ar thuiscintí.",
    now_cta_title: "Smaointe a mhalartú?",
    now_cta_copy: "Má oibríonn tú ar uirlisí slándála ionsaitheacha, gníomhairí LLM, nó meastóireacht agus tagarmharcáil, ba bhreá liom torthaí a mhalartú.",
    now_cta_btn: "tosaigh comhrá",
    now_cta_note: "Fonn orm go háirithe cloisteáil conas a thomhaiseann daoine eile an bhfuil gníomhaire AI go maith i ndáiríre.",
    timeline_title: "taithí",
    skills_title: "scileanna", projects_title: "tionscadail",
    certs_title: "deimhnithe", volunteering_title: "obair dheonach",
    terminal_title: "consól", terminal_subtitle: "consól fíor. rith orduithe agus gabh an bhratach fholaithe. tosaigh le 'help'.",
    contact_title: "teagmháil",
    contact_intro: "I gcónaí sásta labhairt faoi innealtóireacht slándála, meastóireacht gníomhairí AI nó teagasc.",
    footer_text: "Fan fiosrach. Lean ort ag cruthú go n-oibríonn sé.",
    a11y_text: "méid téacs", a11y_contrast: "codarsnacht", a11y_theme: "téama", a11y_lang: "teanga",
    now_email_subject: "Smaointe a mhalartú faoi mheastóireacht tástála treáite AI",
    now_email_body: "Dia dhuit a Sachin,\n\noibrím ar uirlisí slándála ionsaitheacha nó gníomhairí AI agus ba bhreá liom smaointe a mhalartú. Go hachomair:\n",
  },
  sv: {
    nav_home: "hem", nav_about: "om mig", nav_now: "nu", nav_timeline: "erfarenhet",
    nav_skills: "färdigheter", nav_projects: "projekt", nav_certs: "certifikat",
    nav_terminal: "konsol", nav_contact: "kontakt",
    hero_eyebrow: "åtkomst beviljad",
    hero_cta_projects: "se projekt", hero_cta_resume: "ladda ner cv", hero_cta_contact: "kontakt",
    about_title: "whoami",
    about_p1: "Säkerhetsingenjör baserad i Manchester med nästan fyra år inom identitets, applikations och molnsäkerhet, på BMC Software, Metron Security och nu Cytix. Jag gillar den del av jobbet som faktiskt minskar risken: utreda, samla bevis och följa åtgärder ända fram.",
    about_p2: "Jag är som bäst där en säkerhetsstandard måste bli något som ingenjörer faktiskt använder, och där att bevisa att det fungerar är lika viktigt som att bygga det. Jag har en MSc i Cyber Security från Lancaster, med utmärkelse, och CompTIA Security+.",
    now_title: "aktuellt fokus",
    now_intro: "På Cytix bygger och utvärderar jag en agentisk AI agent för penetrationstester. Det började som min MSc uppsats, som jag slutförde med utmärkelse, och fortsätter som forskning. Frågorna är enkla: hittar AI:n verkliga sårbarheter, och kan man lita på det den rapporterar?",
    now_goal: "Jag byggde ett benchmarking ramverk som poängsätter varje version av agenten på träffsäkerhet, falska positiva, täckning och kostnad, så att varje ändring bedöms på bevis snarare än intryck.",
    now_cta_title: "Utbyta idéer?",
    now_cta_copy: "Om du jobbar med offensiva säkerhetsverktyg, LLM agenter eller utvärdering och benchmarking vill jag gärna utbyta fynd.",
    now_cta_btn: "starta ett samtal",
    now_cta_note: "Särskilt nyfiken på hur andra mäter om en AI agent faktiskt är bra.",
    timeline_title: "erfarenhet",
    skills_title: "färdigheter", projects_title: "projekt",
    certs_title: "certifikat", volunteering_title: "volontärarbete",
    terminal_title: "konsol", terminal_subtitle: "en riktig konsol. kör kommandon och fånga den dolda flaggan. börja med 'help'.",
    contact_title: "kontakt",
    contact_intro: "Alltid öppen för ett samtal om säkerhetsteknik, utvärdering av AI agenter eller undervisning.",
    footer_text: "Var nyfiken. Fortsätt bevisa att det fungerar.",
    a11y_text: "textstorlek", a11y_contrast: "kontrast", a11y_theme: "tema", a11y_lang: "språk",
    now_email_subject: "Utbyta idéer om utvärdering av AI pentester",
    now_email_body: "Hej Sachin,\n\njag jobbar med offensiva säkerhetsverktyg eller AI agenter och vill gärna utbyta idéer. Kort om mig:\n",
  },
};

// Expose for both the main page and the resume page.
if (typeof window !== "undefined") {
  window.SITE = SITE;
  window.I18N = I18N;
}
