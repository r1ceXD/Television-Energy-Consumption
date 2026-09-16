const pages = {
    home: "index.html",
    televisions: "televisions.html",
    about: "about_us.html"
};

// Function to direct to different pages based on the parameter
function switch_page(page) {
    const destination = pages[page];

    if (!destination) {
        console.error(`Unknown page: ${page}`);
        return;
    }

    window.location.href = destination;
}

// Waits for HTML to be fully parsed and allows each value to be given based on the element
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-page]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            switch_page(link.dataset.page);
        });
    });
});