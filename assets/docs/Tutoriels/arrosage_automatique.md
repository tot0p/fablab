# Arrosage automatique — ESP-12F (NodeMCU)

**Composants :** Sonde d'humidité sol · Relai PCB · Pompe 9V · Alimentation 9V

---

## Matériel nécessaire

| Composant | Détails |
|---|---|
| NodeMCU ESP-12F | Microcontrôleur WiFi (board avec diviseur de tension sur AD0) |
| Sonde humidité sol | Capteur résistif analogique — 3 ou 4 broches |
| Module relai PCB | Actif HIGH, bobine 5V |
| Pompe immergée | 9V selon modèle |
| Alimentation 9V | Adaptateur secteur ou batterie |
| Fils Dupont | Mâle/femelle |

---

## 1. Câblage de la sonde d'humidité

La sonde retourne une tension **inversée** : sol sec = tension haute, sol humide = tension basse.

<svg width="100%" viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>
  <!-- Sonde -->
  <rect x="40" y="60" width="160" height="180" rx="10" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
  <text x="120" y="88" text-anchor="middle" font-size="14" font-weight="500" fill="#085041" font-family="sans-serif">Sonde</text>
  <text x="120" y="106" text-anchor="middle" font-size="12" fill="#0F6E56" font-family="sans-serif">humidité sol</text>
  <!-- Électrodes -->
  <rect x="88" y="220" width="64" height="28" rx="4" fill="#5DCAA5" stroke="#0F6E56" stroke-width="0.5"/>
  <rect x="96" y="214" width="8" height="36" rx="2" fill="#085041"/>
  <rect x="112" y="214" width="8" height="36" rx="2" fill="#085041"/>
  <rect x="128" y="214" width="8" height="36" rx="2" fill="#085041"/>
  <rect x="144" y="214" width="8" height="36" rx="2" fill="#085041"/>
  <!-- Labels broches -->
  <text x="100" y="208" text-anchor="middle" font-size="11" fill="#085041" font-family="sans-serif">VCC</text>
  <text x="116" y="208" text-anchor="middle" font-size="11" fill="#085041" font-family="sans-serif">GND</text>
  <text x="132" y="208" text-anchor="middle" font-size="11" fill="#085041" font-family="sans-serif">AO</text>
  <text x="148" y="208" text-anchor="middle" font-size="11" fill="#085041" font-family="sans-serif">DO</text>
  <!-- Fils sortants -->
  <line x1="100" y1="248" x2="100" y2="270" stroke="#E24B4A" stroke-width="2"/>
  <line x1="116" y1="248" x2="116" y2="276" stroke="#444441" stroke-width="2"/>
  <line x1="132" y1="248" x2="132" y2="268" stroke="#EF9F27" stroke-width="2"/>
  <line x1="148" y1="248" x2="148" y2="278" stroke="#B4B2A9" stroke-width="1.5" stroke-dasharray="4 3"/>
  <!-- Routage vers NodeMCU -->
  <line x1="100" y1="270" x2="100" y2="282" stroke="#E24B4A" stroke-width="2"/>
  <line x1="100" y1="282" x2="430" y2="282" stroke="#E24B4A" stroke-width="2" marker-end="url(#a1)"/>
  <line x1="116" y1="276" x2="116" y2="286" stroke="#444441" stroke-width="2"/>
  <line x1="116" y1="286" x2="450" y2="286" stroke="#444441" stroke-width="2" marker-end="url(#a1)"/>
  <line x1="132" y1="268" x2="132" y2="290" stroke="#EF9F27" stroke-width="2"/>
  <line x1="132" y1="290" x2="470" y2="290" stroke="#EF9F27" stroke-width="2" marker-end="url(#a1)"/>
  <line x1="148" y1="278" x2="148" y2="285" stroke="#B4B2A9" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="170" y="289" font-size="11" fill="#888780" font-family="sans-serif">non utilisé</text>
  <!-- NodeMCU -->
  <rect x="430" y="40" width="210" height="220" rx="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/>
  <text x="535" y="68" text-anchor="middle" font-size="14" font-weight="500" fill="#0C447C" font-family="sans-serif">NodeMCU ESP-12F</text>
  <!-- Pins NodeMCU -->
  <rect x="450" y="95" width="80" height="30" rx="6" fill="#EAF3DE" stroke="#3B6D11" stroke-width="0.5"/>
  <text x="490" y="110" text-anchor="middle" font-size="13" font-weight="500" fill="#27500A" font-family="sans-serif">3.3V</text>
  <rect x="450" y="143" width="80" height="30" rx="6" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
  <text x="490" y="158" text-anchor="middle" font-size="13" font-weight="500" fill="#2C2C2A" font-family="sans-serif">GND</text>
  <rect x="450" y="191" width="80" height="30" rx="6" fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
  <text x="490" y="206" text-anchor="middle" font-size="13" font-weight="500" fill="#412402" font-family="sans-serif">AD0</text>
  <!-- Connexions aux pins -->
  <line x1="430" y1="282" x2="430" y2="110" stroke="#E24B4A" stroke-width="2"/>
  <line x1="430" y1="110" x2="450" y2="110" stroke="#E24B4A" stroke-width="2" marker-end="url(#a1)"/>
  <line x1="450" y1="286" x2="444" y2="286" stroke="#444441" stroke-width="2"/>
  <line x1="444" y1="286" x2="444" y2="158" stroke="#444441" stroke-width="2"/>
  <line x1="444" y1="158" x2="450" y2="158" stroke="#444441" stroke-width="2" marker-end="url(#a1)"/>
  <line x1="470" y1="290" x2="462" y2="290" stroke="#EF9F27" stroke-width="2"/>
  <line x1="462" y1="290" x2="462" y2="206" stroke="#EF9F27" stroke-width="2"/>
  <line x1="462" y1="206" x2="450" y2="206" stroke="#EF9F27" stroke-width="2" marker-end="url(#a1)"/>
  <!-- Points de jonction -->
  <circle cx="430" cy="282" r="4" fill="#E24B4A"/>
  <circle cx="444" cy="286" r="4" fill="#444441"/>
  <circle cx="462" cy="290" r="4" fill="#EF9F27"/>
  <!-- Légende -->
  <rect x="40" y="14" width="10" height="8" rx="2" fill="#E24B4A"/>
  <text x="56" y="20" font-size="11" fill="#A32D2D" font-family="sans-serif">3.3V (rouge)</text>
  <rect x="160" y="14" width="10" height="8" rx="2" fill="#444441"/>
  <text x="176" y="20" font-size="11" fill="#444441" font-family="sans-serif">GND (noir)</text>
  <rect x="270" y="14" width="10" height="8" rx="2" fill="#EF9F27"/>
  <text x="286" y="20" font-size="11" fill="#633806" font-family="sans-serif">AO (jaune)</text>
