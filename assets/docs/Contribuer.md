# Lisez-moi — Comment contribuer à la documentation

Ce site est un portail de documentation pour le Fablab. Il est généré automatiquement à partir de fichiers Markdown placés dans le dossier `assets/docs/`. Vous n'avez pas besoin de toucher au code du site pour ajouter ou modifier une page.

Le code source du site est disponible sur GitHub : [https://github.com/tot0p/fablab](https://github.com/tot0p/fablab)

---

## Comment le site fonctionne

### Structure des fichiers

```
assets/
└── docs/
    ├── Tutoriels/
    │   ├── Mon tutoriel.md      → page /docs/Tutoriels/Mon tutoriel/
    │   └── Autre tutoriel.md
    ├── Maintenance/
    │   └── Imprimante 3D.md
    └── docs.json                (ne pas modifier)
```

- **Chaque dossier** dans `assets/docs/` devient un menu déroulant dans la barre latérale.
- **Chaque fichier `.md`** devient une page du site.
- La navigation est **générée automatiquement** — il suffit de créer le fichier au bon endroit.

### Images

Les images doivent être placées dans `assets/img/`. Elles sont accessibles dans les documents via le chemin `/img/nom-du-fichier.jpg`.

---

## Ajouter une page de documentation

### 1. Créer le fichier

Créez un fichier `.md` dans le dossier correspondant à la catégorie :

```
assets/docs/NomDeLaCategorie/Titre de ma page.md
```

Si la catégorie n'existe pas encore, créez simplement le dossier — il apparaîtra automatiquement dans la navigation.

### 2. Ajouter l'en-tête (optionnel)

Au début du fichier, vous pouvez ajouter un bloc YAML pour personnaliser le titre et la description :

```markdown
---
title: "Mon titre personnalisé"
description: "Courte description affichée sous le titre"
---
```

Si vous omettez cet en-tête, le **nom du fichier** est utilisé comme titre automatiquement.

### 3. Écrire le contenu en Markdown

Voici les éléments disponibles :

#### Titres

```markdown
# Titre principal (H1)
## Section (H2)
### Sous-section (H3)
#### Sous-sous-section (H4)
```

Chaque titre génère automatiquement une ancre de lien (ex. `#titre-principal`).

#### Texte

```markdown
Texte normal.

**Texte en gras**

*Texte en italique*

`code inline`
```

#### Listes

```markdown
- Élément 1
- Élément 2
  - Sous-élément

1. Première étape
2. Deuxième étape
3. Troisième étape
```

#### Liste de tâches

```markdown
- [x] Étape accomplie
- [ ] Étape à faire
- [ ] Autre étape
```

#### Blocs de code avec coloration syntaxique

Indiquez le langage après les trois backticks :

````markdown
```python
def hello():
    print("Bonjour le Fablab !")
```

```bash
npm run build
```

```gcode
G28 ; Homing
G1 X50 Y50 Z10 F3000
```
````

#### Images

Placez l'image dans `assets/img/`, puis insérez-la :

```markdown
![Description de l'image](/img/mon-image.jpg)
```

#### Liens

```markdown
[Texte du lien](https://exemple.com)
[Lien vers une autre page](/docs/Tutoriels/Mon tutoriel/)
```

#### Tableaux

```markdown
| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| Valeur A  | Valeur B  | Valeur C  |
| Valeur D  | Valeur E  | Valeur F  |
```

#### Blocs d'alerte

Ces encadrés colorés attirent l'attention sur des informations importantes :

```markdown
::: NOTE
Information complémentaire utile.
:::

::: TIP
Conseil pratique pour faciliter l'utilisation.
:::

::: IMPORTANT
Information à ne pas manquer.
:::

::: WARNING
Risque potentiel — à lire avant de continuer.
:::

::: CAUTION
Danger ou action irréversible — procéder avec précaution.
:::
```

---

## Exemple de document complet

```markdown
---
title: "Calibrer l'imprimante Prusa"
description: "Guide pas à pas pour calibrer le plateau et le premier calque"
---

# Calibrer l'imprimante Prusa

Ce guide explique comment calibrer le plateau de l'imprimante Prusa MK4.

## Matériel nécessaire

- Une feuille de papier A4
- Accès au menu de l'imprimante

## Étapes

### 1. Accéder au menu de calibration

Sur l'écran de l'imprimante, naviguez vers **Réglages → Calibration → Premier calque**.

### 2. Régler la hauteur

::: TIP
Utilisez la feuille de papier comme guide : la buse doit glisser dessus avec une légère résistance.
:::

1. Lancez la procédure depuis le menu.
2. Ajustez la hauteur avec les boutons +/-.
3. Confirmez quand la résistance est correcte.

::: WARNING
Ne pas forcer la buse contre le plateau — risque d'endommager la surface PEI.
:::

### 3. Vérifier le premier calque

Lancez un test d'impression et observez le premier calque :

| Résultat            | Signification         | Action                 |
|---------------------|-----------------------|------------------------|
| Calque plat         | Calibration correcte  | Continuer l'impression |
| Calque qui se décolle | Buse trop haute     | Baisser de 0,05 mm     |
| Lignes écrasées     | Buse trop basse       | Monter de 0,05 mm      |

![Premier calque correct](/img/premier-calque.jpg)

## Résultat attendu

- [x] Plateau propre et de niveau
- [x] Premier calque adhérent et uniforme
- [ ] Test d'impression complété
```

---

## Lancer le site en local

Pour prévisualiser vos modifications avant de les publier :

```bash
# Installer les dépendances (une seule fois)
npm install

# Lancer le serveur de développement avec rechargement automatique
npm run dev
```

Le site est alors accessible à l'adresse [http://localhost:8080](http://localhost:8080). Toute modification d'un fichier `.md` recharge la page automatiquement.

Pour générer le site statique final :

```bash
npm run build
```

Les fichiers générés se trouvent dans le dossier `_site/`.

---

## Bonnes pratiques

- **Nommez les fichiers clairement** : le nom devient le titre si aucun frontmatter n'est présent.
- **Rangez les fichiers dans le bon dossier** : la structure des dossiers définit la navigation.
- **Utilisez des images compressées** : les fichiers trop lourds ralentissent le site.
- **Testez localement** avant de publier, notamment pour vérifier les images et les liens.
- **Écrivez en français** pour rester cohérent avec le reste de la documentation.
