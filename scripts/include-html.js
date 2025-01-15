document.addEventListener('DOMContentLoaded', function() {
    function includeHTML() {
        const elements = document.getElementsByTagName("*");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const file = element.getAttribute("include-html");
            if (file) {
                fetch(file)
                    .then(response => response.text())
                    .then(html => {
                        element.innerHTML = html;
                        element.removeAttribute("include-html");
                        includeHTML(); // Recursively check for more includes
                        
                        // Initialize navbar functionality after content is loaded
                        initializeNavbar();
                    })
                    .catch(error => console.error('Error loading include:', error));
            }
        }
    }
    includeHTML();
});