---
layout: post
title:  "Mobil Turist Rehberi Uygulamam Yayında"
author: erkan
categories: [ Yazilim ]
image: assets/images/bitirme-main.png
featured: false
id: 17
---

Sakarya Üniversitesi'ndeki son günlerimi yaşamanın verdiği sevinçle sözlerimi, siz değerli okuyucularımı can-ı gönülden selamlayarak başlamak istiyorum. Son sınıf bitirme projesini de tamamlamış bulunmaktayım. Google Play Store'da yerini alan uygulamı indirerek bana destek olabilirsiniz.

![Play-Store](https://github.com/erkanceylan/blog/blob/gh-pages/assets/images/play_store.png)

### Ne amaca hizmet şimdi bu ?

Uygulama adından da anlaşılacağı üzere seyahat edenlere yönelik bir uygulama. Trip planner tarzı bir uygulama. Fazlası da vardır eksiği de vardır tabi. 

Uygulamada, Dünya üzerinde gidilebilecek neredeyse her ülkeye, her şehre ait bilgiler, oralarda bulunan tarihi ve turistik yerlere ait bilgiler resimler, videolar bulunuyor. Kullanıcıya özel bir deneyim sağlamayı amaçlayan uygulama, kullanıcıların seyahat planı oluşturmalarına olanak sağlıyor.

## Nasıl mı yaptım ?

Proje iki aşamadan oluşuyor. Android bölümü ve verilerin tutulduğu server organizasyonu.

Öncelikle ilk karşılaştığım problem bu verileri nerden bulacağım oldu. 

### Where the hell is data ?

Hemen free public api'lere baktım. Sadece 2 tane adam akıllı API vardı. Bunlardan biri TripAdvisor'un, diğeri ise SygicTravel adlı bir ticari uygulamaya ait. TripAdvisor eminim muazzam bir dataya sahiptir ama ne kadar mail atsam da başvuru yapsam da ağlasam da, bir tane bile API Key vermediler, sallamadılar bile. İkinci alternatif üzerinden gittim bende. SygicTravel'ın [şu adres](https://travel.sygic.com/en/b2b/api-key?product=api)teki linkten başvuru yaptım. Ertesi gün kısıtlı erişimli bir API Key gönderdiler. Onlarda kendileri ticari uygulama olmaları yanında API verilerini paketler halinde para karşılığı satıyorlarmış. Benim işimi görecek olan pakette 45€. Fakiriz ama salak değiliz. 

Aylık 1000 istek hakkı sağlayan API Key'den ne kadar veri elde edebileceğimi test etmek için bir script yazdım ve çektiğim verileri json formatında kendi bilgisayarıma kaydettim. API'den yaklaşık 4 bin sorguya cevap aldığımı farkettim. Adamlar herhangi bir denetleme mekanizması yapmamışlar. API Key'den gelen sorgu sınırı aşarsa ertesi gün mesai saatlerinde durumu farkediyorlar ve API Key'iniz askıya alındı diye mail gönderiyorlar. Biz de Türk'üz hemen fake mail hesaplarıyla 2-3 key daha istedim. Verdiler. İhtiyacım olan veriyi bu şekilde elde ettim. Toplam 200bine yakın istek attım bu süreçte. 118 bin place(gezilecek yer), 9 bin şehir, 216 ülke verisini elde ettim ki bu veriler gayet makul ve yeterli.

### Server kısmı

Bu kadar verinin mobil uygulamayı şişireceği kanısıyla verilerin bir server'dan uygulamaya akmasına karar verdim. 

Malum öğrenciyiz. Hemen Amazon'un 1 yıl boyunca ücretsiz AWS EC2 serverlarından kiraladım. Eğer ilk defa bunu benden duyduysanız hiç durmayın. [Şu link](https://aws.amazon.com/)ten sizde hesap açın hiçbirşey yapmasanız en azından VPN filan kurarsınız.

Server'da çalışacak API'yı son yılların popüler uygulaması Node Js ile yapmak istedim. Api, sürekli küçük çaplı veri akışının olduğu I/O odaklı bir yapı. Node Js'in karakteristiği gereği I/O odaklı uygulamaları başarılı bir şekilde gerçekleştirmek mümkün.

Express kütüphanesiyle gelen Http isteklerine cevaplar dönen fonksiyonlar yazıyorsunuz ve API'ınız hazır.

Veritabanı olarakta son yılların yine gözde ölçeklenebilir NoSql veritabanı MongoDB'yi tercih ettim. MongoDB ve Node Js'i pekçok kez yanyana görmüşsünüzdür zaten. Birbirini seven iki yazılım geliştirme ortamı. Node Js'te MongoDB uygulamaları için de Mongoose kütüphanesini kullandım. Basit bir yapısı var veri kayıt, düzenleme, getirme, arama gibi işlemleri de bu şekilde kotarmış oldum. Api'la ilgili ise tek sıkıntı belli bir süre sonra(15-20 saat gibi) otomatik kapanmasıydı. O sorunu da "forever" kütüphanesi ile çözdüm.

### Android kısmı

Android Studio 3 çok gelişmiş bir IDE'ymiş. Beni gibi tasarımdan pek anlamıyorsanız, mobil uygulama tasarımında çok zorlanırsınız. Ama Android Studio 3 bu konuda güzel bir menüye sahip çoğu şeyi sürükleyerek yada menülerden halledebiliyorsunuz. İleri seviye bir tasarım beklemeyin tabi ne kadar uğraşsanız da ilkel kalıyor biraz. 

Android'in kodlama kısmına gelirsek. Android uygulamalar Activity'ler yani ekranlardan oluşur. Önce ekranların tasarımını yaptıktan sonra, ihtiyacım olan asenkron server sorguları yapan bir sınıf oluşturmaktı. Android'in asenkron sorgu yapan kendi kütüphanesi de var ancak daha kolay kullanılan ve güçlü bir kütüphane olarak OkHttp çok kullanışlı. Ben de bu kütüphaneden yararlandım.

### Son söz

Üniversite hayatımın iyi kötü sonuna geliyorum. Acı tatlı pekçok anım oldu. Onlarca insan tanıdım. Onlarca dostum oldu. Birçok deneyim yaşadım. Hayatımın aşkını burda buldum. Aç kaldım, parasız kaldım ama Sakarya bana çok şey kattı...