</svg>

**Points importants :**

- La board NodeMCU a un diviseur de tension intégré sur AD0 — pas de composants supplémentaires, tension max 3.3V directement.
- Ne jamais alimenter la sonde en 5V sur AD0 — risque de griller le pin ADC.
- La broche `DO` (sortie numérique) n'est pas utilisée dans ce projet.

---

## 2. Câblage du module relai (3 GPIO en parallèle)

Chaque GPIO de l'ESP8266 fournit environ 12mA. En reliant D5, D6 et D7 ensemble on obtient ~36mA — suffisant pour déclencher le relai sans transistor.

<svg width="100%" viewBox="0 0 680 310" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>
  <!-- NodeMCU -->
  <rect x="40" y="50" width="200" height="220" rx="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.5"/>
  <text x="140" y="78" text-anchor="middle" font-size="14" font-weight="500" fill="#0C447C" font-family="sans-serif">NodeMCU ESP-12F</text>
  <!-- GPIO pins -->
  <rect x="60" y="105" width="110" height="30" rx="6" fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
  <text x="115" y="120" text-anchor="middle" font-size="12" font-weight="500" fill="#412402" font-family="sans-serif">D5 / GPIO14</text>
  <rect x="60" y="153" width="110" height="30" rx="6" fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
  <text x="115" y="168" text-anchor="middle" font-size="12" font-weight="500" fill="#412402" font-family="sans-serif">D6 / GPIO12</text>
  <rect x="60" y="201" width="110" height="30" rx="6" fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
  <text x="115" y="216" text-anchor="middle" font-size="12" font-weight="500" fill="#412402" font-family="sans-serif">D7 / GPIO13</text>
  <rect x="60" y="242" width="65" height="22" rx="4" fill="#EAF3DE" stroke="#3B6D11" stroke-width="0.5"/>
  <text x="92" y="253" text-anchor="middle" font-size="11" fill="#27500A" font-family="sans-serif">5V (VIN)</text>
  <rect x="140" y="242" width="55" height="22" rx="4" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
  <text x="167" y="253" text-anchor="middle" font-size="11" fill="#2C2C2A" font-family="sans-serif">GND</text>
  <!-- Fils GPIO vers noeud -->
  <line x1="170" y1="120" x2="300" y2="120" stroke="#BA7517" stroke-width="2"/>
  <line x1="170" y1="168" x2="300" y2="168" stroke="#BA7517" stroke-width="2"/>
  <line x1="170" y1="216" x2="300" y2="216" stroke="#BA7517" stroke-width="2"/>
  <!-- Noeud de jonction -->
  <line x1="300" y1="120" x2="300" y2="216" stroke="#BA7517" stroke-width="2.5"/>
  <circle cx="300" cy="120" r="4" fill="#BA7517"/>
  <circle cx="300" cy="168" r="4" fill="#BA7517"/>
  <circle cx="300" cy="216" r="4" fill="#BA7517"/>
  <line x1="300" y1="168" x2="380" y2="168" stroke="#BA7517" stroke-width="2.5" marker-end="url(#a2)"/>
  <text x="308" y="143" font-size="11" fill="#633806" font-family="sans-serif">x3 GPIO</text>
  <text x="308" y="156" font-size="11" fill="#633806" font-family="sans-serif">= ~36mA</text>
  <!-- VCC et GND relai -->
  <line x1="125" y1="253" x2="390" y2="253" stroke="#E24B4A" stroke-width="2" marker-end="url(#a2)"/>
  <line x1="195" y1="253" x2="195" y2="264" stroke="#444441" stroke-width="2"/>
  <line x1="195" y1="264" x2="400" y2="264" stroke="#444441" stroke-width="2" marker-end="url(#a2)"/>
  <!-- Relai -->
  <rect x="380" y="50" width="180" height="230" rx="10" fill="#FAECE7" stroke="#993C1D" stroke-width="0.5"/>
  <text x="470" y="78" text-anchor="middle" font-size="14" font-weight="500" fill="#4A1B0C" font-family="sans-serif">Module relai PCB</text>
  <!-- Pins commande -->
  <rect x="398" y="154" width="52" height="28" rx="6" fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
  <text x="424" y="168" text-anchor="middle" font-size="13" font-weight="500" fill="#412402" font-family="sans-serif">IN</text>
  <rect x="398" y="104" width="52" height="28" rx="6" fill="#EAF3DE" stroke="#3B6D11" stroke-width="0.5"/>
  <text x="424" y="118" text-anchor="middle" font-size="13" font-weight="500" fill="#27500A" font-family="sans-serif">VCC</text>
  <rect x="398" y="206" width="52" height="28" rx="6" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
  <text x="424" y="220" text-anchor="middle" font-size="13" font-weight="500" fill="#2C2C2A" font-family="sans-serif">GND</text>
  <!-- Pins puissance -->
  <rect x="464" y="104" width="52" height="28" rx="6" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
  <text x="490" y="118" text-anchor="middle" font-size="13" font-weight="500" fill="#2C2C2A" font-family="sans-serif">COM</text>
  <rect x="464" y="154" width="52" height="28" rx="6" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
  <text x="490" y="168" text-anchor="middle" font-size="13" font-weight="500" fill="#085041" font-family="sans-serif">NO</text>
  <rect x="464" y="206" width="52" height="28" rx="6" fill="#FCEBEB" stroke="#A32D2D" stroke-width="0.5"/>
  <text x="490" y="220" text-anchor="middle" font-size="13" font-weight="500" fill="#501313" font-family="sans-serif">NC</text>
  <!-- Séparateur -->
  <line x1="455" y1="95" x2="455" y2="245" stroke="#993C1D" stroke-width="0.5" stroke-dasharray="4 3"/>
  <text x="448" y="90" text-anchor="middle" font-size="10" fill="#712B13" font-family="sans-serif">commande</text>
  <text x="502" y="90" text-anchor="middle" font-size="10" fill="#712B13" font-family="sans-serif">puissance</text>
  <!-- Notes puissance -->
  <text x="490" y="148" text-anchor="middle" font-size="10" fill="#5F5E5A" font-family="sans-serif">alim 9V (+)</text>
  <text x="490" y="196" text-anchor="middle" font-size="10" fill="#085041" font-family="sans-serif">vers pompe</text>
  <text x="490" y="246" text-anchor="middle" font-size="10" fill="#5F5E5A" font-family="sans-serif">non utilisé</text>
  <!-- Légende -->
  <rect x="40" y="14" width="10" height="8" rx="2" fill="#BA7517"/>
  <text x="56" y="20" font-size="11" fill="#633806" font-family="sans-serif">Signal D5+D6+D7 (orange)</text>
  <rect x="240" y="14" width="10" height="8" rx="2" fill="#E24B4A"/>
  <text x="256" y="20" font-size="11" fill="#A32D2D" font-family="sans-serif">VCC 5V (rouge)</text>
  <rect x="360" y="14" width="10" height="8" rx="2" fill="#444441"/>
  <text x="376" y="20" font-size="11" fill="#444441" font-family="sans-serif">GND (noir)</text>
