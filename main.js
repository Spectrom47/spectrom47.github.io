function toggleCategory(header) {
    const threads = header.nextElementSibling;
    if (threads.style.display === "none" || threads.style.display === "") {
        threads.style.display = "block";
    } else {
        threads.style.display = "none";
    }
}

// Optional: Start with all categories open
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.forum-threads').forEach(function(threads) {
        threads.style.display = "block";
    });
});