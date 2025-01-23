<script setup> 
import hospitalcomponent from '@/components/hospitalcomponent.vue';
</script>
<template>
<div class="container">
<div class="left">
<a href="/" class="home">
<img src="../assets/homeicon.svg" alt="">
</a>
<a href="https://www.facebook.com/" class="lineone">
<span>
    Facebook
</span>
<img src="../assets/facebookicon.svg" alt="">
</a>
<a href="https://web.telegram.org/" class="linetwo">
    <img src="../assets/telegramicon.svg" alt="">
<span>
    Telegram
</span>

</a><a href="https://mail.google.com/" class="lineone">
<span>
    Email
</span>
<img src="../assets/emailicon.svg" alt="">
</a>
<a href="https://web.whatsapp.com/" class="linetwo">
    <img src="../assets/whatsicon.svg" alt="">
<span>
    WhatsApp
</span>

</a>
<a  class="lineone">
<span>
    Phone Number
</span>
<img src="../assets/phoneicon.svg" alt="">
</a>
</div>
<hospitalcomponent/>
</div>

</template>
<style scoped>
.lineone span{
    width: 53.5rem;
    font-family: Tajawal;
    font-size: 3rem;
    font-weight: 400;
    line-height: 3rem;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: white;
}
.linetwo span{
    width: 53.5rem;
    font-family: Tajawal;
    font-size: 3rem;
    font-weight: 400;
    line-height: 3rem;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: white;
}
.home{
    background: rgba(112, 178, 241, 1);
    width: 6.5rem;
    height: 5rem;
    border-bottom-right-radius: 3.125rem;
    border-top-right-radius: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.linetwo{
    background: rgba(112, 178, 241, 1);
    width: 109.5625rem;
    height: 6.35rem;
    border-bottom-left-radius: 3.125rem;
    border-top-left-radius: 3.125rem;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.lineone{
    background: rgba(112, 178, 241, 1);
    width: 109.5625rem;
    height: 6.35rem;
    border-bottom-right-radius: 3.125rem;
    border-top-right-radius: 3.125rem;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.left{
    width: 109.5rem;
    height: 64.25rem;
    background-color: white;
    border-radius: 1.25rem;
    box-shadow: 0.3125rem 0.4375rem 0.125rem 0px rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 3.75rem;
    padding-top: 1.25rem;
}
.container{
    width: 100%;
    height: 81.25rem;
    background-color: rgba(112, 178, 241, 1);
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 1.5rem;
    padding-top: 5.625rem;
}
</style>