</svg>

---

## 3. Circuit complet — alimentation 9V, relai et pompe

Le +9V alimente à la fois le `VIN` du NodeMCU et le `COM` du relai. La pompe est alimentée via le contact `NO` du relai. Le GND est commun à tout le circuit.

<svg width="100%" viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>
  <!-- Bordure globale -->
  <rect x="30" y="35" width="620" height="375" rx="14" fill="none" stroke="#B4B2A9" stroke-width="0.5" stroke-dasharray="6 4"/>
  <!-- Séparateur basse tension / puissance -->
  <line x1="340" y1="35" x2="340" y2="410" stroke="#B4B2A9" stroke-width="0.5" stroke-dasharray="4 4"/>
  <text x="185" y="28" text-anchor="middle" font-size="11" fill="#888780" font-family="sans-serif">circuit basse tension</text>
  <text x="500" y="28" text-anchor="middle" font-size="11" fill="#888780" font-family="sans-serif">circuit puissance</text>
  <!-- Rails 9V et GND -->
  <line x1="200" y1="55" x2="620" y2="55" stroke="#E24B4A" stroke-width="2.5"/>
  <circle cx="200" cy="55" r="4" fill="#E24B4A"/>
  <text x="380" y="47" text-anchor="middle" font-size="11" fill="#A32D2D" font-family="sans-serif">+9V — rail commun</text>
  <line x1="200" y1="390" x2="620" y2="390" stroke="#444441" stroke-width="2.5"/>
  <circle cx="200" cy="390" r="4" fill="#444441"/>
  <text x="380" y="403" text-anchor="middle" font-size="11" fill="#444441" font-family="sans-serif">GND — rail commun</text>
  <!-- Alim 9V -->
  <rect x="50" y="160" width="110" height="100" rx="10" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
  <text x="105" y="200" text-anchor="middle" font-size="14" font-weight="500" fill="#2C2C2A" font-family="sans-serif">Alim 9V</text>
  <text x="105" y="218" text-anchor="middle" font-size="12" fill="#444441" font-family="sans-serif">adaptateur</text>
  <line x1="160" y1="180" x2="200" y2="180" stroke="#E24B4A" stroke-width="2.5"/>
  <text x="178" y="171" text-anchor="middle" font-size="10" fill="#A32D2D" font-family="sans-serif">+9V</text>
  <line x1="160" y1="240" x2="200" y2="240" stroke="#444441" stroke-width="2.5"/>
  <text x="178" y="231" text-anchor="middle" font-size="10" fill="#444441" font-family="sans-serif">GND</text>
  <line x1="200" y1="180" x2="200" y2="55" stroke="#E24B4A" stroke-width="2.5"/>
  <line x1="200" y1="240" x2="200" y2="390" stroke="#444441" stroke-width="2.5"/>
  <!-- NodeMCU -->
  <rect x="210" y="80" width="120" height="110" rx="10" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.5"/>
  <text x="270" y="108" text-anchor="middle" font-size="14" font-weight="500" fill="#0C447C" font-family="sans-serif">NodeMCU</text>
  <text x="270" y="124" text-anchor="middle" font-size="12" fill="#185FA5" font-family="sans-serif">ESP-12F</text>
  <rect x="222" y="142" width="44" height="26" rx="4" fill="#EAF3DE" stroke="#3B6D11" stroke-width="0.5"/>
  <text x="244" y="155" text-anchor="middle" font-size="12" font-weight="500" fill="#27500A" font-family="sans-serif">VIN</text>
  <rect x="274" y="142" width="44" height="26" rx="4" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
  <text x="296" y="155" text-anchor="middle" font-size="12" font-weight="500" fill="#2C2C2A" font-family="sans-serif">GND</text>
  <!-- 9V vers VIN NodeMCU -->
  <line x1="244" y1="55" x2="244" y2="142" stroke="#E24B4A" stroke-width="2.5" marker-end="url(#a3)"/>
  <circle cx="244" cy="55" r="4" fill="#E24B4A"/>
  <!-- GND vers GND NodeMCU -->
  <line x1="296" y1="390" x2="296" y2="168" stroke="#444441" stroke-width="2.5" marker-end="url(#a3)"/>
  <circle cx="296" cy="390" r="4" fill="#444441"/>
  <!-- Signal GPIO D5+D6+D7 -->
  <line x1="330" y1="130" x2="380" y2="130" stroke="#BA7517" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#a3)"/>
  <text x="354" y="122" text-anchor="middle" font-size="11" fill="#633806" font-family="sans-serif">D5+D6+D7</text>
  <!-- Relai -->
  <rect x="380" y="80" width="200" height="160" rx="10" fill="#FAECE7" stroke="#993C1D" stroke-width="0.5"/>
  <text x="480" y="108" text-anchor="middle" font-size="14" font-weight="500" fill="#4A1B0C" font-family="sans-serif">Relai PCB</text>
  <!-- Pins commande relai -->
  <rect x="396" y="128" width="44" height="26" rx="4" fill="#FAEEDA" stroke="#854F0B" stroke-width="0.5"/>
  <text x="418" y="141" text-anchor="middle" font-size="12" font-weight="500" fill="#412402" font-family="sans-serif">IN</text>
  <rect x="448" y="128" width="44" height="26" rx="4" fill="#EAF3DE" stroke="#3B6D11" stroke-width="0.5"/>
  <text x="470" y="141" text-anchor="middle" font-size="12" font-weight="500" fill="#27500A" font-family="sans-serif">VCC</text>
  <rect x="500" y="128" width="44" height="26" rx="4" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
  <text x="522" y="141" text-anchor="middle" font-size="12" font-weight="500" fill="#2C2C2A" font-family="sans-serif">GND</text>
  <!-- Pins puissance relai -->
  <rect x="396" y="172" width="60" height="26" rx="4" fill="#F1EFE8" stroke="#5F5E5A" stroke-width="0.5"/>
  <text x="426" y="185" text-anchor="middle" font-size="12" font-weight="500" fill="#2C2C2A" font-family="sans-serif">COM</text>
  <rect x="464" y="172" width="44" height="26" rx="4" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
  <text x="486" y="185" text-anchor="middle" font-size="12" font-weight="500" fill="#085041" font-family="sans-serif">NO</text>
  <rect x="516" y="172" width="44" height="26" rx="4" fill="#FCEBEB" stroke="#A32D2D" stroke-width="0.5"/>
  <text x="538" y="185" text-anchor="middle" font-size="12" font-weight="500" fill="#501313" font-family="sans-serif">NC</text>
  <text x="538" y="210" text-anchor="middle" font-size="10" fill="#888780" font-family="sans-serif">non utilisé</text>
  <!-- 9V vers VCC relai -->
  <line x1="470" y1="55" x2="470" y2="128" stroke="#E24B4A" stroke-width="2.5" marker-end="url(#a3)"/>
  <circle cx="470" cy="55" r="4" fill="#E24B4A"/>
  <!-- GND vers GND relai -->
  <line x1="522" y1="390" x2="522" y2="154" stroke="#444441" stroke-width="2.5" marker-end="url(#a3)"/>
  <circle cx="522" cy="390" r="4" fill="#444441"/>
  <!-- 9V vers COM relai (déviation) -->
  <line x1="360" y1="55" x2="426" y2="55" stroke="#E24B4A" stroke-width="0.5"/>
  <line x1="426" y1="55" x2="426" y2="172" stroke="#E24B4A" stroke-width="2.5" marker-end="url(#a3)"/>
  <circle cx="360" cy="55" r="4" fill="#E24B4A"/>
  <text x="390" y="116" font-size="10" fill="#A32D2D" font-family="sans-serif">9V → COM</text>
  <!-- NO vers pompe -->
  <line x1="486" y1="198" x2="486" y2="270" stroke="#1D9E75" stroke-width="2.5" marker-end="url(#a3)"/>
  <text x="506" y="240" font-size="11" fill="#085041" font-family="sans-serif">pompe (+)</text>
  <!-- Pompe -->
  <rect x="420" y="270" width="160" height="80" rx="10" fill="#E1F5EE" stroke="#0F6E56" stroke-width="0.5"/>
  <text x="500" y="300" text-anchor="middle" font-size="14" font-weight="500" fill="#085041" font-family="sans-serif">Pompe</text>
  <text x="500" y="318" text-anchor="middle" font-size="12" fill="#0F6E56" font-family="sans-serif">alimentée en 9V</text>
  <!-- Pompe vers GND -->
  <line x1="500" y1="350" x2="500" y2="390" stroke="#444441" stroke-width="2.5" marker-end="url(#a3)"/>
  <circle cx="500" cy="390" r="4" fill="#444441"/>
  <text x="520" y="372" font-size="11" fill="#444441" font-family="sans-serif">pompe (−)</text>
  <!-- Légende -->
  <rect x="50" y="418" width="10" height="8" rx="2" fill="#E24B4A"/>
  <text x="66" y="424" font-size="11" fill="#A32D2D" font-family="sans-serif">+9V</text>
  <rect x="120" y="418" width="10" height="8" rx="2" fill="#444441"/>
  <text x="136" y="424" font-size="11" fill="#444441" font-family="sans-serif">GND commun</text>
  <rect x="250" y="418" width="10" height="8" rx="2" fill="#BA7517"/>
  <text x="266" y="424" font-size="11" fill="#633806" font-family="sans-serif">signal GPIO</text>
  <rect x="360" y="418" width="10" height="8" rx="2" fill="#1D9E75"/>
  <text x="376" y="424" font-size="11" fill="#085041" font-family="sans-serif">circuit pompe</text>
