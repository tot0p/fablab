---
layout: base.njk
title: "Fablab Documentation Portal"
---

<div class="hero">
  <h1>{{ title }}</h1>
  <p>Bienvenue sur le portail de documentation du Fablab. Utilisez le menu de navigation pour explorer nos guides, tutoriels et ressources.</p>
</div>

<div class="content-grid">
  <div class="card">
    <h3>🖨️ Maintenance</h3>
    <p>Guides de maintenance et d'entretien pour les équipements du Fablab.</p>
    <ul>
      <li><a href="{{ '/docs/Maintenance/Imprimante 3D/' | url }}">Entretien des imprimantes 3D Bambu Lab P1S</a></li>
    </ul>
  </div>
  
  <div class="card">
    <h3>🎓 Tutoriels</h3>
    <p>Tutoriels pas à pas pour vous aider à démarrer avec la fabrication numérique.</p>
    <ul>
      <li><a href="{{ '/docs/Tutoriels/Zero To Benchy/' | url }}">Zero To Benchy - Guide d'impression 3D</a></li>
    </ul>
  </div>
  
  <div class="card">
    <h3>📚 Documentation Complète</h3>
    <p>Parcourez toute notre documentation en utilisant le menu de navigation sur la gauche.</p>
  </div>
  
  <div class="card">
    <h3>🔧 Équipements</h3>
    <p>Découvrez les outils et équipements disponibles dans notre Fablab.</p>
    <p><em>Plus de contenu à venir...</em></p>
  </div>
</div>