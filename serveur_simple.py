#!/usr/bin/env python3
"""
Serveur HTTP simple pour servir le site sans Node.js
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path
import urllib.parse

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Ajouter les en-têtes CORS et autres
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def log_message(self, format, *args):
        # Réduire les logs
        pass
    
    def translate_path(self, path):
        # Servir les fichiers depuis public/ si le fichier existe là-bas
        path = urllib.parse.unquote(path)
        path = path.lstrip('/')
        
        # Si c'est la racine, servir index_static.html ou index.html
        if not path or path == '/':
            if os.path.exists('index_static.html'):
                return 'index_static.html'
            return 'index.html'
        
        # D'abord, chercher dans public/
        public_path = os.path.join('public', path)
        if os.path.exists(public_path) and os.path.isfile(public_path):
            return os.path.abspath(public_path)
        
        # Ensuite, chercher dans le répertoire courant
        if os.path.exists(path) and os.path.isfile(path):
            return os.path.abspath(path)
        
        # Si rien trouvé, retourner le chemin original
        return os.path.abspath(path)

def main():
    # Changer vers le répertoire du script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Vérifier si index.html ou index_static.html existe
    if not os.path.exists('index.html') and not os.path.exists('index_static.html'):
        print("❌ Erreur: index.html non trouvé dans le répertoire actuel")
        return
    
    # Utiliser index_static.html si disponible (version sans React)
    if os.path.exists('index_static.html'):
        print("📄 Utilisation de index_static.html (version statique)")
    
    Handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            url = f"http://localhost:{PORT}"
            print("")
            print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
            print("🌐 Serveur HTTP démarré")
            print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
            print("")
            print(f"📍 Le site est accessible à : {url}")
            print("")
            print("⚠️  Note: Ce serveur sert les fichiers statiques.")
            print("   Pour une version complète avec React, Node.js est nécessaire.")
            print("")
            print("Appuyez sur Ctrl+C pour arrêter le serveur")
            print("")
            print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
            print("")
            
            # Ouvrir le navigateur automatiquement
            try:
                webbrowser.open(url)
            except:
                pass
            
            httpd.serve_forever()
            
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Le port {PORT} est déjà utilisé.")
            print(f"   Essayez de fermer l'application qui utilise le port {PORT}")
        else:
            print(f"❌ Erreur: {e}")

if __name__ == "__main__":
    main()

