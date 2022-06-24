Vous avez découvert les Observables – ces flux de valeurs émis dans le temps – et vous y avez souscrit avec la méthode  subscribe()  et le pipe  async  ;

Vous avez utilisé des opérateurs bas niveau pour modifier, transformer, filtrer, et ajouter des effets secondaires avec les émissions des Observables ;

Vous avez appris les différences entre les opérateurs haut niveau – qui permettent à un Observable extérieur de souscrire à des Observables intérieurs – selon la façon dont ils traitent les émissions extérieures lorsqu'une souscription d'Observable intérieur n'a pas encore complété ;

Vous avez sécurisé votre application contre les fuites de mémoire avec les stratégies de  unsubscribe  – take  ,  takeUntil, et le pipe  async

Vous avez ajouté HttpClientModule à votre application et injecté HttpClient à vos services pour pouvoir envoyer des requêtes HTTP ;

Vous avez découvert que les requêtes créées par HttpClient sont des Observables.

Vous avez utilisé les méthodes  get()  ,  post()  et  put()  pour générer des requêtes GET, POST, et PUT ;

Vous avez créé des requêtes simples pour récupérer les FaceSnaps, que ce soit la liste complète ou un par un – vous avez souscrit à ces Observables simples avec le pipe async pour afficher les réponses du serveur dans le DOM ;

Vous avez généré des requêtes composées sous forme d'Observables haut niveau, qui créent une nouvelle requête à partir de la réponse à une requête précédente – vous avez souscrit à ces Observables avec la méthode  subscribe()  dans vos components ;

Vous avez mis en place un intercepteur qui ajoute un header d'autorisation à toutes les requêtes envoyées par votre application pour simuler un système d'authentification.

es modules permettent de séparer votre application en parties logiques et plus faciles à maintenir ;

Il y a trois types principaux de modules :

les feature modules qui encapsulent un feature de l'application ;

les core modules pour tout ce qui est déclaré ou importé une seule fois dans l'application ;

les shared modules pour tout ce qui est importé à plusieurs endroits de l'application.

Le lazy loading est une technique de routing qui génère un nouveau fichier JS dans l'application finale qui est chargé au besoin, améliorant les performances de l'application ;

Les guards permettent de protéger certaines routes de l'application frontend des utilisateurs non authentifiés.