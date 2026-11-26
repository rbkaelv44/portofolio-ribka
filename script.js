/* =========================================================
   script.js — ELVARIA RIBKA Portfolio Logic & Interactivity
========================================================= */

/* ---------------------------------------------------------
   1. STATE & BILINGUAL DICTIONARY (ID / EN)
---------------------------------------------------------- */
let currentLang = 'id';
let activeCertFilter = 'all';

const i18nData = {
  id: {
    nav_about: 'Tentang Saya',
    nav_projects: 'Projek',
    nav_skills: 'Skill',
    nav_certs: 'Sertifikat',
    nav_contact: 'Kontak',
    hero_status: 'AKTIF • SMKN 1 BLITAR',
    hero_welcome: 'Selamat Datang',
    hero_role: 'Siswa TJKT SMKN 1 Blitar & Anggota Aktif Paskibra',
    hero_sub: 'Memadukan ketelitian rekayasa jaringan komputer dan basis data dengan ketangguhan, kedisiplinan, serta mentalitas juara di arena perlombaan Paskibra.',
    hero_cta_proj: 'Lihat Projek Saya',
    hero_cta_cert: 'Galeri Sertifikat',
    about_tag: '01 // PROFIL DIRI',
    about_title: 'Tentang Saya',
    about_desc: 'Halo! Saya Elvaria Ribka, siswa aktif di SMKN 1 Blitar jurusan TJKT (Teknik Jaringan Komputer dan Telekomunikasi) sekaligus anggota aktif Paskibra yang telah banyak mengikuti berbagai ajang perlombaan. Perpaduan dunia teknologi jaringan dengan latihan baris-berbaris yang ketat membentuk saya menjadi pribadi yang disiplin, sigap memecahkan masalah, teliti dalam bekerja, serta solid dalam kolaborasi tim.',
    pillar_1_title: 'Jurusan TJKT',
    pillar_1_desc: 'SMKN 1 Blitar — Jaringan komputer, server, & sistem basis data.',
    pillar_2_title: 'Aktif Paskibra',
    pillar_2_desc: 'Berpengalaman mengikuti berbagai perlombaan tingkat kompetitif.',
    pillar_3_title: 'Disiplin & Tangguh',
    pillar_3_desc: 'Fokus pada ketepatan eksekusi, tanggung jawab, dan kerja sama tim.',
    proj_tag: '02 // KARYA TEKNOLOGI',
    proj_title: 'Projek Saya',
    proj_hint: 'Arahkan kursor untuk efek 3D atau klik gambar untuk pratinjau penuh',
    btn_preview: 'Preview Gambar',
    btn_preview_short: 'Pratinjau',
    proj_1_title: 'Aplikasi Kasir',
    proj_1_desc: 'Aplikasi sistem kasir digital untuk mengelola transaksi penjualan secara cepat, menghitung total pembayaran & kembalian otomatis, memantau stok produk, serta mencetak rincian struk transaksi.',
    proj_1_chip1: 'Transaksi Cepat',
    proj_1_chip2: 'Manajemen Stok',
    proj_2_title: 'Sistem Database',
    proj_2_desc: 'Perancangan arsitektur basis data relasional (ERD), normalisasi struktur tabel, relasi antar entitas, serta eksekusi query SQL untuk memastikan integritas, kecepatan akses, dan keamanan penyimpanan data.',
    proj_2_chip1: 'SQL & ERD',
    proj_2_chip2: 'Integritas Data',
    skills_tag: '03 // KOMPETENSI INTI',
    skills_title: 'Skill Saya',
    skill_cat_tech: 'Keahlian Teknis (TJKT)',
    skill_cat_tech_sub: 'Infrastruktur Jaringan, Sistem & Basis Data',
    sk_t1: 'Administrasi Jaringan',
    sk_t2: 'Konfigurasi Router & Switch',
    sk_t3: 'Manajemen Database',
    sk_t4: 'Pengembangan Sistem Kasir',
    sk_t5: 'Troubleshooting Hardware & Software',
    sk_t6: 'Linux & Server Dasar',
    skill_cat_paski: 'Kepemimpinan & Paskibra',
    skill_cat_paski_sub: 'Karakter Kompetisi, Disiplin & Kerja Tim',
    sk_p1: 'Kedisiplinan Tinggi',
    sk_p2: 'Kerja Sama Tim (Teamwork)',
    sk_p3: 'Ketahanan Mental',
    sk_p4: 'Kepemimpinan & Baris-Berbaris',
    sk_p5: 'Manajemen Waktu Lomba',
    certs_tag: '04 // PRESTASI & PENGHARGAAN',
    certs_title: 'Sertifikat',
    tab_all: 'Semua (12)',
    tab_main: 'Sertifikat Utama (1)',
    tab_paski: 'Lomba Paskibra (11)',
    cert_main_badge: 'UTAMA',
    cert_main_title: 'Sertifikat Utama',
    cert_main_sub: 'Sertifikat Penghargaan & Kompetensi — Elvaria Ribka',
    cert_paski_badge: 'PASKIBRA',
    cert_paski_title_prefix: 'Sertifikat Lomba Paskibra #',
    cert_paski_sub: 'Piagam Penghargaan Perlombaan Paskibra',
    contact_tag: '05 // HUBUNGI SAYA',
    contact_title: 'Kontak Pribadi',
    contact_desc: 'Terbuka untuk silaturahmi, diskusi teknologi jaringan, maupun kolaborasi kegiatan. Hubungi saya melalui Instagram pribadi atau Email di bawah ini.',
    contact_ig_label: 'Instagram Pribadi',
    contact_email_label: 'Email Pribadi',
    footer_rights: 'Hak Cipta Dilindungi.',
    lb_nav_hint: 'Geser Sertifikat',
    lb_esc_hint: 'Tutup',
    toast_ig_copied: 'Username Instagram berhasil disalin!',
    toast_email_copied: 'Alamat email berhasil disalin!'
  },
  en: {
    nav_about: 'About Me',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_certs: 'Certificates',
    nav_contact: 'Contact',
    hero_status: 'ACTIVE • SMKN 1 BLITAR',
    hero_welcome: 'Welcome',
    hero_role: 'TJKT Student at SMKN 1 Blitar & Active Paskibra Member',
    hero_sub: 'Combining precision in computer network engineering and databases with resilience, discipline, and a winning mentality in Paskibra competitions.',
    hero_cta_proj: 'View My Projects',
    hero_cta_cert: 'Certificate Gallery',
    about_tag: '01 // PERSONAL PROFILE',
    about_title: 'About Me',
    about_desc: 'Hello! I am Elvaria Ribka, an active student at SMKN 1 Blitar majoring in TJKT (Computer Network and Telecommunications Engineering) as well as an active Paskibra member who has participated in numerous competitions. Blending network technology with rigorous marching drills has shaped me into a disciplined, quick problem-solver, detail-oriented individual, and solid team player.',
    pillar_1_title: 'TJKT Major',
    pillar_1_desc: 'SMKN 1 Blitar — Computer networks, servers, & database systems.',
    pillar_2_title: 'Active Paskibra',
    pillar_2_desc: 'Experienced in competing across various competitive tournaments.',
    pillar_3_title: 'Disciplined & Resilient',
    pillar_3_desc: 'Focused on execution accuracy, responsibility, and teamwork.',
    proj_tag: '02 // TECH WORKS',
    proj_title: 'My Projects',
    proj_hint: 'Hover for 3D effect or click image for full preview',
    btn_preview: 'Preview Image',
    btn_preview_short: 'Preview',
    proj_1_title: 'Cashier Application',
    proj_1_desc: 'Digital point-of-sale cashier application to process sales transactions quickly, calculate total payments & change automatically, monitor product stock, and print transaction receipts.',
    proj_1_chip1: 'Fast Transactions',
    proj_1_chip2: 'Stock Management',
    proj_2_title: 'Database System',
    proj_2_desc: 'Relational database architecture design (ERD), table structure normalization, entity relationships, and SQL query execution to ensure data integrity, fast access, and secure storage.',
    proj_2_chip1: 'SQL & ERD',
    proj_2_chip2: 'Data Integrity',
    skills_tag: '03 // CORE COMPETENCIES',
    skills_title: 'My Skills',
    skill_cat_tech: 'Technical Skills (TJKT)',
    skill_cat_tech_sub: 'Network Infrastructure, Systems & Databases',
    sk_t1: 'Network Administration',
    sk_t2: 'Router & Switch Configuration',
    sk_t3: 'Database Management',
    sk_t4: 'Cashier System Development',
    sk_t5: 'Hardware & Software Troubleshooting',
    sk_t6: 'Linux & Basic Server',
    skill_cat_paski: 'Leadership & Paskibra',
    skill_cat_paski_sub: 'Competitive Character, Discipline & Teamwork',
    sk_p1: 'High Discipline',
    sk_p2: 'Teamwork & Collaboration',
    sk_p3: 'Mental Resilience',
    sk_p4: 'Leadership & Marching Drills',
    sk_p5: 'Competition Time Management',
    certs_tag: '04 // ACHIEVEMENTS & AWARDS',
    certs_title: 'Certificates',
    tab_all: 'All (12)',
    tab_main: 'Main Certificate (1)',
    tab_paski: 'Paskibra Competitions (11)',
    cert_main_badge: 'MAIN',
    cert_main_title: 'Main Certificate',
    cert_main_sub: 'Achievement & Competency Certificate — Elvaria Ribka',
    cert_paski_badge: 'PASKIBRA',
    cert_paski_title_prefix: 'Paskibra Competition Certificate #',
    cert_paski_sub: 'Paskibra Competition Award Certificate',
    contact_tag: '05 // GET IN TOUCH',
    contact_title: 'Personal Contact',
    contact_desc: 'Open for networking, network technology discussions, or activity collaborations. Reach out to me via my personal Instagram or Email below.',
    contact_ig_label: 'Personal Instagram',
    contact_email_label: 'Personal Email',
    footer_rights: 'All Rights Reserved.',
    lb_nav_hint: 'Navigate Certificates',
    lb_esc_hint: 'Close',
    toast_ig_copied: 'Instagram username copied to clipboard!',
    toast_email_copied: 'Email address copied to clipboard!'
  }
};

