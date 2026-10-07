/* =============================================================
   LOTE TRİKO — KATALOG VERİSİ
   -------------------------------------------------------------
   Tüm katalog bu dosyadan beslenir. Yeni iplik / panel eklemek
   için sadece aşağıdaki iki diziye kayıt ekleyin.

   NOT: "JAZZ" ipliği ve ona bağlı 2 panel (LTK-8001 ve
   MELANGE CARDIGAN) panel-demo.pdf'ten birebir alınmıştır.
   Diğer iplikler yapıyı göstermek için eklenmiş ÖRNEK
   kayıtlardır ( demo: true ) — gerçek verilerle değiştirilecek.
   ============================================================= */

const YARNS = [
  {
    id: 'jazz',
    name: 'JAZZ',
    family: 'Fantezi',
    cone: 'assets/yarns/cone.jpg',
    count: '8.8 Nm',
    blend: [
      { pct: 39, mat: 'Acrylic',          key: 'Acr' },
      { pct: 29, mat: 'Recycled Polyester', key: 'Rec Pes' },
      { pct: 14, mat: 'Polyester',        key: 'Pes' },
      { pct: 9,  mat: 'Polyamide',        key: 'Pa' },
      { pct: 5,  mat: 'Wool',             key: 'Wool' },
      { pct: 4,  mat: 'Spandex',          key: 'Spandex' }
    ],
    note: 'Geri dönüştürülmüş polyester içeren, yün katkılı fantezi karışım. ' +
          'Elastik yapısı sayesinde hem ince hem kalın gauge örgüde form tutar.',
    colorways: [
      { name: 'Kahve',     img: 'assets/yarns/cone.jpg',          hex: '#7b4a2d' },
      { name: 'Antrasit',  img: 'assets/yarns/cone-charcoal.jpg', hex: '#1f232b' },
      { name: 'Ekru',      img: 'assets/yarns/cone-ecru.jpg',     hex: '#e8dfcf' },
      { name: 'Bordo',     img: 'assets/yarns/cone-bordo.jpg',    hex: '#7d2f3a' }
    ]
  },
  {
    id: 'indigo-touch', demo: true,
    name: 'INDIGO TOUCH',
    family: 'Fantezi',
    cone: 'assets/yarns/cone-indigo.jpg',
    count: '12 Nm',
    blend: [
      { pct: 55, mat: 'Cotton',    key: 'Co' },
      { pct: 30, mat: 'Acrylic',   key: 'Acr' },
      { pct: 12, mat: 'Polyamide', key: 'Pa' },
      { pct: 3,  mat: 'Spandex',   key: 'Spandex' }
    ],
    note: 'Pamuk ağırlıklı, yıkamada karakter kazanan indigo efektli iplik.',
    colorways: [
      { name: 'İndigo', img: 'assets/yarns/cone-indigo.jpg', hex: '#2f4a5c' },
      { name: 'Gri',    img: 'assets/yarns/cone-grey.jpg',   hex: '#8d8f94' }
    ]
  },
  {
    id: 'olive-boucle', demo: true,
    name: 'OLIVE BOUCLE',
    family: 'Bukle',
    cone: 'assets/yarns/cone-olive.jpg',
    count: '5.5 Nm',
    blend: [
      { pct: 48, mat: 'Acrylic',   key: 'Acr' },
      { pct: 27, mat: 'Wool',      key: 'Wool' },
      { pct: 20, mat: 'Polyester', key: 'Pes' },
      { pct: 5,  mat: 'Polyamide', key: 'Pa' }
    ],
    note: 'Kalın bukle yapı; 3GG ve 5GG hacimli örgülerde tercih edilir.',
    colorways: [
      { name: 'Zeytin', img: 'assets/yarns/cone-olive.jpg', hex: '#6b7a52' },
      { name: 'Ekru',   img: 'assets/yarns/cone-ecru.jpg',  hex: '#e8dfcf' }
    ]
  },
  {
    id: 'mustard-mohair', demo: true,
    name: 'MUSTARD MOHAIR',
    family: 'Mohair',
    cone: 'assets/yarns/cone-mustard.jpg',
    count: '14 Nm',
    blend: [
      { pct: 42, mat: 'Mohair',    key: 'Mohair' },
      { pct: 38, mat: 'Acrylic',   key: 'Acr' },
      { pct: 16, mat: 'Polyamide', key: 'Pa' },
      { pct: 4,  mat: 'Wool',      key: 'Wool' }
    ],
    note: 'Tüylü yüzey veren mohair karışımı; baskı ve jakar desenlerde yumuşak geçiş sağlar.',
    colorways: [
      { name: 'Hardal', img: 'assets/yarns/cone-mustard.jpg', hex: '#c9a227' },
      { name: 'Bordo',  img: 'assets/yarns/cone-bordo.jpg',   hex: '#7d2f3a' }
    ]
  },
  {
    id: 'grey-melange', demo: true,
    name: 'GREY MELANGE',
    family: 'Melanj',
    cone: 'assets/yarns/cone-grey.jpg',
    count: '10 Nm',
    blend: [
      { pct: 60, mat: 'Acrylic',            key: 'Acr' },
      { pct: 25, mat: 'Recycled Polyester', key: 'Rec Pes' },
      { pct: 15, mat: 'Wool',               key: 'Wool' }
    ],
    note: 'Klasik melanj gri; temel basic koleksiyonların taban ipliği.',
    colorways: [
      { name: 'Gri',      img: 'assets/yarns/cone-grey.jpg',     hex: '#8d8f94' },
      { name: 'Antrasit', img: 'assets/yarns/cone-charcoal.jpg', hex: '#1f232b' }
    ]
  }
];

