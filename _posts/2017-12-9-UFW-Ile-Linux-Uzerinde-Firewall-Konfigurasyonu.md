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

```bash
$ sudo apt-get install ufw
```
Güvenlik duvarında tanımlanmış olan kural setini listelemek için:

```bash
$ sudo ufw status verbose
```
Linux işletim sistemlerinde varsayılan olarak tüm portlar kapalı olduğu için firewall da aktif değildir. Bu nedenle yukaridaki komutu çalıştırdığınızda aşağıdaki sonucu almış olabilirsiniz.

```bash
Output:
Status: inactive
```
Firewall’ı aktive etmek için ise bu komutu yazıyoruz.

```bash
$ sudo ufw enable
```
Güvenlik duvarımızın aktif hale geldiğini aşağıdaki çıktıdan anlayabilirsiniz.
```bash
Output:
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW IN    Anywhere
```

Şuan bunu yazmanızı tavsiye etmem ama ileride firewall’ı pasif hale getirmek isterseniz bu komutu yazmanız yeterli.

```bash
$ sudo ufw disable
```
Artık, güvenlik duvarımızda ufw ile yeni kurallar tanımlamaya başlayabiliriz. 

```bash
$ sudo ufw [allow  veya deny] [port numarası ya da servis ismi]
```
Kuralı tanımlama deseni temel olarak böyle. Allow ile belirttiğimiz porta erişime izin verir, deny ile erişimi engelleriz. Port numarası yerine http gibi sistem üzerinde tanımlı servis kısaltmalarını da yazabiliriz.

Belirli port aralığına izin vermek için aşağıdaki komut kullanılır. Örnek olarak 1900 ile 2000 arası tüm portları aktif ediyoruz.

```bash
$ sudo ufw allow 1900:2000/tcp
```

```bash
$ sudo ufw allow from 192.168.5.10
```
Bir portu internetten gelen isteğe açmak için ise alttaki komutu kullanmalısınız.

```bash
$ sudo ufw allow to any port 22
```
Kural silmek için delete anahtar sözcüğü kullanılır. Örnek olarak ssh bağlantısına izin veren kuralı silelim

```bash
$ sudo ufw delete allow ssh
```
Port numarası ile kural silelim.
```bash
$ sudo ufw delete allow 22/tcp
```


Kuralları numaralandırılmış olarak listeleme komutu

```bash
$ sudo ufw status numbered
```
Çıktımız ise bu şekilde;
```bash
Numbered Output:
Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 22                         ALLOW IN    15.15.15.0/24
[ 2] 80                         ALLOW IN    Anywhere
```

Listedeki 2 numaralı kuralın kaldırılması için gerekli komut;

```bash
$ sudo ufw delete 2
```
Firewall’daki tüm kuralların silmek / firewallı resetlemek istersek ise reset komutu işimizi görecektir.

```bash
$ sudo ufw reset
```

Bugünde ufw ile Linux tabanlı sistemlerde güvenlik duvarı yapılandırma komutlarını öğrendik. Sorularınız için benimle iletişebilirsiniz. Esen kalın efenim...

# Kaynakça
-----
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-14-04
