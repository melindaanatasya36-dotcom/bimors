document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua elemen dengan class 'horse-card'
    const horseCards = document.querySelectorAll('.horse-card');

    // Tambahkan event listener untuk setiap kartu kuda
    horseCards.forEach(card => {
        card.addEventListener('click', function() {
            // Dapatkan ID kuda dari atribut data
            const horseId = this.getAttribute('data-horse-id');

            // Temukan elemen detail pemilik yang sesuai
            const ownerDetails = document.getElementById(`owner-${horseId}`);

            // Toggle (munculkan/sembunyikan) detail pemilik
            if (ownerDetails.style.display === 'block') {
                ownerDetails.style.display = 'none';
            } else {
                ownerDetails.style.display = 'block';
            }
        });
    });
});