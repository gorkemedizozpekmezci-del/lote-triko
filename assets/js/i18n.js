/* =============================================================
   DİL DESTEĞİ (TR / EN)
   -------------------------------------------------------------
   Türkçe metin HTML'de kalır ve varsayılandır. İngilizce bu
   sözlükten gelir. Sözlükte karşılığı olmayan bir metin
   Türkçe görünür — yani eksik çeviri sayfayı bozmaz.

   Yeni metin eklediğinizde: Türkçesini anahtar, İngilizcesini
   değer yaparak DICT'e bir satır ekleyin.

   Dil seçimi ?lang=en ile URL'de taşınır (link paylaşılabilir)
   ve localStorage'da hatırlanır.
   ============================================================= */

const I18N_TITLES = {
  'index.html':            'Lote Triko — High Quality Knitwear Manufacturing',
  'katalog.html':          'Panel Archive — Lote Triko',
  'kurumsal.html':         'About Us — Lote Triko',
  'uretim.html':           'Production — Lote Triko',
  'iletisim.html':         'Contact — Lote Triko | Istanbul Bağcılar HQ',
  'kalite-belgeleri.html': 'Quality Certificates — Lote Triko',
  'teknik-bilgiler.html':  'Technical Info — Yarn Count Calculator & Converter | Lote Triko',
  'referanslar.html':      'References — Lote Triko',
  'kvkk.html':             'Data Protection (KVKK) — Lote Triko',
  'e-katalog.html':        'E-Catalogues — Lote Triko'
};

