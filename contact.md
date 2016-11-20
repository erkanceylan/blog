---
layout: page
title: Contact
permalink: /contact/
---


## İletişim

<div id="formBlock">
       <form id="someForm">
           <label for="name">Name:</label> <br/>
           <input type="text" id="name"><br/>
           <label for="email">Email:</label> <br/>
           <input type="email" id="email"><br/>
           <label for="comments">Mesajınız:</label> <br/>
           <textarea id="comments" placeholder="Mesajınız"></textarea><br/>  
           <!-- Honeypot for spams -->
           <input type="text" name="_gotcha" style="display:none" />
           <input type="submit">
       </form>
</div>

   <div id="thankyouBlock" style="display:none">
       <p>
           Mesajınız başarıyla iletildi, değerli görüşleriniz için çok teşekkürler.
       </p>
   </div>

   <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
   <script src="test.js"></script>
