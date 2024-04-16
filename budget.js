var wallet = {
    depense: []
}

var data = [
    {
        type: "Santé",
        desc: ["Consultation médicale chez un généraliste pour un bilan de santé annuel", "Achat de médicaments sur ordonnance pour traiter une infection respiratoire", "Visite chez un spécialiste en dermatologie pour un examen de la peau et le traitement de l'acné", "Frais d'hospitalisation pour une chirurgie de routine telle qu'une appendicectomie", "Séances de kinésithérapie pour rééduquer un membre après une fracture"],
        price_max: 2000,
        price_min: 500
    },
    {
        type: "Sortie",
        desc: ["Repas dans un restaurant chic en centre-ville avec des amis", "Billets pour assister à un concert de votre artiste préféré", "Achat de souvenirs et de cadeaux lors d'une visite touristique dans une ville historique", "Frais d'inscription pour une excursion en bateau le long d'une côte pittoresque", "Location d'équipement de ski pour une journée sur les pistes en montagne"],
        price_max: 3666,
        price_min: 14
    },
    {
        type: "Loisir",
        desc: ["Abonnement mensuel à une salle de sport pour accéder à des équipements de fitness et à des cours collectifs", "Achat de billets pour assister à un match de football ou à un événement sportif", "Frais d'adhésion à un club de lecture pour emprunter des livres et participer à des discussions littéraires", "Inscription à des cours de peinture ou de poterie pour développer des compétences artistiques", "Location d'un vélo pour une balade en plein air le long d'un sentier naturel ou d'une piste cyclable"],
        price_max: 745,
        price_min: 26
    },
    {
        type: "Loyer",
        desc: ["Paiement mensuel du loyer pour un appartement en centre-ville", "Dépôt de garantie lors de la location d'une maison ou d'un appartement", "Frais de gestion immobilière pour des services tels que la collecte des loyers et l'entretien des biens", "Paiement des charges locatives pour couvrir les frais d'entretien des parties communes, comme l'ascenseur ou les espaces verts", "Assurance habitation pour protéger le contenu et les biens personnels contre les dommages et le vol"],
        price_max: 1569,
        price_min: 14
    }, 
    {
        type: "Voiture",
        desc: ["Paiement mensuel du prêt automobile pour l'achat d'un véhicule neuf ou d'occasion", "Carburant pour faire le plein du réservoir et assurer les déplacements quotidiens", "Entretien régulier tel que la vidange d'huile, le remplacement des filtres et des pneus", "Assurance automobile pour couvrir les dommages en cas d'accident, de vol ou de vandalisme", "Frais de stationnement lors des déplacements en centre-ville ou dans des zones payantes"],
        price_max: 200,
        price_min: 50
    }, 
    {
        type: "Frais",
        desc: ["Frais bancaires mensuels pour la gestion de compte et l'utilisation de services bancaires", "Frais de livraison pour des achats en ligne ou des services de livraison à domicile", "Frais de scolarité pour des cours ou des programmes d'éducation, tels que des cours universitaires ou des formations professionnelles", "Frais d'abonnement à des services de streaming vidéo, de musique ou de jeux en ligne", "Frais de carte de crédit annuels pour l'utilisation d'une carte de crédit avec des avantages ou des récompenses"],
        price_max: 20000,
        price_min: 5005
    }
]
var min = 713251378
var max = 1713251378

for (var i = 0; i < 1000; i++) {
    var object_type = data[Math.round(Math.random() * ((data.length - 1) - 0) + 0)]
    var object_description = object_type.desc[Math.round(Math.random() * ((object_type.desc.length - 1) - 0) + 0)]

    wallet.depense.push({
        date: Math.round(Math.random() * (max - min) + min),
        type: object_type.type,
        price: Math.round(Math.random() * (object_type.price_max - object_type.price_min) + object_type.price_min),
        description: object_description
    })
}

console.log(wallet.depense)