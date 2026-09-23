/* ══════════════════════════════════════════════════════════
   YDT ÇEVİRİ LAB — veri.js (DOSYA 2/2)
   Dersler, Çeviri Lab kalıpları ve 20 soru.
   Türkçe karakterler doğrudan (literal) yazılmıştır; hiç \u kaçışı
   yoktur. UTF-8 olarak kaydedin.
   Soru eklerken aynı alanları kullanın:
   id, part('A' EN→TR | 'B' TR→EN), cat, stem, clue,
   facts[kaynak cümle], opts[[çeviri,geribildirim]×5],
   ans(0-4), ev, why, strat
   ══════════════════════════════════════════════════════════ */

window.CATS = {
  soz:  {no:'01', name:'Sözcük Seçimi ve Yalancı Dostlar', en:'Word Choice & False Friends', color:'#C13F14'},
  yapi: {no:'02', name:'Yapı ve Çatı Aktarımı', en:'Structure & Voice Transfer', color:'#0E7568'},
  zaman:{no:'03', name:'Zaman ve Kip Uyumu', en:'Tense & Modal Harmony', color:'#8F6400'},
  edat: {no:'04', name:'Edat ve Bağlaç Aktarımı', en:'Preposition & Conjunction', color:'#8E2D5A'},
  kur:  {no:'05', name:'Cümle Yeniden Kurma', en:'Restructuring', color:'#221B14'},
  nuan: {no:'06', name:'Doğallık, Nüans ve Olumsuzluk', en:'Naturalness, Nuance & Negation', color:'#5B3E96'}
};

