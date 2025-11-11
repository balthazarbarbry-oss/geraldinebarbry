#!/usr/bin/env python3
"""
Serveur HTTP qui sert les fichiers depuis public/ et index_static.html
"""

import http.server
import socketserver
import os
import webbrowser
import urllib.parse

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def log_message(self, format, *args):
        pass
    
    def translate_path(self, path):
        """Traduit le chemin URL en chemin de fichier"""
        path = urllib.parse.unquote(path)
        path = path.lstrip('/')
        
        # Si c'est la racine, servir index_static.html
        if not path:
            if os.path.exists('index_static.html'):
                return os.path.abspath('index_static.html')
            return os.path.abspath('index.html')
        
        # Chercher d'abord dans public/
        public_path = os.path.join('public', path)
        if os.path.exists(public_path) and os.path.isfile(public_path):
            return os.path.abspath(public_path)
        
        # Chercher dans le répertoire courant
        if os.path.exists(path) and os.path.isfile(path):
            return os.path.abspath(path)
        
        # Par défaut, retourner le chemin
        return os.path.abspath(path)

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = CustomHTTPRequestHandler
    
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
            print("📄 Version statique HTML (logo Parcel. intégré)")
            print("")
            print("Appuyez sur Ctrl+C pour arrêter le serveur")
            print("")
            print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
            print("")
            
            try:
                webbrowser.open(url)
            except:
                pass
            
            httpd.serve_forever()
            
    except OSError as e:
        if e.errno == 48:
            print(f"❌ Le port {PORT} est déjà utilisé.")
        else:
            print(f"❌ Erreur: {e}")

if __name__ == "__main__":
    main()

