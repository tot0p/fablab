# Résoudre les problèmes courants d'impression 3D

Ce guide recense les problèmes les plus fréquemment rencontrés sur nos Bambu Lab P1S, avec leurs causes et solutions.

---

## La pièce ne colle pas au plateau

**Symptômes :** La pièce se détache en cours d'impression, les premiers calques ne tiennent pas, la buse pousse la pièce.

**Causes et solutions :**

| Cause | Solution |
|-------|----------|
| Plateau sale | Nettoyer avec de l'alcool isopropylique et un chiffon microfibre |
| Plateau touché à mains nues | Toujours manipuler le plateau par les bords |
| Buse trop haute | Relancer la calibration du Z offset dans Bambu Studio |
| Température de plateau trop basse | Augmenter de 5 °C |
| Pièce avec peu de surface de contact | Activer un brim dans le slicer |

::: TIP
Un plateau propre suffit généralement pour le PLA. En cas de problème persistant, appliquez une fine couche de laque fixatif ou de bâton de colle.
:::

---

## Warping — les coins se soulèvent

**Symptômes :** Les bords ou les coins de la pièce se décollent du plateau pendant l'impression, la pièce se courbe.

**Causes :** Le plastique se rétracte en refroidissant trop vite.

**Solutions :**
- Augmenter la température du plateau (+5 à +10 °C)
- Activer un **brim** (jupe de 5–10 mm) pour ancrer les bords
- Positionner la pièce au centre du plateau

---

## Stringing — des fils entre les parois

**Symptômes :** Des fils plastiques fins apparaissent entre les différentes parties de la pièce, comme une toile d'araignée.

**Causes :** Le filament continue de suinter pendant les déplacements sans extrusion (rétraction insuffisante).

**Solutions :**
- Activer ou augmenter la **rétraction** dans les paramètres
- Réduire la température de buse de 5 °C
- Activer l'option **Wipe on retract** dans Bambu Studio

::: TIP
Le stringing résiduel peut être retiré avec un briquet ou un décapeur thermique (passage rapide à distance). À faire avec précaution.
:::

---

## Sous-extrusion — manque de matière

**Symptômes :** Des trous ou lacunes apparaissent dans les parois, les couches ne sont pas pleines, la surface est irrégulière.

**Causes :**

| Cause | Solution |
|-------|----------|
| Buse partiellement bouchée | Lancer un nettoyage à chaud (cold pull) |
| Filament emmêlé ou cassé dans la bobine | Vérifier et dérouler le filament |
| Vitesse d'impression trop élevée | Réduire la vitesse de 20–30 % |
| Température de buse trop basse | Augmenter de 5 °C |
| Filament humide | Sécher le filament (voir section dédiée) |

---

## Sur-extrusion — trop de matière

**Symptômes :** Les couches débordent, la surface supérieure est bombée ou irrégulière, des boursouflures apparaissent.

**Solutions :**
- Réduire le **multiplicateur d'extrusion** (flow rate) de 5 % dans les paramètres
- Vérifier que le diamètre du filament correspond bien à 1,75 mm
- Calibrer le flux avec un cube de test

---

## Buse bouchée

**Symptômes :** Aucun filament ne sort, l'extrudeur fait un bruit de claquement, la tête se déplace sans extruder.

**Procédure de débouchage :**

1. Chauffer la buse à 250 °C depuis le menu de l'imprimante.
2. Extruder manuellement depuis le menu — si le filament sort, la buse n'est pas complètement bouchée.
3. Si rien ne sort, tenter un **cold pull** :
   - Chauffer à 250 °C, insérer du filament à la main.
   - Laisser refroidir à 90 °C.
   - Tirer fermement sur le filament d'un coup sec.
   - Répéter jusqu'à ce que le filament ressorte propre.

::: CAUTION
Ne jamais utiliser d'aiguille métallique pour déboucher sans avoir chauffé la buse au préalable — risque d'endommager le revêtement intérieur.
:::

---

## Couches mal soudées / délaminage

**Symptômes :** La pièce se sépare en couches horizontales, elle est fragile et casse facilement.

**Solutions :**
- Augmenter la température de buse de 5–10 °C
- Réduire la vitesse d'impression
- Contrôler que le filament n'est pas humide

---

## Filament humide

L'humidité dégrade les filaments et cause de nombreux problèmes (bulles, stringing, sous-extrusion, mauvaise adhérence).

**Symptômes :** Craquements et sifflements à la sortie de la buse, surface rugueuse, fils excessifs, couleur terne.

**Solution :** Sécher le filament dans un séchoir à filament ou un four à 45–50 °C pendant 4 à 8 heures.

::: TIP
Stockez vos bobines dans des sacs zip hermétiques avec des sachets de silice (dessicant) quand elles ne sont pas utilisées.
:::

---

## Problèmes de première couche

**La première couche est cruciale.** Voici les défauts fréquents :

| Apparence | Problème | Solution |
|-----------|----------|----------|
| Couche transparente, filament qui ne tient pas | Buse trop haute | Baisser le Z offset |
| Couche écrasée, buse qui racle | Buse trop basse | Monter le Z offset |
| Lignes qui ne se touchent pas | Flux trop faible ou vitesse trop élevée | Augmenter le flux ou réduire la vitesse |
| Couche irrégulière par zones | Plateau pas de niveau | Relancer la calibration automatique |

---

## L'impression s'arrête au milieu

**Causes possibles :**
- **Filament cassé ou épuisé** → le P1S détecte la rupture et met en pause automatiquement. Recharger et reprendre.
- **Erreur AMS** → vérifier que la bobine n'est pas emmêlée dans l'AMS.
- **Surchauffe** → laisser refroidir l'imprimante quelques minutes.
- **Perte de réseau** → pour les impressions pilotées via l'application, vérifier la connexion Wi-Fi.

---

## Récapitulatif rapide

| Problème | Premier réflexe |
|----------|-----------------|
| Rien n'adhère | Nettoyer le plateau à l'alcool |
| Warping | Brim + augmenter température plateau |
| Fils entre les parois | Augmenter la rétraction, baisser la température |
| Trous dans les parois | Augmenter la température, réduire la vitesse |
| Buse bouchée | Cold pull à 250 °C puis 90 °C |
| Surface rugueuse | Sécher le filament |
| Couches qui se décollent | Augmenter la température buse |
