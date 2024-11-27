// Select elements
const comparison = document.querySelector(".comparison");
const slider = document.querySelector(".slider");
const after = document.querySelector(".after");

let isDragging = false;

// Event: Start dragging
slider.addEventListener("mousedown", () => {
    isDragging = true;
    document.body.style.cursor = "ew-resize";
});

// Event: Stop dragging
document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.cursor = "default";
});

// Event: Drag slider
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    // Get the bounding rectangle of the comparison container
    const rect = comparison.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;

    // Ensure the slider stays within the bounds
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    // Update slider position
    slider.style.left = `${offsetX}px`;

    // Adjust the after image clip-path
    const percentage = (offsetX / rect.width) * 100;
    after.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
});

// Initialize slider position on page load
document.addEventListener("DOMContentLoaded", () => {
    const rect = comparison.getBoundingClientRect();
    const initialX = rect.width / 2; // Start at the center
    slider.style.left = `${initialX}px`;
    after.style.clipPath = `inset(0 50% 0 0)`; // Start at half-and-half
});
