/* =============================================================
   KATALOG MOTORU
   Rotalar (hash):
     #/iplik/<iplikId>      -> o iplikten üretilen panellerin sayfası
     #/panel/<panelId>      -> panel detayı
     #/sezon/<sezon adı>    -> sezona göre filtre
   ============================================================= */

const esc = s => String(s).replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* kompozisyon barı için malzeme renkleri */
const MAT_COLOR = {
  'Acr': '#8a6a3f', 'Rec Pes': '#6b7a52', 'Pes': '#a8937a', 'Pa': '#c0b49e',
  'Wool': '#7d2f3a', 'Spandex': '#2f4a5c', 'Co': '#9aa89b', 'Mohair': '#c9a227'
};
const matColor = k => MAT_COLOR[k] || '#b9b1a3';

/* ---------- SOL LİSTE ---------- */
function renderYarnList(activeId) {
  const ul = document.getElementById('ylist');
  ul.innerHTML = YARNS.map(y => {
    const n = panelsOf(y.id).length;
    return `
      <li>
        <a class="ybtn ${y.id === activeId ? 'on' : ''}" href="#/iplik/${y.id}">
          <img class="thumb" src="${y.cone}" alt="${esc(y.name)} iplik konisi" loading="lazy">
          <span>
            <span class="nm">${esc(y.name)}${y.demo ? '<span class="tag-demo">örnek</span>' : ''}</span>
            <span class="mt">${esc(y.count)} · ${esc(y.family)}</span>
            <span class="pc">${n} panel</span>
          </span>
        </a>
      </li>`;
  }).join('');
  document.getElementById('ycount').textContent = YARNS.length + ' iplik · ' + PANELS.length + ' panel';
}

/* ---------- PANEL KARTI (PDF düzeni) ---------- */
function panelCard(p) {
  const y = yarnById(p.yarn);
  return `
    <a class="panel" href="#/panel/${p.id}">
      <span class="ph"><img src="${p.img}" alt="${esc(p.art)} panel görseli" loading="lazy"></span>
      <span class="meta">
        <span class="row1">
          <span class="yn">${esc(y.name)}</span>
          <span class="art">ART: ${esc(p.art)}</span>
        </span>
        <span class="comp">${esc(y.count)} ${esc(blendLine(y))} <b>${esc(p.gauge)}</b></span>
      </span>
    </a>`;
}

/* ---------- İPLİK SAYFASI ---------- */
function viewYarn(yarnId, seasonFilter) {
  const y = yarnById(yarnId);
  if (!y) return viewEmpty('İplik bulunamadı.');

  let list = panelsOf(y.id);
  const seasons = [...new Set(panelsOf(y.id).map(p => p.season))];
  if (seasonFilter) list = list.filter(p => p.season === seasonFilter);

  const total = y.blend.reduce((s, b) => s + b.pct, 0);

  return `
    <nav class="crumb">
      <a href="index.html">Anasayfa</a><span class="sep">/</span>
      <a href="#/iplik/${YARNS[0].id}">Panel Arşivi</a><span class="sep">/</span>
      <span>${esc(y.name)}</span>
    </nav>

    <header class="yhero">
      <div class="pic"><img src="${y.cone}" alt="${esc(y.name)} iplik konisi"></div>
      <div>
        <span class="kicker">İplik · ${esc(y.family)}</span>
        <h1>${esc(y.name)}${y.demo ? '<span class="tag-demo">örnek veri</span>' : ''}</h1>
        <p class="desc">${esc(y.note)}</p>

        <ul class="specs">
          <li><div class="k">Numara</div><div class="v">${esc(y.count)}</div></li>
          <li><div class="k">Panel sayısı</div><div class="v">${panelsOf(y.id).length}</div></li>
          <li><div class="k">Gauge aralığı</div><div class="v">${
            [...new Set(panelsOf(y.id).map(p => p.gauge))].join(' · ') || '—'}</div></li>
          <li><div class="k">Renk</div><div class="v">${y.colorways.length} varyant</div></li>
        </ul>

        <div class="blend">
          <div class="blend-bar">
            ${y.blend.map(b => `<i style="width:${(b.pct / total * 100).toFixed(2)}%;background:${matColor(b.key)}"></i>`).join('')}
          </div>
          <div class="blend-key">
            ${y.blend.map(b => `<span><b style="background:${matColor(b.key)}"></b>${b.pct}% ${esc(b.mat)}</span>`).join('')}
          </div>
        </div>

        <div class="ways">
          ${y.colorways.map(c => `
            <div class="way" title="${esc(c.name)}">
              <img src="${c.img}" alt="${esc(y.name)} – ${esc(c.name)}" loading="lazy">
              <span>${esc(c.name)}</span>
            </div>`).join('')}
        </div>
      </div>
    </header>

    <div class="grid-head">
      <h2>Bu iplikten üretilen paneller</h2>
      ${seasons.length > 1 ? `
        <div class="filters">
          <a class="chip ${!seasonFilter ? 'on' : ''}" href="#/iplik/${y.id}">Tümü</a>
          ${seasons.map(s => `<a class="chip ${seasonFilter === s ? 'on' : ''}" href="#/iplik/${y.id}/${encodeURIComponent(s)}">${esc(s)}</a>`).join('')}
        </div>` : ''}
    </div>

    ${list.length
      ? `<div class="panels">${list.map(panelCard).join('')}</div>`
      : `<div class="empty">Bu filtreye uyan panel yok.</div>`}
  `;
}