</svg>

> Utiliser le contact **NO** (Normally Open) du relai — circuit ouvert au repos, fermé quand le relai est activé.

---

## 4. Code Arduino complet

```cpp
// =====================================
// Arrosage automatique ESP-12F
// Sonde : AD0 (diviseur intégré, 0-3.3V)
// Relai  : D5+D6+D7 en parallèle, actif HIGH
// =====================================

const int   PIN_RELAI_1  = 14;  // D5
const int   PIN_RELAI_2  = 12;  // D6
const int   PIN_RELAI_3  = 13;  // D7
const float SEUIL_POMPE  = 30.0; // % — pompe ON sous ce seuil
const int   DELAI_MS     = 500;

void setRelai(bool etat) {
  digitalWrite(PIN_RELAI_1, etat ? HIGH : LOW);
  digitalWrite(PIN_RELAI_2, etat ? HIGH : LOW);
  digitalWrite(PIN_RELAI_3, etat ? HIGH : LOW);
}

void setup() {
  Serial.begin(115200);
  pinMode(PIN_RELAI_1, OUTPUT);
  pinMode(PIN_RELAI_2, OUTPUT);
  pinMode(PIN_RELAI_3, OUTPUT);
  setRelai(false);  // Pompe éteinte au démarrage
  Serial.println("\n=== Arrosage automatique ===");
  Serial.print("Seuil : ");
  Serial.print(SEUIL_POMPE);
  Serial.println("%");
}

void loop() {
  int   val     = analogRead(A0);
  float tension = val * (3.3 / 1023.0);
  float niveau  = (1.0 - (val / 1023.0)) * 100.0;  // 0% = 3.3V (sec), 100% = 0V (humide)
  bool  pompe   = (niveau < SEUIL_POMPE);

  setRelai(pompe);

  Serial.print("Brut: ");    Serial.print(val);
  Serial.print(" | Tension: "); Serial.print(tension, 2);
  Serial.print("V | Niveau: "); Serial.print(niveau, 1);
  Serial.print("% | Pompe: ");
  Serial.println(pompe ? "ON" : "OFF");

  delay(DELAI_MS);
}
```

