// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById("header");
    header.innerHTML = 
        `<button class="headerButton">
            Home
        </button>
        <button class="headerButton">
            Our Team
        </button>
        <div class="dropdown">
            <button class="headerButton">
                Our Work
            </button>
            <div class="dropdownContent">
                    <button class="headerButton"> 
                        What We Do
                    </button>
                    <button class="headerButton"> 
                        Ongoing Research
                    </button>
                    <button class="headerButton"> 
                        Publications
                    </button>
                    <button class="headerButton"> 
                        Confrences
                    </button>
            </div>
        </div>
        <button class="headerButton">
            Resources
        </button>`;

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