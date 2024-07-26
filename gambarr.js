// Membuat instance IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Memeriksa apakah elemen saat ini terlihat di viewport
        if (entry.isIntersecting) {
            // Menambahkan kelas 'show' jika elemen terlihat
            entry.target.classList.add('show');
        } else {
            // Menghapus kelas 'show' jika elemen tidak terlihat
            entry.target.classList.remove('show');
        }
    });
});

// Memilih semua elemen dengan kelas 'konten1' dan 'konten2'
document.querySelectorAll('.konten1, .konten2').forEach(section => {
    // Mengamati setiap elemen untuk perubahan visibilitas
    observer.observe(section);
});