/* ---------- PANEL DETAY ---------- */
function viewPanel(panelId) {
  const p = panelById(panelId);
  if (!p) return viewEmpty('Panel bulunamadı.');
  const y = yarnById(p.yarn);

  return `
    <nav class="crumb">
      <a href="index.html">Anasayfa</a><span class="sep">/</span>
      <a href="#/iplik/${y.id}">${esc(y.name)}</a><span class="sep">/</span>
      <span>${esc(p.art)}</span>
    </nav>

    <div class="pd">
      <div class="big"><img src="${p.img}" alt="${esc(p.art)} panel görseli"></div>
      <div>
        <span class="artline">ART: ${esc(p.art)}</span>
        <h1>${esc(y.name)}${p.demo ? '<span class="tag-demo">örnek veri</span>' : ''}</h1>
        <p class="lead">${esc(p.desc)}</p>

        <table class="pd-table">
          <tbody>
            <tr><th>İplik</th><td>${esc(y.name)} — ${esc(y.count)}</td></tr>
            <tr><th>Kompozisyon</th><td>${esc(y.blend.map(b => b.pct + '% ' + b.mat).join(', '))}</td></tr>
            <tr><th>Gauge</th><td>${esc(p.gauge)}</td></tr>
            <tr><th>Teknik</th><td>${esc(p.technique)}</td></tr>
            <tr><th>Desen</th><td>${esc(p.pattern)}</td></tr>
            <tr><th>Sezon</th><td>${esc(p.season)}</td></tr>
            <tr><th>Kategori</th><td>${esc(p.category)}</td></tr>
          </tbody>
        </table>

        <a class="yarnlink" href="#/iplik/${y.id}">
          <img src="${y.cone}" alt="${esc(y.name)} konisi">
          <span>
            <span class="k">Kullanılan iplik</span>
            <span class="n">${esc(y.name)}</span>
          </span>
          <span class="go">→</span>
        </a>

        <p style="margin-top:26px">
          <a class="btn ghost" href="iletisim.html">Bu panel için teklif iste</a>
        </p>
      </div>
    </div>
  `;
}

function viewEmpty(msg) {
  return `<div class="empty">${esc(msg)} <a href="#/iplik/${YARNS[0].id}" style="text-decoration:underline">Arşive dön</a></div>`;
}

/* ---------- SEZON GENELİ ---------- */
function viewSeason(season) {
  const list = PANELS.filter(p => p.season === season);
  return `
    <nav class="crumb">
      <a href="index.html">Anasayfa</a><span class="sep">/</span><span>${esc(season)}</span>
    </nav>
    <div class="grid-head"><h2>${esc(season)} — tüm paneller</h2>
      <div class="filters"><a class="chip" href="#/iplik/${YARNS[0].id}">İpliklere dön</a></div>
    </div>
    ${list.length ? `<div class="panels">${list.map(panelCard).join('')}</div>` : viewEmpty('Kayıt yok.')}
  `;
}

/* ---------- ROUTER ---------- */
function route() {
  const raw = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  const parts = raw.split('/').filter(Boolean);
  const out = document.getElementById('panelwrap');
  let activeYarn = null, html;

  if (parts[0] === 'panel' && parts[1]) {
    html = viewPanel(parts[1]);
    const p = panelById(parts[1]);
    activeYarn = p ? p.yarn : null;
  } else if (parts[0] === 'sezon' && parts[1]) {
    html = viewSeason(parts[1]);
  } else if (parts[0] === 'iplik' && parts[1]) {
    html = viewYarn(parts[1], parts[2] || null);
    activeYarn = parts[1];
  } else {
    html = viewYarn(YARNS[0].id, null);
    activeYarn = YARNS[0].id;
  }

  out.innerHTML = html;
  renderYarnList(activeYarn);

  // seçili ipliği sol listede görünür tut
  const on = document.querySelector('.ybtn.on');
  if (on) {
    const box = on.closest('.yarns');
    if (box) box.scrollTop = Math.max(0, on.offsetTop - box.clientHeight / 2);
  }
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
document.addEventListener('DOMContentLoaded', route);
