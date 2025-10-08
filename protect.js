// =======================
// 🔒 PROTEKSI ARINVITATION
// =======================

// Ganti sesuai domain GitHub Pages kamu
const allowedDomain = "arinvitation.my.id";

// Blokir akses jika dibuka offline atau bukan dari domain resmi
if (location.hostname !== allowedDomain) {
  document.documentElement.innerHTML = `
    <style>
      body {
        background: black;
        color: white;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        padding: 100px;
      }
    </style>
    <h1>Akses Ditolak</h1>
    <p>Halaman ini hanya bisa dibuka di website resmi ${allowedDomain}</p>
  `;
}

// Nonaktifkan klik kanan
document.addEventListener('contextmenu', e => e.preventDefault());

// Nonaktifkan seleksi teks
document.addEventListener('selectstart', e => e.preventDefault());

// Nonaktifkan drag gambar
document.addEventListener('dragstart', e => e.preventDefault());

// (Opsional) Peringatan kalau user coba buka DevTools
window.addEventListener('keydown', e => {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    alert("Fitur ini dinonaktifkan demi keamanan konten ARinvitation.");
    e.preventDefault();
  }
});
