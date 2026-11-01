# INTELLIGENCE ARTS ENTREPRISE — site web

Site statique (HTML/CSS/JS) + fonction e-mail Vercel. Aucun outil à installer, aucun service payant.

## Modifier le site
- Tout le contenu (textes, coordonnées, services, équipe, galerie, partenaires, vidéos) : `public/config.js`
- Photos : `public/photos/` (remplacez les fichiers en gardant le même nom, ou ajoutez-en et listez-les dans `config.js`)
  - réalisations/{enseignes,totems,signaletique,allucobond,cartes,flyers,textile,gadgets,branding} · equipe · partenaires · videos · logo · publicites
- Photos manquantes de l'équipe : déposez `prenom-nom.webp` dans `photos/equipe/` et renseignez le chemin dans `config.js`.
- Conseil : convertissez vos photos en WebP (squoosh.app, gratuit), 1200 px de large.

## Mise en ligne (sans programmation)
1. Créez un compte sur github.com (gratuit) > **New repository** > nom `intelligence-arts-entreprise`.
2. **uploading an existing file** : glissez TOUT le contenu de ce dossier (dossiers `api`, `public` + fichiers `package.json`, `vercel.json`, `README.md`) > **Commit changes**.
3. Créez un compte sur vercel.com avec « Continue with GitHub » > **Add New > Project** > importez le dépôt.
4. Framework Preset : **Other**. Ne changez rien d'autre > **Deploy**.
5. Vous obtenez une adresse `intelligence-arts-entreprise.vercel.app`.
6. **Envoi des commandes par e-mail** : Vercel > Project > Settings > Environment Variables, ajoutez :
   - `SMTP_HOST` = `smtp.gmail.com`, `SMTP_PORT` = `465`
   - `SMTP_USER` = votre adresse Gmail d'envoi
   - `SMTP_PASS` = un **mot de passe d'application** Google (compte Google > Sécurité > Validation en 2 étapes > Mots de passe des applications)
   - `MAIL_TO` = adresse qui reçoit les commandes
   Puis Deployments > Redeploy. Ces valeurs ne sont jamais visibles dans le code public.
7. **Modifier après publication** : sur GitHub, ouvrez le fichier (ex. `public/config.js`) > crayon > modifiez > Commit : Vercel republie seul en ~1 minute.
8. **Nom de domaine** : Vercel > Settings > Domains > ajoutez votre domaine et suivez les réglages DNS indiqués.

## Limites actuelles
- Pièces jointes : 3,5 Mo au total (limite Vercel gratuit). Au-delà, le client est invité à passer par WhatsApp.
- Application Android : voir la section dédiée ci-dessous (APK construit par GitHub Actions).

## Application Android (APK) — construite gratuitement par GitHub
1. Publiez d'abord le site sur Vercel (étapes ci-dessus) et notez son adresse.
2. Dans `public/config.js`, remplacez `apiBase: ""` par l'adresse du site, ex. `apiBase: "https://intelligence-arts-entreprise.vercel.app"` (sinon les commandes ne partiront pas depuis l'application). Commit.
3. Sur GitHub : onglet **Actions** > « Construire l'APK Android » > **Run workflow**. Attendez 5 à 10 minutes.
4. Ouvrez l'exécution terminée > **Artifacts** > téléchargez `IA-Entreprise-apk` (zip contenant `app-debug.apk`).
5. Envoyez l'APK sur le téléphone (WhatsApp, câble) et installez-le ; autorisez « sources inconnues » si demandé.
Cet APK convient pour une diffusion directe. Pour le Play Store, il faudra un APK/AAB signé (compte développeur Google Play, 25 $ une fois).
Variante sans GitHub : sur le site publié, Chrome Android > menu > « Installer l'application » (le site est aussi une PWA).
