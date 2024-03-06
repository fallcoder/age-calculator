# age-calculator 

## Desceiption : 

Ce projet est un calculateur d'âge créé avec HTML, CSS et JavaScript. Il permet aux utilisateurs de calculer leur âge en fonction de leur date de naissance.

1. La fonction calculateAge() récupère la date de naissance de l'utilisateur à partir d'un élément HTML avec l'ID 'birthdate'.
2. Elle vérifie si une date de naissance a été sélectionnée. Si ce n'est pas le cas, elle affiche une alerte et arrête l'exécution.
3. Ensuite, elle récupère la date actuelle.
4. La date de naissance est convertie en objet Date.
5. L'âge est calculé en soustrayant l'année de naissance de l'année actuelle, puis les mois et les jours sont également calculés.
6. Il y a une vérification pour les années bissextiles, ajustant l'âge si la date de naissance tombe après la date actuelle dans la même année.
7. Enfin, le résultat est affiché dans un élément HTML avec l'ID 'result'.

## Utilisation : 

* Sélectionnez votre date de naissance dans le champ dédié.
* Appuyez sur le bouton "Calculer" pour obtenir votre âge.
* Le résultat s'affiche sous forme d'années, de mois et de jours.