const I18N_DICT = {
  /* ---------- menü / header / footer ---------- */
  'Anasayfa': 'Home',
  'Kurumsal': 'Corporate',
  'Ürünler': 'Products',
  'Üretim': 'Production',
  'E-Kataloglar': 'E-Catalogues',
  'Bize Ulaşın': 'Contact',
  'Panel Arşivi': 'Panel Archive',
  'Teknik Bilgiler': 'Technical Info',
  'Kalite Belgeleri': 'Quality Certificates',
  'Referanslar': 'References',
  'KVKK': 'Data Protection',
  'Tüm Kataloglar': 'All Catalogues',
  'Lote Katalog': 'Lote Catalogue',
  '2026 Kış Koleksiyonu': '2026 Winter Collection',
  '2026 Yaz Koleksiyonu': '2026 Summer Collection',
  'Hızlı Linkler': 'Quick Links',
  'E-Katalog': 'E-Catalogue',
  'İletişim': 'Contact',
  'Kurumsal Sayfası': 'Corporate',
  "2020'de kurulan Lote Triko, Etol Fantezi İplik'in bilgi birikimiyle kadın, erkek ve çocuk triko üretir. İstanbul ve Bursa'daki tesisleriyle yurt içi ve yurt dışı markalara hizmet verir.":
    'Founded in 2020, Lote Triko produces knitwear for women, men and children, drawing on the expertise of Etol Fancy Yarn. From its facilities in Istanbul and Bursa it serves both domestic and international brands.',
  '© 2004 – 2026 LOTE TRİKO SAN. VE TİC. A.Ş. Tüm hakları saklıdır.':
    '© 2004 – 2026 LOTE TRİKO SAN. VE TİC. A.Ş. All rights reserved.',
  'Çerez Politikası': 'Cookie Policy',
  'Gizlilik': 'Privacy',
  'Gizlilik Politikası': 'Privacy Policy',

  /* ---------- çerez bildirimi ---------- */
  "İnternet sitemizde politikalarımızda belirtilen amaçlarla sınırlı ve mevzuata uygun şekilde çerezler kullanmaktayız. Detaylı bilgi için":
    'We use cookies on our website in accordance with legislation and limited to the purposes stated in our policies. For details, see our',
  "'nı inceleyebilirsiniz.": '.',
  'Tümünü kabul ediyorum': 'Accept all',
  'Kabul etmiyorum': 'Decline',

  /* ---------- anasayfa ---------- */
  "Bursa & İstanbul · 2020'den beri": 'Bursa & Istanbul · Since 2020',
  'İplikten panele,': 'From yarn to panel,',
  'tek bir arşivde.': 'in a single archive.',
  "Lote Triko, Etol Fantezi İplik'in bilgi birikimiyle kadın, erkek ve çocuk triko üretir. Kataloğumuz ipliğe göre düzenlenmiştir: soldan bir iplik seçin, o iplikten üretilen tüm panelleri gauge ve kompozisyon bilgisiyle görün.":
    'Lote Triko produces knitwear for women, men and children, drawing on the expertise of Etol Fancy Yarn. Our catalogue is organised by yarn: pick a yarn on the left and see every panel knitted from it, with gauge and composition details.',
  'Panel Arşivini Aç': 'Open Panel Archive',
  'Hakkımızda': 'About Us',
  'Katalog Mantığı': 'How The Catalogue Works',
  'İplik seçin, üretilen malı görün': 'Pick a yarn, see what it makes',
  'Her panel bir iplikten üretilir. Arşiv de bu mantıkla kurulmuştur — önce iplik, sonra o iplikten çıkan ürünler.':
    'Every panel is knitted from a yarn. The archive follows the same logic — first the yarn, then the products made from it.',
  'İpliği seçin': 'Pick the yarn',
  'Sol kolonda tüm iplikler koni görseli, numarası ve panel sayısıyla listelenir.':
    'The left column lists every yarn with its cone photo, count and panel total.',
  'Panelleri görün': 'See the panels',
  'Seçtiğiniz ipliğin kompozisyonu, renk varyantları ve o iplikten üretilen tüm paneller açılır.':
    'The composition, colourways and every panel knitted from the selected yarn open up.',
  'Teknik detaya inin': 'Go into the detail',
  'Panele tıklayın: ART kodu, gauge, teknik, desen, sezon ve kategori bilgisi tek sayfada.':
    'Click a panel: ART code, gauge, technique, pattern, season and category on one page.',
  'Aylık üretim kapasitesi (adet)': 'Monthly capacity (pieces)',
  'Makine parkuru': 'Machine park',
  'Tesis — İstanbul & Bursa': 'Facilities — Istanbul & Bursa',
  'Kuruluş yılı': 'Founded',
  'Arşivden': 'From the archive',
  '8.8 Nm · %39 Akrilik, %29 Geri Dönüştürülmüş Polyester, %14 Polyester, %9 Poliamid, %5 Yün, %4 Elastan. 3GG ile 7GG arası panellerde kullanılır.':
    '8.8 Nm · 39% Acrylic, 29% Recycled Polyester, 14% Polyester, 9% Polyamide, 5% Wool, 4% Spandex. Used in panels from 3GG to 7GG.',
  'JAZZ panellerini gör': 'View JAZZ panels',
  '7GG · Jakar · Zigzag': '7GG · Jacquard · Zigzag',
  '3GG · Düz örgü · Melanj': '3GG · Plain knit · Mélange',
  '5GG · Jakar · Leopar': '5GG · Jacquard · Leopard',
  'Etol Şirketler Grubu': 'Etol Group of Companies',
  'Grup şirketlerimiz': 'Our group companies',
  "İplik, boyahane ve zeytinyağı; üç ayrı uzmanlık tek bir grup çatısı altında. Kataloğumuzdaki ipliklerin tamamı grup içinden, Etol Fantezi İplik'ten gelir.":
    'Yarn, dyehouse and olive oil — three areas of expertise under one group. Every yarn in our catalogue comes from within the group, from Etol Fancy Yarn.',
  'İplik · 2003': 'Yarn · 2003',
  'Etol Fantezi İplik': 'Etol Fancy Yarn',
  "Triko, örgü ve el örgüsü ipliklerinde uzmanlaşmış marka. Üretiminin %70'i ihracat; Amerika, İngiltere ve Almanya başta olmak üzere geniş bir ağa sahip.":
    'A brand specialising in knitwear, knitting and hand-knitting yarns. 70% of its output is exported, through a wide network led by the USA, UK and Germany.',
  'Boyahane · 20+ yıl': 'Dyehouse · 20+ years',
  'Ak-Taş Boyahanesi': 'Ak-Taş Dyehouse',
  "Bursa'da faaliyet gösteren köklü tekstil boyama kuruluşu. Entegre yapısıyla renk kalitesi ve termin güvencesi sağlar.":
    'A long-established textile dyeing company based in Bursa. Its integrated structure secures colour quality and reliable lead times.',
  'Zeytinyağı': 'Olive Oil',
  'Etolive Zeytinyağları': 'Etolive Olive Oils',
  'Soğuk sıkım yöntemiyle üretilen, geleneksel lezzet ile modern üretim anlayışını bir araya getiren zeytinyağı markası.':
    'A cold-pressed olive oil brand that brings together traditional flavour and modern production.',
  'Modern tesisler, esnek üretim': 'Modern facilities, flexible production',
  "İstanbul ve Bursa'daki tesislerimizde aylık yaklaşık 100.000 adet üretim kapasitesine sahibiz. 50'den fazla makine parkuru ve kendi bünyemizde kalıp hazırlama odası bulunmaktadır.":
    'Our facilities in Istanbul and Bursa have a capacity of roughly 100,000 pieces per month. We run a park of more than 50 machines and an in-house pattern room.',
  'Üretim süreçlerimiz': 'Our production',
  'Birlikte çalıştığımız markalar': 'Brands we work with',
  'Yurt içinde Koton, Oxxo, Adil Işık ve Dilvin; ihracatta NafNaf, More&More, Etam, LPP, Anthropologie ve Dunnes Store gibi markalara üretim yapıyoruz.':
    'Domestically we produce for Koton, Oxxo, Adil Işık and Dilvin; for export, for brands such as NafNaf, More&More, Etam, LPP, Anthropologie and Dunnes Store.',
  'Tüm referanslar': 'All references',
  'Belgelendirme': 'Certification',
  'Uluslararası sertifikalar': 'International certificates',
  'Etik ve sürdürülebilir üretimi destekleyen sertifikalarımız: OEKO-TEX, GOTS, OCS, GRS, RCS, Better Cotton, Sedex ve HIGG.':
    'Our certificates supporting ethical and sustainable production: OEKO-TEX, GOTS, OCS, GRS, RCS, Better Cotton, Sedex and HIGG.',
  'Belgeleri incele': 'View certificates',
  'İplik numara hesaplama ve dönüşümü': 'Yarn count calculator and converter',
  'Nm, Ne, Nf, NeL, NeK, NeW, Tex, Dtex ve Denye birimlerini anında hesaplayın, birbirine dönüştürün. Üretim, iplik boyama ve kalite kontrol süreçlerinde zaman kazandırır.':
    'Calculate and convert Nm, Ne, Nf, NeL, NeK, NeW, Tex, Dtex and Denier instantly. Saves time in production, yarn dyeing and quality control.',
  'Hesaplama aracını aç': 'Open the calculator',
  'Koleksiyonunuzu birlikte kuralım': "Let's build your collection together",
  'Trend modelleri, renkleri ve kumaşları müşterilerimizle ortak belirleyerek kalıp hazırlamadan sevkiyata kadar tüm süreci yönetiyoruz.':
    'We choose trend styles, colours and fabrics together with our customers, and manage the whole process from pattern making to shipment.',

  /* ---------- katalog ---------- */
  'İplikler': 'Yarns',
  'iplik': 'yarns',
  'panel': 'panels',
  'Bu iplikten üretilen paneller': 'Panels knitted from this yarn',
  'Numara': 'Count',
  'Panel sayısı': 'Panel count',
  'Gauge aralığı': 'Gauge range',
  'Renk': 'Colour',
  'varyant': 'colourways',
  'örnek': 'sample',
  'örnek veri': 'sample data',
  'Tümü': 'All',
  'İplik': 'Yarn',
  'Kompozisyon': 'Composition',
  'Teknik': 'Technique',
  'Desen': 'Pattern',
  'Sezon': 'Season',
  'Kategori': 'Category',
  'Kullanılan iplik': 'Yarn used',
  'Bu panel için teklif iste': 'Request a quote for this panel',
  'Bu filtreye uyan panel yok.': 'No panels match this filter.',
  'Panel bulunamadı.': 'Panel not found.',
  'İplik bulunamadı.': 'Yarn not found.',
  'Arşive dön': 'Back to archive',
  'tüm paneller': 'all panels',
  'İpliklere dön': 'Back to yarns',
  'Kayıt yok.': 'No records.',
  '2026 Kış': '2026 Winter',
  '2026 Yaz': '2026 Summer',
  'Fantezi': 'Fancy',
  'Bukle': 'Bouclé',
  'Mohair': 'Mohair',
  'Melanj': 'Mélange',
  'Kadın': 'Women',
  'Erkek': 'Men',
  'Unisex': 'Unisex',
  'Jakar': 'Jacquard',
  'Düz örgü': 'Plain knit',
  'Bukle örgü': 'Bouclé knit',
  'Ribana': 'Rib',
  'Düz': 'Plain',
  'Zigzag / Argyle': 'Zigzag / Argyle',
  'Dokulu': 'Textured',
  'Animal': 'Animal',
  'Leopar': 'Leopard',
  'Kahve': 'Brown',
  'Antrasit': 'Charcoal',
  'Ekru': 'Ecru',
  'Bordo': 'Burgundy',
  'İndigo': 'Indigo',
  'Gri': 'Grey',
  'Zeytin': 'Olive',
  'Hardal': 'Mustard',
  'Geri dönüştürülmüş polyester içeren, yün katkılı fantezi karışım. Elastik yapısı sayesinde hem ince hem kalın gauge örgüde form tutar.':
    'A fancy blend with recycled polyester and added wool. Its elastic structure holds shape in both fine and heavy gauge knits.',
  'Pamuk ağırlıklı, yıkamada karakter kazanan indigo efektli iplik.':
    'A cotton-rich yarn with an indigo effect that develops character in the wash.',
  'Kalın bukle yapı; 3GG ve 5GG hacimli örgülerde tercih edilir.':
    'A heavy bouclé structure, preferred in voluminous 3GG and 5GG knits.',
  'Tüylü yüzey veren mohair karışımı; baskı ve jakar desenlerde yumuşak geçiş sağlar.':
    'A mohair blend giving a brushed surface, with soft transitions in prints and jacquards.',
  'Klasik melanj gri; temel basic koleksiyonların taban ipliği.':
    'A classic grey mélange — the base yarn for essential basics collections.',
  'İnce gauge jakar yapı. Antrasit zemin üzerine ekru zigzag deseni; hırka ve kazak kalıplarında panel olarak kullanılır.':
    'Fine gauge jacquard. Ecru zigzag pattern on a charcoal ground, used as a panel in cardigan and sweater patterns.',
  'Kalın gauge düz örgü. Çok renkli melanj efekti, hacimli hırka için hazırlanmış panel.':
    'Heavy gauge plain knit. Multi-colour mélange effect, a panel prepared for a voluminous cardigan.',
  'Tüylü yüzeyli leopar jakar panel; kenarda ekru ribana denemesi ile birlikte.':
    'A brushed leopard jacquard panel, shown with an ecru rib trial along the edge.',
  'İnce gauge, pamuk ağırlıklı yazlık panel.': 'Fine gauge, cotton-rich summer panel.',
  'Hacimli bukle panel; oversize hırka kalıbı için.': 'Voluminous bouclé panel for an oversized cardigan pattern.',
  'Mohair karışımı tüylü jakar; desen kenarları yumuşak geçişli.':
    'Brushed mohair-blend jacquard with softly blended pattern edges.',
  'Basic melanj panel; temel kazak koleksiyonu için referans.':
    'Basic mélange panel, a reference for the essential sweater collection.',
  'İnce gauge ribana; yaka ve manşet uygulamaları için.':
    'Fine gauge rib for collar and cuff applications.',

  /* ---------- kurumsal ---------- */
  "Etol Grubu'nun bilgi birikimiyle temelleri atılan Lote Triko, 2020 yılında yapılan altyapı çalışmaları sonucunda triko üretimine odaklanarak faaliyetlerine başlamıştır. Etol Fantezi İplik'in desteğiyle kurulan Lote Triko, kısa sürede triko tekstili alanında güvenilir ve yenilikçi bir marka haline gelmiştir.":
    'Founded on the knowledge of the Etol Group, Lote Triko began operations in 2020 after infrastructure work that focused the company on knitwear production. Established with the support of Etol Fancy Yarn, Lote Triko quickly became a trusted and innovative brand in knitwear textiles.',
  "Tekstil sektörünün kalbi Bursa'da faaliyet gösteren firmamız, yenilikçi yaklaşımı ve sürdürülebilir üretim anlayışıyla fark yaratan ürünler geliştirmektedir. Tasarımdan üretime kadar tüm süreçleri entegre bir yaklaşımla yöneten Lote Triko, müşteri beklentilerini karşılamanın ötesine geçerek sektöre yön vermeyi hedeflemektedir.":
    'Operating in Bursa, the heart of the textile industry, our company develops distinctive products through an innovative approach and a commitment to sustainable production. Managing every process from design to production in an integrated way, Lote Triko aims to go beyond meeting customer expectations and help shape the industry.',
  'Modern tesisleri, uzman kadrosu ve teknolojik altyapısıyla üretim yapan firmamız, moda dünyasına kaliteli ve esnek çözümler sunmaktadır. Triko koleksiyonlarımız estetik ve dayanıklılığı bir arada sunarak her sezon trendleri yakalamaktadır.':
    'With modern facilities, an expert team and a strong technological base, our company offers the fashion world high-quality, flexible solutions. Our knitwear collections combine aesthetics and durability, catching the trends of every season.',
  'Çevreye duyarlılık ve etik üretim anlayışı ile hareket eden Lote Triko, enerji tasarrufu ve geri dönüştürülebilir ham madde kullanımıyla sürdürülebilirliği ön planda tutmaktadır.':
    'Guided by environmental responsibility and ethical production, Lote Triko puts sustainability first through energy saving and the use of recyclable raw materials.',
  '“Güçlü geçmişimizden aldığımız ilhamla, geleceğin triko trendlerini bugünden şekillendirmeye devam ediyoruz.”':
    '“Inspired by our strong heritage, we continue to shape tomorrow’s knitwear trends today.”',
  'Elif Ögel — CEO': 'Elif Ögel — CEO',
  'Vizyon': 'Vision',
  'Kurumsal yapısı altında bir araya gelen ETOL Şirketler Grubu; iplik, kumaş, triko, zeytinyağı ve boyahane sektörlerinde, globalleşen dünyada değişime ve yeniliğe açık yaklaşımıyla sürdürülebilir inovasyon ve kaliteyi bir arada sunan, uluslararası pazarda lider bir marka olmak.':
    'For the ETOL Group of Companies to be a leading international brand across yarn, fabric, knitwear, olive oil and dyeing — combining sustainable innovation and quality through an approach open to change in a globalising world.',
  'Misyon': 'Mission',
  'Kurumsal yapısındaki her bir şirketin uzmanlık alanlarını bir araya getirerek ithalat ve ihracatta kaliteli ve yenilikçi çözümler üretmek. Çalışanlarına değer veren, çevreye duyarlı, müşteri odaklı ve etik iş anlayışını benimseyen yapısıyla sektörlere ilham veren bir şirketler grubu olmak.':
    'To bring together the expertise of each company in the group and deliver high-quality, innovative solutions in import and export. To be a group that inspires its industries by valuing its people and embracing environmental responsibility, customer focus and ethical business.',
  'Değerler': 'Values',
  'Kurumsal birliktelik · Globalleşme ve değişime açıklık · Sürdürülebilirlik ve çevre duyarlılığı · Kalite ve güven · İnsan odaklılık.':
    'Corporate unity · Openness to globalisation and change · Sustainability and environmental responsibility · Quality and trust · A people-first approach.',
  'Grup Şirketlerimiz': 'Our Group Companies',
  'Koleksiyon hazırlamada müşterilerimizle ortak hareket ederek trend olan modelleri, renkleri ve kumaşları kullanarak, tüm ekibimizle birlikte en iyi ürünleri ortaya çıkarmak için sizlere hizmet vermeye hazırız.':
    'We work hand in hand with our customers when building collections — using the styles, colours and fabrics of the moment, our whole team is ready to help create the best possible products.',
  "2003 yılında Bursa'da kurulmuş, triko, örgü ve el örgüsü ipliklerinde uzmanlaşmış bir markadır. En son teknolojilerle donatılan üretim tesisleri ve deneyimli ekibiyle müşteri ihtiyaçlarına uygun yenilikçi ürünler sunar. %70'i yurt dışına olmak üzere geniş bir ihracat ağına sahip olan Etol İplik, Amerika, İngiltere ve Almanya gibi ülkelere ürünlerini ulaştırmaktadır. Hedefi, iç piyasada da büyüyerek tekstil sektöründe dünya markası olmaktır.":
    'Founded in Bursa in 2003, this brand specialises in knitwear, knitting and hand-knitting yarns. With production facilities equipped with the latest technology and an experienced team, it offers innovative products tailored to customer needs. Exporting 70% of its output, Etol Yarn supplies countries including the USA, the UK and Germany. Its goal is to grow in the domestic market too and become a global name in textiles.',
  'Kataloğumuzdaki tüm iplikler Etol Fantezi İplik üretimidir.':
    'Every yarn in our catalogue is produced by Etol Fancy Yarn.',
  "Bursa'da faaliyet gösteren köklü bir tekstil boyama kuruluşudur. 20 yılı aşkın deneyimimizle sektörde güven ve kaliteyi temsil ediyoruz. Yenilikçi vizyonumuzla sadece boyama değil, üretimin her aşamasında değer katıyoruz. Entegre hizmet anlayışımız, güçlü markalarımız ve uzman ekibimizle global standartlarda çözümler sunarak sektördeki yerimizi koruyoruz. Teknolojik gelişmeleri takip ederek kalite, hız ve güvenilirlikte öncü olmaya devam ediyoruz.":
    'A long-established textile dyeing company based in Bursa. With over 20 years of experience we stand for trust and quality in the industry. Our innovative vision adds value not only in dyeing but at every stage of production. Through integrated service, strong brands and an expert team we deliver solutions to global standards. By following technological developments we continue to lead on quality, speed and reliability.',
  "Zeytin üretiminin kalbi olan Türkiye'den dünya sofralarına doğallık ve lezzet taşıyan bir markadır. En kaliteli zeytinlerin titizlikle seçildiği modern tesislerde, soğuk sıkım yöntemiyle üretilen zeytinyağlarımız, sağlık ve lezzet tutkunları için özenle hazırlanır. Her damlasında doğanın saflığını hissettiren Etolive, üstün kalite standartları ve zengin ürün çeşitliliği ile fark yaratmaktadır. İç ve dış pazarlarda güvenle tercih edilen Etolive, geleneksel lezzet ile modern üretim anlayışını bir araya getirerek sofralara benzersiz bir deneyim sunar.":
    'A brand carrying natural flavour from Türkiye, the heart of olive production, to tables around the world. Cold-pressed in modern facilities where only the finest olives are selected, our olive oils are prepared with care for those who love both health and taste. With the purity of nature in every drop, Etolive stands out through superior quality standards and a rich product range. Trusted in domestic and international markets, Etolive brings together traditional flavour and modern production for a unique experience at the table.',
  'Lote, etik ve sürdürülebilir üretimi destekleyen uluslararası kalite sertifikalarına sahiptir. Belge listesi ve kopyaları talep üzerine paylaşılır.':
    'Lote holds international quality certificates supporting ethical and sustainable production. The list of certificates and copies are shared on request.',
  'Belge talebi oluştur': 'Request certificates',

  /* ---------- üretim ---------- */
  'Güçlü geçmiş,': 'Strong heritage,',
  'yenilikçi gelecek': 'innovative future',
  "2020 yılında kurulan Lote, örme giyim üretiminde uzmanlaşarak sektörde fark yaratan bir marka haline gelmiştir. Yüksek kaliteli iplik üretimiyle tanınan Etol Fantezi İplik'in deneyimi, üretim anlayışımızın temelini oluşturur.":
    'Founded in 2020, Lote has become a distinctive brand by specialising in knitted apparel. The experience of Etol Fancy Yarn, known for high-quality yarn production, forms the basis of how we produce.',
  'Aylık kapasite (adet)': 'Monthly capacity (pieces)',
  'Kendi kalıp hazırlama odası': 'In-house pattern room',
  'Ak-Taş boyahane yatırımı': 'Ak-Taş dyehouse investment',
  'Uzmanlık ve Kalite': 'Expertise and Quality',
  'Üretimin her aşamasına entegre edilen kalite anlayışımız sayesinde müşterilerimize yüksek standartlarda triko ürünler sunuyoruz.':
    'Thanks to a quality approach integrated into every stage of production, we offer our customers knitwear to high standards.',
  'Modern Tesisler ve Kapasite': 'Modern Facilities and Capacity',
  "İstanbul ve Bursa'daki tesislerimizde yaklaşık aylık 100.000 adet üretim kapasitesine sahibiz. 50'den fazla makine parkuru ve kendi bünyemizde kalıp hazırlama odası bulunmaktadır.":
    'Our facilities in Istanbul and Bursa have a capacity of approximately 100,000 pieces per month. We run a park of more than 50 machines and an in-house pattern room.',
  'Boyahane Entegrasyonu': 'Dyehouse Integration',
  '2020 yılında faaliyete geçen Ak-Taş Boyahanesi yatırımıyla üretim süreçlerimize hız ve esneklik kazandırdık. Renk kalitesi ve termin güvencesiyle rekabet avantajı sağlıyoruz.':
    'The Ak-Taş Dyehouse investment, operational since 2020, brought speed and flexibility to our production. Colour quality and reliable lead times give us a competitive edge.',
  'Sertifikalar': 'Certificates',
  'Lote, etik ve sürdürülebilir üretimi destekleyen çeşitli uluslararası kalite sertifikalarına sahiptir.':
    'Lote holds a range of international quality certificates supporting ethical and sustainable production.',
  'Müşteri Memnuniyeti': 'Customer Satisfaction',
  'Uzun yıllardır birçok uluslararası markayla başarılı iş birlikleri sürdürmektedir.':
    'For many years it has maintained successful partnerships with numerous international brands.',
  'Geleceği Şekillendiren Marka': 'A Brand Shaping the Future',
  'Lote; güvenilirlik, kalite ve yenilikçiliği merkeze alarak geleceğe sağlam adımlarla ilerlemektedir.':
    'Putting reliability, quality and innovation at its centre, Lote moves towards the future on firm ground.',
  'Galeri': 'Gallery',
  'Tesis Görselleri': 'Facility Photos',

  /* ---------- iletişim ---------- */
  'Lote Triko hakkında soru, öneri ve görüşlerinizi lütfen bizimle paylaşınız. Koleksiyon ve numune talepleriniz için ekibimiz hazır.':
    'Please share your questions, suggestions and comments about Lote Triko with us. Our team is ready for your collection and sample requests.',
  'Adres': 'Address',
  'Bağlar Mah. 18. Sok. No:17/1B2 · 34200 Bağcılar / İstanbul / Türkiye':
    'Bağlar Mah. 18. Sok. No:17/1B2 · 34200 Bağcılar / Istanbul / Türkiye',
  'Yol Tarifi Al': 'Get Directions',
  'İletişim Bilgileri': 'Contact Details',
  'Bağlar Mah. 18. Sok. No:17/1B2': 'Bağlar Mah. 18. Sok. No:17/1B2',
  '34200 Bağcılar / İstanbul / Türkiye': '34200 Bağcılar / Istanbul / Türkiye',
  'Bağcılar / İstanbul / Türkiye': 'Bağcılar / Istanbul / Türkiye',
  'Çağrı Merkezi': 'Call Centre',
  'Telefon': 'Phone',
  'E-posta': 'E-mail',
  'Sosyal Medya': 'Social Media',
  'Çalışma Saatlerimiz': 'Opening Hours',
  'Pazartesi – Cuma': 'Monday – Friday',
  'Cumartesi – Pazar': 'Saturday – Sunday',
  'Kapalı': 'Closed',
  "WhatsApp'tan Bilgi Al": 'Ask us on WhatsApp',
  'Teklif / Bilgi Formu': 'Enquiry Form',
  'Ad Soyad *': 'Full Name *',
  'Firma': 'Company',
  'E-posta *': 'E-mail *',
  'İlgilendiğiniz iplik / ART kodu': 'Yarn / ART code of interest',
  'Mesaj *': 'Message *',
  'Gönder': 'Send',
  'Lütfen yıldızlı alanları doldurun.': 'Please fill in the required fields.',
  'Demo form — mesaj henüz gönderilmiyor. Canlı sürümde info@lote.com.tr adresine iletilecek.':
    'Demo form — messages are not sent yet. In the live version they will go to info@lote.com.tr.',

  /* ---------- kalite belgeleri ---------- */
  'Lote Triko, müşteri memnuniyetine ve sürdürülebilir üretim ilkelerine verdiği önemle triko tekstil sektöründe güvenilir bir konuma sahiptir. Kalite odaklı üretim anlayışımız uluslararası sertifikalarla belgelenmiştir.':
    'Through its commitment to customer satisfaction and sustainable production, Lote Triko holds a trusted position in the knitwear textile industry. Our quality-driven approach is documented by international certificates.',
  'Üretim süreçlerimizde çevre dostu uygulamalar, yüksek kaliteli hammaddeler ve yenilikçi teknolojiler kullanarak global standartlara uygun çözümler sunmaktayız. Aşağıda sahip olduğumuz kalite belgelerini inceleyebilirsiniz.':
    'In our production we use environmentally friendly practices, high-quality raw materials and innovative technologies to deliver solutions that meet global standards. You can review our quality certificates below.',
  'OEKO-TEX Sertifikası': 'OEKO-TEX Certificate',
  'GOTS Sertifikası': 'GOTS Certificate',
  'OCS Sertifikası': 'OCS Certificate',
  'GRS Sertifikası': 'GRS Certificate',
  'RCS Sertifikası': 'RCS Certificate',
  'İncele': 'View',

  /* ---------- teknik bilgiler ---------- */
  'İplik Numara': 'Yarn Count',
  'Hesaplama ve Dönüşümü': 'Calculator and Converter',
  'Nm, Ne, Nf, NeL, NeK, NeW, Tex, Dtex ve Denye birimlerini anında hesaplayın ve birbirine dönüştürün.':
    'Calculate and convert Nm, Ne, Nf, NeL, NeK, NeW, Tex, Dtex and Denier instantly.',
  'İplik Numara Hesaplama': 'Yarn Count Calculator',
  'İplik uzunluğu ve ağırlığını girerek numara değerlerini hesaplayın. Özellikle üretim, iplik boyama ve kalite kontrol süreçlerinde zaman kazandırır.':
    'Enter yarn length and weight to calculate count values. Particularly useful in production, yarn dyeing and quality control.',
  'İp Uzunluğu (cm)': 'Yarn Length (cm)',
  'İp Ağırlığı (gr)': 'Yarn Weight (g)',
  'Hesapla': 'Calculate',
  'Sıfırla': 'Reset',
  'Uzunluk ve ağırlık sıfırdan büyük olmalı.': 'Length and weight must be greater than zero.',
  'İplik Numara Dönüşümü': 'Yarn Count Converter',
  'Herhangi bir alana değer girin, diğer tüm numaralar anında hesaplansın. Bir alana yazdığınızda diğerleri otomatik güncellenir.':
    'Enter a value in any field and every other count is calculated instantly. Type in one field and the rest update automatically.',
  'Numaralandırma Sistemleri': 'Numbering Systems',
  'İndirekt': 'Indirect',
  'indirekt': 'indirect',
  'direkt': 'direct',
  'sistemlerde numara büyüdükçe iplik incelir;': 'systems: the higher the number, the finer the yarn;',
  'sistemlerde numara büyüdükçe iplik kalınlaşır.': 'systems: the higher the number, the thicker the yarn.',
  'Metrik': 'Metric',
  'İngiliz Pamuk': 'English Cotton',
  'Fransız': 'French',
  'İngiliz Keten': 'English Linen',
  'İngiliz Kamgarn': 'English Worsted',
  'İngiliz Strayhgarn': 'English Woollen',
  'Decitex': 'Decitex',
  'Denye': 'Denier',
  'Metrik Numaralandırma Sistemi': 'Metric Numbering System',
  'İngiliz Pamuk Numaralandırma Sistemi': 'English Cotton Numbering System',
  'Fransız Numaralandırma Sistemi': 'French Numbering System',
  'İngiliz Keten Numaralandırma Sistemi': 'English Linen Numbering System',
  'İngiliz Kamgarn Numaralandırma Sistemi': 'English Worsted Numbering System',
  'İngiliz Strayhgarn Numaralandırma Sistemi': 'English Woollen Numbering System',
  'Tex Numaralandırma Sistemi': 'Tex Numbering System',
  'Decitex Numaralandırma Sistemi': 'Decitex Numbering System',
  'Denye Numaralandırma Sistemi': 'Denier Numbering System',
  '1 gram ağırlığındaki malzemenin metre cinsinden uzunluğu. İndirekt sistem, SI birimleri kullanılır. Nm = Uzunluk / Ağırlık = km/kg = m/g':
    'The length in metres of one gram of material. Indirect system using SI units. Nm = Length / Weight = km/kg = m/g',
  '1 libre ağırlığındaki malzemenin Hank cinsinden uzunluğu. İndirekt sistem. 1 Hank = 840 yarda = 768 m':
    'The length in hanks of one pound of material. Indirect system. 1 hank = 840 yards = 768 m',
  '0,5 gram ağırlığındaki malzemenin metre cinsinden uzunluğu. İndirekt sistem, SI birimleri kullanılır.':
    'The length in metres of half a gram of material. Indirect system using SI units.',
  '1 libre ağırlığındaki malzemenin Hank cinsinden uzunluğu. İndirekt sistem. 1 Hank = 300 yarda = 274,2 m':
    'The length in hanks of one pound of material. Indirect system. 1 hank = 300 yards = 274.2 m',
  '1 libre ağırlığındaki malzemenin Hank cinsinden uzunluğu. İndirekt sistem. 1 Hank = 560 yarda = 512 m':
    'The length in hanks of one pound of material. Indirect system. 1 hank = 560 yards = 512 m',
  '1 libre ağırlığındaki malzemenin Hank cinsinden uzunluğu. İndirekt sistem. 1 Hank = 256 yarda = 234 m':
    'The length in hanks of one pound of material. Indirect system. 1 hank = 256 yards = 234 m',
  '1.000 m uzunluğundaki malzemenin gram cinsinden ağırlığı. Direkt sistem, SI birimleri kullanılır. Tex = Ağırlık × 1000 / Uzunluk':
    'The weight in grams of 1,000 m of material. Direct system using SI units. Tex = Weight × 1000 / Length',
  '10.000 m uzunluğundaki malzemenin gram cinsinden ağırlığı. Direkt sistem, SI birimleri kullanılır. Dtex = Ağırlık × 10.000 / Uzunluk':
    'The weight in grams of 10,000 m of material. Direct system using SI units. Dtex = Weight × 10,000 / Length',
  '9.000 m uzunluğundaki malzemenin gram cinsinden ağırlığı. Direkt sistem, SI birimleri kullanılır. Denye = Ağırlık × 9000 / Uzunluk':
    'The weight in grams of 9,000 m of material. Direct system using SI units. Denier = Weight × 9000 / Length',

  /* ---------- referanslar ---------- */
  "Lote Triko olarak, yerli ve yabancı birçok seçkin marka ile uzun soluklu iş birlikleri kurmaktan gurur duyuyoruz. Avrupa'dan Kuzey Afrika'ya uzanan geniş bir müşteri portföyümüzle kalite ve güvenin simgesi haline geldik.":
    'At Lote Triko we are proud to have built long-standing partnerships with many distinguished domestic and international brands. With a broad customer portfolio stretching from Europe to North Africa, we have become a symbol of quality and trust.',
  'Yurt içi': 'Domestic',
  'Çalıştığımız Markalar': 'Brands We Work With',
  'Yurt içinde Koton, Oxxo, Adil Işık ve Dilvin gibi moda öncüsü markalarla çalışıyoruz.':
    'In Türkiye we work with fashion-leading brands such as Koton, Oxxo, Adil Işık and Dilvin.',
  'İhracat': 'Export',
  'Global Markalar': 'Global Brands',
  'İhracat tarafında NafNaf, More&More, Etam, LPP, Anthropologie ve Dunnes Store gibi global markalara üretim yapmaktayız.':
    'On the export side we produce for global brands such as NafNaf, More&More, Etam, LPP, Anthropologie and Dunnes Store.',
  'İhracat ağı': 'Export network',
  'Ticaret Yaptığımız Ülkeler': 'Countries We Trade With',
  'İtalya, İspanya, İngiltere, Almanya, Portekiz, Fas, Polonya, Macaristan ve Fransa ile yürüttüğümüz ticaret ilişkileriyle uluslararası alanda güvenilir bir üretici kimliği kazandık.':
    'Through trade relationships with Italy, Spain, the United Kingdom, Germany, Portugal, Morocco, Poland, Hungary and France, we have established ourselves internationally as a reliable manufacturer.',
  'İtalya': 'Italy', 'İspanya': 'Spain', 'İngiltere': 'United Kingdom', 'Almanya': 'Germany',
  'Portekiz': 'Portugal', 'Fas': 'Morocco', 'Polonya': 'Poland', 'Macaristan': 'Hungary', 'Fransa': 'France',

  /* ---------- kvkk ---------- */
  'Kişisel Verilerin Korunması Kanunu kapsamındaki politikalarımız ve formlarımız.':
    'Our policies and forms under the Turkish Personal Data Protection Law (KVKK).',
  'LOTE TRİKO SAN. VE TİC. A.Ş., kişisel verilerin korunmasına büyük önem vermektedir. Bu doğrultuda çalışanlarımızın, müşterilerimizin ve iş ortaklarımızın kişisel verilerinin güvenliği ve gizliliği en üst düzeyde tutulmaktadır.':
    'LOTE TRİKO SAN. VE TİC. A.Ş. attaches great importance to the protection of personal data. Accordingly, the security and confidentiality of the personal data of our employees, customers and business partners is maintained at the highest level.',
  'KVKK Bildirim Formu, kişisel verilerinizin hangi hukuki sebeplerle toplandığını, nasıl işlendiğini ve güvence altına alındığını detaylandıran bir belgedir.':
    'The KVKK Notification Form is a document setting out the legal grounds on which your personal data is collected, how it is processed and how it is safeguarded.',
  'Şirketimiz, kişisel verilerin korunması ve ilgili mevzuata uyum sağlanması adına gerekli tüm teknik ve idari tedbirleri almaktadır.':
    'Our company takes all necessary technical and administrative measures to protect personal data and comply with the relevant legislation.',
  "Kişisel verilerinizle ilgili bilgi almak, güncellenmesini talep etmek veya haklarınızı kullanmak için KVKK Başvuru Formu'ndan yararlanabilirsiniz. Sizlere daha şeffaf ve güvenli bir hizmet sunmak amacıyla veri gizliliğine dair politikalarımızı sürekli güncellemekteyiz.":
    'You may use the KVKK Application Form to request information about your personal data, ask for it to be updated, or exercise your rights. We continually update our data privacy policies in order to provide you with a more transparent and secure service.',
  'Belgeler': 'Documents',
  'KVKK Aydınlatma Metni': 'KVKK Privacy Notice',
  'KVKK Başvuru Formu': 'KVKK Application Form',
  'İletişim Formu Aydınlatma Metni': 'Contact Form Privacy Notice',

  /* ---------- e-katalog ---------- */
  'Kataloglarımız': 'Our Catalogues',
  'Koleksiyon kataloglarımızı çevrimiçi inceleyin veya panel arşivinde iplik bazında arama yapın.':
    'Browse our collection catalogues online, or search the panel archive by yarn.',
  'Çevrimiçi · Aranabilir': 'Online · Searchable',
  'İpliğe göre düzenlenmiş panel arşivi. İpliği seçin, o iplikten üretilen tüm panelleri gauge, teknik ve kompozisyon bilgisiyle görün.':
    'A panel archive organised by yarn. Pick a yarn and see every panel knitted from it, with gauge, technique and composition.',
  'Arşivi aç →': 'Open archive →',
  'Flipbook': 'Flipbook',
  'Genel ürün kataloğumuz. Çevrimiçi sayfa çevirmeli görüntüleyici.':
    'Our general product catalogue in an online page-turning viewer.',
  'Katalogu aç →': 'Open catalogue →',
  'PDF · 2026': 'PDF · 2026',
  'Kış sezonu koleksiyon kataloğu. Dosya büyüktür, açılması biraz sürebilir.':
    'Winter season collection catalogue. The file is large and may take a moment to open.',
  'Yaz sezonu koleksiyon kataloğu. Dosya büyüktür, açılması biraz sürebilir.':
    'Summer season collection catalogue. The file is large and may take a moment to open.',
  "PDF'i aç →": 'Open PDF →',
  'Koleksiyon katalogları (Kış ~350 MB, Yaz ~315 MB) bu siteye kopyalanmadı; bağlantılar lote.com.tr üzerindeki dosyalara gider.':
    'The collection catalogues (Winter ~350 MB, Summer ~315 MB) are not hosted here; the links point to the files on lote.com.tr.'
};

