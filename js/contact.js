document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // ... (your existing logic to get name, text, and stars) ...
    const name = document.getElementById('reviewerName').value;
    const text = document.getElementById('reviewText').value;
    const stars = document.querySelector('input[name="stars"]:checked')?.value || 0;
    let starString = "★".repeat(stars) + "☆".repeat(5 - stars);

    // Create and Insert the Card
    const newComment = document.createElement('div');
    newComment.className = 'comment-card';
    newComment.style.animation = "fadeIn 0.5s ease forwards";
    newComment.innerHTML = `
        <div class="card-header"><strong>${name}</strong> <span class="stars-gold">${starString}</span></div>
        <p>"${text}"</p>
    `;
    const list = document.getElementById('commentsList');
    list.insertBefore(newComment, list.firstChild);

    // ── NEW AESTHETIC POPUP LOGIC ──
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    // Hide it after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);

    // Reset the form
    this.reset();
});
