---
layout: post
title:  "DFA İndirgenmesi (DFA Minimization)"
author: erkan
categories: [ Bilgisayar Bilimleri ]
image:
layout: post
id: 1
---

Bu yazımda Bilgisayar Bilimlerinin temel derslerinden olan Biçimsel Diller ve Soyut Makineler dersi için önemli bir konu olan DFA makinesinin optimizasyonunu anlatacağım.

## DFA Nedir?
-----

DFA yani Deterministic Finite Automata sonlu sayıda duruma sahip ve her durumdan belirlenen alfabenin tüm harfleri ile bir çıkışa sahip makine türüdür. DFA'lar durum sayıları azaltılarak indirgenebilir ve daha ekonomik ve hızlı çalışan makineler elde edilebilir. Bu açıdan DFA optimizasyonu önemli bir konudur.

## DFA Nasıl İndirgenir ?
-----

Myphill-Nerode Teoremi İle İndirgeme

Algoritması
Girdi:	DFA
Çıktı:	Minimized DFA

* Adım 1	İlk olarak başlangıç durumundan başlayıp erişilemeyen durum varsa o durumu direkt iptal et.
* Adım 2  Tüm durum çiftleri için bir tablo oluştur(Qi, Qj)
* Adım 3	Çiftleri kontrol et: Eğer durumlardan biri kabul biri red durumuysa o durumu işaretle.
(Durum çifti=(Qi,Qj) => Qi ∈ F & Qj ∉ F)
//Unutmadan söyleyeyim burada işaretlediğimiz çiftler DFA'da birleşmesi mümkün olmayan durum çiftleridir.
* Adım 4	Kalan durum çiftlerine sırayla alfabeninin tüm harflerini uygula, eğer aynı harf için gittikleri
sonuçlardan biri kabul biri red çıkarsa o çifti de işaretle.(Yani ulaşılan sonuç çifti daha önce tabloda
işaretlenmişse)

İşaretlenemez durumlar kalana kadar 4. adımı tekrar et −

Eğer işaretlenmemiş çiftler kalırsa, bu DFA minimize edilebilir demektir.

*	İşaretlenmemiş çiftleri tek bir durum olarak birleştir, ve yeni oluşan DFA'yı çiz.
// Burada dikkat edilmesi gereken nokta, bir durum 2 farklı durum ile birleşebiliyorsa,
// 3'ü birleşerek tek bir durum oluşturmalıdır.
