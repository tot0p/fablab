# Point d’accès Wi‑Fi avec RaspAP sur Raspberry Pi (une seule carte Wi‑Fi)

## Objectif

Faire fonctionner un point d’accès Wi‑Fi sur un Raspberry Pi avec une seule carte Wi‑Fi :

- `wlan0` reste connecté au Wi‑Fi existant pour Internet ;
- `wlan0-ap` (interface virtuelle) sert de point d’accès géré par RaspAP.

---

## 1. Connexion au Wi‑Fi existant avec `wpa_supplicant`

Le Raspberry Pi doit d’abord être connecté au Wi‑Fi pour avoir Internet.

Exemple de configuration WPA Enterprise (`/etc/wpa_supplicant/wpa_supplicant.conf`) :

```conf
network={
    ssid="WIFI@YNOV"
    key_mgmt=WPA-EAP
    eap=PEAP
    identity="UTILISATEUR"
    password="MOT_DE_PASSE"
    phase2="auth=MSCHAPV2"
}
```

Recharger la configuration :

```bash
sudo wpa_cli -i wlan0 reconfigure
```

---

## 2. Création de l’interface Wi‑Fi virtuelle pour l’AP

Vérifier que la carte supporte le mode **client + AP** simultanément :

```bash
iw list | grep -A10 "valid interface combinations"
```

Créer l’interface virtuelle :

```bash
sudo iw dev wlan0 interface add wlan0-ap type ap
iw dev
```

---

## 3. Configuration de l’AP dans RaspAP

Créer `wlan0-ap` ne suffit pas : il faut indiquer à RaspAP de l’utiliser.

Dans l’interface web de RaspAP, section **Hotspot** :

```text
Interface hotspot : wlan0-ap
SSID : fablab
Mode : Access Point / AP
Sécurité : WPA/WPA2
Mot de passe : mot de passe du hotspot
```

Enregistrer puis redémarrer le hotspot.

---

## 4. Accès à l’interface RaspAP

```text
URL       : http://192.168.50.1
Utilisateur : admin
Mot de passe : secret
```

---

## 5. Redémarrage du hotspot en cas de perte d’Internet

1. ouvrir `http://192.168.50.1` ;
2. se connecter à RaspAP ;
3. aller dans **Hotspot** ;
4. cliquer sur le bouton de redémarrage du hotspot.

---

## 6. Commandes utiles

Diagnostic :

```bash
ip a
iw dev
iw dev wlan0 link
ping google.com
```

Recréer l’interface virtuelle :

```bash
sudo iw dev wlan0 interface add wlan0-ap type ap
```

Supprimer l’interface virtuelle :

```bash
sudo iw dev wlan0-ap del
```

---

## Schéma final

```text
Internet Wi‑Fi existant
        ↓
wlan0 (Raspberry Pi)
        ↓
wlan0-ap (interface virtuelle)
        ↓
RaspAP → Hotspot Wi‑Fi "fablab"
        ↓
Clients connectés
```
