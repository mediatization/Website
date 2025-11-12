// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        'Home': 'index.html',
        'Our Team': 'our-team.html',
        'Our Work': 'our-work.html',
        'Resources': 'resources.html'
    };

    // Get all header buttons
    const buttons = document.querySelectorAll('.headerButton');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const pageName = button.textContent.trim();
            if (pages[pageName]) {
                window.location.href = pages[pageName];
            }
        });
    });

    // Highlight current page button
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    buttons.forEach(button => {
        const pageName = button.textContent.trim();
        if (pages[pageName] === currentPage) {
            button.setAttribute('style', 'text-decoration: underline');
        }
    });
});