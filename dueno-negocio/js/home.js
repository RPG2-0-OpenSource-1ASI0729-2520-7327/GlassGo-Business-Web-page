/**
 * Home Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded successfully');
    initLanguageSelector();
});

function initLanguageSelector() {
    const languageSelector = document.querySelector('.sidebar-language');

    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            const currentLang = this.querySelector('.language-text').textContent;
            const newLang = currentLang === 'Español' ? 'English' : 'Español';
            this.querySelector('.language-text').textContent = newLang;

            // Aquí puedes agregar lógica para cambiar el idioma de toda la página
            console.log('Language changed to:', newLang);
        });
    }
}

