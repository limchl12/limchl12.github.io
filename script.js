document.addEventListener("DOMContentLoaded", () => {
    // Comparison Slider Functionality
    const comparison = document.querySelector(".comparison");
    const slider = document.querySelector(".slider");
    const after = document.querySelector(".after");

    let isDragging = false;

    slider.addEventListener("mousedown", () => {
        isDragging = true;
        document.body.style.cursor = "ew-resize";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.cursor = "default";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const rect = comparison.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;

        // Ensure slider stays within bounds
        offsetX = Math.max(0, Math.min(offsetX, rect.width));

        // Adjust slider position and clip-path
        slider.style.left = `${offsetX}px`;
        after.style.clipPath = `inset(0 ${rect.width - offsetX}px 0 0)`;
    });

    // Full Page Scroll with Navigation Update
    let currentPage = 0;
    const pages = document.querySelectorAll(".page");
    const totalPages = pages.length;
    const tabs = document.querySelectorAll(".tab");

    // Highlight Active Tab
    function updateTabs() {
        tabs.forEach((tab, index) => {
            tab.classList.toggle("active", index === currentPage);
        });
    }

    // Scroll Event
    document.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            // Scroll Down
            currentPage = Math.min(currentPage + 1, totalPages - 1);
        } else if (e.deltaY < 0) {
            // Scroll Up
            currentPage = Math.max(currentPage - 1, 0);
        }

        scrollToPage(currentPage);
    });

    // Tab Click Event
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            currentPage = parseInt(tab.dataset.page, 10);
            scrollToPage(currentPage);
        });
    });

    // Scroll to Page Function
    function scrollToPage(pageIndex) {
        const offset = pageIndex * window.innerHeight;
        document.body.style.transform = `translateY(-${offset}px)`;
        updateTabs();
    }

    // Initialize Tabs
    updateTabs();
});