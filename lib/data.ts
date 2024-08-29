import { url } from "inspector";

// Nav Links
export const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

// services
export const services = [
    {
        id: "web",
        name: "Développement Web",
        imgURL:"/services/web.jpg",
        subtext: "Peu importe l'idée ou le concept que vous avez pour votre startup ou votre entreprise, nous pouvons développer tout ou partie, il suffit de nous demander.",
        option: [
            {label: "Développement HTML"},
            {label: "Développement Node.js"},
            {label: "Développement CodeIgniter"},
            {label: "Développement Laravel"},
            {label: "Développement PHP"},
            {label: "Développement Angular JS"},
            {label: "Développement CakePHP"},
            {label: "Développement Vue JS"},
        ],      
    },
    {
        id: "mob",
        name: "Développement Mobile",
        imgURL:"/services/mobile.jpg",
        subtext: "97 % des utilisateurs d'Internet accèdent à Internet via un smartphone. Amazon est le plus grand exemple de la puissance des applications mobiles. Vous avez une idée d'application mobile ? Contactez-nous.",
        option : [
            {label: "Application iOS"},
            {label: "Application Android"},
            {label: "Application Multiplateforme"},
            {label: "Application IoT"},
            {label: "Application Wearable"},
            {label: "Application Flutter"},
            {label: "Application React Native"},
        ],      
    },
    {
        id: "cms",
        name: "Développement CMS",
        imgURL:"/services/cms.jpg",
        subtext: "Si vous continuez à gérer les données de vos clients avec Excel ou Google Sheets, vous devez passer à un système de gestion de contenu (CMS) et nous pouvons vous montrer la puissance d'un CMS moderne, essayez-nous.",
        option: [
            {label: "Développement WordPress"},
            {label: "Développement Joomla"},
            {label: "Développement Shopify"},
            {label: "Développement Magento"},
            {label: "Développement Opencart"},
        ],      
    },
    {
        id: "marketing",
        name: "Marketing",
        imgURL:"/services/marketing.jpg",
        subtext: "Si vous voulez que votre marque se démarque des autres, vous avez certainement besoin d'une stratégie de marketing numérique pour votre entreprise et nous sommes des experts sur le marché.",
        option: [
            {label: "Optimisation pour les moteurs de recherche"},
            {label: "Publicités Display"},
            {label: "Marketing par E-mail"},
            {label: "Marketing sur les Réseaux Sociaux"},
            {label: "Génération de Leads"},
            {label: "Marketing de Contenu"},
            {label: "Copywriting"},
            {label: "Formation"},
            {label: "Community Manager"},
        ],      
    },
    {
        id: "graphisme",
        name: "Conception Graphique & Branding",
        imgURL:"/services/design.jpg",
        subtext: "Un bon design est bon pour les affaires, toutes les marques que nous voyons autour de nous réussissent grâce à leur design. Le design est bien plus que des formes colorées et des polices élégantes.",
        option: [
            {label: "Conception UI/UX"},
            {label: "Conception de Logo"},
            {label: "Graphisme Animé"},
            {label: "Conception de Marque"},
            {label: "Impression & Emballage"},
            {label: "Bannière/Affiche/Vœux"},
            {label: "Conception pour les Réseaux Sociaux"},
            {label: "Conception de Modèles"},
                ],      
    },
    {
        id: "media",
        name: "Audiovisuel & Media",
        imgURL:"/services/audio.jpg",
        subtext: "Propulsez votre marque et obtenez des résultats avec une  vidéo de qualité. Démarrez votre projet vidéo dès maintenant. Production vidéo à haut gamme, précise, rapide avec un budget modeste.",
        option: [
            {label: "Montage photo et videos"},
            {label: "Filmer des événements"},
            {label: "Tournage des évenements"},
            {label: "Excursion, Baptêmes"},
            {label: "Sonorisation, Mariage"},
            {label: "Conception de Modèles"},
                ],      
    },
    
];

