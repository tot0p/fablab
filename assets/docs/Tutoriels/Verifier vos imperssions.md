# Checklist de Vérification Pré-Impression

Avant de lancer ton impression 3D, il est essentiel de vérifier plusieurs points pour éviter les erreurs et le gaspillage de filament. Ce guide te présente une checklist complète à suivre systématiquement avant d'envoyer ton fichier à l'imprimante.

## Sommaire

1. [Vérifications dans Bambu Studio](#1-vérifications-dans-bambu-studio)
2. [Vérifications du Modèle 3D](#2-vérifications-du-modèle-3d)
3. [Vérifications des Paramètres d'Impression](#3-vérifications-des-paramètres-dimpression)
4. [Vérifications du Tranchage (Slice)](#4-vérifications-du-tranchage-slice)
5. [Vérifications de l'Imprimante](#5-vérifications-de-limprimante)
6. [Validation Finale](#6-validation-finale)
7. [Checklist Récapitulative](#checklist-récapitulative)

---

## 1. Vérifications dans Bambu Studio

### Configuration de Base

Avant même de commencer, assure-toi que le profil d'imprimante selectionné dans Bambu Studio correspond bien à l'imprimante que tu vas utiliser. (P1S dans le cas du fablab)

![menu imprimante](/img/menu-imprimante.png)

---

## 2. Vérifications du Modèle 3D

### Position et Orientation

- [ ] **Le modèle est bien positionné sur le plateau**
  - Pas de débordement en dehors de la zone d'impression
  - Le modèle ne touche pas les bords du plateau
  
- [ ] **L'orientation est optimale**
  - Les grandes surfaces planes sont vers le bas pour une meilleure adhérence
  - Les détails importants ne sont pas orientés vers le bas
  
- [ ] **Le modèle est à la bonne échelle**
  - Vérifie les dimensions affichées
  - Compare avec les dimensions souhaitées

### Intégrité du Fichier

- [ ] **Le modèle n'affiche pas d'erreurs**
  - Pas de triangles inversés (visibles en rouge)
  - Pas de message "non-manifold" ou "trous"
  - Si erreurs : utilise la fonction "Réparer" de Bambu Studio

![modèle correctement positionné](/img/import-benchy-stl.png)

---

## 3. Vérifications des Paramètres d'Impression

### Filament

- [ ] **Le bon filament est sélectionné dans Bambu Studio**
  - Vérifie le type : PLA, PETG, ABS, etc.
  - Vérifie la couleur si important pour ton projet
  
![panneau de sélection du filament](/img/sync-filaments.png)

- [ ] **Le filament correspond à ce qui est chargé dans l'imprimante**
  - Synchronise les filaments a chaque préparation d'impression
  - Vérifie visuellement sur l'imprimante
  - Consulte l'affichage de l'imprimante pour confirmation

- [ ] **Les impressions multicolores sont interdites** ⚠️
  - Utilise un seul filament par impression
  - Pas de changement de couleur en cours d'impression
  - pour plusieurs objects en plusieur couleurs, activier l'impression séquentielle par objet avec chaque objet imprimé d'une seule couleur

### Profil d'Impression

- [ ] **Un profil adapté est sélectionné**
  - **0.28 mm Rapide** ⚡ : brouillons, pièces fonctionnelles sans détails fins
  - **0.20 mm Standard** : bon équilibre qualité/vitesse (recommandé)
  - **0.16 mm Qualité** 💎 : pièces détaillées, finition soignée
  
![sélection du profil d'impression](/img/selection-profil-impression.png)

### Supports

- [ ] **Les supports sont activés si nécessaire**
  - Active les supports pour les surplombs > 45°
  - Désactive-les si le modèle s'autosupporte (comme le Benchy)
  
- [ ] **Le type de support est adapté**
  - **Arbres** : pour la plupart des cas, prend moins de filament et est plus facile à enlever
  - **Normal** : pour les pièces qui ne nécessitent pas beaucoup de supports

### 🧱 Remplissage

- [ ] **La densité de remplissage est appropriée**
  - **5-10%** : pièces décoratives légères
  - **15-20%** : usage standard (recommandé)
  - **30-50%** : pièces fonctionnelles résistantes  
  
pour les petites pièces (boucles d'oreilles, petits objets) privilégier un remplissage plus élevé pour éviter les déformations

### Adhérence au Plateau

- [ ] **Adhérence supplémentaire si nécessaire**
  - **Brim** : pour petites surfaces ou coins qui se décollent
  - **Raft** : pour pièces difficiles ou surface du plateau abîmée
  - **Jupe (Skirt)** : pour amorcer l'extrudeur, pas d'adhérence supplémentaire

---

## 4. Vérifications du Tranchage (Slice)

### Après avoir cliqué sur "Trancher le Plateau"

- [ ] **L'aperçu se charge sans erreur**
  - Pas de zones rouges ou d'alertes
  
![aperçu du tranchage avec les couches visibles](/img/preview-slicing-layers.png)

- [ ] **Le temps d'impression est raisonnable** ⏰
  - Compare avec tes attentes
  - Pour le fablab : évite les impressions > 2/3h sans validation
  
- [ ] **La quantité de filament est cohérente**
  - Vérifie que tu as assez de filament dans la bobine
  - Pour le fablab : limite à environ 80/100g sans validation

### Inspection Visuelle du Tranchage

Utilise les outils de visualisation :

- [ ] **Active la vue "Couche par couche"**
  - Vérifie que les premières couches couvrent bien le plateau
  - Inspecte les zones critiques (surplombs, ponts)
  
- [ ] **Vérifie les trajectoires**
  - Les périmètres sont complets
  - Le remplissage atteint bien les bords
  
- [ ] **Inspecte les supports**
  - Ils touchent bien les zones en surplomb
  - Ils ne sont pas trop denses (gaspillage)

---

## 5. Vérifications de l'Imprimante

### Choix de la Bonne Imprimante

**C'est crucial !** ⚠️ Le fablab possède plusieurs imprimantes. Assure-toi de sélectionner la bonne avant d'envoyer l'impression.

- [ ] **Vérifie le nom de l'imprimante avant d'envoyer**
  - Dans Bambu Studio : **Imprimer Plateau** → Sélectionne la bonne imprimante
  - Imprimante "Gauche" ou "Droite" selon la disponibilité
  
![lancement de l'impression](/img/send-print.png)

- [ ] **Vérifie la disponibilité**
  - L'imprimante n'est pas déjà en cours d'impression
  
- [ ] **Vérifie l'état de l'imprimante**
  - Pas d'erreur affichée sur l'écran
  - Pas de filament emmêlé ou de problèmes visibles

### État du Plateau

- [ ] **Le plateau est propre**
  - Pas de résidus de précédentes impressions
  - Surface plane sans déformations
  - [Guide de nettoyage du plateau](../../Maintenance/Imprimante%203D.md#nettoyage-du-plateau-dimpression)
  
- [ ] **Le bon plateau est installé**
  - Plateau texturé PEI pour PLA/PETG (standard)
  - Plateau lisse pour ABS ou pièces nécessitant une finition brillante

### Chargement du Filament

- [ ] **Le bon filament est chargé**
  - Type correspondant à ta sélection (PLA, PETG, etc.)
  - Couleur souhaitée
  
- [ ] **Le filament est en bon état**
  - Pas de nœuds dans la bobine
  - Le filament n'est pas cassant ou humide
  - Suffisamment de matière dans la bobine

---

## 6. Validation Finale

### Avant d'Appuyer sur "Envoyer"

- [ ] **Récapitulatif des informations**
  - Nom du fichier explicite
  - Imprimante correcte sélectionnée
  - Profil de filament correct
  
- [ ] **Demande de validation si nécessaire**
  - Si impression > 2h : demande validation au chef de projet
  - Si première impression d'un modèle complexe : demande validation

- [ ] **Tu es disponible**
  - Les 15-20 premières minutes pour surveiller le début
  - La fin de l'impression pour récupérer la pièce

### Après avoir Envoyé

- [ ] **Surveille le début de l'impression**
  - La première couche adhère bien
  - Pas de problème d'extrusion
  - Le modèle démarre au bon endroit
  
- [ ] **Note les informations**
  - Heure de début
  - Heure de fin estimée
  - Imprimante utilisée

---

## Checklist Récapitulative

Imprime ou garde cette checklist à portée de main !

### 📋 Avant de Trancher

- [ ] Modèle correctement positionné et orienté
- [ ] Modèle à la bonne échelle
- [ ] Pas d'erreurs de géométrie
- [ ] Bon profil d'imprimante sélectionné
- [ ] Bon filament sélectionné
- [ ] Profil d'impression adapté (vitesse/qualité)
- [ ] Supports activés si nécessaire
- [ ] Densité de remplissage appropriée
- [ ] Adhérence au plateau configurée

### 📋 Après le Tranchage

- [ ] Pas d'erreurs ou zones rouges
- [ ] Temps d'impression acceptable
- [ ] Quantité de filament suffisante et raisonnable
- [ ] Inspection visuelle des couches OK
- [ ] Supports bien placés

### 📋 Avant d'Envoyer

- [ ] **BONNE IMPRIMANTE SÉLECTIONNÉE** ⚠️
- [ ] Imprimante disponible
- [ ] Plateau propre et adapté
- [ ] Bon filament chargé dans l'imprimante
- [ ] Validation obtenue si nécessaire
- [ ] Disponible pour surveiller

### 📋 Après Envoi

- [ ] Surveillance des premières couches
- [ ] Première couche adhère correctement
- [ ] Pas de problème d'extrusion

---

## Résumé

Cette checklist peut sembler longue, mais avec l'habitude elle devient un réflexe rapide qui te prendra moins de 2 minutes. ⏱️

**Les points les plus critiques à ne jamais oublier :**

1. [x] **Vérifier la bonne imprimante** avant d'envoyer
2. [x] **Vérifier le bon filament** dans Bambu Studio ET sur l'imprimante
3. [x] **Vérifier le temps et la quantité** de filament nécessaire
4. [x] **Inspecter visuellement** la tranche avant d'envoyer
5. [x] **Surveiller la première couche** après envoi

Une bonne préparation = une impression réussie ! 🎯

Si tu as le moindre doute, n'hésite pas à demander à ton chef de projet. Il vaut mieux poser une question que de gaspiller du temps et du filament. 💡

Bonne impression ! 🚀
