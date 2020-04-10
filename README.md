# Rapport-Projet-Javascript

École Centrale de Lyon

Electif Web application s8 


Introduction : 
L'électif application web nous a permis d’acquérir les connaissances nécessaires pour faire des sites web dynamique à travers le langage de programmation Javascript ainsi que de construire un serveur à l’aide de Node JS. À la fin de cet électif, nous sommes amené à réaliser un projet pour mise en pratique tout ce que nous avons pris durant cette période en HTML, CSS et Javascript pour cela nous avons décidé de réalisé une application web qui permet à l’utilisateur de jouer de la musique et les vidéos existait dans son ordinateur.
Cahier de charges :
	Réaliser d’une connexion entre l’utilisateur à l’aide d’une interface web et l’ordinateur par le serveur.
	Offrir à l’utilisateur la possibilité de lire tous les types des audios MP3, Ogg, WAV, CAF et les vidéos MP4. 
	Offrir la meilleure expérience utilisateur pour faciliter l’utilisation de l’interface.
	Réaliser une interface ergonomique, sophistiqué et facile à utiliser 
Explication de la fonction de l’application 
Voilà l’interface de l’utilisateur dans la section Sélection vous trouvez tous les musiques que Vous aimerez écouter anis que les vidéos il suffit juste de cliquer sur votre choix dans la liste
Ecouter ce que vous voulez. 
 
 
Dans la section playlist vous trouvez votre musique favorite pour qu’une musique soit dans la section favoris il faut l’écouter trois fois puis ça serait enregistré automatiquement.
Dans la section contrôle vous trouver tous les boutons que vous aurait besoin pour les audios.
Pour réaliser cette application nous avons mise en place un ensemble d’outil et des fonctions pour faciliter l’ensemble des requêtes.
Pour réaliser le côté serveur nous avons opté pour utiliser le Framework express qui facilité la tâche pour nous qui nous a permis d’envoyer tous nos requêtes notamment la création de la page web.
La première fonction extraire_path comme leur nom indique il renvoie le chemin d’un dossier ou d’un audio. 
 Ensuite, Il y a la fonction crawl qui nous permet de récupère les chemins de tout la musique existait dans notre ordinateur, il écrira c’est chemin dans un fichier JSON sous forme key, value respectivement numéro de chemin, le chemin. 
Dans la partie HTML nous avons crée une fonction get data qui envoie une requête type ajax pour récupérer le fichier JSON ou il’y a les chemins de tous la musiques en plus, il ajoutera la musique lu dans un tableau mais, la fonction inclus d’autre fonction type évènement de click pour ajouter la musique dans le tableau.  
Nous avons divisé les taches comme suivant :
Salah je travaillais sur le code Front-end HTML et CSS et aussi contribue dans la partie serveur.
Achraf travaillais sur la partie back-end et aussi contribue dans la partie HTML.
Les problèmes rencontrés
Tout le long de cette expérience nous avons rencontrée plusieurs problèmes la première c’est le choix de la technologie utiliser par rapport le back-end.
L’une des problèmes rencontrés depuis le début c’est l’incompatible de navigateur google chrome avec le code que nous avons fait, il était incapable de lire les audios vu qu’il trouve un problème pour accès a le chemin absolu de l’audio.
Nous avons été confortés à une problématique de comment on peut gérer la playlist de la music pour cela nous avons benchmark un ensemble de solution, par exemple est ce que on va récupère tout la music dans le disque principal et là nous avons rencontré un autre problème c’est que on n’arrive pas à accès à tous les dossiers, la deuxième c’est de demander à l’utilisateur de spécifie le chemin de de la playlist.
Nous avons rencontré aussi un problème de faire la corrélation en le Node JS et le HTML pour cela nous avons utilisé EJS dans la première version pour inclure des codes javascript dans HTML.
Problème de l’incompatibilité  
Pour lancer l’application 
La procédure est très simple, la première chose qu’il faut faire c’est de déplacer dans le chemin ou l’y a le dossier comme montre la figure ci-dessus nous avons choisi , sinon il suffit seulement de créer un dossier et de le nommé public et de mettre dedans le fichier html et CSS et tout la musique ou les vidéos. 
 

Comme nous avons explique au début du rapport nous auront besoin de le framework express pour cela il faut l’installer à partir de la commande : npm install express.
 
En fin, lancer le server avec la commande : node server et allez au navigateur et taper localhost :8080 pour afficher la page web. 
 
Conclusion 
A la fin de cette électif nous avons eu plusieurs connaissances sur l’utilisation et la manipulation du langage de programmation JavaScript ainsi que comment gérer l’ensemble des requêtes entre le serveur et le client à travail le Framework Node JS 
Notre application web et prêt pour mise online et portable dans tous les ordinateurs avec n’importe quel système d’exploitation.
   
 