const PANELS = [
  /* --- panel-demo.pdf'ten gelen gerçek kayıtlar --- */
  {
    id: 'ltk-8001',
    yarn: 'jazz',
    art: 'LTK-8001',
    gauge: '7GG',
    img: 'assets/panels/ltk-8001.jpg',
    technique: 'Jakar',
    pattern: 'Zigzag / Argyle',
    season: '2026 Kış',
    category: 'Kadın',
    desc: 'İnce gauge jakar yapı. Antrasit zemin üzerine ekru zigzag deseni; ' +
          'hırka ve kazak kalıplarında panel olarak kullanılır.'
  },
  {
    id: 'melange-cardigan',
    yarn: 'jazz',
    art: 'MELANGE CARDIGAN',
    gauge: '3GG',
    img: 'assets/panels/melange-cardigan.jpg',
    technique: 'Düz örgü',
    pattern: 'Melanj',
    season: '2026 Kış',
    category: 'Kadın',
    desc: 'Kalın gauge düz örgü. Çok renkli melanj efekti, hacimli hırka için ' +
          'hazırlanmış panel.'
  },

  /* --- yapıyı göstermek için eklenen örnek kayıtlar --- */
  {
    id: 'ltk-8042', demo: true,
    yarn: 'jazz',
    art: 'LTK-8042',
    gauge: '5GG',
    img: 'assets/panels/leopard.jpg',
    technique: 'Jakar',
    pattern: 'Leopar',
    season: '2026 Kış',
    category: 'Kadın',
    desc: 'Tüylü yüzeyli leopar jakar panel; kenarda ekru ribana denemesi ile birlikte.'
  },
  {
    id: 'ltk-9110', demo: true,
    yarn: 'indigo-touch',
    art: 'LTK-9110',
    gauge: '12GG',
    img: 'assets/panels/melange-cardigan.jpg',
    technique: 'Düz örgü',
    pattern: 'Düz',
    season: '2026 Yaz',
    category: 'Erkek',
    desc: 'İnce gauge, pamuk ağırlıklı yazlık panel.'
  },
  {
    id: 'ltk-7205', demo: true,
    yarn: 'olive-boucle',
    art: 'LTK-7205',
    gauge: '3GG',
    img: 'assets/panels/ltk-8001.jpg',
    technique: 'Bukle örgü',
    pattern: 'Dokulu',
    season: '2026 Kış',
    category: 'Kadın',
    desc: 'Hacimli bukle panel; oversize hırka kalıbı için.'
  },
  {
    id: 'ltk-7311', demo: true,
    yarn: 'mustard-mohair',
    art: 'LTK-7311',
    gauge: '7GG',
    img: 'assets/panels/leopard.jpg',
    technique: 'Jakar',
    pattern: 'Animal',
    season: '2026 Kış',
    category: 'Kadın',
    desc: 'Mohair karışımı tüylü jakar; desen kenarları yumuşak geçişli.'
  },
  {
    id: 'ltk-6050', demo: true,
    yarn: 'grey-melange',
    art: 'LTK-6050',
    gauge: '7GG',
    img: 'assets/panels/melange-cardigan.jpg',
    technique: 'Düz örgü',
    pattern: 'Melanj',
    season: '2026 Kış',
    category: 'Unisex',
    desc: 'Basic melanj panel; temel kazak koleksiyonu için referans.'
  },
  {
    id: 'ltk-6051', demo: true,
    yarn: 'grey-melange',
    art: 'LTK-6051',
    gauge: '12GG',
    img: 'assets/panels/ltk-8001.jpg',
    technique: 'Ribana',
    pattern: 'Düz',
    season: '2026 Yaz',
    category: 'Unisex',
    desc: 'İnce gauge ribana; yaka ve manşet uygulamaları için.'
  }
];

/* --- yardımcılar --- */
const yarnById   = id => YARNS.find(y => y.id === id);
const panelById  = id => PANELS.find(p => p.id === id);
const panelsOf   = id => PANELS.filter(p => p.yarn === id);
const blendLine  = y => y.blend.map(b => b.pct + '% ' + b.key).join(' ');
