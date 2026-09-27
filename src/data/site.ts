// Sparklin Shoe Care — all page content lives here. Edit prices, copy, links.
const whatsappNumber = '6280000000000';
export const whatsappBase = `https://wa.me/${whatsappNumber}?text=`;
export const whatsappGeneral = `${whatsappBase}${encodeURIComponent('Halo Sparklin, saya mau konsultasi dan booking cuci sepatu.')}`;

export const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Harga', href: '#harga' },
  { name: 'Testimoni', href: '#testimoni' },
];

export const services = [
  {
    tag: 'Perawatan rutin',
    name: 'Cuci Rutin',
    alias: 'Fast Clean',
    price: '25rb',
    desc: 'Pembersihan reguler bagian upper dan midsole supaya sepatu favoritmu tetap bersih dan fresh dipakai sehari-hari.',
    time: '1-2 hari',
    isHero: false,
  },
  {
    tag: 'Paling Populer',
    name: 'Deep Clean',
    alias: 'Full Treatment',
    price: '35rb',
    desc: 'Pembersihan menyeluruh seluruh bagian sepatu dari upper, midsole, outsole, insole, hingga tali terangkat nodanya.',
    time: '2-3 hari',
    isHero: true,
  },
  {
    tag: 'Layanan Tambahan',
    name: 'Unyellowing',
    alias: 'Sol Treatment',
    price: '+20rb',
    desc: 'Treatment khusus menghilangkan oksidasi pada midsole yang menguning agar kembali putih cerah seperti baru.',
    time: '+1 hari',
    isHero: false,
  },
  {
    tag: 'Layanan Tambahan',
    name: 'Express 24 Jam',
    alias: 'Fast Track',
    price: '+15rb',
    desc: 'Butuh cepat untuk acara besok? Layanan kilat prioritas diselesaikan dalam waktu kurang dari 24 jam.',
    time: '< 24 jam',
    isHero: false,
  },
];

export const pricingPackages = [
  {
    name: 'Fast Clean',
    price: '25.000',
    unit: '/ pasang',
    highlight: false,
    badge: null,
    desc: 'Cocok untuk sneakers harian yang berdebu ringan dan butuh perawatan cepat.',
    features: [
      'Pembersihan Upper & Midsole',
      'Pembersihan Tali Luar',
      'Deodorizer & Parfum Antibakteri',
      'Pengerjaan 1-2 Hari Kerja',
    ],
    waMessage: 'Halo Sparklin, saya mau pesan paket Fast Clean (25rb).',
  },
  {
    name: 'Deep Clean',
    price: '35.000',
    unit: '/ pasang',
    highlight: true,
    badge: 'Paling Direkomendasikan',
    desc: 'Perawatan total mendalam untuk semua jenis noda, kotoran membandel, dan bau tak sedap.',
    features: [
      'Pembersihan Menyeluruh (Upper, Sol, Insole)',
      'Deep Wash Tali Sepatu Lepas',
      'Treatment Bahan Khusus (Suede/Canvas/Mesh)',
      'Antibacterial Anti-fungal Mist',
      'Pengerjaan 2-3 Hari Kerja',
    ],
    waMessage: 'Halo Sparklin, saya mau pesan paket Deep Clean (35rb).',
  },
  {
    name: 'Leather & Suede Care',
    price: '45.000',
    unit: '/ pasang',
    highlight: false,
    badge: null,
    desc: 'Formula ekstra lembut khusus sepatu kulit asli, sintetis, nubuck, atau suede.',
    features: [
      'Cleaner Khusus pH Netral Bahan Sensitif',
      'Leather Conditioner & Moisturizer',
      'Suede Brush Nap Restoration',
      'Free Dust Bag Pelindung',
      'Pengerjaan 3 Hari Kerja',
    ],
    waMessage: 'Halo Sparklin, saya mau pesan paket Leather & Suede Care (45rb).',
  },
];

export const addOns = [
  {
    title: 'UNYELLOWING',
    desc: 'Kembalikan midsole yang menguning jadi putih cerah',
    price: '20rb',
  },
  {
    title: 'WATERPROOFING',
    desc: 'Lapisan nano repellent anti air dan cipratan lumpur',
    price: '15rb',
  },
  {
    title: 'EXPRESS SERVICE',
    desc: 'Penyelesaian kilat prioritas kurang dari 24 jam',
    price: '15rb',
  },
  {
    title: 'REPAINT & RETOUCH',
    desc: 'Cat ulang warna pudar pada midsole atau upper',
    price: '50rb',
  },
];

export const values = [
  {
    type: 'fast',
    title: 'Respon Cepat & Ramah',
    desc: 'Konsultasi gratis tanpa ribet via WhatsApp. Cukup kirim foto sepatumu, admin kami siap merekomendasikan solusi terbaik.',
  },
  {
    type: 'eco',
    title: 'Ramah Lingkungan',
    desc: '100% menggunakan sabun organik eco-friendly tanpa zat kimia keras yang berisiko merusak lem sol atau serat sepatu.',
  },
  {
    type: 'expert',
    title: 'Teknik Profesional',
    desc: 'Teknisi terlatih menangani berbagai jenis sepatu: sneakers, running shoes, suede, kulit, hingga sepatu formal premium.',
  },
  {
    type: 'price',
    title: 'Harga Mahasiswa',
    desc: 'Standar kualitas laundry sepatu premium dengan tarif yang sangat bersahabat bagi mahasiswa dan anak muda Bandung.',
  },
];

export const testimonials = [
  {
    name: 'Alya Putri',
    role: 'Mahasiswa Unpad',
    avatar: '/images/testi-1.png',
    stars: 5,
    quote: 'Sepatu putihku yang udah kusam banget karena sering dipakai ngampus balik kinclong kayak baru beli! Sol yang tadinya dekil sekarang bersih total. Puas banget!',
  },
  {
    name: 'Raka Pratama',
    role: 'Sneakerhead Bandung',
    avatar: '/images/testi-2.png',
    stars: 5,
    quote: 'Treatment Unyellowing-nya gila sih, midsole Air Jordan 4 gue yang udah bertahun-tahun menguning bisa balik cerah lagi tanpa ngerusak material. Sangat recommended!',
  },
  {
    name: 'Dimas Setiawan',
    role: 'Pekerja Kantoran',
    avatar: '/images/testi-3.png',
    stars: 5,
    quote: 'Paling suka sama Express Service-nya. Drop pagi sebelum berangkat kerja, besok siangnya udah selesai, wangi, dan dipacking rapi. Bakal langganan terus!',
  },
];
