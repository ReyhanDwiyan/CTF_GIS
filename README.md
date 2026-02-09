# 🗺️ GIS CTF Challenge

Website Capture The Flag (CTF) berbasis peta geografis menggunakan HTML, CSS, JavaScript, dan Leaflet.js.

## 📋 Deskripsi

Ini adalah game CTF interaktif yang menampilkan peta Indonesia dengan berbagai lokasi challenge. Pemain harus menemukan dan memecahkan teka-teki untuk mendapatkan flag di setiap lokasi.

## 🎮 Cara Main

1. Buka file `index.html` di browser web Anda
2. Peta akan menampilkan beberapa marker dengan warna berbeda di berbagai lokasi di Indonesia
3. Klik pada marker untuk melihat informasi challenge
4. Klik tombol "Mulai Challenge" untuk memulai
5. Baca deskripsi challenge dan petunjuk yang diberikan
6. Masukkan flag dalam format yang benar (biasanya `CTF{...}`)
7. Submit untuk mendapatkan poin
8. Cari semua flag untuk menyelesaikan game!

## 🏆 Challenge Locations

Website ini memiliki 5 lokasi challenge:

1. **Monas Challenge** (Jakarta) - 100 poin
   - Base64 decoding challenge
   
2. **Borobudur Mystery** (Jawa Tengah) - 150 poin
   - Knowledge-based challenge
   
3. **Bromo Sunrise** (Jawa Timur) - 200 poin
   - XOR cipher challenge
   
4. **Bali Beach Secret** (Bali) - 120 poin
   - ROT13 cipher challenge
   
5. **Raja Ampat Paradise** (Papua Barat) - 250 poin
   - String reversal challenge

## 🎯 Jawaban (Untuk Testing)

Berikut adalah flag untuk setiap challenge:

1. Monas: `CTF{M0n4s_J4k4rt4}`
2. Borobudur: `CTF{B0r0budur_T3mpl3}`
3. Bromo: `CTF{Br0m0_V0lc4n0}`
4. Bali: `CTF{B4l1_Isl4nd}`
5. Raja Ampat: `CTF{R4j4_4mp4t_P4r4d1s3}`

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur website
- **CSS3** - Styling dan animasi
- **JavaScript (ES6)** - Game logic dan interaktivitas
- **Leaflet.js** - Library untuk peta interaktif
- **OpenStreetMap** - Tile layer untuk peta

## 📁 Struktur File

```
CTF_GIS/
│
├── index.html          # File HTML utama
├── style.css           # File CSS untuk styling
├── script.js           # File JavaScript untuk logic game
└── README.md          # Dokumentasi project
```

## 🚀 Cara Menjalankan

### Metode 1: Langsung di Browser
1. Download atau clone repository ini
2. Buka file `index.html` dengan browser (Chrome, Firefox, Edge, dll.)
3. Game akan langsung berjalan!

### Metode 2: Menggunakan Local Server
1. Jika Anda memiliki Python terinstall:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
2. Buka browser dan akses `http://localhost:8000`

### Metode 3: Menggunakan VS Code Live Server
1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

## ✨ Fitur

- ✅ Peta interaktif dengan Leaflet.js
- ✅ 5 lokasi challenge yang berbeda
- ✅ System scoring dan timer
- ✅ Modal popup untuk challenge
- ✅ Animasi dan transisi yang smooth
- ✅ Responsive design (mobile-friendly)
- ✅ Victory screen saat semua flag ditemukan
- ✅ Reset game functionality
- ✅ Leaderboard (placeholder)

## 🎨 Kustomisasi

### Menambah Challenge Baru

Edit file `script.js` dan tambahkan object baru di array `challenges`:

```javascript
{
    id: 6,
    name: "Nama Challenge",
    location: [-6.2088, 106.8456], // [latitude, longitude]
    flag: "CTF{fl4g_anda}",
    points: 100,
    hint: "Petunjuk untuk pemain",
    description: "Deskripsi challenge dan teka-teki",
    markerColor: "red" // red, blue, green, orange, purple, dll
}
```

Jangan lupa update `totalFlags` di `gameState`.

### Mengubah Warna Tema

Edit file `style.css` dan ubah gradient colors:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📱 Responsive Design

Website ini sudah responsive dan bisa diakses di:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile Phone

## 🐛 Troubleshooting

**Peta tidak muncul?**
- Pastikan Anda terhubung ke internet (Leaflet membutuhkan CDN)
- Cek console browser untuk error

**Marker tidak muncul?**
- Pastikan koordinat yang digunakan valid
- Cek apakah icon URL bisa diakses

**Challenge modal tidak muncul?**
- Cek console browser untuk JavaScript errors
- Pastikan semua file (HTML, CSS, JS) berada di folder yang sama

## 📝 Lisensi

Project ini dibuat untuk keperluan edukasi dan pembelajaran.

## 👨‍💻 Author

Dibuat untuk project Sistem Informasi Geografis

## 🙏 Credits

- Leaflet.js - Open-source JavaScript library untuk peta interaktif
- OpenStreetMap - Data peta
- Leaflet Color Markers - Custom marker icons

---

**Selamat bermain dan semoga berhasil menemukan semua flag! 🚩**
