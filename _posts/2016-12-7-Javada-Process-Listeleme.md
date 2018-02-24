---
layout: post
title:  "Java ile Process Listeleme"
author: erkan
categories: [ Yazılım ]
image: https://user-images.githubusercontent.com/9788440/28365107-dc581d46-6c8f-11e7-8eb9-8305b03ab5b5.jpg
id: 3
---
Merhabalar bu yazımda Java'da işletim sistemi üzerinde çalışan process bilgilerini listelemeyi göstereceğim.
![java-logo](https://user-images.githubusercontent.com/9788440/28365107-dc581d46-6c8f-11e7-8eb9-8305b03ab5b5.jpg)

## Process Nedir ?
-----
Process(işlem, süreç..) bir işletim sistemi üzerinde çalışan en küçük işlem parçası denebilir. İşletim sistemi üzerinde koşan her program ayrı bir processtir. Ancak her program birden fazla process ile de ifade edilebilir. Her process kendi adres alanında çalışır ve bu sayede hiçbir process birbirine müdahale edemez.

İki çeşit process oluşturma yöntemi vardır;

* Fork Ederek: Parent(ana) process Child(yavru) processi oluşturur, Child process, Parent processten kalıtım alır ve onun özelliklerini taşır.

* Execute Ederek: Bu yöntemde oluşturulan Child(yavru) process Parent'inden tamamen bağımsız şekilde çalışır.

## Java'da Process'lerin Listelenmesi
-----

```java
// Çalışan processlerin görüntülenmesi
 private static void showRunningProcesses()
 {
     try
     {
         String line;

         //Windows işletim sistemi için
         Process p = Runtime.getRuntime()
         .exec(System.getenv("windir") +"\\system32\\"+"tasklist.exe");
         //Linux makineler için
         //Process p = Runtime.getRuntime().exec("ps -e");
         BufferedReader input = new BufferedReader(new InputStreamReader
            (p.getInputStream()));
         System.out.println("\nÇalışan Prosesler\n-----------------------");
         while ((line = input.readLine()) != null)
         {
             System.out.println(line); //<-- Parse data here.
         }
         input.close();
     }
     catch (Exception err)
     {
         err.printStackTrace();
     }
 }
```
