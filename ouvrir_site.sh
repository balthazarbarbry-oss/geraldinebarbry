#!/bin/bash

# Script pour ouvrir le site en serveur local
# Ce script vérifie Node.js et lance le serveur

echo "🚀 Tentative de lancement du site..."
echo ""

# Essayer nvm d'abord
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm use 18 2>/dev/null || nvm use 16 2>/dev/null || nvm use --lts 2>/dev/null
fi

# Vérifier si Node.js fonctionne
if command -v node &> /dev/null && node --version &> /dev/null; then
    NODE_VERSION=$(node --version 2>/dev/null)
    echo "✅ Node.js trouvé : $NODE_VERSION"
    echo ""
    
    cd /Users/balthazarbarbry/Parcel-site/geraldinebarbry
    
    # Vérifier si node_modules existe
    if [ ! -d "node_modules" ]; then
        echo "📦 Installation des dépendances..."
        npm install
    fi
    
    echo ""
    echo "🌐 Démarrage du serveur..."
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Le site sera accessible à : http://localhost:5173"
    echo ""
    echo "Appuyez sur Ctrl+C pour arrêter le serveur"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    
    npm run dev
    
else
    echo "❌ Node.js n'est pas installé ou n'est pas compatible."
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📖 INSTALLATION REQUISE"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Pour lancer le site, vous devez installer Node.js :"
    echo ""
    echo "1. Allez sur : https://nodejs.org/"
    echo "2. Téléchargez la version LTS pour macOS ARM64"
    echo "3. Installez le fichier .pkg (double-clic)"
    echo "4. Redémarrez votre terminal"
    echo "5. Relancez ce script : ./ouvrir_site.sh"
    echo ""
    echo "Consultez INSTALL_NODEJS.md pour un guide détaillé."
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 1
fi