window.LESSONS = [
  {cat:'soz', title:'Sözcük Seçimi ve Yalancı Dostlar', en:'Word Choice & False Friends',
   roots:[
     ['sympathetic ≠ sempatik','sympathetic = anlayışlı, destek veren; "be sympathetic to a demand" = talebe anlayışla yaklaşmak. Sempatik = likeable, friendly.'],
     ['sensible ≠ hassas','sensible = mantıklı, makul ("a sensible decision"); hassas = sensitive. Biçim benzemesi, anlam farkını gizlemez.'],
     ['eventually / actually','eventually = sonunda, nihayet; actually = aslında. "muhtemelen" probably, "şu anda" currently.'],
     ['terrific ≠ korkunç','terrific = harika, müthiş; korkunç = terrifying, dreadful. Olumlu/olumsuz yön şıkta ilk süzgeçtir.'],
     ['novel (sıfat) ≠ roman','Sıfat olarak novel = yenilikçi, özgün: "a novel approach" = yepyeni bir yaklaşım.']
   ],
   steps:[
     'Şıkta geçen her sözcüğün sözlükteki değil, CÜMLEDEKİ karşılığını arayın.',
     'İngilizce sözcük Türkçeye benziyorsa (sympathetic/sensible/eventually) iki kez sorgulayın — benzerlik tuzak kokusudur.',
     'Anlam yönü taraması: kayıtsız, hoşnutsuz, karşı gibi ters yönlü adaylar elenir.',
     'Doğru şıkta anlam yönü + kip + özne sayısı üçü birden korunur.'
   ],
   trap:{t:'Sempatik Tuzağı', d:'1. soruda sympathetic "sempatik" sanılırsa B şıkkı cazip gelir; oysa bakan taleplere ANLAYIŞLA yaklaşıyor. 16. soruda ise ters yön: "nihayet" sözcüğü finally/eventually ister; "actually/possibly/currently" yalancı dost ailesi dört çeldiriciyi birden besler. Yalancı dost şüphesi, çevirinin ilk 5 saniyesidir.'}},
  {cat:'yapi', title:'Yapı ve Çatı Aktarımı', en:'Structure & Voice Transfer',
   roots:[
     ['Pasif aktarım','"were evacuated / had been evacuated" → "tahliye edildiler / edilmişlerdi": yardımcı olumsuzluk değil, ÖNCELİK ve çatı taşır.'],
     ['It is believed that…','"…olduğuna inanılıyor" kalıbı: özne belirsizliğini Türkçe -DIK-…-A inan- yapısı taşır; "insanlar inanıyor" faili uydurma demektir.'],
     ['Devrik koşul','"Had the measures been checked…" = "önlemler kontrol edilmiş olsaydı": if düşer, Had öne geçer; koşul-3 anlamı birebir korunur.'],
     ['Cleft yapı','"What X is …" = "X olan şey …dir": vurgu yapısı çözülmeden çeviri ya özneyi ya yüklemi kaybeder.'],
     ['Özne kayması','Kaynağın öznesi çeviride özne kalmalı; "iki tabloyu yer değiştirdiler" gibi fail uydurmak pasifi bozar.']
   ],
   steps:[
     'Kaynak cümlenin çatısını (aktif/pasif) ve öznesini etiketleyin; çeviride aynı etiketi arayın.',
     'Edilgende fail var mı? "by their teacher" → "öğretmenleri tarafından" birebir taşınır.',
     'Devrik ve cleft yapıları önce NORMAL biçime çevirin, sonra aktarın.',
     'Yardımcı fiilin taşıdığı nüansı (öncelik, olasılık) koparmayın: "edildi" ≠ "edilmişti".'
   ],
   trap:{t:'Özne Kayması', d:'7. soruda "iki tablo yer değiştirdi" aktifleşerek pasifi bozar: tablolar özne olsa bile "swapped" eyleminin faili başkadır. 15. soruda ise pasif "kimseye söylenmedi"yi "Nobody said" aktifiyle karıştırmak hem çatıyı hem özneyi düşürür. Çatı, çevirinin iskeletidir — kırılırsa anlam da düşer.'}},
  {cat:'zaman', title:'Zaman ve Kip Uyumu', en:'Tense & Modal Harmony',
   roots:[
     ['past perfect','"had already + V3" = "çoktan …mıştı": By the time geldiğinde öncelik past perfect ile verilir.'],
     ['could have + V3','"= …mış olabilirdin": gerçekleşmemiş geçmiş olasılık/kınama. "uyarmıştın" (olmuş) ve "uyarmalıydın" (gerekilik) ile karışmaz.'],
     ['until/when + şimdiki','Gelecek ana cümlede zaman bağımlı cümlesine will girmez: "until the bridge IS completed".'],
     ['Tanımlı geçmiş + present perfect','"last night, yesterday" ile "have finished" bir arada duramaz.'],
     ['since/for + present perfect','"beri" → have/has + V3; "didn\u2019t see since" ✗. Geçmişte kilitli olumsuz, perfect ister.']
   ],
   steps:[
     'Kaynak fiilin zaman etiketini yazın; her şıkta aynı etiketi arayın.',
     'Perfect yapıların taşıdığı ÖNCELİK nüansını koruyun: "edildi" ile "edilmişti" farklı hikâyeler anlatır.',
     'Kip ayrımı: could have (olabilirdi) ↔ should have (meliydi) ↔ must have (olmuş olmalı).',
     'Gelecekli ana cümlede bağımlı zaman cümlesini şimdiki/şimdiki-perfekt ile eşleştirin.'
   ],
   trap:{t:'Zaman Eşlemesi', d:'3. ve 19. sorular past perfect\u2019i basit geçmişe düşürerek önceliği siler; 12. soru will\u2019i until\u2019e sokuşturur; 9. soru "could have"ı hem "uyarmıştın" hem "uyarmalıydın" ile karıştırır. Çeviride zaman, kelime değil ZAMAN İKİSİDİR: kaynaktaki kip ne kadar yakın görünürse görünsün, kategorisi değişmez.'}},
  {cat:'edat', title:'Edat ve Bağlaç Aktarımı', en:'Preposition & Conjunction',
   roots:[
     ['depend on = bağlı olmak','"bağımsız" independent OF; "sayesinde" thanks to; "kaynaklanmak" stem from / be due to — her edatın ayrı adresi var.'],
     ['because + cümle / because of + isim','Çünkü + cümle ↔ neden-iyle + isim öbeği; form takası en sık edat hatasıdır.'],
     ['despite / although','despite + İSİM (despite the rain); although + CÜMLE. "Despite + cümle" her zaman çeldiricidir.'],
     ['phrasal kalıplar','put up with = katlanmak; take into account = hesaba katmak; complain about = şikâyet etmek.'],
     ['Çifte bağlaç yasağı','"…, but" İngilizcede although/even though ile birleşemez: "Although…, but…" ✗.']
   ],
   steps:[
     'Bağlacın yuvasını belirleyin: isim mi cümle mi istiyor? Formu öyle taşıyın.',
     'Edatlı fiilleri kalıp olarak ezberleyin (put up WITH, complain ABOUT); kelime kelime çevirmeyin.',
     'Öğün isimleri articlesız: "skips breakfast" — "the/a breakfast" ✗.',
     'İki bağlaç aynı işi yapamaz: Türkçedeki "-de ama" kalıbı İngilizcede tek bağlaçla kurulur.'
   ],
   trap:{t:'Form Tuzağı', d:'18. soru üç "rağmen" biçiminin (despite + cümle ✗, in spite of + cümle ✗) yanlış eşleşmesini ve çifte bağlacı (Although…, but… ✗) aynı anda sınar. 14. soru "complain about" edatını paralel ikilemede (more about X than about Y) gizler. Bağlaç-edat ayrımı, çeviride kelimenin İŞİNE bakmak demektir: anlam aynı olsa da form farklıysa şık düşer.'}},
  {cat:'kur', title:'Cümle Yeniden Kurma', en:'Restructuring',
   roots:[
     ['SOV → SVO','Türkçe yüklem sonda; İngilizce özne-fiil-nesne dizilir. Kelime kelime taşımak, diziliş hatası üretir.'],
     ['İlgi cümleciği','"geçen hafta tanıştığımız mühendis" → "the engineer (whom/that/ø) we met last week": ilgi zamirinden sonra özne zamiri TEKRAR EDİLMEZ.'],
     ['Virgüllü which','Araya bilgi koyar; virgülden sonra THAT gelemez: "The library, that…" ✗.'],
     ['Ek fiil konumu','"…dır" → is: öznenin sonuna yerleşir, cümlenin sonuna değil.'],
     ['Kısaltılmış sıfat öbeği','"hizmete giren" → ", which opened," : virgülsüz "opened" yalnız, yüklem gibi durursa fragment doğar.']
   ],
   steps:[
     'Cümleyi önce PARÇALARINA ayırın (özne, ilgi öbeği, yüklem), sonra İngilizce dizilişte yeniden birleştirin.',
     'Her parçanın İngilizce karşılığında "fazlalık zamir" arayın: him, he, it kalıntıları klasik çeldiricidir.',
     'Virgül gördüğünüz an that elenir; which/who kalır.',
     'Türkçedeki ek fiili (-dır) İngilizcede özne-fiil başında arayın.'
   ],
   trap:{t:'Diziliş Taşınması', d:'13. soruda "tanıştığımız" çevirisinden sızan "him", 17. soruda virgülle buluşan "that": iki hata da Türkçe dizilişin kelime kelime taşınmasından doğar. İngilizce cümle, Türkçenin TERCÜMESİ değil YENİDEN KURULUŞUDUR — önce iskelet, sonra doku.'}},
  {cat:'nuan', title:'Doğallık, Nüans ve Olumsuzluk', en:'Naturalness, Nuance & Negation',
   roots:[
     ['Negation raising','"Sanırım … değilim" → "I don\u2019t think I…": olumsuzluk üste taşınır; "I think I don\u2019t…" sert ve ikinci dil kokar.'],
     ['hardly anyone','"neredeyse hiç kimse": "hiç kimse" mutlaklaştırması nüansı düşürür; "pek çok kişi" tamamen ters çevirir.'],
     ['anything but','"hiç de … değil": "nothing but" (yalnızca) ve "nothing more than" ile karışır.'],
     ['not X but Y','"X değil Y": cleft ile birleşince İKİ vurgu da (en çok + karşıtlık) korunmalıdır.'],
     ['Nobody was told','Edilgen + nobody: "Anybody … not" ✗; olumsuz özne pasifte de olumsuz kalır.']
   ],
   steps:[
     'Olumsuzluğun KAPSAMINI çizin: tüm mü, bir kısmı mı, neredeyse hiç mi?',
     'Kıpın yerini denetleyin: Türkçede fiildeki olumsuzluk İngilizcede düşünce fiiline taşınabilir.',
     'Nüans sözcüklerini (hardly, almost, so, such) düşürmeyin ve mutlaklaştırmayın.',
     'Kip + kapsam + yön üçlüsü birlikte korunuyorsa şık "doğal"dır; biri düşerse şık gramerce kusursuz olsa bile elenir.'
   ],
   trap:{t:'Olumsuzluk Kapsamı', d:'5. soru "neredeyse"yi düşürerek "hiç kimse" mutlaklaştırır; 11. soru olumsuzluğun taşınma kuralını yok sayar; 15. soru anybody\u2019yi olumsuz özne sandalyesine oturtur. Olumsuzluk çeviride bir kelime değil, bir COGRAFYADIR: nereyi kapladığını çizmeden şık okumayın.'}}
];

window.LABTAGS = {
  soz:{name:'Yalancı Dost', color:'#C13F14'},
  cti:{name:'Çatı (Pasif)', color:'#0E7568'},
  zmn:{name:'Zaman/Kip', color:'#8F6400'},
  edat:{name:'Edat', color:'#8E2D5A'},
  yap:{name:'Yapı/Diziliş', color:'#23608F'},
  kaps:{name:'Kapsam/Oran', color:'#221B14'},
  olum:{name:'Olumsuzluk', color:'#5B3E96'},
  dog:{name:'Kalıp/Doğallık', color:'#6E3E75'}
};

