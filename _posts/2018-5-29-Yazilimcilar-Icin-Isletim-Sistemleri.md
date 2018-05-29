---
layout: post
title:  "Yazılımcılar İçin İşletim Sistemleri"
author: erkan
categories: [ Yazilim ]
image: assets/images/os.jpeg
featured: false
id: 18
---
Biz yazılımcılar için işletim sistemleri amaç değil araçtır. Yazdığımız kodun donanımı kullanmasına yardım eden program olarak görürüz. Bu yüzden detaylarına çok inmeyiz, çünkü  karmaşık sistemlerdir, ve programlama dili öğrenmek gibi kolay değildir. 

Bilgisayar Mühendisliği lisans programlarında bir dönemlik derste gösterilemeyecek kadar kapsamlı, çok fazla derinliği olan bir konudur işletim sistemleri. Her yazılım geliştiricinin hakim olması gereken belirli özelliklerini soru cevaplarla anlatmak istedim. İyi okumalar.

# İşletim Sistemi Nedir ?

İşletim Sistemi, bilgisayar donanımını yöneten ve üzerinde çalışan programlar için servisler sağlayan bir takım yazılımlardır. 

* Donanımın komplekliğini azaltır.
* Kaynakları(bellek, cpu gibi) yönetir.
* İzolasyon ve koruma sağlar.

# Process Nedir ?

Process basitçe çalışmakta olan bir programdır. Biz text dosyası olarak bir program yazarız, ve çalıştırdığımızda, programda belirttiğimiz görevleri yerine getiren bir process haline gelir.

Program belleğe yüklendiği anda bir process olmuş olur. 

Process 4 bölümden oluşur; stack, heap, text, data.

* `Stack:` Geçici veriyi tutar; fonksiyon parametreleri, dönüş adresleri, lokal değişkenler gibi.

* `Heap:` Program çalışırken bellekten yer tahsis edilen dinamik değişkenlerin bulunduğu bölüm.

* `Text:` Program Counter'ın o an icra edilmesi için gösterdiği değeri ve işlemci register'larındaki içeriği tutar.

* `Data:` Global ve Static değişkenleri tutar.

# Process’in Durumları Nelerdir ?

Process'lerin 5 temel durumu vardır.

