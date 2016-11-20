---
layout: page
title: Contact
permalink: /contact/
---


## İletişim

<div id="formBlock">
       <form id="someForm">
           <input class="feedback-input" type="text" id="name" placeholder="Adınız"><br/>
           <input class="feedback-input" type="email" id="email" placeholder="Email Adresiniz"><br/>
           <textarea class="feedback-input" id="comments" placeholder="Mesajınız"></textarea><br/>  
           <!-- Honeypot for spams
           <input type="text" name="_gotcha" style="display:none" />-->
           <input class="feedback-input" type="submit" value="GÖNDER">
       </form>
</div>

<div id="thankyouBlock" style="display:none">
       <p>
           Mesajınız başarıyla iletildi, değerli görüşleriniz için çok teşekkürler.
       </p>
</div>

   <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
   <script src="/js/sendSubmission.js"></script>
