/* ===== CONFIGURATION — modifiez ici textes, coordonnées, équipe, photos, partenaires, vidéos ===== */
window.SITE = {
  nom: "INTELLIGENCE ARTS ENTREPRISE",
  slogan: "Créativité · Technologie · Fabrication · Communication · Innovation",
  accroche: "Enseignes lumineuses, totems, revêtement Allucobond, impression et branding : nous donnons de la visibilité à votre marque, de la conception à la pose.",
  tel: "+226 53 22 02 02",
  whatsapp: "22653220202",
  waMessage: "Bonjour INTELLIGENCE ARTS ENTREPRISE, je souhaite un devis.",
  email: "ia.entrepris@gmail.com",
  postal: "10 BP 13129 Ouagadougou 01",
  adresse: "Secteur 25 / Parcelle 09, Ouagadougou, Burkina Faso",
  // Google Maps : Partager > Intégrer une carte > copiez l'URL du src
  mapsUrl: "https://www.google.com/maps?q=Ouagadougou+Secteur+25&output=embed",
  horaires: ["Lundi – Vendredi : 08h00 – 18h00", "Samedi : 08h00 – 13h00", "Dimanche : fermé"],
  logo: "photos/logo/logo.webp",
  // Pour l'application Android : adresse du site publié, ex. "https://intelligence-arts-entreprise.vercel.app" (laisser "" pour le site web)
  apiBase: "https://intelligence-arts-entreprise.vercel.app/",
  prixMaquette: "25 000 FCFA"
};

window.SERVICES = [
  ["01", "Enseignes lumineuses", ["Lettres 3D lumineuses", "Lettres boîtiers", "Enseignes Plexiglas", "Caissons lumineux", "Enseignes LED", "Habillage de façades"], "photos/realisations/enseignes/djimare-market.webp"],
  ["02", "Totems et signalétique", ["Totems simples et lumineux", "Totems recto verso", "Panneaux publicitaires", "Signalétique intérieure/extérieure", "Écrans LED"], "photos/realisations/totems/djimare-totem-lumineux.webp"],
  ["03", "Revêtement Allucobond", ["Façades et commerces", "Stations-service", "Poteaux et colonnes", "Corniches décoratives", "Intégration d'enseignes"], "photos/realisations/allucobond/maison-des-projets-fabrication.webp"],
  ["04", "Impression numérique et grand format", ["Cartes de visite, flyers", "Affiches, badges", "Vinyle, bâche, banderoles", "Stickers", "Grand format"], "photos/publicites/affiche.webp"],
  ["05", "Impression textile et gadgets", ["Tee-shirts, polos, DTF", "Casquettes, sacs", "Porte-clés", "Objets promotionnels"], "photos/realisations/textile/mouspac-tshirt.webp"],
  ["06", "Stratégie de marque et branding", ["Création de logos", "Identité visuelle", "Charte graphique", "Conseil en image de marque"], "photos/realisations/branding/picalux.webp"],
  ["07", "Marketing et publicité", ["Stratégie marketing", "Campagnes publicitaires", "Publicité digitale", "Contenus publicitaires"], "photos/realisations/flyers/crispy-promo-vacances.webp"],
  ["08", "Fabrication et transformation", ["Découpe CNC", "Moulage Plexiglas", "Lettres 3D", "Soudure et structures métalliques", "Câblage électrique"], "photos/realisations/enseignes/chic-bazar.webp"],
  ["09", "Installation et maintenance", ["Montage d'enseignes et totems", "Installation en hauteur", "Pose de revêtements", "Réparation d'enseignes", "Intervention sur site"], "photos/realisations/enseignes/mercerie-abdoul.webp"]
];