window.LABITEMS = [
  {src:'Toplantı yarına ertelendi.', flt:'The meeting is postponed to tomorrow.', tag:'zmn', note:'Hata: zaman. "ertelendi" geçmiş; pasifin geçmişi "was postponed" ister. "is postponed" genel-şimdiki okur — gerçekleşmiş olayla çelişir.'},
  {src:'Bu konuda hiçbir bilgim yok.', flt:'I have not any information about this.', tag:'olum', note:'Hata: olumsuzluk kalıbı. "not any" yerine düzgünü "I have NO information": no, any\u2019nin olumlu fiilli eşidir.'},
  {src:'Çocuklar öğretmenleri tarafından ödüllendirildi.', flt:'The children rewarded by their teacher.', tag:'cti', note:'Hata: pasif yardımcısı düşmüş. "rewarded" başlı başına yüklem değil; "were rewarded" gerekir — cümle şimdi bir fragment.'},
  {src:'O, bu fikre kesinlikle karşı.', flt:'He is definitely sympathetic to this idea.', tag:'soz', note:'Hata: yalancı dost. sympathetic = anlayışlı/destekleyici; "karşı" için "opposed to" gerekir. Anlam yönü tamamen ters dönmüş.'},
  {src:'Evin çatısı fırtınada hasar gördü.', flt:'The roof of the house damaged in the storm.', tag:'cti', note:'Hata: çatı. "hasar gördü" edilgendir: "was damaged" olmalı. Aktif "damaged" çatıyı kırdığı gibi özneyi de işlevsizleştirir.'},
  {src:'Hiç kimse onun nerede olduğunu bilmiyor.', flt:'Anybody doesn\u2019t know where he is.', tag:'olum', note:'Hata: olumsuz özne. "Anybody … not" kurulmaz; "NOBODY knows…" gerekir. Olumsuzluk özneye taşınmalı.'},
  {src:'Bu kararın sonuçlarına katlanmak zorundayız.', flt:'We have to put up the consequences of this decision.', tag:'edat', note:'Hata: phrasal edatı. "katlanmak" = put up WITH; "with" düşmüş. Put up = (bir şeyi) öne sürmek/kurmak demektir.'},
  {src:'Kaza, yoğun sis nedeniyle meydana geldi.', flt:'The accident happened because the heavy fog.', tag:'edat', note:'Hata: because + isim. "because" cümle ister; isimle "because OF the fog" gerekir. Tek sözcüklük form takası.'},
  {src:'Proje, bütçe aşılması nedeniyle gecikti.', flt:'The project was delayed because of the budget was exceeded.', tag:'yap', note:'Hata: form-uva ters. "because of" isim ister ama cümle gelmiş; "because the budget was exceeded" ya da "because of the budget overrun" olmalıydı.'},
  {src:'Onun bu davranışını ciddiye almıyorum.', flt:'I don\u2019t take serious his behaviour.', tag:'yap', note:'Hata: diziliş + sıfat/zarf. "ciddiye almak" = take SERIOUSLY (zarf); sıfat "serious" nesnenin önüne taşınmış.'},
  {src:'Her iki aday da yeterli deneyime sahip değil.', flt:'Both candidates don\u2019t have enough experience.', tag:'kaps', note:'Hata: kapsam. "Her ikisi de … değil" doğal karşılığı "NEITHER candidate has…"; "both … not" kapsamı bulandırır.'},
  {src:'Öğrencilerin çoğu sınavı geçti.', flt:'The most of the students passed the exam.', tag:'kaps', note:'Hata: oran kalıbı. "the most" süperlatif; çoğunluk için "MOST of the students". The, most ile bu görevde buluşamaz.'},
  {src:'Bu son derece hassas bir konu.', flt:'This is an extremely sensible issue.', tag:'soz', note:'Hata: yalancı dost. sensible = mantıklı; "hassas" = sensitive. "a sensitive issue" olmalıydı.'},
  {src:'Raporu dün akşam bitirdim.', flt:'I have finished the report last night.', tag:'zmn', note:'Hata: tanımlı geçmiş zaman. "last night" present perfect ile yaşayamaz; "I finished" ya da "I had finished" gerekir.'},
  {src:'Sigara içmeyi bıraktı.', flt:'He stopped to smoke.', tag:'dog', note:'Hata: fiil kalıbı. "stop DOING" = yapmayı bırakmak; "stop TO DO" = yapmak için durmak. Anlam tamamen ters dönmüş.'},
  {src:'Sabahları erken kalkmaya alışkın değilim.', flt:'I am not used to get up early in the mornings.', tag:'dog', note:'Hata: used to kipi. "alışkın olmak" = be used to + V-ING: "used to getting up". "used to get" geçmiş alışkanlık anlatır.'}
];

