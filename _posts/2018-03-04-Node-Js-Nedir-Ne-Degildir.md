---
layout: post
title:  "Node JS Nedir ? Ne Değildir ?"
author: erkan
categories: [ NodeJS ]
image: assets/images/nodejs.jpg
featured: true
id: 15
---

Node Js'le ilgili, kendim öğrenirken siz değerli okurlarıma da anlatmak istediğim notlarıma bugün başlıyorum. Öncelikle; nedir, ne değildir ile Node Js kavramını ele almak istedim.

Node Js ya da diğer bilinen adıyla Node javascript dilini çalıştıran bir çalışma ortamıdır(runtime environment).

Node Js bir programlama dili değildir. Yani onu bir programlama diliyle kıyas etmeniz, en hafif tabiriyle cahillik olarak görülebilir. O nedenle ortamlarda bu gibi tartışmalara girmeyiniz, girenleri uygun bir dille bilgilendiriniz.

Node Js bir Javascript framework'ü de değildir, yani onu Angular, React vs ile de kıyas etmekten imtina edin.


### Javascript dili normalde nasıl çalışıyor ?

Yıllar yıllar önce, uzak bir galakside Javascript adında bir dil tasarlanmıştır. Bu programlama dili, isim benzerliğine rağmen Java dilinden çok farklı bir yapıya sahiptir. Java her yerde çalıştırılabilen object oriented paradigmasına sahip bir dilken, Javascript sadece web tarayıcılarında çalışabilen bir programlama diliydi.

Javascript dili tarayıcılarda var olan, her tarayıcının kendi tasarladığı JS Engine'lar sayesinde işlevlerini yürütebilmektelerdir. Chrome'un v8, Firefox'un SpiderMonkey, Microsoft Edge'in Chakra'sı en çok bilinen JS Engine'lerdir. Bu Javascript motorları kodu yorumlarlar ve bilgisayarın anlayacağı makine koduna çevirerek o kodu çalışmasını sağlarlar.

### Node nasıl ortaya çıktı?

2009 yılında Ryan Dahl adında birinin aklına, çok sevdiği Javascript'i tarayıcıdan bağımsız her ortamda kullanma fikri gelmiş. Github'da açık kaynak olarak mevcut olan Google Chrome'un v8 motorunu inceleyen ve bu projeyi kendi yazdığı c++ koduyla harmanlayan abimiz, masaüstünde javascript kodu çalıştırabilen bir program üretmiş. Ve programın adını Node koyarak bize bu yeni dünyanın kapılarını aralamış.

### Ne işe yarıyor ? Neden önemli ?

Node Js ile birlikte Javascript dili kullanarak backend tarafında da kullanılabilir bir hale geldi. Javascript dilinin karakteristik özellikleri ve diğer klasik backend dillerine karşı bazı üstünlükleri sayesinde, Node Js ile çok hızlı çalışan ve son derece ölçeklenebilir projeler üretmek mümkün oldu.

#### Avantajları
* Javascript bilen frontendçilerde backend tarafındaki kodları daha rahat yorumlayabilmesi.
* Açık kaynak dünyasının en geniş ekosistemlerinden birine sahip olması sayesinde ihtiyacınız olan modülü rahatça elde edebiliyor olmak.
* Başlamak için kolay ve hızla öğrenilebilir olması.
* Veri odaklı yada real-time uygulamalarda çok başarılı olması
* Non-Blocking(Asenkron) mimarisi nedeniyle çok sayıda isteğe çok kısa sürelerde cevap vererek klasik dillere oranla çok daha efektif bir çözüm sağlaması.

#### Dezavantajları
* Cpu odaklı, yani işlem gücü yüksek uygulamalarda, single threaded(tek thread ile çalışan) yapısından dolayı başarısızdır. Diğer isteklerin bekleme süresi uzayabilir.
* Sytax'ının diğer dillere oranla okunmasının kolay olmaması. (iç içe yazılan callback fonksiyonların okunurluğu düşürmesi vs.)