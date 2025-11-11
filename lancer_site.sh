#!/bin/bash

# Script pour lancer le site avec Python (sans Node.js)

echo "🚀 Lancement du serveur HTTP avec Python..."
echo ""

cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry

# Vérifier si Python est disponible
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 n'est pas installé."
    echo "   Python devrait être installé par défaut sur macOS."
    exit 1
fi

# Lancer le serveur
python3 serveur_simple.py

