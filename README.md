# Website Sate Mas Bagus

## Identitas proyek
- **Nama website:** Sate Mas Bagus
- **Jenis usaha:** UMKM kuliner / warung sate (konsep simulasi untuk tugas)
- **Tema visual:** street-food editorial; charcoal gelap, oranye bakaran, mustard, dan krem hangat
- **Menu utama:** sate sapi, sate ayam, sate kuda, dan sate kelinci
- **Teknologi:** HTML5, CSS3, dan JavaScript murni
- **Database/backend:** tidak digunakan (website statis sesuai arahan proyek)
- **Formulir kontak:** tidak disertakan sesuai arahan proyek

## Halaman website
1. `index.html` — Beranda, hero, pengenalan singkat, dan menu unggulan.
2. `tentang.html` — Profil konsep usaha, nilai, tim pengelola, dan tabel jam operasional.
3. `katalog.html` — Enam kartu menu dan filter berdasarkan jenis sate.
4. `kontak.html` — Informasi kontak contoh dan peta area Pangkalpinang; tanpa formulir.

## Struktur folder
```text
sate-mas-bagus/
├── index.html
├── tentang.html
├── katalog.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── hero-sate.svg
│   ├── sate-sapi.svg
│   ├── sate-sapi-pedas.svg
│   ├── sate-ayam.svg
│   ├── sate-ayam-taichan.svg
│   ├── sate-kuda.svg
│   └── sate-kelinci.svg
└── README.md
```

## Fitur
- Navigasi yang sama pada seluruh halaman.
- Menu hamburger untuk layar kecil.
- Filter katalog untuk kategori sapi, ayam, kuda, dan kelinci.
- Tata letak responsif untuk ponsel, tablet, dan desktop.
- Tabel jam operasional.
- Peta area Pangkalpinang pada halaman Kontak.
- Ilustrasi menu SVG dibuat khusus untuk proyek dan disimpan lokal.

## Cara menjalankan
1. Ekstrak folder `sate-mas-bagus`.
2. Buka `index.html` menggunakan browser, atau jalankan folder melalui ekstensi Live Server di VS Code.
3. Gunakan menu navigasi untuk berpindah halaman.
4. Buka halaman Menu dan coba tombol filter kategori.

Website ini tidak membutuhkan XAMPP, PHP, MySQL, database, maupun instalasi package tambahan. Peta pada halaman Kontak memerlukan koneksi internet.

## Catatan konten dan data
- Nama usaha, susunan tim, alamat area, akun media sosial, email, jam operasional, daftar harga, serta deskripsi adalah **data contoh/simulasi** untuk kebutuhan proyek. Ganti dengan data sebenarnya sebelum website dipakai untuk usaha nyata.
- Email `halo@satemasbagus.example` menggunakan domain `.example` sebagai placeholder dan tidak dapat menerima email.
- Peta hanya menunjukkan area Kota Pangkalpinang, bukan titik lokasi outlet tertentu.
- Menu sate kuda dan sate kelinci mengikuti tema yang dipilih untuk proyek; keberadaan menu pada website tidak menyatakan bahwa produk tersebut tersedia di usaha nyata.

## Identitas mahasiswa
- Nama: Muhamad Ridho Albukhori
- NIM: 2559201032
- Program Studi: Sistem Teknologi Informasi
- Kampus: Universitas Pertiba

## Catatan kesesuaian dengan rubrik UTS
Struktur empat halaman, elemen HTML semantik, gambar dengan teks alternatif, tabel, Flexbox, CSS Grid, variabel CSS, efek hover/transition/animasi, media query, dan JavaScript ringan telah disiapkan. **Formulir kontak sengaja dihilangkan sesuai arahan**, sehingga butir formulir kontak pada rubrik UTS tidak terpenuhi. Validasi W3C dan screenshot bukti harus dilakukan sendiri setelah file dibuka/diperiksa; README ini tidak mengklaim validasi eksternal telah dilakukan.