// portfolio
export const projects = [
    {
        label: "Shopify",
        imgURL: "/portfolio/template-1.jpg",
        url: "https://fullstack-ecommerce.netlify.app"
    },
    {
        label: "Nioso",
        imgURL: "/portfolio/template-2.jpg",
        url: "https://niosso.com/cg"
    },
    {
        label: " Dryme",
        imgURL: "/portfolio/template-3.jpg",
        url: "https://dryvme.com/"
    },
    {
        label: "Kojoni",
        imgURL: "/portfolio/template-4.jpg",
        url: "https://www.kojoni-prestations.com/"
    },
    {
        label: "Zame",
        imgURL: "/portfolio/template-5.jpg",
        url: "https://zaame.com/"
    },
    {
        label: "My disponibilty",
        imgURL: "/portfolio/template-6.jpg",
        url: "https://apps.apple.com/ma/app/my-disponibility/id6450427036"
    },
    {
        label: "Playmyground",
        imgURL: "/portfolio/template-7.jpg",
        url: "https://play.google.com/store/apps/details?id=com.hlc.playground"
    },
    {
        label: "TEasyGo",
        imgURL: "/portfolio/template-1.jpg",
        url: "https://apps.apple.com/ma/app/easygo-location-de-voitures/id1661801715"
    },
]

// Dev web List
export const webList = [
    {label: "Développement HTML"},
    {label: "Développement Node.js"},
    {label: "Développement CodeIgniter"},
    {label: "Développement Laravel"},
    {label: "Développement PHP"},
    {label: "Développement Angular JS"},
    {label: "Développement CakePHP"},
    {label: "Développement Vue JS"},
];
// Dev mob List
export const mobile = [
    {label: "Application iOS"},
    {label: "Application Android"},
    {label: "Application Multiplateforme"},
    {label: "Application IoT"},
    {label: "Application Wearable"},
    {label: "Application Flutter"},
    {label: "Application React Native"},
];
// Dev design List
export const design = [
    {label: "Conception UI/UX"},
    {label: "Conception de Logo"},
    {label: "Graphisme Animé"},
    {label: "Conception de Marque"},
    {label: "Impression & Emballage"},
    {label: "Bannière/Affiche/Vœux"},
    {label: "Conception pour les Réseaux Sociaux"},
    {label: "Conception de Modèles"},
    {label: "Conception de Modèles"},
    {label: "Conception de Modèles"},
    {label: "Montage photo et videos"},
];
// Marketing Digital
export const marketing = [
    {label: "Referencement SEO SEA"},
    {label: "Publicités Display"},
    {label: "Marketing par E-mail"},
    {label: "Marketing sur les Réseaux Sociaux"},
    {label: "Génération de Leads"},
    {label: "Marketing de Contenu"},
    {label: "Copywriting"},
    {label: "Formation"},
    {label: "Community Manager"},
];

// Dev CMS List
export const cms = [
    {label: "Développement WordPress"},
    {label: "Développement Joomla"},
    {label: "Développement Shopify"},
    {label: "Développement Magento"},
    {label: "Développement Opencart"},
];


// slider data

export const sliderData = [
    {
        id: 1,
        title: "Développement mobile",
        tagline: "Création application Android et IOS",
        image: "/1.png",
        imgUrl: "/mob.png",
        button: [
            {
                id: 1,
                text: "Contactez-Nous",
                link: "/contact",
                type: "btn-outline-blue text-lg dark:hover:shadow-bleu"
            }
        ]
    },
    {
        id: 2,
        title: "Marketing Digital",
        tagline: "Atteignez vos objectifs en augmentant votre visibilité",
        image: "/2.png",
        imgUrl: "/marketing.png",
        button: [
            {
                id: 2,
                text: "Contactez-Nous",
                link: "/contact",
                type: "btn-outline-blue text-lg dark:hover:shadow-bleu"
            }
        ]
    },
    {
        id: 3,
        title: "Conception Graphique",
        tagline: "Demarquez vous par votre style",
        image: "/1.png",
        imgUrl: "/graphic.png",
        button: [
            {
                id: 3,
                text: "Contactez-Nous",
                link: "/contact",
                type: "btn-outline-blue text-lg dark:hover:shadow-bleu"
            }
        ]
    },
    {
        id: 4,
        title: "Création Site Internet",
        tagline: "Site professionnel responsive",
        image: "/2.png",
        imgUrl: "/web.png",
        button: [
            {
                id: 4,
                text: "Voir Nos Réalisations",
                link: "/portfolio",
                type: "btn-outline-blue text-lg dark:hover:shadow-bleu"
            }
        ]
    },
]