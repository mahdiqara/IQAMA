<script>

</script>
<template> 

<div class="pakagecontainer">
              <div class="top">
                <span class="pakagename">Basic</span>
              </div>
              <div class="pakageimage">
                <img style="height: 188px;" src="../assets/pakageimg.svg" alt="">

              </div>
              <div class="pakagenumber">
                <p class="name">Previous questions</p>
                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <div class="enterleft">
             <button  class="Preview"> <a href="">Enter</a></button>

                </div>
              </div>
            </div>

</template>
<style scoped>
.enterleft {
  width: 100%;
  padding-left: 1rem;
}

.pakagecontainer {
  width: 22.5rem;
  height: 30rem;
  gap: 0px;
  border-radius: 0.75rem;
  opacity: 0px;
  box-shadow: 0.125rem 0.1875rem 0.125rem 0px rgba(0, 0, 0, 1);
  background: rgba(77, 153, 224, 1);
}

.Preview a {
  color: #000;
}

.Preview {
  width: 6.1875rem;
  height: 2.5rem;
  border-radius: 6.25rem;
  border: none;
  box-shadow: 0.25rem 0.3125rem 0.25rem 0px rgba(0, 0, 0, 1);
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 2rem;
  cursor: pointer;
}

.pakagenumber .des {
  width: 18.125rem;
  height: 2.5rem;
  font-size: 0.9375rem;
  font-weight: 400;
  text-align: end;
  color: white;
  margin-top: 2rem;
}

.pakagenumber .name {
  font-weight: 400;
  text-align: right;
  text-underline-position: from-font;
  color: white;
  font-size: 1.125rem;
}

.pakagenumber .questions {
  color: white;
  font-size: 0.9375rem;
}

.pakagenumber {
  width: 100%;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
}

.threedots {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}

.pakagename {
  width: 14.75rem;
  height: 1.75rem;
  font-size: 1.4375rem;
  font-weight: 400;
  text-align: left;
  color: rgb(255, 255, 255);
  line-height: 1.6875rem;
  margin-left: 1rem;
}

.top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 0.375rem;
  height: 4.5rem;
}

.pakagepic {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  width: 2.5rem;
  border-radius: 50%;
  height: 2.5rem;
  background: rgba(211, 193, 255, 1);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