![Proces-Status-Image](https://user-images.githubusercontent.com/9788440/40634972-688420be-6300-11e8-9cb7-d38fd94b0b5f.png)

* `Start:` Process başladığında ya da oluşturulduğundaki durum. 

* `Ready:` Process'ler işletim sisteminin onları çalıştırabilmesi için işlemciye atanmayı beklerler. Bu durum Ready durumudur. Bir process Start durumundan hemen sonra veya çalıştırılırken scheduler tarafından bir başka process'in çalıştırılması için kesmeye maruz kalmışsa Ready durumuna geçer.

* `Running:` Process'in scheduler tarafından işlemciye atılıp çalıştırılmaya başlandığı durumdur.

* `Waiting:` Process kullanıcı girişi veya erişmek istediği dosyanın uygun olmasını beklemek gibi beklemeye geçerse Waiting durumuna geçer.

* `Terminated:`  Process'in çalıştırılmasının bittiği ya da işletim sistemi tarafından kapatıldığı durumdur. Process ana bellekten silinmek üzere beklemeye geçer.


# Thread Nedir ?

`Thread:` İş parçacığı ya da iş akışı. 

Bir process'in içinde en az 1 adet thread vardır. Birden fazla, eş zamanlı çalışan thread de olabilir. Hiçbir thread process dışında çalışmaz. Her thread farklı iş akış kontrolünü ifade eder. Network server'larında ve web server'larda başarılı bir şekilde kullanılırlar. Ayrıca çok işlemcili ortak bellekli sistemlerde koşan uygulamaların paralel yürütülmesi için uygun bir temel sağlar.

> Eğer process bir kol olsaydı, thread’ler koldaki parmaklar olurdu. -Anonim

* Ortak kaynaklar: code, data, files.
* Her thread'in kendine ait kaynakları: registers, stack.

![Thread-Image](https://user-images.githubusercontent.com/9788440/40634968-654de2c2-6300-11e8-99ff-cf819d5f5f75.jpeg)

* Aynı process üzerinde çalışan thread'ler kaynakları paylaşırlar.

* Thread = Lightweight Process

* Thread'ler paralel çalışarak uygulama performasını iyileştirir.

* Thread'ler overhead'i(işlemcide çalışan işlem değişim maliyeti) azaltarak, işletim sistemi performansını artıran yazılım geliştirme yaklaşımıdır.

# Thread’in Process’e Göre Avantajları Nelerdir ? 

* `Context Switching Time`'ı (yani işlemci üzerinde çalışacak işlemin(thread yada process) değiştirilmesi sırasında geçen süre) minimize eder. Aynı proses içindeki iki thread bazı memory alanlarını ortak kullandığından dolayı, işlemci aynı proses içindeki iki thread arasında el değiştirirken oluşan Context Switch maliyeti işlemcinin iki farklı proses arasında el değiştirme maliyetinden küçüktür.
* Process içinde çalışarak eşzamanlılık sağlar.
* Oluşturulmaların process'in oluşturulmasına oranla çok daha ekonomiktir.
* Çok işlemcili mimarilerin daha büyük ölçekli ve verimli kullanımına olanak sağlar.


# Scheduling Nedir ? 

Scheduling işlemi, belirli bir stratejiye dayanarak, işlemci üzerinde koşmakta olan ve kendisine ayrılan süre dolan thread'i uyutarak, koşmaya hazır başka bir thread'e işlemciyi vermesidir.

* Scheduler zamanı dolan thread'i uyuturken onun state'ini (register, SP - stack pointer, PC - program counter, TLB - memory map, vb) kaydedip, koşmaya hazırlanan thread'in state'ini yükler, bu işlem Context Switch olarak adlandırılır ve maliyetli bir işlemdir.

* Process Scheduling, işletim sisteminin önemli bir parçasıdır. İşletim sistemleri, aynı anda birden fazla işlemin yürütülebilir belleğe yüklenmesine izin verir ve yüklü işlem, zaman çoğullamayı kullanarak CPU'yu paylaşır. 

* İşletim sistemi, Proses Zamanlama Sıralarında tüm Proses Kontrol Bloklarını (PCB) tutar. İşletim sistemi, işlem durumlarının her biri için ayrı bir sıra tutar ve aynı yürütme durumundaki tüm işlemlerin PCB'leri aynı sıraya yerleştirilir. Bir işlemin durumu değiştiğinde, PCB'sinin mevcut kuyruğuyla bağlantısı kesilir ve yeni durum kuyruğuna taşınır.

* Bir işlemin durumu değiştiğinde, PCB'sinin mevcut kuyruğuyla bağlantısı kesilir ve yeni durum kuyruğuna taşınır.

# İşletim Sistemlerinde Bulunan Scheduling Kuyrukları Nelerdir ?

İşletim sisteminde aşağıdaki önemli scheduling(çizelgeleme) kuyrukları bulunur;

* `Job Queue(İş Kuyruğu):` Bu kuyruk sistemdeki tüm process'leri tutar.

* `Ready Queue(Hazır Kuyruğu):` Bu kuyruk ana bellekte bellekte bulunan, ready ya da waiting durumundaki tüm process'leri tutar.

* `Device Queues:` Bir I/O (giriş çıkış birimi) aygıtının kullanılamaması nedeniyle engellenen işlemler bu kuyruğu oluştururlar.

İşletim sistemi, her bir sırayı yönetmek için farklı algoritmalar kullanabilir (FIFO, Round Robin, Priority, vb.). 

İşletim sistemi zamanlayıcısı(scheduler), sistemde işlemci çekirdeği başına yalnızca bir girişe sahip olabilen, ready(hazır) ve run(çalışan) kuyrukları arasındaki işlemlerin nasıl taşınacağını belirler.


# İşletim Sisteminde Bellek Yönetimi Nasıl Gerçekleşir ? 

Bellek Yönetimi, işletim sisteminin birincil belleği(RAM) yönetme fonksiyonelliğidir. İşlem sırasında, process'leri ana bellek(RAM) ve disk(ROM) arasında ileri geri hareket ettirir. Çalışan process RAM'e alınırken beklemeye geçen process'ler genelde ROM'a aktarılır.

* Bellek Yönetimi herhangi bir process'e tahsis edilsin ya da edilmesin her bellek birimini izler.
* Process'ler için ne kadar bellek ayrılması gerektiğini kontrol eder.
* Hangi process'e hangi anda bellek tahsis edileceğini ayarlar.

Process Address Space: Process Adres Alanı, mantıksal adresler kümesidir. Örneğin, 32 bit adresleme kullanılıyorsa, adresler 0 ile 0x7fffffff arasında değişebilir.

* İşletim sistemi, process'e bellek ayırma işlemi sırasında mantıksal adresleri fiziksel adreslerle eşler. 

Bir programda bellek ayrılmadan önce ve sonra üç tip adres kullanılır:
1- `Sembolik Adres:` Kaynak kodda kullanılan adresler. Değişken adları, sabitler ve komut etiketleri, sembolik adres alanının temel öğeleridir.
2- `Göreceli(Relative) Adres:` Derleme esnasında, derleyici sembolik adresleri göreceli adreslere çevirir.
3- `Fiziksel Adres:` Yükleyici, program ana belleğe yüklendiği zaman fiziksel adresleri oluşturur.

* Sanal ve fiziksel adresler, derleme zamanı ve yükleme zamanında adres bağlama şemaları için aynıdır, ama çalıştırma zamanında adres bağlama şemasında farklıdır.

* Bir program tarafından oluşturulan tüm mantıksal adresler kümesi, mantıksal adres alanı olarak adlandırılır. Mantıksal adreslere karşılık gelen tüm fiziksel adresler kümesi de fiziksel adres alanı olarak adlandırılır.



