/* Ortak header + footer. Her sayfada <div id="head"></div> ve
   <div id="foot"></div> yeterli. data-page ile aktif menü seçilir. */

const KATALOG_KIS = 'https://lote.com.tr/E-Katalog_2026_kis/PDF.pdf';
const KATALOG_YAZ = 'https://lote.com.tr/E-Katalog_2026_yaz/PDF.pdf';
const KATALOG_LOTE = 'https://lote.com.tr/E-Katalog/';

const NAV = [
  { href: 'index.html', label: 'Anasayfa', key: 'home' },
  {
    label: 'Kurumsal', key: 'kurumsal', href: 'kurumsal.html',
    sub: [
      { href: 'kurumsal.html',        label: 'Kurumsal' },
      { href: 'kalite-belgeleri.html', label: 'Kalite Belgeleri' },
      { href: 'referanslar.html',     label: 'Referanslar' },
      { href: 'kvkk.html',            label: 'KVKK' }
    ]
  },
  {
    label: 'Ürünler', key: 'katalog', href: 'katalog.html',
    sub: [
      { href: 'katalog.html',          label: 'Panel Arşivi' },
      { href: 'teknik-bilgiler.html',  label: 'Teknik Bilgiler' }
    ]
  },
  { href: 'uretim.html', label: 'Üretim', key: 'uretim' },
  {
    label: 'E-Kataloglar', key: 'ekatalog', href: 'e-katalog.html',
    sub: [
      { href: 'e-katalog.html', label: 'Tüm Kataloglar' },
      { href: KATALOG_LOTE, label: 'Lote Katalog', ext: true },
      { href: KATALOG_KIS,  label: '2026 Kış Koleksiyonu', ext: true },
      { href: KATALOG_YAZ,  label: '2026 Yaz Koleksiyonu', ext: true }
    ]
  },
  { href: 'iletisim.html', label: 'Bize Ulaşın', key: 'iletisim' }
];

function navItem(n, page) {
  const on = n.key === page ? 'on' : '';
  if (!n.sub) return `<a href="${n.href}" class="${on}">${n.label}</a>`;
  return `
    <div class="nav-item">
      <a href="${n.href}" class="${on}">${n.label}<i class="caret"></i></a>
      <div class="drop">
        ${n.sub.map(s => `<a href="${s.href}"${s.ext ? ' target="_blank" rel="noopener"' : ''}>${s.label}</a>`).join('')}
      </div>
    </div>`;
}

function mountChrome() {
  const page = document.body.dataset.page || '';

  const head = document.getElementById('head');
  if (head) {
    head.innerHTML = `
      <header class="site-head">
        <div class="wrap">
          <a class="brand" href="index.html">
            <span class="mark">Lote</span>
            <span class="sub">Triko</span>
          </a>
          <button class="burger" aria-label="Menü" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <nav class="nav">
            ${NAV.map(n => navItem(n, page)).join('')}
            <span class="lang"></span>
          </nav>
        </div>
      </header>`;

    const burger = head.querySelector('.burger');
    const nav = head.querySelector('.nav');
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    // mobilde alt menüyü dokunarak aç
    nav.querySelectorAll('.nav-item > a').forEach(a => {
      a.addEventListener('click', e => {
        if (window.matchMedia('(max-width:860px)').matches) {
          e.preventDefault();
          a.parentElement.classList.toggle('open');
        }
      });
    });
  }

  const foot = document.getElementById('foot');
  if (foot) {
    foot.innerHTML = `
      <footer class="foot">
        <div class="wrap">
          <div class="foot-grid">
            <div>
              <div class="mark">Lote Triko</div>
              <p class="about">
                2020'de kurulan Lote Triko, Etol Fantezi İplik'in bilgi birikimiyle
                kadın, erkek ve çocuk triko üretir. İstanbul ve Bursa'daki
                tesisleriyle yurt içi ve yurt dışı markalara hizmet verir.
              </p>
            </div>
            <div>
              <h4>Hızlı Linkler</h4>
              <ul>
                <li><a href="kurumsal.html">Kurumsal</a></li>
                <li><a href="kalite-belgeleri.html">Kalite Belgeleri</a></li>
                <li><a href="teknik-bilgiler.html">Teknik Bilgiler</a></li>
                <li><a href="uretim.html">Üretim</a></li>
                <li><a href="referanslar.html">Referanslar</a></li>
                <li><a href="kvkk.html">KVKK</a></li>
                <li><a href="iletisim.html">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h4>E-Katalog</h4>
              <ul>
                <li><a href="katalog.html">Panel Arşivi</a></li>
                <li><a href="${KATALOG_LOTE}" target="_blank" rel="noopener">Lote Katalog</a></li>
                <li><a href="${KATALOG_KIS}" target="_blank" rel="noopener">2026 Kış Koleksiyonu</a></li>
                <li><a href="${KATALOG_YAZ}" target="_blank" rel="noopener">2026 Yaz Koleksiyonu</a></li>
              </ul>
            </div>
            <div>
              <h4>Bize Ulaşın</h4>
              <ul>
                <li>Bağlar Mah. 18. Sok. No:17/1B2<br>Bağcılar / İstanbul / Türkiye</li>
                <li><a href="tel:08503460416">0850 346 04 16</a></li>
                <li><a href="tel:02242613280">0224 261 32 80</a></li>
                <li><a href="tel:02242613281">0224 261 32 81</a></li>
                <li><a href="mailto:info@lote.com.tr">info@lote.com.tr</a></li>
              </ul>
              <div class="social">
                <a href="https://www.linkedin.com/company/lote-triko/" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://www.instagram.com/lotestyle/" target="_blank" rel="noopener">Instagram</a>
              </div>
            </div>
          </div>
          <div class="foot-bot">
            <span>© 2004 – 2026 LOTE TRİKO SAN. VE TİC. A.Ş. Tüm hakları saklıdır.</span>
            <span>
              <a href="assets/kvkk/KVKK_Aydinlatma_Metni.pdf" target="_blank" rel="noopener">KVKK</a> ·
              <a href="assets/kvkk/Cerez_Politikasi.pdf" target="_blank" rel="noopener">Çerez Politikası</a> ·
              <a href="assets/kvkk/Gizlilik_Politikasi.pdf" target="_blank" rel="noopener">Gizlilik</a>
            </span>
          </div>
        </div>
      </footer>`;
  }

  mountCookieBar();
}

/* --- çerez bildirimi (lote.com.tr'deki gibi) --- */
function mountCookieBar() {
  try { if (localStorage.getItem('lote-cerez')) return; } catch (e) { return; }
  const bar = document.createElement('div');
  bar.className = 'cookiebar';
  bar.innerHTML = `
    <p>
      İnternet sitemizde politikalarımızda belirtilen amaçlarla sınırlı ve mevzuata uygun
      şekilde çerezler kullanmaktayız. Detaylı bilgi için
      <a href="assets/kvkk/Cerez_Politikasi.pdf" target="_blank" rel="noopener">Çerez Politikası</a>'nı
      inceleyebilirsiniz.
    </p>
    <div class="cb-btns">
      <button class="btn sm" data-v="all">Tümünü kabul ediyorum</button>
      <button class="btn sm ghost" data-v="none">Kabul etmiyorum</button>
    </div>`;
  document.body.appendChild(bar);
  bar.addEventListener('click', e => {
    const b = e.target.closest('button[data-v]');
    if (!b) return;
    try { localStorage.setItem('lote-cerez', b.dataset.v); } catch (err) {}
    bar.remove();
  });
}

document.addEventListener('DOMContentLoaded', mountChrome);
