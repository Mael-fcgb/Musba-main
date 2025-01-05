// Sélectionner le bouton et vérifier l'état actuel du mode sombre
const darkModeToggle = document.getElementById('darkModeToggle');

// Fonction pour basculer entre les modes
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    // Sauvegarder le mode dans le stockage local
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Vérifier si le mode sombre est activé lors du chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
    }
});

// Ajouter un écouteur d'événement pour le bouton
darkModeToggle.addEventListener('click', toggleDarkMode);
