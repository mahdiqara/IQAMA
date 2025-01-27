<script setup>
import PakageOne2 from '../components/pakageone2.vue';
import PakageTwo2 from '../components/pakagetwo2.vue';
import PakageThree2 from '../components/pakagethree2.vue';
</script>

<template>
    <div class="container">

   <div class="hosbitalimg">
        <img class="hosimg" src="../assets/hospitalss.svg" alt=""/>
        <div class="pakages">
            <div class="wide">
                <p class="name">Medical Services Package </p>
                <button>Subscribe</button>
            </div>
         
          <div class="pakagelineone">
            <PakageOne2 />
            <PakageTwo2 />
            <PakageThree2 />
          </div>
      
        </div>
      </div>
    </div>

</template>
<style scoped>
.hosimg{
    width: 100%;
    height: 100%;
}
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
    max-height: 1250px;
  
    
}
.hosbitalimg{
    gap: 0.625rem;
    position: relative;
}
.pakages{
    width: 92.375rem;
    height: 60.25rem;
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
</style>