/* ---------- motor ---------- */
(function () {
  const p = new URLSearchParams(location.search);
  let lang = p.get('lang');
  if (lang !== 'en' && lang !== 'tr') {
    try { lang = localStorage.getItem('lote-lang') || 'tr'; } catch (e) { lang = 'tr'; }
  }
  try { localStorage.setItem('lote-lang', lang); } catch (e) {}
  window.LOTE_LANG = lang;

  /* bir metni çevir; boşlukları koru */
  function tr(raw) {
    const key = raw.replace(/\s+/g, ' ').trim();
    if (!key) return null;
    const hit = I18N_DICT[key];
    if (hit === undefined) return null;
    const lead = /^\s/.test(raw) ? ' ' : '';
    const tail = /\s$/.test(raw) ? ' ' : '';
    return lead + hit + tail;
  }

  function walk(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        const t = n.parentNode && n.parentNode.tagName;
        if (t === 'SCRIPT' || t === 'STYLE') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const jobs = [];
    let n;
    while ((n = w.nextNode())) {
      const out = tr(n.nodeValue);
      if (out !== null) jobs.push([n, out]);
    }
    jobs.forEach(([node, val]) => { node.nodeValue = val; });

    root.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(el => {
      ['placeholder', 'title', 'aria-label', 'alt'].forEach(a => {
        const v = el.getAttribute(a);
        if (!v) return;
        const out = tr(v);
        if (out !== null) el.setAttribute(a, out.trim());
      });
    });
  }

  /* katalog gibi sonradan çizilen içerik için dışarı aç */
  window.applyI18n = function (root) {
    if (window.LOTE_LANG !== 'en') return;
    walk(root || document.body);
  };

  function run() {
    if (lang === 'en') {
      document.documentElement.lang = 'en';
      const file = (location.pathname.split('/').pop() || 'index.html');
      const t = I18N_TITLES[file || 'index.html'];
      if (t) document.title = t;
      walk(document.body);
    }
    /* dil düğmesini kur */
    const box = document.querySelector('.lang');
    if (box) {
      const base = location.pathname + location.hash;
      box.innerHTML =
        '<a href="' + base + '?lang=tr" data-lang="tr" class="' + (lang === 'tr' ? 'on' : '') + '">TR</a>' +
        '<i>/</i>' +
        '<a href="' + base + '?lang=en" data-lang="en" class="' + (lang === 'en' ? 'on' : '') + '">EN</a>';
      box.querySelectorAll('a').forEach(a => a.addEventListener('click', e => {
        e.preventDefault();
        try { localStorage.setItem('lote-lang', a.dataset.lang); } catch (err) {}
        const u = new URL(location.href);
        u.searchParams.set('lang', a.dataset.lang);
        location.href = u.toString();
      }));
    }
  }

  /* site.js header'ı bastıktan sonra çalışmalı */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(run, 0));
  } else {
    setTimeout(run, 0);
  }
})();
