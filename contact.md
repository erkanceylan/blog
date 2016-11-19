---
layout: page
title: Contact
permalink: /contact/
---


## İletişim

<form action="https://formspree.io/erkanceylan4@gmail.com" method="POST">
    <label for="name">İsim: </label><br/>
    <input type="text" name="name"><br/>
    <label for="_replyto">Email: </label><br/>
    <input type="email" name="_replyto" placeholder="Your email"><br/>
    <label for="comments">Mesajınız:</label> <br/>
    <textarea name="message" placeholder="Your message"></textarea><br/>

    <!-- Honeypot for spams -->
    <input type="text" name="_gotcha" style="display:none" />
    <input type="hidden" name="_next" value="//site.io/thanks.html" />
    <input type="submit" value="Send">
</form>
