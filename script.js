document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".scroll-container");
    const tabs = document.querySelectorAll(".tab");
    const pages = document.querySelectorAll(".page");
    const comparison = document.querySelector(".comparison");
    const slider = document.querySelector(".slider");
    const after = document.querySelector(".after");
    const images = document.querySelectorAll("img");
    let currentPage = 0;
    let isDragging = false;

    // Prevent image dragging
    images.forEach((img) => {
        img.addEventListener("dragstart", (e) => {
            e.preventDefault(); // 기본 드래그 동작 방지
        });
    });

    // Desktop: Mouse events
    slider.addEventListener("mousedown", () => {
        isDragging = true;
        document.body.style.cursor = "grabbing";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.cursor = "default";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
    });

    // Mobile: Touch events
    slider.addEventListener("touchstart", () => {
        isDragging = true;
    });

    document.addEventListener("touchend", () => {
        isDragging = false;
    });

    document.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        updateSliderPosition(touch.clientX);
    });

    // Update slider position and clip-path
    function updateSliderPosition(x) {
        const rect = comparison.getBoundingClientRect();
        let offsetX = x - rect.left;

        // Ensure the slider stays within bounds
        offsetX = Math.max(0, Math.min(offsetX, rect.width));

        // Update slider position
        slider.style.left = `${offsetX}px`;

        // Adjust the after image clip-path
        after.style.clipPath = `inset(0 ${100 - (offsetX / rect.width) * 100}% 0 0)`;
    }

    // Highlight active tab
    function updateTabs() {
        tabs.forEach((tab, index) => {
            tab.classList.toggle("active", index === currentPage);
        });
    }

    // Scroll to page (no animation)
    function scrollToPage(index) {
        const offset = index * window.innerHeight;
        scrollContainer.style.transition = "none"; // Remove animation
        scrollContainer.style.transform = `translateY(-${offset}px)`;
        updateTabs();
    }

    // Event: Tab click
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            currentPage = index;
            scrollToPage(currentPage);
        });
    });

    // Event: Mouse wheel
    document.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            currentPage = Math.min(currentPage + 1, pages.length - 1);
        } else if (e.deltaY < 0) {
            currentPage = Math.max(currentPage - 1, 0);
        }
        scrollToPage(currentPage);
    });

    // Initialize
    scrollToPage(0);
});
