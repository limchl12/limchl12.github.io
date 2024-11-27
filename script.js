document.addEventListener("DOMContentLoaded", () => {
    const comparison = document.querySelector(".comparison");
    const slider = document.querySelector(".slider");
    const after = document.querySelector(".after");
    const tabs = document.querySelectorAll(".tab");
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;
    let isDragging = false;

    // Slider Functionality
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

        // Ensure the slider stays within bounds
        offsetX = Math.max(0, Math.min(offsetX, rect.width));

        // Update slider position
        slider.style.left = `${offsetX}px`;

        // Adjust the after image clip-path
        after.style.clipPath = `inset(0 ${100 - (offsetX / rect.width) * 100}% 0 0)`;
    });

    // Navigation Tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            currentPage = index;
            scrollToPage(index);
        });
    });

    document.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            currentPage = Math.min(currentPage + 1, pages.length - 1);
        } else {
            currentPage = Math.max(currentPage - 1, 0);
        }
        scrollToPage(currentPage);
    });

    function scrollToPage(index) {
        const offset = index * window.innerHeight;
        document.body.style.transform = `translateY(-${offset}px)`;

        tabs.forEach((tab, i) => {
            tab.classList.toggle("active", i === index);
        });
    }

    // Initialize
    scrollToPage(0);
});
