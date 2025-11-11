#!/bin/bash

# Script de démarrage du serveur de développement

echo "🔍 Recherche de Node.js..."

# Essayer différentes méthodes pour trouver Node.js
# Priorité à nvm pour éviter les problèmes de compatibilité
if [ -f "$HOME/.nvm/nvm.sh" ]; then
    echo "📦 Chargement de nvm..."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    if nvm use default 2>/dev/null || nvm use node 2>/dev/null || nvm use --lts 2>/dev/null || nvm use 18 2>/dev/null || nvm use 16 2>/dev/null; then
        NODE_CMD="node"
        NPM_CMD="npm"
    fi
fi

# Si nvm n'a pas fonctionné, essayer node directement
if [ -z "$NODE_CMD" ] && command -v node &> /dev/null; then
    # Tester si node fonctionne vraiment
    if node --version &> /dev/null; then
        NODE_CMD="node"
        NPM_CMD="npm"
    fi
fi

# Si toujours rien, essayer les chemins standards
if [ -z "$NODE_CMD" ]; then
    if [ -f "/usr/local/bin/node" ]; then
        export PATH="/usr/local/bin:$PATH"
        # Tester si cette version fonctionne
        if /usr/local/bin/node --version &> /dev/null; then
            NODE_CMD="/usr/local/bin/node"
            NPM_CMD="/usr/local/bin/npm"
        fi
    fi
    
    if [ -z "$NODE_CMD" ] && [ -f "/opt/homebrew/bin/node" ]; then
        export PATH="/opt/homebrew/bin:$PATH"
        if /opt/homebrew/bin/node --version &> /dev/null; then
            NODE_CMD="/opt/homebrew/bin/node"
            NPM_CMD="/opt/homebrew/bin/npm"
        fi
    fi
fi

if [ -z "$NODE_CMD" ]; then
    echo "❌ Node.js n'est pas trouvé sur votre système."
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📖 GUIDE D'INSTALLATION DISPONIBLE"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Consultez le fichier INSTALLATION.md pour les instructions détaillées."
    echo ""
    echo "Méthode la plus simple :"
    echo "  1. Allez sur https://nodejs.org/"
    echo "  2. Téléchargez la version LTS"
    echo "  3. Installez le fichier .pkg"
    echo "  4. Redémarrez votre terminal"
    echo "  5. Relancez ce script : ./start.sh"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 1
fi

echo "✅ Node.js trouvé: $($NODE_CMD --version)"
echo "✅ npm trouvé: $($NPM_CMD --version)"
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    $NPM_CMD install
    if [ $? -ne 0 ]; then
        echo "❌ Erreur lors de l'installation des dépendances"
        exit 1
    fi
    echo "✅ Dépendances installées"
    echo ""
fi

echo "🚀 Démarrage du serveur de développement..."
echo ""
$NPM_CMD run dev

