// Get all elements with the class .navigation
const navigationElements = document.querySelectorAll('.navigation');

// Listen for clicks on each navigation element
navigationElements.forEach(element => {
    element.addEventListener('click', event => {
        // Get the target and data-link attributes of the clicked element
        const target = event.currentTarget.getAttribute('target');
        const dataLink = event.currentTarget.getAttribute('data-link');
        
        // Check the target attribute
        if (target === 'blank') {
            // Open a new page with the data-link value as the URL
            window.open(dataLink);
        } else if (target === 'self') {
            // Find the element with an ID matching the data-link value
            const dataLinkElement = document.getElementById(dataLink);
            // Scroll to the data-link element
            dataLinkElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function searchIn() {
    document.getElementById("myTab").classList.toggle("d-none");
    document.getElementById("block_search").classList.toggle("d-none");
}