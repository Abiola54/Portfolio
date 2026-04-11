document.querySelectorAll('.project-card-container img').forEach(img => {
    img.addEventListener('click', function() {
        document.getElementById('lightbox-img').src = this.src;
        document.getElementById('lightbox').classList.add('active');
    });
});

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}