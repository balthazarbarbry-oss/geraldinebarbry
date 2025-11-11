import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Charger le contenu HTML depuis le fichier public
    fetch('/body.html')
      .then(res => res.text())
      .then(html => {
        const root = document.getElementById('root')
        if (root) {
          root.innerHTML = html
        }
      })
      .catch(() => {
        // Fallback: afficher un message si le fichier n'est pas trouvé
        const root = document.getElementById('root')
        if (root) {
          root.innerHTML = '<p>Chargement du site...</p>'
        }
      })
  }, [])

  return <div id="root"></div>
}

export default App
