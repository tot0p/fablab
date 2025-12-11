
# Entretien régulier et maintenance préventive des imprimantes 3D Bambu Lab P1S

> [!CAUTION]
> Avant d'effectuer toute opération d'entretient ou de maintenance, assurez-vous que l'imprimante est hors tension, débranchée et refroidie pour éviter tout risque de choc électrique ou de brûlure.


## Après chaque impression (ou en fin de session d’utilisation)

| **Action**                          | **Fiche associée**                                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Nettoyage du plateau**      | [Nettoyage du plateau](#nettoyage-du-plateau-dimpression) (nettoyage superficiel)|
| **Vérification visuelle générale**  | Rechercher traces de filament fondu, fuites ou objets coincés dans la chambre.                               |                                      |
| **Nettoyage de la buse (à chaud)**  | Si dépôt visible : passer un nettoyage rapide.                                             |

---

## 2. Toutes les **50 à 100 heures d’impression** (ou chaque semaine d’usage régulier)

| **Action**                                | **Détail / Objectif**                                                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Nettoyage des tiges et axes linéaires** | Enlever poussière et débris avec chiffon doux sec.                                       |
| **Lubrification légère des axes**         | Appliquer huile ou graisse adaptée (PTFE ou silicone), surtout sur Z.                    |
| **Vérification des courroies**            | Contrôler tension, alignement et état des dents. Resserrer si nécessaire.                |
| **Contrôle du ventilateur**               | Vérifier qu’aucun filament ou poussière n’obstrue les pales.                             |
| **Calibration du nivellement du plateau** | Relancer la procédure automatique via le menu pour assurer une première couche homogène. |

---

## 3. Toutes les **250 heures d’impression** (ou tous les 1 à 2 mois)

| **Action**                                    | **Détail / Objectif**                                                    |
| --------------------------------------------- | ------------------------------------------------------------------------ |
| **Nettoyage approfondi du hotend**            | Vérifier le tube PTFE interne, démonter la buse si nécessaire.           |
| **Nettoyage du détecteur de filament (AMS)**  | Retirer poussière ou fragments pouvant fausser la détection.             |
| **Contrôle du plateau d’impression**          | Examiner la feuille ou surface amovible, remplacer si rayures profondes. |
| **Vérification du capteur Lidar (si activé)** | Nettoyer la lentille délicatement à l’aide d’un chiffon microfibre sec.  |
| **Contrôle du câblage interne visible**       | Vérifier qu’aucun fil n’est pincé ou usé par frottement.                 |

---

## 4. Toutes les **500 à 1000 heures d’impression** (ou tous les 3 à 6 mois)

| **Action**                                       | **Détail / Objectif**                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------- |
| **Remplacement de la buse (nozzle)**             | Une buse usée dégrade la précision et favorise les bouchons.            |
| **Remplacement des tubes PTFE**                  | Prévenir toute obstruction ou fuite interne.                            |
| **Vérification complète des axes et roulements** | S’assurer qu’ils ne présentent pas de jeu ou de points durs.            |
| **Nettoyage et lubrification des vis Z**         | Application d’une fine couche de graisse mécanique légère.              |
| **Inspection du boîtier AMS**                    | Vérifier la rotation des roues d’entraînement et le chemin du filament. |

---

## 5. Toutes les **1000 à 2000 heures d’impression** (ou tous les 12 mois)

| **Action**                                                          | **Détail / Objectif**                                                                  |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Vérification du bloc d’extrusion complet**                        | Démontage, nettoyage et inspection de l’engrenage. Remplacer si usé.                   |
| **Nettoyage interne complet**                                       | Enlever toute accumulation de poussière, filament fondu, insectes (si, si, ça arrive). |
| **Remplacement préventif de certains ventilateurs**                 | Ceux du hotend ou du boîtier peuvent s’encrasser avec le temps.                        |
| **Vérification des câbles de thermistance et cartouche chauffante** | Inspecter pour détection d’usure ou de fissure dans la gaine.                          |
| **Contrôle de la carte mère et connecteurs**                        | Vérifier absence de corrosion ou d’oxydation (humidité ambiante).                      |

---

## 6. Entretien annuel (ou stockage prolongé)

| **Action**                                           | **Détail / Objectif**                                                                           |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Calibration générale complète**                    | Refaire tous les tests (axes, Lidar, extrusion, nivellement).                                   |
| **Mise à jour du firmware**                          | Installer les dernières versions via Bambu Studio pour corriger bugs et optimiser la précision. |
| **Vérification électrique**                          | Contrôler câble d’alimentation, fusible et connecteurs.                                         |
| **Stockage des filaments**                           | Conserver les bobines dans un conteneur hermétique avec dessiccant.                             |
| **Nettoyage du caisson et filtre à air (si équipé)** | Dépoussiérage du ventilateur principal et remplacement du filtre HEPA/charbon.                  |

---

## Résumé rapide – entretien préventif

| **Fréquence**      | **Tâche clé**                               |
| ------------------ | ------------------------------------------- |
| Après chaque print | Nettoyage du plateau, buse, chambre         |
| 100 h              | Lubrification, tension des courroies        |
| 250 h              | Nettoyage hotend et capteurs                |
| 500-1000 h         | Remplacement buse, PTFE                     |
| 1000-2000 h        | Révision mécanique complète                 |
| Annuel             | Calibration complète + mise à jour firmware |

---

Souhaites-tu que je te le reformate dans le **style Markdown Bambu Lab (avec titres, encadrés et pictogrammes de sécurité)** pour intégration directe à ton manuel ?
Je peux aussi y ajouter une **colonne “Produit recommandé”** (ex. type de lubrifiant, chiffon, buse compatible, etc.) pour rendre la section plus opérationnelle.



# Diagnostics des pannes

## Problèmes courants

Ci dessous sont lister les problèmes courants qui peuvent survenir lors de l'utilisation de la Bambu Lab P1S 

|                             **Symptome remarquée**                             	| **Guide de maintenance associé**             	|
|:-----------------------------------------------------------------------:	|------------------------------------------	|
| Extrusion partielle ou bloquée                                          	| [Défaut d'extrusion](#1-défaut-dextrusion)                       	|
| Mauvaise adhérence de la première couche ou décollement de l'impression 	| [Défaut d'adhérence](#2-défaut-dadhérence)                       	|
| Bruits ou vibrations inhabituels                                        	| [Diagnostique des vibrations](#3-diagnostique-des-vibrations)               	|
| Détails flou, surface irrégulière ou affaissement  de l'impression      	| [Diagnostic des erreurs d'impression](#4-diagnostic-des-erreurs-dimpression)     	|
| L’imprimante ne s’allume pas ou écran noir                              	| [Défaut d'alimentation ou problème majeur](#5-defaut-dalimentation-ou-probleme-majeur) 	|


> [!CAUTION]
> Sauf indication contraire, avant d'effectuer toute opération de maintenance, assurez-vous que l'imprimante est hors tension, débranchée et refroidie pour éviter tout risque de choc électrique ou de brûlure.

# Guides de maintenance détaillés
## 1. Défaut d'extrusion

## 2. Défaut d'adhérence

## 3. Diagnostique des vibrations

## 4. Diagnostic des erreurs d'impression

## 5. Défaut d'alimentation ou problème majeur


# Base de connaissances

## Nettoyage du plateau d'impression

Pour assurer une bonne adhérence des impressions, il est essentiel de maintenir le plateau propre.

En fonction du type de plateau présent dans l'imprimante (PEI smooth, PEI texturé), les méthodes de nettoyage et les produits à utiliser varient.

Voici les plateaux disponibles dans le fablab :

| **Nom du plateau** 	| **Image**                                                 	| **Méthode de nettoyage superficielle**                                                                     	| **Méthode de nettoyage approfondie**                                               	|
|--------------------	|-----------------------------------------------------------	|------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------	|
| Smooth PEI Plate   	| ![Plateau PEI Smooth](./assets/Plateau-PEI-Smooth.jpg)    	| Retirer les résidus de filament ou poussières avec un chiffon non pelucheux imbibé d'alcool isopropylique. 	| Comme le plateau est plat, aucun nettoyage approfondi du plateau n'est nécessaire 	|
| Textured PEI Plate 	| ![Plateau PEI Texturé](./assets/Plateau-PEI-Textured.jpg) 	| Retirer les résidus de filament ou poussières avec un chiffon non pelucheux imbibé d'alcool isopropylique. 	| Nettoyer avec un peu de savon et une brosse à poils doux.                        	|
---
Si des rayures profondes ou des dommages sont présents sur le plateau, il ne faut plus l'utiliser et le remplacer par un nouveau plateau.

Après nettoyage, éviter de toucher la surface d'impression avec les doigts pour ne pas y déposer de graisse ou saleté.

## Nettoyage De la chambre d'impression

La chambre d'impression doit être maintenue propre pour éviter que des débris n'interfèrent avec le mouvement des axes ou n'affectent la qualité d'impression.

![Chambre d'impression propre](./assets/bac-imprimante.jpg)

Pour nettoyer la chambre d'impression, suivez ces étapes :

1. **Retirer les débris** : Utilisez un aspirateur ou un chiffon non pelucheux pour enlever les résidus de filament ou la poussière.
2. **Vérifier les composants** : Assurez-vous que la partie basse des axes ne sont pas couverts de poussière ou de débris qui pourraient empêcher leur mouvement.

## Nettoyage de la tête d'impression et de la buse
La tête d'impression et la buse sont des composants critiques pour une impression de qualité. Il est important de les nettoyer régulièrement pour éviter les problèmes d'extrusion ou autres défauts d'impression.

![Tête d'impression Sale](./assets/nozzle-sale.jpg)
(Buse sale avec accumulation de filament fondu)

Pour nettoyer les ecces de filament fondu sur la buse :
1. **Chauffer la buse** : Allumez l'imprimante et chauffez la buse a une température moyenne (environ 150 a 170°C) pour ramollir le filament.
2. **Utiliser une brosse métallique douce** : Avec précaution, utilisez une brosse métallique douce pour enlever les résidus de filament fondu sur la buse, il est recommandé d'utiliser une brosse en laiton pour éviter d'endommager la buse.
3. **Nettoyage à froid** : Si des résidus persistent, laissez la bu
se refroidir, puis utilisez un cure-dent pour gratter délicatement les dépôts restants.

Une buse propre devrais ressembler à ceci :
![Buse propre](./assets/nozzle.jpg)

Pour nettoyer une buse bouchée :
1. **Chauffer la buse** : Allumez l'imprimante et chauffez la buse à la température recommandée pour le filament utilisé (200-220°C pour le PLA).
2. **Utiliser une aiguille de nettoyage** : Insérez une aiguille de nettoyage appropriée dans la buse pour déboucher l'obstruction.

(aiguille de nettoyage de buse)
![Aiguille de nettoyage de buse](./assets/aiguille-nettoyage.jpg)

3. **Purge du filament** : Après avoir débouché la buse, extrudez un peu de filament via l'interface de l'imprimante pour s'assurer que le flux est rétabli.

si le problème persiste, il peut être nécessaire de démonter la buse pour un nettoyage plus approfondi (cold pull, trempage dans un solvant, etc.). cf [Wiki de Bambulab](https://wiki.bambulab.com/en/p1/maintenance/p1p-maintenance#nozzle)

## Nettoyage des axes et lubrification

Pour assurer un mouvement fluide des axes de l'imprimante, il est important de nettoyer et lubrifier régulièrement les tiges et axes linéaires.

la P1S comporte plusieurs axes et tiges linéaires nécessitant un entretien régulier :
- Axe X : mouvement gauche-droite de la tête d'impression fait en carbone et par conséquent auto-lubrifiant.
![Axe X en carbone](./assets/carbon_rod.jpg)
- Axe Y-Z Tige linéaire : supporte le mouvement avant-arrière de la tête d'impression et haut-bas du plateau.
![Axe Y-Z tige linéaire](./assets/linear_rods.jpg)
- Vis Z : responsable du mouvement haut-bas du plateau.
![Vis Z](./assets/thread_rod.jpg)

### Nettoyage de l'axe X en carbone
Pour nettoyer l'axe X en carbone :
1. Utilisez un chiffon doux et sec pour essuyer la surface de l'axe en carbone, en enlevant toute poussière ou débris.

> [!IMPORTANT]
> N'appliquez pas de lubrifiant sur l'axe en carbone, car il est auto-lubrifiant et l'ajout de lubrifiant pourrait attirer la poussière et nuire a son déplacement.

### Nettoyage et lubrification des tiges linéaires Y-Z
> [!IMPORTANT]
> Le nettoyage et la lubrification des axes ne devrais être effectués que lorsque l'imprimante produit des bruits inhabituels ou si des problèmes de mouvement sont détectés.

Pour nettoyer et lubrifier les tiges linéaires Y-Z :
1. Utilisez un chiffon doux et sec pour essuyer la surface des tiges linéaires, en enlevant toute poussière ou débris.
2. Appliquez une petite quantité de graisse de lubrification fournie par Bambu Lab sur les coins des tiges linéaires.
3. Faites fonctionner l'imprimante pour répartir la graisse uniformément sur les tiges (effectuer un auto home ou un déplacement manuel via l'interface).

### Nettoyage et lubrification des vis Z
Pour nettoyer et lubrifier les vis Z :
1. Utilisez un chiffon doux et sec pour essuyer la surface des vis Z, en enlevant toute poussière ou débris présents.
2. Appliquez une fine couche de graisse fournie par Bambu Lab sur toute la longueur des vis Z.
3. Faites fonctionner l'imprimante pour répartir la graisse uniformément sur les vis (effectuer un auto home ou un déplacement manuel via l'interface).
4. Réappliquez de la graisse une deuxième fois pour assurer une bonne lubrification.
5. Essuyez l'excès de graisse au pied de l'axe et au droit du roulement avec un chiffon propre pour éviter l'accumulation de poussière.

(graisse de lubrification Bambu Lab)
![Graisse de lubrification Bambu Lab](./assets/lubricant.jpg)

## Lubrification des galets tendeur de courroie
Les galets tendeur de courroie permettent de maintenir la tension correcte des courroies, l'imprimante en comporte 2 au deux extémités arrière de l'axe X.

![Galets tendeur de courroie](./assets/idler-pulley.jpg)

Le roullement à l'intérieur du galet est scellé et ne nécessite pas de lubrification. Cependant, si un bruit de frottement ou de grincement est entendu, il est possible d'appliquer une petite quantité de lubrifiant sur le haut et le bas du galet pour améliorer son fonctionnement.

> [!IMPORTANT]
> N'appliquez pas de lubrifiant sur la courroie elle-même, car cela pourrait entraîner un glissement et affecter la précision de l'imprimante

Pour lubrifier les galets tendeur de courroie :
1. Appliquez une petite quantité de graisse de lubrification fournie par Bambu Lab sur le haut et le bas du galet tendeur a l'aide d'un cure-dent ou d'un petit pinceau.
![Application de graisse sur le galet tendeur](./assets/idler-grease.png)
2. Faites bouger la tête d'impression manuellement ou via l'interface pour faire tourner le galet et répartir la graisse uniformément.
3. Répétez l'opération sur l'autre galet tendeur de courroie.



---
Pour plus d'informations, questions ou information non traitées dans ce document, consultez le [Wiki de bambulab](https://wiki.bambulab.com/en/p1/manual) ou la page de maintenance spécifique [ici](https://wiki.bambulab.com/en/p1/maintenance).