### Configuration IDE Arduino

| Paramètre | Valeur |
|---|---|
| Type de carte | Generic ESP8266 Module ou NodeMCU 1.0 |
| Fréquence CPU | 80 MHz |
| Flash Size | 4MB |
| Vitesse upload | 115200 |
| Moniteur série | 115200 bauds |

---

## 5. Calibration

### Procédure

1. Planter la sonde dans le **sol sec** → noter la valeur `Niveau` dans le moniteur série (typiquement 0-30%)
2. Arroser légèrement → noter la nouvelle valeur (typiquement 40-70%)
3. Choisir `SEUIL_POMPE` entre ces deux valeurs selon la plante
4. Flasher à nouveau le code avec le seuil ajusté

### Valeurs de référence

| État du sol | Niveau typique | Tension AD0 |
|---|---|---|
| Sol sec (plante à arroser) | 0 – 30% | proche de 3.3V |
| Sol légèrement humide | 40 – 60% | ~1.5V |
| Sol bien humide | 70 – 90% | proche de 0V |

> Seuil recommandé pour plantes d'intérieur : 40%

---

## 6. Résumé des connexions

| Fil | De | Vers |
|---|---|---|
| Rouge | 3.3V NodeMCU | VCC sonde |
| Noir | GND NodeMCU | GND sonde |
| Jaune | AO sonde | AD0 NodeMCU |
| Orange | D5 + D6 + D7 NodeMCU (reliés) | IN relai |
| Rouge | 5V (VIN) NodeMCU | VCC relai |
| Noir | GND NodeMCU | GND relai |
| Rouge (puissance) | Alim 9V (+) | VIN NodeMCU + COM relai |
| Noir (puissance) | Alim 9V (−) | GND NodeMCU + Pompe (−) |
| Vert | NO relai | Pompe (+) |

---

## Avertissements

- Ne jamais alimenter la sonde en 5V sur AD0
- Utiliser le contact **NO** (Normally Open) du relai, jamais NC
- Prévoir une **diode de roue libre 1N4007** en parallèle sur la pompe pour protéger le relai (cathode côté + alim)
- Pour un usage long terme, préférer une sonde **capacitive** (les sondes résistives s'oxydent)
- Ne pas laisser la pompe tourner à sec
