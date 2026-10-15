// Ganti dengan nomor WhatsApp penjual.
// Gunakan kode negara 62 tanpa tanda +.
const nomorWhatsApp = "6281234567890";

function pesan(namaProduk) {
    const pesan = `Halo, saya ingin memesan ${namaProduk}. Mohon informasi harga dan ketersediaannya.`;

    const link = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(link, "_blank");
}

// Menu navigasi untuk HP
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

// Menutup menu setelah dipilih
document.querySelectorAll("#navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("show");
    });
});

// Tahun otomatis
document.getElementById("tahun").textContent =
    new Date().getFullYear();