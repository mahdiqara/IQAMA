<script setup>
import PakageOne1 from '../components/pakageone1.vue';
import PakageTwo1 from '../components/pakagetwo1.vue';
import PakageThree1 from '../components/pakagethree1.vue';
import PakageFour1 from '../components/pakagefour1.vue';
import PakageFive1 from '../components/pakagefive1.vue';
</script>

<template>
    <div class="container">

   <div class="hosbitalimg">
        <img class="hosimg" src="../assets/hospitals.svg" alt=""/>
        <div class="pakages">
            <div class="wide">
                <p class="name">Service Bureau Package </p>
                <button>Subscribe</button>
            </div>
         
          <div class="pakagelineone">
            <PakageOne1 />
            <PakageTwo1 />
            <PakageThree1 />
          </div>
          <div class="pakagelinetwo">
            <PakageFour1 />
            <PakageFive1 />
          </div>
        </div>
      </div>
    </div>

</template>
<style scoped>
.name{
    font-family: Tajawal;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
}
.wide button{
    width: 20.1875rem;
    height: 3rem;
    border-radius: 6.25rem;
    background: rgba(77, 153, 224, 1);
    box-shadow: 0.125rem 0.1875rem 0.125rem 0px rgba(0, 0, 0, 1);
    border: none;
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
}
.container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.hosbitalimg{
    gap: 0.625rem;
    position: relative;
}
.pakages{
    width: 92.375rem;
    height: 84.25rem;
    position: absolute;
    top: 7.8125rem;
    left: 11.8125rem;
    padding-top: 3.125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
}
.wide{
    width: 72.6875rem;
    height: 4.25rem;
    border-radius: 1.25rem;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(77, 153, 224, 1);
    -webkit-text-stroke: 0.01875rem rgb(0, 0, 0);
    text-shadow: 0px 0.125rem 0.0625rem rgb(0, 0, 0);
    padding-top: 0.3125rem;
    box-shadow: 0px 0.125rem 0.0625rem rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9.375rem;
}
.pakagelinetwo{
    display: flex;
    height: 31.25rem;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
}
.pakagelineone{
    height: 31.25rem;
    display: flex;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
}
.right{
    width: 86.25rem;
    background: rgba(112, 178, 241, 1);
    padding-left: 2.625rem;
    height: calc(180vh - 12.5rem);
    padding-top: 4.6875rem;
}
a{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.border{
    height: 100%;
    width: 0.125rem;
    background-color: black;
}
.terms{
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    color: white;
}
.home{
    width: 22.5625rem;
    height: 3.5rem;
    border-radius: 6.25rem;
    background: rgba(77, 153, 224, 1);
    display: flex;
    align-items: center;
    gap: 0.21875rem;
}
.left{
    position: fixed;
    left: 0;
    top: 0;
    width: 33.75rem;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0.625rem;
    padding-left: 2rem;
    padding-top: 4.6875rem;
}
.imgs{
    width: 18.25rem;
    height: 55rem;
}
.container{
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: start;
    justify-content: end;
}
</style>
