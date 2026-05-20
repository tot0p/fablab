# Paramètres d'impression — Bambu Lab P1S

Le Fablab dispose de **deux imprimantes Bambu Lab P1S**. Elles s'utilisent avec le logiciel **Bambu Studio** (ou OrcaSlicer). Ce guide présente les réglages à connaître pour obtenir de bonnes impressions en PLA.

---

## Volume d'impression

| Dimension | Valeur |
|-----------|--------|
| Largeur (X) | 256 mm |
| Profondeur (Y) | 256 mm |
| Hauteur (Z) | 256 mm |

---

## Profils de qualité

Bambu Studio propose des profils prêts à l'emploi. Voici lesquels choisir selon vos besoins :

| Profil | Hauteur de couche | Usage |
|--------|-------------------|-------|
| Extra fine | 0,08 mm | Détails fins, figurines |
| Fine | 0,12 mm | Bonne qualité, pièces visibles |
| **Optimal** | **0,20 mm** | **Équilibre qualité/vitesse — recommandé** |
| Rapide | 0,28 mm | Prototypes, pièces fonctionnelles |

---

## Paramètres PLA

| Paramètre | Valeur |
|-----------|--------|
| Température buse | 220 °C |
| Température plateau | 35 °C |
| Ventilation | 100 % |
| Vitesse (recommandée) | 150–200 mm/s |
| Remplissage standard | 15 % gyroïde |

---

## Remplissage (infill)

Le remplissage détermine la solidité et le poids de la pièce.

| Pourcentage | Usage |
|-------------|-------|
| 5–10 % | Décoration, maquettes |
| 15 % | Pièces standard (valeur par défaut) |
| 30–40 % | Pièces mécaniques, sollicitées |
| 80–100 % | Pièces très résistantes, poids acceptable |

**Motif recommandé :** Gyroïde (résistance homogène dans toutes les directions).

---

## Supports

Activez les supports si votre modèle a des **surplombs de plus de 45°**.

- **Type recommandé :** Supports arborescents (tree supports) — plus faciles à retirer.
- **Interface de support :** Activez-la pour décoller les supports plus proprement.

::: TIP
Dans Bambu Studio, vous pouvez peindre manuellement les zones où ajouter ou exclure des supports. C'est très utile pour les géométries complexes.
:::

---

## Adhérence au plateau (brim / raft)

| Option | Quand l'utiliser |
|--------|------------------|
| Aucune | Pièces avec une grande surface de base |
| **Brim** | Pièces fines, hautes ou avec peu de contact |
| Raft | Petites pièces avec très peu de surface |

---

## Conseils généraux

- **Orientez votre pièce** pour minimiser les supports et maximiser la résistance dans le sens des couches.
- **Vérifiez l'aperçu couche par couche** dans Bambu Studio avant de lancer l'impression.
- **Ne touchez pas au plateau** à mains nues — les graisses de la peau réduisent l'adhérence.
- En cas de problème d'adhérence, nettoyez le plateau avec de l'alcool isopropylique.