function getT(key) {
  return (i18nData[currentLang] && i18nData[currentLang][key]) || i18nData.id[key] || key;
}

/* ---------------------------------------------------------
   2. AUTOMATIC SLEEK DARK-SILVER SVG FALLBACK FOR MISSING LOCAL IMAGES
---------------------------------------------------------- */
function handleImageFallback(imgEl, filename, dimensions = '600x420') {
  if (imgEl.dataset.fallbackApplied === 'true') return;
  imgEl.dataset.fallbackApplied = 'true';

  const [w, h] = dimensions.split('x').map(Number);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1A1A22"/>
          <stop offset="50%" stop-color="#121216"/>
          <stop offset="100%" stop-color="#050505"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGrad)"/>
      <rect x="16" y="16" width="${w - 32}" height="${h - 32}" rx="18" fill="none" stroke="#A1A1AA" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.45"/>
      <circle cx="${w / 2}" cy="${h / 2 - 22}" r="28" fill="#FFFFFF" fill-opacity="0.08"/>
      <text x="50%" y="${h / 2 - 15}" font-family="sans-serif" font-size="16" font-weight="800" fill="#D4D4D8" text-anchor="middle">FILE</text>
      <text x="50%" y="${h / 2 + 24}" font-family="monospace, sans-serif" font-size="18" font-weight="700" fill="#F4F4F5" text-anchor="middle">${filename}</text>
    </svg>
  `.trim();

  imgEl.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

/* ---------------------------------------------------------
   3. CERTIFICATES DATA (1 MAIN + 11 PASKIBRA) & GALLERY RENDERER
---------------------------------------------------------- */
function getCertificatesList() {
  const list = [
    {
      id: 'main-1',
      category: 'main',
      file: 'sertif.jpeg',
      badge: getT('cert_main_badge'),
      title: getT('cert_main_title'),
      subtitle: getT('cert_main_sub')
    }
  ];

  for (let i = 1; i <= 11; i++) {
    list.push({
      id: `paski-${i}`,
      category: 'paskibra',
      file: `pas${i}.jpg`,
      badge: getT('cert_paski_badge'),
      title: `${getT('cert_paski_title_prefix')}${i}`,
      subtitle: getT('cert_paski_sub')
    });
  }

  return list;
}

function getFilteredCertificates() {
  const all = getCertificatesList();
  if (activeCertFilter === 'all') return all;
  return all.filter(item => item.category === activeCertFilter);
}

function renderCertificatesGallery() {
  const grid = document.getElementById('certificates-grid');
  if (!grid) return;

  const items = getFilteredCertificates();
  let html = '';

  items.forEach((cert, index) => {
    const isMain = cert.category === 'main';
    const badgeStyle = isMain
      ? 'bg-white text-obsidian'
      : 'bg-graphite/95 text-zinc-200 border border-white/15';

    html += `
      <div
        onclick="openCertLightbox(${index})"
        class="glass-panel tilt-card rounded-2xl p-3.5 cursor-pointer group flex flex-col justify-between"
      >
        <div>
          <div class="relative aspect-[4/3] rounded-xl overflow-hidden bg-graphite border border-white/10">
            <img
              src="${cert.file}"
              alt="${cert.title}"
              loading="lazy"
              onerror="handleImageFallback(this, '${cert.file}', '600x450')"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${badgeStyle}">
              ${cert.badge}
            </span>
            <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-obsidian/85 backdrop-blur border border-white/10 text-[10px] font-mono text-zinc-200">
              ${cert.file}
            </span>
          </div>

          <div class="pt-3.5 px-1">
            <h3 class="font-display font-bold text-platinum text-sm sm:text-base line-clamp-1 group-hover:text-white transition-colors">
              ${cert.title}
            </h3>
            <p class="text-xs text-zinc-400 line-clamp-1 mt-0.5">
              ${cert.subtitle}
            </p>
          </div>
        </div>

        <div class="pt-3 px-1 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-silver">
          <span data-i18n="btn_preview_short">${getT('btn_preview_short')}</span>
          <span class="w-7 h-7 rounded-full bg-graphite group-hover:bg-white group-hover:text-obsidian flex items-center justify-center transition-colors">
            <i class="fa-solid fa-magnifying-glass-plus text-[11px]"></i>
          </span>
        </div>
      </div>
    `;
  });

  grid.innerHTML = html;
}

function filterCertificates(category) {
  activeCertFilter = category;

  document.querySelectorAll('.cert-filter-btn').forEach(btn => {
    if (btn.dataset.filter === category) {
      btn.className = "cert-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-white to-zinc-300 text-obsidian shadow-sm";
    } else {
      btn.className = "cert-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-zinc-300 hover:bg-white/10 hover:text-white";
    }
  });

  renderCertificatesGallery();
}

/* ---------------------------------------------------------
   4. INTERACTIVE LIGHTBOX MODAL (NEXT / PREV + KEYBOARD + SWIPE)
---------------------------------------------------------- */
let lightboxMode = 'standalone';
let lightboxCertIndex = 0;
let touchStartX = 0;

function openStandaloneLightbox(file, title, subtitle) {
  lightboxMode = 'standalone';

  const prevBtn = document.getElementById('lb-prev-btn');
  const nextBtn = document.getElementById('lb-next-btn');
  const counter = document.getElementById('lb-counter');
  const kbdHint = document.getElementById('lb-kbd-hint');

  prevBtn.classList.add('hidden');
  nextBtn.classList.add('hidden');
  counter.classList.add('hidden');
  kbdHint.classList.add('hidden');

  setLightboxContent(file, title, subtitle);
  showLightboxModal();
}

function openCertLightbox(index) {
  lightboxMode = 'certificates';
  lightboxCertIndex = index;

  const items = getFilteredCertificates();
  const prevBtn = document.getElementById('lb-prev-btn');
  const nextBtn = document.getElementById('lb-next-btn');
  const counter = document.getElementById('lb-counter');
  const kbdHint = document.getElementById('lb-kbd-hint');

  if (items.length > 1) {
    prevBtn.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    kbdHint.classList.remove('hidden');
  } else {
    prevBtn.classList.add('hidden');
    nextBtn.classList.add('hidden');
  }

  counter.classList.remove('hidden');
  updateCertLightboxView();
  showLightboxModal();
}

function updateCertLightboxView() {
  const items = getFilteredCertificates();
  if (!items.length) return;

  if (lightboxCertIndex < 0) lightboxCertIndex = items.length - 1;
  if (lightboxCertIndex >= items.length) lightboxCertIndex = 0;

  const current = items[lightboxCertIndex];
  document.getElementById('lb-counter').textContent = `${lightboxCertIndex + 1} / ${items.length}`;
  setLightboxContent(current.file, current.title, current.subtitle);
}

function navigateLightbox(step) {
  if (lightboxMode !== 'certificates') return;
  lightboxCertIndex += step;
  updateCertLightboxView();
}

function setLightboxContent(file, title, subtitle) {
  const img = document.getElementById('lb-image');
  delete img.dataset.fallbackApplied;
  img.onerror = function () {
    handleImageFallback(this, file, '900x650');
  };

  img.src = file;
  document.getElementById('lb-title').textContent = title;
  document.getElementById('lb-subtitle').textContent = subtitle;
  document.getElementById('lb-filename').textContent = file;
}

function showLightboxModal() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function handleLightboxBackdrop(e) {
  if (e.target.id === 'lightbox-modal') closeLightbox();
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightbox-modal');
  if (modal.classList.contains('hidden')) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowRight' && lightboxMode === 'certificates') {
    navigateLightbox(1);
  } else if (e.key === 'ArrowLeft' && lightboxMode === 'certificates') {
    navigateLightbox(-1);
  }
});

const lbImageEl = document.getElementById('lb-image');
lbImageEl.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lbImageEl.addEventListener('touchend', (e) => {
  if (lightboxMode !== 'certificates') return;
  const diffX = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diffX) > 45) {
    navigateLightbox(diffX < 0 ? 1 : -1);
  }
}, { passive: true });

/* ---------------------------------------------------------
   5. BILINGUAL REAL-TIME SWITCHER (ID <-> EN)
---------------------------------------------------------- */
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');

  if (lang === 'id') {
    btnId.className = "px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200 bg-gradient-to-r from-white to-zinc-300 text-obsidian shadow-sm";
    btnEn.className = "px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200 text-zinc-400 hover:text-white";
  } else {
    btnEn.className = "px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200 bg-gradient-to-r from-white to-zinc-300 text-obsidian shadow-sm";
    btnId.className = "px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200 text-zinc-400 hover:text-white";
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang][key]) {
      el.textContent = i18nData[lang][key];
    }
  });

  renderCertificatesGallery();
}

/* ---------------------------------------------------------
   6. MOBILE MENU & COPY TO CLIPBOARD WITH TOAST
---------------------------------------------------------- */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  const isHidden = menu.classList.contains('hidden');

  if (isHidden) {
    menu.classList.remove('hidden');
    icon.className = 'fa-solid fa-xmark text-base';
  } else {
    menu.classList.add('hidden');
    icon.className = 'fa-solid fa-bars text-base';
  }
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
  document.getElementById('mobile-menu-icon').className = 'fa-solid fa-bars text-base';
}

function copyTextToClipboard(elementId, toastKey) {
  const text = document.getElementById(elementId).textContent.trim();
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  const toast = document.getElementById('toast-box');
  document.getElementById('toast-msg').textContent = getT(toastKey);

  toast.classList.remove('translate-y-24', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 2800);
}

/* ---------------------------------------------------------
   7. 3D INTERACTIVE HOVER TILT CARDS
---------------------------------------------------------- */
function initTiltCards() {
  const cards = document.querySelectorAll('[data-tilt]');
  cards.forEach(card => {
    if (card.dataset.tiltBound === 'true') return;
    card.dataset.tiltBound = 'true';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 4.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ---------------------------------------------------------
   8. INTERACTIVE TJKT SILVER-WHITE NETWORK PARTICLE CANVAS
---------------------------------------------------------- */
function initNetworkCanvas() {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = 0;
  let height = 0;
  let particles = [];
  const mouse = { x: null, y: null, radius: 140 };

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    const count = Math.min(Math.floor((width * height) / 22000), 65);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2.2 + 1.4
      });
    }
  }

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  resizeCanvas();

  function animateNetwork() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(244, 244, 245, 0.45)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 135) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(212, 212, 216, ${(1 - dist / 135) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if (mouse.x !== null && mouse.y !== null) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.hypot(mdx, mdy);

        if (mDist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - mDist / mouse.radius) * 0.42})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animateNetwork);
  }

  animateNetwork();
}

/* ---------------------------------------------------------
   9. BOOTSTRAP ON WINDOW LOAD
---------------------------------------------------------- */
window.onload = function () {
  document.getElementById('year-now').textContent = new Date().getFullYear();
  renderCertificatesGallery();
  initTiltCards();
  initNetworkCanvas();
};