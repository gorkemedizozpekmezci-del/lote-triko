# Lote Triko — Katalog Sitesi

İplik odaklı katalog. Soldaki iplik listesinden bir iplik seçilir, o iplikten
üretilen paneller `panel-demo.pdf`'teki düzende listelenir, panele tıklanınca
teknik detay sayfası açılır.

## Çalıştırma

Sunucu gerekmez, `index.html` çift tıklanabilir. Yerel sunucuyla:

```bash
python -m http.server 8731
```

## Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | Anasayfa — hero, katalog mantığı, rakamlar, öne çıkan iplik, referanslar, sertifikalar |
| `katalog.html` | **Panel arşivi** — sol iplik listesi + panel ızgarası + panel detayı |
| `kurumsal.html` | Hakkımızda, vizyon/misyon/değerler, grup şirketleri |
| `kalite-belgeleri.html` | 9 sertifika, büyütülebilir görsel + PDF indirme |
| `teknik-bilgiler.html` | İplik numara hesaplama + 9 birim arası dönüşüm + tanımlar |
| `uretim.html` | Üretim süreçleri, kapasite, 10 görsellik tesis galerisi |
| `referanslar.html` | Yurt içi / global marka logoları, ihracat ülkeleri |
| `e-katalog.html` | Panel arşivi + Lote Katalog + 2026 Kış/Yaz koleksiyonları |
| `kvkk.html` | KVKK metni + 5 PDF belge |
| `iletisim.html` | İletişim bilgileri + teklif formu |

Metinler, görseller, sertifikalar, referans logoları ve KVKK belgeleri
lote.com.tr'deki güncel içerikten alınmıştır.

## Teknik bilgiler aracı

`teknik-bilgiler.html` içindeki hesaplayıcı tamamen çalışır durumdadır:

- **Hesaplama:** uzunluk (cm) + ağırlık (g) → Nm, Ne, Nf, NeL, NeK, NeW, Tex, Dtex, Denye
- **Dönüşüm:** 9 birimden herhangi birine yazın, diğerleri anında hesaplansın

Tüm birimler Nm üzerinden tanımlıdır (`UNITS` dizisi). İndirekt sistemler
(Nm, Ne, Nf, NeL, NeK, NeW) doğru orantılı, direkt sistemler (Tex, Dtex, Denye)
ters orantılıdır. Hank karşılıkları: pamuk 768 m, keten 274,2 m, kamgarn 512 m,
strayhgarn 234 m.

## Dil (TR / EN)

Türkçe metin HTML'de kalır ve varsayılandır; İngilizce `assets/js/i18n.js`
içindeki sözlükten gelir. Sözlükte karşılığı olmayan metin Türkçe görünür —
eksik çeviri sayfayı bozmaz.

Dil `?lang=en` ile URL'de taşınır (link paylaşılabilir) ve tarayıcıda hatırlanır.
Sayı biçimi de dile göre değişir (8,803 / 8.803).

**Yeni metin eklerken:** Türkçesini anahtar, İngilizcesini değer yaparak
`I18N_DICT`'e bir satır ekleyin:

```js
'Yeni başlık': 'New heading',
```

Sayfa başlıkları `I18N_TITLES` içinde, sayfa dosya adıyla eşleşir.

Katalog gibi sonradan çizilen içerikler için `window.applyI18n(element)`
çağrılır — `katalog.js`, `teknik-bilgiler.html` ve `kalite-belgeleri.html`
bunu zaten yapar.

## Katalog rotaları (hash)

```
katalog.html#/iplik/jazz                 → JAZZ ipliğinin panelleri
katalog.html#/iplik/jazz/2026%20Kış      → sezona göre filtreli
katalog.html#/panel/ltk-8001             → panel detayı
katalog.html#/sezon/2026%20Kış           → tüm ipliklerden o sezonun panelleri
```

## Veri eklemek

Tüm katalog `assets/js/data.js` dosyasından beslenir. Veritabanı yok,
build adımı yok — iki diziye kayıt eklemek yeterli.