// cat : enseignes | totems | signaletique | allucobond | cartes | flyers | textile | gadgets | branding
window.GALERIE = [
  { cat: "enseignes", titre: "Djimaré Market", desc: "Lettres 3D lumineuses rétroéclairées.", img: "photos/realisations/enseignes/djimare-market.webp" },
  { cat: "enseignes", titre: "Massaïa Restaurant-Bar", desc: "Lettres lumineuses et caissons.", img: "photos/realisations/enseignes/massaia.webp" },
  { cat: "enseignes", titre: "Maison du Cake", desc: "Enseigne lumineuse sur mesure.", img: "photos/realisations/enseignes/maison-du-cake.webp" },
  { cat: "enseignes", titre: "Mercerie Abdoul & Frères", desc: "Lettres boîtiers LED.", img: "photos/realisations/enseignes/mercerie-abdoul.webp" },
  { cat: "enseignes", titre: "Chic Bazar", desc: "Fabrication en atelier avant pose.", img: "photos/realisations/enseignes/chic-bazar.webp" },
  { cat: "enseignes", titre: "Belchicken", desc: "Lettres 3D et logo découpé.", img: "photos/realisations/enseignes/belchicken.webp" },
  { cat: "enseignes", titre: "Team Solar", desc: "Lettres 3D sur panneau.", img: "photos/realisations/enseignes/team-solar.webp" },
  { cat: "enseignes", titre: "Say World Business", desc: "Enseigne découpée avec visuels imprimés.", img: "photos/realisations/enseignes/say-world-business.webp" },
  { cat: "enseignes", titre: "Tinasa", desc: "Lettres 3D rouges, tranche LED dorée.", img: "photos/realisations/enseignes/tinasa-lettres-led.webp" },
  { cat: "totems", titre: "Maison des Projets – Grand Ouaga 2050", desc: "Totem avec écran LED et structure métallique.", img: "photos/realisations/totems/maison-des-projets.webp" },
  { cat: "totems", titre: "Djimaré Market", desc: "Totem lumineux avec liste des rayons.", img: "photos/realisations/totems/djimare-totem-lumineux.webp" },
  { cat: "totems", titre: "Agrodia BF", desc: "Totem lumineux de grande hauteur.", img: "photos/realisations/totems/agrodia.webp" },
  { cat: "totems", titre: "Faso Crédit", desc: "Totem lumineux avec logo rétroéclairé.", img: "photos/realisations/totems/faso-credit.webp" },
  { cat: "allucobond", titre: "Maison des Projets", desc: "Découpe et assemblage Allucobond en atelier.", img: "photos/realisations/allucobond/maison-des-projets-fabrication.webp" },
  { cat: "allucobond", titre: "Vortex Exim Group", desc: "Découpe de panneau Allucobond.", img: "photos/realisations/allucobond/vortex-exim-decoupe.webp" },
  { cat: "cartes", titre: "Cartes de visite", desc: "Pelliculage lourd, livrées en 24 h.", img: "photos/realisations/cartes/promo-cartes-de-visite.webp" },
  { cat: "flyers", titre: "Crispy Fried Chicken – Promo Vacances", desc: "Flyers imprimés recto verso.", img: "photos/realisations/flyers/crispy-promo-vacances.webp" },
  { cat: "flyers", titre: "Crispy Fried Chicken", desc: "Lot de flyers prêts à distribuer.", img: "photos/realisations/flyers/crispy-flyers.webp" },
  { cat: "flyers", titre: "Crispy Fried Chicken", desc: "Flyer A6 finition mate.", img: "photos/realisations/flyers/crispy-flyer-main.webp" },
  { cat: "flyers", titre: "Expert White Cosmétique", desc: "Carnets de bons de livraison.", img: "photos/realisations/flyers/expert-white-livraison.webp" },
  { cat: "textile", titre: "Rotary Club Ouagadougou Golden", desc: "Impression sur tee-shirts blancs.", img: "photos/realisations/textile/rotary-blanc.webp" },
  { cat: "textile", titre: "Rotary", desc: "Tee-shirts noirs, impression face et manche.", img: "photos/realisations/textile/rotary-noir.webp" },
  { cat: "textile", titre: "Rotary", desc: "Tee-shirts personnalisés.", img: "photos/realisations/textile/rotary-noir-2.webp" },
  { cat: "textile", titre: "Mouspac Services", desc: "Impression dos de tee-shirt.", img: "photos/realisations/textile/mouspac-tshirt.webp" },
  { cat: "textile", titre: "Paterne Multi Services", desc: "Impression flex sur tee-shirt rouge.", img: "photos/realisations/textile/paterne-tshirt.webp" },
  { cat: "textile", titre: "Aloco", desc: "Tee-shirts blanc et noir imprimés.", img: "photos/realisations/textile/aloco-tshirts.webp" },
  { cat: "gadgets", titre: "Mouspac Services", desc: "Plaquettes publicitaires personnalisées.", img: "photos/realisations/gadgets/mouspac-plaquettes.webp" },
  { cat: "branding", titre: "Picalux Design Intérieur", desc: "Logo et identité visuelle.", img: "photos/realisations/branding/picalux.webp" }
  // Avant/après : ajoutez  avant: "photos/.../avant.webp"  à une entrée
];

window.EQUIPE = [
  ["Angèle Ilboudo", "Secrétaire de direction", "Accueil, suivi des clients et des dossiers.", ""],
  ["Massoud Zoundi", "Soudeur industriel", "Structures métalliques et supports d'enseignes.", "photos/equipe/massoud-zoundi.webp"],
  ["Abdoul Sirima", "Soudeur industriel", "Soudure, structures et totems.", "photos/equipe/abdoul-sirima.webp"],
  ["Yasser Yameogo", "Moulage et câblage électrique", "Moulage Plexiglas et câblage des enseignes.", "photos/equipe/yasser-yameogo.webp"],
  ["Basile Sama", "Moulage et découpe CNC", "Découpe CNC et moulage de précision.", ""],
  ["Ilias Bonkoungo", "Électricité industrielle", "Installations et maintenance électrique.", ""],
  ["Isma Sawadogo", "Logistique", "Approvisionnement et livraisons.", "photos/equipe/isma-sawadogo.webp"],
  ["Tatien Nikiema", "Infographe", "Maquettes, logos et mise en page.", "photos/equipe/tatien-nikiema.webp"],
  ["Homer Ouedraogo", "Logistique Chine-Burkina", "Import et acheminement des matériaux.", ""],
  ["Bassit Zeo", "Logistique", "Transport et organisation des chantiers.", ""],
  ["Lompo Dramane", "Directeur Général", "Vision, direction et relation partenaires.", ""]
];

// Ajoutez vos logos dans photos/partenaires/ puis listez-les : ["Nom", "photos/partenaires/logo.webp"]
window.PARTENAIRES = [];

// Vidéos : fichier local (photos/videos/spot.mp4) ou lien YouTube
window.VIDEOS = [
  // { titre: "Spot 1", src: "photos/videos/spot1.mp4" },
  // { titre: "Réalisation", youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
];