window.QUESTIONS = [
  {id:1, part:'A', cat:'soz',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'sympathetic = "sempatik" DEĞİL; "anlayışlı / destek veren". Anlam yönünü (olumlu/olumsuz) de ayrıca denetleyin.',
   facts:['The new minister is sympathetic to the demands of the trade unions.'],
   opts:[
     ['Yeni bakan, sendikaların taleplerinden hoşnutsuz görünüyor.','hoşnutsuz = dissatisfied: sympathetic olumlu bir yönelimdir; şık yönü ters çevirir.'],
     ['Yeni bakan, sendikaların taleplerini sempatik buluyor.','Yalancı dost tuzağı: sempatik (likeable) ≠ sympathetic (anlayışlı). Kelime benzerliğine güvenmeyin.'],
     ['Yeni bakan, sendikaların taleplerini onaylamak zorunda kaldı.','"is sympathetic" bir zorunluluk (had to) bildirmez; kip eklenmiş.'],
     ['Yeni bakan, sendikaların talepleri karşısında kayıtsızdır.','kayıtsız = indifferent: anlamın tam karşıtı.'],
     ['Yeni bakan, sendikaların taleplerine anlayışla yaklaşıyor.','DOĞRU. be sympathetic to = …-e anlayışla yaklaşmak / destek olmak.']
   ],
   ans:4, ev:['s1-f0'],
   why:'"sympathetic to the demands" kalıbı taleplere olumlu, anlayışlı bir yönelim bildirir: "taleplere anlayışla yaklaşıyor". B ve D çeldiricileri kelimenin iki uç tuzak kurar: biri biçim (sempatik), diğeri anlam (kayıtsız).',
   strat:'Çeviriye başlarken ilk süzgeç yalancı dost olsun: İngilizce sözcük Türkçeye benziyorsa iki kez sorgulayın. Ardından yön kontrolü yapın — olumlu bir yargıyı olumsuz çeviren şık, gramerce kusursuz olsa da elenir.'},
  {id:2, part:'A', cat:'yapi',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"Had … been" devrik koşul-3: "kontrol edilmiş olsaydı". Edilgenlik + koşul + olasılık kipi birlikte taşınmalı.',
   facts:['Had the safety measures been checked regularly, the accident could have been avoided.'],
   opts:[
     ['Güvenlik önlemleri düzenli olarak kontrol edilse bile kaza önlenemezdi.','"even if" (olsa bile) eklenmiş: koşulun yönü ters dönmüş — kaynak cümle olumlu koşul kuruyor.'],
     ['Güvenlik önlemleri düzenli kontrol ediliyordu; bu yüzden kazadan kaçınılabildi.','Koşul yok sayılmış, gerçekleşmiş olguya dönüştürülmüş: kaynak cümle gerçekleşMEMİŞ bir senaryo anlatır.'],
     ['Güvenlik önlemleri düzenli kontrol edilmeliydi; aksi hâlde kaza önlenebilirdi.','Gereklilik (must/should) eklenmiş; "could have" olasılık kipidir, gereklilik değil.'],
     ['Güvenlik önlemleri düzenli olarak kontrol edilmiş olsaydı, kazadan kaçınılabilirdi.','DOĞRU. Devrik koşul-3 + pasif + could have = "edilmiş olsaydı … kaçınılabilirdi".'],
     ['Güvenlik önlemleri kontrol edildiği için kaza önlenebildi.','Koşul, sebep (because) ilişkisine devrilmiş; anlam bağının türü değişmiş.']
   ],
   ans:3, ev:['s2-f0'],
   why:'Devrik "Had … been checked" = "kontrol edilmiş olsaydı" (if atılır, Had öne geçer); "could have been avoided" = gerçekleşmemiş geçmiş olasılık: "kaçınılabilirdi (ama kaçınılamadı)". Çatı (pasif), koşul (olsaydı) ve kip (abilirdi) üçü birden korunmalı.',
   strat:'Devrik yapıları önce normal biçime çevirin: "Had X been Y" → "If X had been Y". Sonra üç etiketi tek tek taşıyın: çatı, koşul yönü, kip. Bu üçlüden birini düşüren şık, en akıcı görüneni olsa da elenir.'},
  {id:3, part:'A', cat:'zaman',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"had already been evacuated": geliş anından ÖNCE tamamlanmış pasif — "çoktan tahliye edilmişti".',
   facts:['By the time the firefighters arrived, the residents had already been evacuated.'],
   opts:[
     ['İtfaiye geldiğinde sakinler tahliye ediliyorlardı.','"were being evacuated" karşılığı: süreklilik. Kaynak cümlede iş TAMAMLANMIŞ.'],
     ['İtfaiye geldiğinde sakinler çoktan tahliye edilmişti.','DOĞRU. by the time + past → past perfect; already = çoktan.'],
     ['İtfaiye geldiğinde sakinler tahliye edileceklerdi.','Gelecek kipi: zaman eksenleri çakışmaz.'],
     ['İtfaiye geldikten sonra sakinler tahliye edildi.','Sıra ters: kaynak cümlede tahliye varıştan ÖNCE bitmiş.'],
     ['İtfaiye geldiği sürece sakinler tahliye ediliyordu.','"as long as" bozumu: eşzamanlı süreklilik; öncelik anlamı kaybolmuş.']
   ],
   ans:1, ev:['s3-f0'],
   why:'"By the time + past simple, had already + V3" kalıbı öncelik bildirir: itfaiye geldiği ANDA tahliye ÇOKTAN tamamlanmıştı. B ve E süreci sürdürür, D sırayı ters çevirir, C geleceğe kaçar.',
   strat:'Past perfect\u2019i görünce "ne göre önce?" sorusunu sorun: cevap zaman bağlacıdır (by the time). Çeviride "edildi" ile "edilmişti" arasındaki fark küçük görünür ama hikâyeyi değiştirir — zaman, çevirinin kelimesi değil ikisidir.'},
  {id:4, part:'A', cat:'edat',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"depends on" = "…-e bağlıdır": kaynaklanmak (due to), sayesinde (thanks to) ve bağımsızlık ile karıştırmayın.',
   facts:['The success of the campaign depends largely on the cooperation of local residents.'],
   opts:[
     ['Kampanyanın başarısı büyük ölçüde yerel halkın iş birliğinden kaynaklanmaktadır.','"derives from / is due to" bozumu: bağlılık ilişkisi neden-sonuca devrilmiş.'],
     ['Kampanyanın başarısı, yerel halkın iş birliği sayesinde büyük ölçüde sağlandı.','"thanks to" + tamamlanmışlık: hem edat hem zaman kaymış.'],
     ['Kampanyanın başarısı büyük ölçüde yerel halkın iş birliğine bağlıdır.','DOĞRU. depend on = -e bağlı olmak; largely = büyük ölçüde.'],
     ['Kampanyanın başarısı, yerel halkın iş birliğinden bağımsızdır.','"independent of" karşıtı: edat aynı yönde ama anlamı ters.'],
     ['Yerel halkın iş birliği, kampanyanın başarısını büyük ölçüde etkilemedi.','Özne kayması + olumsuzluk: cümlenin hem öznesi hem yönü değişmiş.']
   ],
   ans:2, ev:['s4-f0'],
   why:'"depends on" bir BAĞLILIK ilişkisi kurar: başarı ⇄ iş birliği. A neden-sonuç, B sahiplenme + geçmiş tamamlanma, D karşıt, E özne kayması ile aynı sözcükleri farklı ilişkilere yerleştirir.',
   strat:'Edatlı fiilleri kalıp olarak okuyun: depend ON, complain ABOUT, stem FROM. Şıklarda aynı sözcük kümesi farklı edatlarla sunulduğunda soru edat sorusudur — anlamı en güzel kuran değil, İLİŞKİYİ doğru kuran şık kazanır.'},
  {id:5, part:'A', cat:'nuan',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"hardly anyone" = "neredeyse hiç kimse": mutlak "hiç kimse" değil, "pek çok" hiç değil.',
   facts:['Hardly anyone in the village can remember a summer as dry as this one.'],
   opts:[
     ['Köyde neredeyse hiç kimse bunun kadar kurak bir yaz hatırlayamıyor.','DOĞRU. hardly anyone = neredeyse hiç kimse; can = -abilmek.'],
     ['Köydeki herkes bunun kadar kurak bir yazı hatırlıyor.','hardly anyone → herkes: olumsuz kapsam tamamen ters.'],
     ['Köyde hiç kimse bu kurak yazı hatırlamıyor.','"neredeyse" nüansı düşürülmüş: mutlaklaştırılmış.'],
     ['Köyde kimse bunun kadar kurak bir yaz hatırlamalı.','can gereklilik değil yeterlilik: "-meli" kipi eklenmiş.'],
     ['Köyde pek çok kişi bunun gibi kurak bir yaz hatırlıyor.','"pek çok kişi" = many: olumsuzluk pozitife devrilmiş.']
   ],
   ans:0, ev:['s5-f0'],
   why:'"Hardly anyone" az ama SIFIR OLMAYAN bir çoğunluğu dışlar: "neredeyse hiç kimse". C nüansı mutlaklaştırır, B ve E yönü ters çevirir, D kip ekler. Olumsuzluğun kapsamı çizilmeden şık okunamaz.',
   strat:'Kapsam sözcüklerini (hardly, almost, nearly, scarcely) görünce cümlenin üstüne "ne kadar hiç?" sorusunu yazın. Çeviride bu ölçü sözcüsünü düşüren şık "doğru ama eksik", tersine çeviren şık "akıcı ama yanlış"tır — ikisi de elenir.'},
  {id:6, part:'A', cat:'soz',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"anything but" = "hiç de … değil": nothing but ("yalnızca") ve "olmaktan başka bir şey değil" tuzağına dikkat.',
   facts:['The information contained in the report is anything but reassuring.'],
   opts:[
     ['Rapordaki bilgiler her şeyden çok iç açıcıdır.','"anything but" en-üstünlük değil; kalıp çözülememiş.'],
     ['Rapordaki bilgiler iç açıcı olmaktan başka bir şey değil.','"nothing but" (yalnızca) bozumu: anlam olumluya dönmüş — kaynak cümle tam tersini söylüyor.'],
     ['Rapordaki bilgiler biraz olsun iç açıcıdır.','"somewhat" bozumu: ölçü hem azaltılmış hem olumlanmış.'],
     ['Raporda yer alan bilgiler hiç de iç açıcı değil.','DOĞRU. anything but + sıfat = hiç de … değil.'],
     ['Rapordaki bilgiler her zaman iç açıcı olmayabilir.','"may not always" bozumu: ihtimal eklenmiş, kesinlik kaybolmuş.']
   ],
   ans:3, ev:['s6-f0'],
   why:'"anything but reassuring" kalıbı "iç açıcı olan HER ŞEYDEN uzak" demektir: hiç de iç açıcı değil. Dört çeldirici aynı sözcük ailesiyle kurulmuş ama kalıbı dört farklı yöne büker; yalnız D kalıbın gerçek çözümünü taşır.',
   strat:'"anything but / nothing but / all but / nothing more than" ailesini tablo halinde ezberleyin: anything but = hiç de … değil; nothing but = yalnızca; all but = neredeyse. Kalıp sorusunda kelime bilgisi değil KALIP bilgisi sınanır.'},
  {id:7, part:'A', cat:'yapi',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"It is believed that …" = "…duğuna inanılıyor": pasif + özne belirsizliği; ayrıca "while" = "o sırada".',
   facts:['It is widely believed that the two paintings were swapped while the museum was closed for renovation.'],
   opts:[
     ['İki tablonun yer değiştirildiğine yaygın olarak inanılıyor; ancak müze tadilat için kapalıydı.','"ancak" eklenmiş: while (o sırada) karşıtlığa devrilmiş.'],
     ['İki tabloyu yer değiştirdiklerine, müze tadilattayken yaygın olarak inanılıyor.','Fail uydurulmuş: kimin değiştirdiği kaynakta yok; pasif bozulmuş.'],
     ['İki tablo, müzenin tadilatı sırasında yaygın biçimde yer değiştirdi.','Aktifleşme: "swapped" öznesiz kalmış; "yaygın biçimde" inanma fiilinden tabloya taşınmış.'],
     ['İki tablonun, müzenin tadilat için kapatılacağı dönemde yer değiştirileceğine yaygın olarak inanılıyor.','Zaman sapması: kapatılacağı/yer değiştirileceği — kaynak geçmişte kilitli.'],
     ['Müzenin tadilat için kapalı olduğu sırada iki tablonun yer değiştirildiğine yaygın olarak inanılıyor.','DOĞRU. İki pasif de (is believed / were swapped) ve zaman bağı (o sırada) korunmuş.']
   ],
   ans:4, ev:['s7-f0'],
   why:'Cümlenin iki katmanı var: dış pasif (inanılıyor) ve iç pasif (yer değiştirildi) + zaman zarf cümleciği (o sırada). E üçünü birden taşır; B ve C pasifi kırar, A karşıtlık ekler, D geleceğe kaçar.',
   strat:'Çok katmanlı cümlelerde katmanları etiketleyin: dış çatı, iç çatı, zaman bağı. Her katmanı şıkta ayrı ayrı arayın — en çok katmanı doğru taşıyan şık cevaptır; "akıcı ama bir katmanı eksik" şıklar klasik çeldiricidir.'},
  {id:8, part:'A', cat:'edat',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"on account of" = "nedeniyle" (sebep, rağmen değil); "fortnight" = on dört gün; "remained closed" = kapalı kaldı.',
   facts:['The bridge remained closed for a fortnight on account of structural damage.'],
   opts:[
     ['Köprü, yapısal hasar nedeniyle on dört gün sonra açıldı.','"sonra açıldı" eklenmiş: remained closed bir süredurumudur, açılış bildirmez.'],
     ['Köprü, yapısal hasar nedeniyle on dört gün boyunca kapalı kaldı.','DOĞRU. for a fortnight = on dört gün boyunca; on account of = nedeniyle.'],
     ['Köprü, yapısal hasara rağmen iki hafta boyunca kapalı kaldı.','"rağmen" (despite) bozumu: sebep ↔ karşıtlık karışmış.'],
     ['Köprü, on dört günlük yapısal hasar nedeniyle kapandı.','Hasar süresi ile köprünün kapalı kalma süresi birbirine karışmış.'],
     ['Yapısal hasar yüzünden köprü on beş gün kapalı kaldı.','Sayı tahrifi: fortnight = 14 gün.']
   ],
   ans:1, ev:['s8-f0'],
   why:'"on account of" bir SEBEP bağlantısıdır (nedeniyle), "remained closed for …" bir süredurumudur (kapalı kaldı). B üç bilgiyi de (sebep, süre, süredurum) doğru taşır; C bağı ters kurar, A olay ekler, D ve E sayı/süre ayrımını kaydırır.',
   strat:'Bağlaç-öbek ailesini yönüyle ezberleyin: on account of / due to = nedeniyle; despite / in spite of = rağmen. Ayrıca fortnight (14 gün) gibi ölçü sözcüklerini not edin — sayı tahrifi, en kolay yakalanan çeldirici türüdür.'},
  {id:9, part:'A', cat:'zaman',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"could have + V3" = "…mış olabilirdin": gerçekleşmemiş geçmiş kınaması. "uyarmıştın" (olmuş) ve "uyarmalıydın" (gerekli) ile karışmaz.',
   facts:['You could have warned me before signing the contract.'],
   opts:[
     ['Sözleşmeyi imzalamadan önce beni uyarmıştın.','Past perfect: olay OLMUŞ. Kaynak cümde uyarma gerçekleşmemiş — bir kınama var.'],
     ['Sözleşmeyi imzalarken beni uyarabilirdin.','"while" daralması: before ilişkisi (imzalamadan önce) kaybolmuş.'],
     ['Sözleşmeyi imzalamadan önce beni uyarmış olabilirdin.','DOĞRU. could have warned = uyarmış olabilirdin (ama uyarmadın).'],
     ['Sözleşmeyi imzalamadan önce beni uyarmalıydın.','"should have" = -meliydi: kip kayması, kınamadan görevlendirmeye dönmüş.'],
     ['Sözleşmeyi imzalamadan beni uyarabilirsin.','Şimdiki/gelecek kip: kaynak cümle geçmişe kilitli.']
   ],
   ans:2, ev:['s9-f0'],
   why:'"could have + V3" gerçekleşmemiş bir geçmiş olasılığı bildirir ve çoğunlukla sitem taşır: "uyarmış olabilirdin (ama olmadı)". A olmuşluğu, D gerekliği, E şimdiyi kurgular — yalnız C kipin aynasını kurar.',
   strat:'Kip zincirini ezberleyin: could have = olabilirdi; should have = meliydi; must have = olmuş olmalı; was able to = -abildi. Çeviride kip kayması, kelime kaymasından daha ölümcüldür: zaman yanlışsa cümle başka bir hikâye anlatır.'},
  {id:10, part:'A', cat:'kur',
   stem:'Yukarıdaki İngilizce cümlenin Türkçe çevirisi aşağıdakilerden hangidir?',
   clue:'"What … is" cleft yapısı: "X olan şey …". "not X but Y" karşıtlığı da birebir korunmalı.',
   facts:['What the public resents most is not the tax itself but the way it was introduced.'],
   opts:[
     ['Halkın en çok içerlediği şey verginin kendisi değil, onun getiriliş biçimidir.','DOĞRU. Cleft (en çok içerlediği şey) + karşıtlık (değil … değil, …) birlikte taşınmış.'],
     ['Halk, vergiden ve getiriliş biçiminden en çok rahatsız.','Cleft çözülmüş: karşıtlık kaybolmuş; iki unsur da içerleme nedeni sayılmış.'],
     ['Vergi, halkın en çok içerlediği şeyin kendisidir.','Cleft ters monte edilmiş; anlam allak bullak olmuş.'],
     ['Halk, vergiden çok onun getiriliş biçimine içerlemekte.','"not X but Y"nin X kanadı (değil) düşmüş: karşılaştırma kalmış, karşıtlık yok.'],
     ['Halkın içerlediği vergi, getiriliş biçimiyle değil kendisiyledir.','Anlam ters dönmüş: içerlenen şey karışmış.']
   ],
   ans:0, ev:['s10-f0'],
   why:'Cümle iki vurgu taşır: cleft ("en çok içerlediği ŞEY") ve karşıtlık ("değil X, Y"). A ikisini birden kurar; D karşılaştırmaya (verya biçimden çok) indirger, B ikisini de çözerek düz cümle yapar.',
   strat:'"What X is …" görünce önce çözüm cümlesini yazın: "Halk en çok NEYİ içerliyor? → getiriliş biçimini." Sonra "not … but" karşıtlığını yerleştirin. Cleft\u2019i çözüp yeniden monte etmek, kelime kelime taşımaktan her zaman güvenlidir.'},
  {id:11, part:'B', cat:'nuan',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'"Sanırım … değilim": olumsuzluk ÜSTE taşınır — "I don\u2019t think I…".',
   facts:['Sanırım bu konuda seninle aynı fikirde değilim.'],
   opts:[
     ['I think I am not agreeing with you on this matter.','agree düşünce fiilidir, süreklilik (am agreeing) almaz; ayrıca olumsuzluk taşınmamış.'],
     ['I don\u2019t think I don\u2019t agree with you on this matter.','Çifte olumsuzluk: anlam "aynı fikirdeyim"e dönmüş.'],
     ['I suppose I wouldn\u2019t agree with you at this matter.','"at this matter" edat hatası (on this matter); "wouldn\u2019t" ihtimal kipi ekliyor.'],
     ['I don\u2019t think I agree with you on this matter.','DOĞRU. Negation raising + agree with + on this matter.'],
     ['I think I won\u2019t agree with you about this matter.','"won\u2019t" gelecek tahmini kurar; kaynak şimdiki bir görüş ayrılığı bildiriyor.']
   ],
   ans:3, ev:['s11-f0'],
   why:'İngilizcede "sanırım … değil" kalıbında olumsuzluk düşünme fiiline taşınır: "I don\u2019t think I agree…". D ayrıca kalıbın edatlarını (agree WITH, ON this matter) da doğru taşır.',
   strat:'Negation raising kuralı: think/believe/suppose ile başlayan olumsuz iç yargı, İngilizcede üste çıkar. Bu kural hem doğallık sınavıdır hem de çeldirici üreticisidir — "I think I don\u2019t…" biçimi gramerce kurulabilir ama sınavın tercih ettiği ayna D\u2019dir.'},
  {id:12, part:'B', cat:'zaman',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'Ana cümle gelecek ("yönlendirilecek"): until\u2019li bağımlı cümlede will YASAKTIR.',
   facts:['Bu köprü tamamlanana kadar trafik ana yola yönlendirilecek.'],
   opts:[
     ['Traffic will be diverted to the main road until the bridge will be completed.','Bağımlı zaman cümlesinde will: klasik form hatası.'],
     ['Traffic will be diverted to the main road until the bridge is completed.','DOĞRU. will + pasif ana cümle; until + şimdiki zaman bağımlı cümle.'],
     ['Traffic would be diverted to the main road until the bridge was completed.','Zaman kayması: gelecek planı geçmiş anlatıma dönmüş.'],
     ['Traffic will be diverting to the main road until the bridge has completed.','"diverting" aktif-süreklilik; "has completed" öznesiz — köprü tamamlayamaz, tamamlanır.'],
     ['Traffic is diverted to the main road until the bridge will have been completed.','Genel anlatım + will perfect karışımı: iki zaman da yanlış adreste.']
   ],
   ans:1, ev:['s12-f0'],
   why:'İngilizcede geleceği ana cümle taşır: "will be diverted … until the bridge IS completed". Until/when/after ailesi geleceği şimdiki ya da şimdiki-perfekt biçimle temsil eder.',
   strat:'TR→EN çeviride bağımlı zaman cümlesine "-acak" geçirmeyin: "tamamlanana kadar" → "until it is completed". Şıklarda will\u2019i bağımlı cümlede arayın — bulduğunuz an o şık büyük olasılıkla çeldiricidir.'},
  {id:13, part:'B', cat:'kur',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'İlgi cümleciğinde özne zamiri TEKRAR EDİLMEZ: "we met him last week" ✗.',
   facts:['Geçen hafta tanıştığımız mühendis, proje hakkında ayrıntılı bir sunum yaptı.'],
   opts:[
     ['The engineer we met him last week gave a detailed presentation about the project.','"him" fazlalığı: ilgi zamiri nesne görevini üstlenmişken zamir tekrar edilemez.'],
     ['The engineer that we met last week, he gave a detailed presentation on the project.','"he" fazlalığı: iki özne çakışmış; virgüllü kuruluş bozuk.'],
     ['We met the engineer last week gave a detailed presentation about the project.','İlgi bağlacı yok: iki yüklem kaynamış, cümle fragment.'],
     ['The engineer whom we met him last week has made a detailed presentation about the project.','"him" + zaman hatası: sunum geçmişte yapıldı, perfect gerekmez.'],
     ['The engineer we met last week gave a detailed presentation about the project.','DOĞRU. Nesne ilgi zamiri (ø/whom/that) + tek özne + geçmiş yüklem.']
   ],
   ans:4, ev:['s13-f0'],
   why:'"tanıştığımız" ilgi cümleciği kurar: "the engineer (whom/that/ø) we met last week". İngilizcede ilgi cümleciğinin içindeki nesne zamiri tekrar edilemez — A ve D\u2019deki "him", B\u2019deki "he" Türkçe dizilişinden sızan fazlalıklardır.',
   strat:'TR→EN\u2019de "-diğimiz/-diği" eklerini görünce ilgi cümleciği kurun ve FAZLALIK ZAMİR avlayın: him/he/it kalıntıları en sık çeldiricidir. Sonra yüklemi tekilleştirin — iki özne, iki yüklem çakışması fragment doğurur.'},
  {id:14, part:'B', cat:'edat',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'"şikâyet etti" = complained ABOUT; "çok …-den" karşılaştırması "more about X than about Y" ile paralel kurulur.',
   facts:['Öğrenciler, sınavın zorluğundan çok süresinin kısalığından şikâyet etti.'],
   opts:[
     ['The students complained more from the shortness of the exam than from its difficulty.','"complain from" ✗: Türkçedeki "-den" edatı birebir taşınmış; İngilizce ABOUT ister.'],
     ['The students complained about the exam being more difficult than its duration is short.','Karşılaştırma bozuk: iki farklı ölçek (difficult/short) yan yana getirilmiş.'],
     ['The students complained more about the shortness of the exam than about its difficulty.','DOĞRU. more about X than about Y — paralel edat tekrarıyla kusursuz.'],
     ['The students complained the most about the shortness, not the difficulty, of the exam.','"en çok" süperlatif: kaynak cümle karşılaştırma (verya kısalık daha çok), mutlak sıralama değil.'],
     ['The students were complained about the shortness of the exam more than its difficulty.','Çatı hatası: pasif "were complained" kurulmuş; şikâyet eden öğrenciler.']
   ],
   ans:2, ev:['s14-f0'],
   why:'"çok X\u2019ten çok Y\u2019den şikâyet etti" kalıbı "complained more about Y than about X" ile kurulur: edat iki kolda da tekrar edilir, karşılaştırma derecesi (more) korunur. C edatı, D ölçüyü, E çatıyı bozar.',
   strat:'Türkçedeki "-den" edatı İngilizcede fiile göre değişir: şikâyet ABOUT, korkmak OF, bahsetmek OF, vazgeçmek FROM… Ayrıca karşılaştırmada paralellik kuralını uygulayın: "more about X than about Y" — edatı yalnız bir kolda bırakan şık eğik kurulmuştur.'},
  {id:15, part:'B', cat:'yapi',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'Edilgen + belirsiz kişi: "kimseye söylenmedi" → "Nobody was told …".',
   facts:['Onun bu kadar erken emekli olacağı kimseye söylenmedi.'],
   opts:[
     ['Nobody was told that he would retire so early.','DOĞRU. Edilgen + nobody + geçmişte gelecek (would retire) + so early.'],
     ['It was not said anybody that he would retire so early.','Pasif + edat bozuk: "It was not said TO anybody" olmalıydı; "say" bu kuruluşta tuhaf.'],
     ['Nobody said that he retires so early.','Pasif kaybolmuş (kimse SÖYLEMEDİ ≠ kimseye SÖYLENMEDİ) + zaman kayması.'],
     ['He was not said to anybody to retire so early.','Pasif iskeleti bozuk: "was said to anybody" ile özne-nesne zinciri çökmüş.'],
     ['Anybody was not told that he would retire so early.','"Anybody … not" kurulamaz: olumsuz özne nobody/nor ister.']
   ],
   ans:0, ev:['s15-f0'],
   why:'"kimseye söylenmedi" cümlesi hem edilgen (söyleyen değil, söylenen öne geçer) hem olumsuz-öznellidir: "Nobody was told…". Ayrıca "olacağı" geçmişte gelecek gerektirir: "would retire so early".',
   strat:'Edilgen cümleleri çevirmeden önce iki etiket yazın: ÇATI (pasif) ve ALICI (to anybody → nobody özne olur). "Anybody + not" biçimi İngilizcede yıkıktır; olumsuzluk özneye ya da any\u2019nin yeşeldiği yapıya yerleşir.'},
  {id:16, part:'B', cat:'soz',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'"Nihayet" = finally/eventually: actually (aslında), possibly (muhtemelen) ve currently (şu anda) yalancı dost ailesidir.',
   facts:['Nihayet, komite öneriyi onayladı.'],
   opts:[
     ['Actually, the committee approved the proposal.','actually = aslında: yalancı dost; "nihayet" değil.'],
     ['The committee possibly approved the proposal.','possibly = muhtemelen: olasılık ekliyor; "nihayet" kesinliğe ulaşma anlamı verir.'],
     ['The committee currently approved the proposal.','currently = şu anda: zaman zarfı geçmiş fiille çelişir; anlam hiç uymaz.'],
     ['The committee nearly approved the proposal.','nearly = neredeyse: onayLANMADI anlamı doğar — tam tersi.'],
     ['The committee finally approved the proposal.','DOĞRU. nihayet = finally / eventually (sonunda, uzun bekleyişin ardından).']
   ],
   ans:4, ev:['s16-f0'],
   why:'"Nihayet" uzun bir bekleyişin sonunda ulaşılan sonucu anlatır: finally/eventually. A, B, C üç yalancı dostun (actually/possibly/currently) farklı yöne bükülmüş hâlidir; D ise "neredeyse" ile olayı gerçekleşmemişe çevirir.',
   strat:'TR→EN yönünde yalancı dost tuzağı terstendir: Türkçe sözcük İngilizce BENZERİNE kayar. "nihayet → actually", "şu anda → actually", "hassas → sensible" eşlemelerini çift yönlü ezberleyin; şıklarda ses-benzeri adayları önce elin.'},
  {id:17, part:'B', cat:'kur',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'"hizmete giren" araya-bilgi verir: virgüllü ", which opened," ; virgülden sonra THAT gelemez.',
   facts:['Geçen ay hizmete giren yeni kütüphane, şehrin en büyük yapısıdır.'],
   opts:[
     ['The new library opened last month is the largest building in the city.','Fragment: "opened" yüklem gibi duruyor; ilgi bağlacı eksik — cümlenin iskeleti çökmüş.'],
     ['The new library, which opened last month, is the largest building in the city.','DOĞRU. Virgüllü ilgi cümleciği araya bilgi koyar; ana yüklem "is" yerli yerinde.'],
     ['The new library that opened last month, is the largest building in the city.','"that" tanımlayıcıdır ve virgülle buluşamaz; ayrıca özne-fiil arasına virgül giremez.'],
     ['The new library, that opened last month, is the largest building of the city.','Virgüllü yapıda THAT yasak: which/who gelir.'],
     ['The new library which opened last month is being the largest building in the city.','"is being" statif fiille kurulamaz; ayrıca "which opened" virgülsüz kalmış.']
   ],
   ans:1, ev:['s17-f0'],
   why:'"Geçen ay hizmete giren" bir ARA BİLGİDİR: İngilizcede virgüllü ", which opened last month," ile kurulur. Ana cümle "the new library IS the largest building…" olarak akar. C ve D\u2019nin hatası, THAT\u2019in virgülle imkânsız buluşmasıdır.',
   strat:'Türkçedeki "-en/-an" sıfat-fiil öbeğini çevirirken önce GÖREVİNE bakın: tanımlıyor (virgülsüz that/which) mu, araya bilgi mi (virgüllü , which ,)? İki durumun da kuralları farklıdır: virgül varsa that kesinlikle elenir.'},
  {id:18, part:'B', cat:'edat',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'"-se de" = although/even though + CÜMLE; despite/in spite of İSİM ister; "ama" bağlacı İngilizcede ikinci kez kurulamaz.',
   facts:['Sabahları erken kalkmayı sevmese de kahvaltıyı asla atlamaz.'],
   opts:[
     ['Despite he doesn\u2019t like getting up early, he never skips breakfast.','despite + cümle ✗: "Despite his dislike of…" ya da "Although…" gerekirdi.'],
     ['In spite of he dislikes getting up early, but he never skips breakfast.','İki ölümcül hata: in spite of + cümle ✗ ve çifte bağlaç (…, but) ✗.'],
     ['Although he doesn\u2019t like getting up early, but he never skips the breakfast.','"but" fazlalığı (çifte bağlaç) + öğün isminde fazlalık article ("the breakfast" ✗).'],
     ['Although he doesn\u2019t like getting up early, he never skips breakfast.','DOĞRU. although + cümle; tek bağlaç; breakfast articlesız.'],
     ['Even though he doesn\u2019t like to get up early, he never skips a breakfast.','"a breakfast" article hatası: öğün isimleri articlesız kullanılır.']
   ],
   ans:3, ev:['s18-f0'],
   why:'"sevmese de" karşıtlık cümleciği ister: "Although he doesn\u2019t like getting up early". Türkçedeki "ama" yüklemin başındaki "de" ekinden taşınmamalıdır — İngilizcede tek bağlaç yeter. D üç kuralı da (bağlaç formu, tek bağlaç, articlesız öğün) doğru taşır.',
   strat:'"-e rağmen / -se de" çevirirken form denetimi yapın: cümle mi geliyor? → although/even though; isim mi? → despite/in spite of. Ardından iki mikro-kural: çifte bağlaç yasak (although …, but ✗) ve öğün isimleri articlesız (have breakfast, skip lunch).'},
  {id:19, part:'B', cat:'zaman',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'"vardığında … çoktan bitirmişti": by the time + past → past perfect (+ already).',
   facts:['Ekip sahaya vardığında, diğer araştırmacılar kazıyı çoktan bitirmişti.'],
   opts:[
     ['When the team arrived at the site, the other researchers finished the excavation.','Past perfect düşmüş: "bitirmişti" öncelik bildirir, "finished" eşzamanlı okunur.'],
     ['By the time the team arrived at the site, the other researchers have already finished the excavation.','Zaman kayması: have finished şimdiki-perfekt; referans noktası geçmiş.'],
     ['By the time the team arrived at the site, the other researchers had already finished the excavation.','DOĞRU. by the time + past, had already + V3 — öncelik aynası.'],
     ['The team arrived at the site after the other researchers have finished the excavation.','"have finished" yine şimdiki-perfekt: geçmiş anlatımla çelişir.'],
     ['When the team would arrive at the site, the other researchers had already finished the excavation.','"would arrive" ✗: zaman bağımlı cümlesinde would da will gibi yasaktır.']
   ],
   ans:2, ev:['s19-f0'],
   why:'Türkçedeki "-mıştı" işareti past perfect\u2019in ta kendisidir: varış anından ÖNCE tamamlanmış iş. "By the time + past simple, had already + V3" kalıbı bu önceliği İngilizceye taşır.',
   strat:'TR→EN\u2019de "-mıştı" görürseniz hemen past perfect kurun; "-dığında" + geçmiş görürseniz by the time/when seçimini yapın (öncelik vurgusu varsa by the time). Bağımlı cümlede would/will gördüğünüz şıkkı anında elin.'},
  {id:20, part:'B', cat:'nuan',
   stem:'Yukarıdaki Türkçe cümlenin İngilizce çevirisi aşağıdakilerden hangidir?',
   clue:'"Ne olursa olsun" = whatever happens: özne zorunlu (it yok!), will yalnız ana cümlede.',
   facts:['Ne olursa olsun, verdiğim sözü tutacağım.'],
   opts:[
     ['Whatever happens, I will keep my word.','DOĞRU. whatever + özne (happens), ana cümlede will; "verdiğim söz" = my word.'],
     ['No matter what happens, but I will keep my word.','Çifte bağlaç: "no matter what" ile "but" aynı anda kurulamaz.'],
     ['Whatever it will happen, I will keep my word.','İki hata: fazlalık "it" öznesi ve bağımlı cümlede will.'],
     ['However happens, I will keep my promise word.','"However" özne ister (However hard it is); "promise word" kalıp değil.'],
     ['Whatever happens, I would keep my word.','"would" kipi: kesin gelecek niyeti (tualeceğim) will ister.']
   ],
   ans:0, ev:['s20-f0'],
   why:'"Ne olursa olsun" bağımlı bir ödün vermezlik cümleciğidir: "Whatever happens" — öznesiz "whatever happens kurulamaz" ve will\u2019i bağımlı cümleye sokmak yasaktır. Ana cümledeki kesin niyet "will keep my word" ile kurulur.',
   strat:'"Ne olursa olsun / her ne olursa" ailesini üç kuralla çevirin: (1) whatever + özne + fiil; (2) bağımlı cümlede will/would yok; (3) "ama" bağlacı Türkçedeki vurgudan taşınamaz. Bu üç kural, bu tip sorulardaki çeldiricilerin tamamını üretir.'}
];

window.__VERI_OK = 1;
/* VERI-SONU: Bu satırı görüyorsanız veri.js tamamdır. */