**Yeni iplik:**

```js
{
  id: 'yeni-iplik',                       // URL'de kullanılır, benzersiz olmalı
  name: 'YENİ İPLİK',
  family: 'Fantezi',
  cone: 'assets/yarns/xxx.jpg',           // koni fotoğrafı
  count: '8.8 Nm',
  blend: [{ pct: 39, mat: 'Acrylic', key: 'Acr' }, ...],
  note: 'Açıklama.',
  colorways: [{ name: 'Kahve', img: 'assets/yarns/xxx.jpg', hex: '#7b4a2d' }]
}
```

**Yeni panel:**

```js
{
  id: 'ltk-9999',
  yarn: 'yeni-iplik',                     // yukarıdaki iplik id'si — bağlantıyı bu kurar
  art: 'LTK-9999',
  gauge: '7GG',
  img: 'assets/panels/xxx.jpg',
  technique: 'Jakar', pattern: 'Zigzag',
  season: '2026 Kış', category: 'Kadın',
  desc: 'Açıklama.'
}
```

Panel otomatik olarak ilgili ipliğin sayfasında çıkar, sayaçlar kendiliğinden güncellenir.
`blend` içindeki `key` değerine göre kompozisyon barının rengi `katalog.js`
içindeki `MAT_COLOR` tablosundan seçilir; yeni bir malzeme eklerken oraya da
bir renk tanımlayın (tanımsızsa nötr gri kullanılır).

## Görseller

| Klasör | İçerik |
|---|---|
| `assets/panels/` | Panel (örgü numunesi) fotoğrafları |
| `assets/yarns/` | İplik konisi fotoğrafları |
| `assets/img/` | Tesis fotoğrafları, slider ve kurumsal görseller (lote.com.tr'den) |
| `assets/belgeler/` | Kalite sertifikaları (JPG + PDF) |
| `assets/referanslar/` | Marka logoları |
| `assets/kvkk/` | KVKK / gizlilik / çerez PDF belgeleri |
| `assets/grup/` | Grup şirketi logoları (Etol, Ak-Taş, Etolive) |
| `assets/banner/` | İç sayfa başlık görselleri |

İç sayfa banner'ları `<img class="banner-bg">` olarak eklenir — CSS değişkeni
içindeki göreli yol stylesheet'e göre çözüldüğü için arka plan görseli olarak
değil, gerçek bir `<img>` olarak kullanılır.

`ltk-8001.jpg` ve `melange-cardigan.jpg` panel-demo.pdf'ten kırpılmıştır.
Koni renk varyantları (`cone-*.jpg`) tek bir koni fotoğrafından renk
değiştirilerek üretilmiştir — gerçek çekimlerle değiştirilmelidir.

## Gerçek veri / örnek veri

- **Gerçek:** `JAZZ` ipliği ve `LTK-8001` + `MELANGE CARDIGAN` panelleri
  (panel-demo.pdf'ten birebir).
- **Örnek:** diğer 4 iplik ve 5 panel. `demo: true` ile işaretli, arayüzde
  "ÖRNEK" etiketi görünür. Gerçek veri girilince `demo: true` satırını silin.

## Canlıya alırken yapılacaklar

- İletişim formu şu an bir sunucuya bağlı değil (`iletisim.html` içinde not var).
  Form endpoint'i / e-posta gönderimi eklenmeli.
- ENG dil seçeneği arayüzde var ama sayfaları yok.
- 2026 Kış (~350 MB) ve Yaz (~315 MB) koleksiyon katalogları siteye kopyalanmadı;
  bağlantılar lote.com.tr üzerindeki dosyalara gidiyor. İsterseniz indirilip
  `assets/pdf/` altına konabilir (`site.js` içindeki `KATALOG_KIS` / `KATALOG_YAZ`
  sabitlerini değiştirmeniz yeterli).
- Logo: `assets/img/lote-logo.png` indirildi ama tasarımda metin logo kullanıldı.
  İstenirse header'daki `.brand` bloğu görsel logoyla değiştirilebilir (`site.js`).
