// Search Button Toggle
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.hidden = !searchInput.hidden;
    if (!searchInput.hidden) searchInput.focus();
});

// Post Button Alert (Placeholder)
document.getElementById('postBtn').addEventListener('click', () => {
    alert('Post feature coming soon.');
});

document.querySelectorAll('.fa-heart').forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('far');
        heart.classList.toggle('fas');
    });
});