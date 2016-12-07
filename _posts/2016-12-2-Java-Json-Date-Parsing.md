---
layout: post
title: Javada Json İçerisinden Date Bilgisi Elde Etmek
author: Erkan Ceylan
id: 2
---

Bu yazımda karşılaştığım ufak bir problemin basit çözümünü paylaşacağım.

## Problem Ne?
-----
Bir android uygulama için 3.parti bir API'den Json veriler çekip, parse edip uygulamamda kullanıyordum. Json da tarih bilgisi 2016-12-14T11:49:35Z
gibi bir formatta geldi. Buradaki T harfi arkasından saat bilgisi geleceğini Z harfi ise saatin GMT zaman dilimine göre kaydedildiğini ifade etmekte.
Json'u kullanacağım uygulama bir android uygulama olduğu için zaman bilgisini Date tipinde bir nesneye parse etmem gerekti.

## Çözüm
-----

```java
//Cihaza ait lokal zaman dilimini bulalım
Calendar cal = Calendar.getInstance();
TimeZone tz = cal.getTimeZone();

//Parse işlemi
String dateStr = jsonObject.getString("date");
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
sdf.setTimeZone(tz);
Date dateObject = sdf.parse(dateStr);
```
