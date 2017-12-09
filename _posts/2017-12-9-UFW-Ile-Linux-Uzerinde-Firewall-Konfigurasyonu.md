---
layout: post
title: "UFW İle Linux Üzerinde Firewall Konfigürasyonu"
author: Erkan Ceylan
id: 9
coverPhoto: https://user-images.githubusercontent.com/9788440/33800378-1c5b100e-dd3f-11e7-823a-d57838496c2f.jpg 
---
![Photo of Wall - Main](https://user-images.githubusercontent.com/9788440/33800378-1c5b100e-dd3f-11e7-823a-d57838496c2f.jpg)
Firewall yani güvenlik duvarı dediğimiz yapı temelde, bilgisayarımızın ya da sunucumuzun internet dünyasında güvenli hale 
gelmesini sağlayan kurallar setidir. Belirli portların açılması, kapatılması, sınırlanması, ip bazlı engelleme vs pekçok
spesifik kural tanımlanabiliriz.

Linux tabanlı işletim sistemlerinde güvenlik duvarı varsayılan olarak iptables’dır. Ancak iptables Linux’e çok aşina olmayan 
kullanıcılar için biraz komplike olabilir. Benim gibi Linux acemisi iseniz firewall ayarlarını yapmak için ufw komut setini 
kurup kullanabilirsiniz. Ufw yani (uncomplicated firewall) karmaşık olmayan güvenlik duvarı, basit ve anlaşılır komutlarla 
güvenlik duvarımızı konfigüre etmemizi sağlar. Esasında yaptığı iş, iptables için basit bir arayüz oluşturması.

![Photo of Computer](https://user-images.githubusercontent.com/9788440/33800403-7725f3b4-dd3f-11e7-921b-eae5b09348f9.jpeg)

Ubuntu için ufw kurulum komutu:

```{r, engine='bash', count_lines}
$ sudo apt-get install ufw
```
Güvenlik duvarında tanımlanmış olan kural setini listelemek için:

```{r, engine='bash', count_lines}
$ sudo ufw status verbose
```
Linux işletim sistemlerinde varsayılan olarak tüm portlar kapalı olduğu için firewall da aktif değildir. Bu nedenle yukaridaki komutu çalıştırdığınızda aşağıdaki sonucu almış olabilirsiniz.

Firewall’ı aktive etmek için ise bu komutu yazıyoruz.

```{r, engine='bash', count_lines}
$ sudo ufw enable
```
Firewall’ı pasif hale getirmek için ise bu komutu yazmanız yeterli.

```{r, engine='bash', count_lines}
$ sudo ufw disable
```
Güvenlik duvarımızda ufw ile yeni kural tanımlamak ise çok basit. 

```{r, engine='bash', count_lines}
$ sudo ufw [allow  veya deny] [port numarası ya da servis ismi]

Kuralı tanımlama deseni temel olarak böyle. Allow ile belirttiğimiz porta erişime izin verir, deny ile erişimi engelleriz. Port numarası yerine http gibi sistem üzerinde tanımlı servis kısaltmalarını da yazabiliriz.

Belirli port aralığına izin vermek için aşağıdaki komut kullanılır.

```{r, engine='bash', count_lines}
$ sudo ufw allow 1900:2000/tcp

```{r, engine='bash', count_lines}
$ sudo ufw allow from 192.168.5.10

Bir portu her ip ye açmak için.

```{r, engine='bash', count_lines}
$ sudo ufw allow to any port 22

Ssh izin ver kuralını siler

```{r, engine='bash', count_lines}
$ sudo ufw delete allow ssh

```{r, engine='bash', count_lines}
$ sudo ufw delete allow 22/tcp



Kuralları numaralandırılmış olarak listeleme komutu

```{r, engine='bash', count_lines}
$ sudo ufw status numbered

Listedeki 2 numaralı kuralın kaldırılması komutu

```{r, engine='bash', count_lines}
$ sudo ufw delete 2

Firewall’daki tüm kuralların silinmesi

```{r, engine='bash', count_lines}
$ sudo ufw reset


# Kaynakça
-----
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-14-04
