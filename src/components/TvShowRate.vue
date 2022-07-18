<template>
	<div class="rate">
    <div class="rate-colored"  :style="{ width: (rate*100)/10 + '%' }">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star.png" alt="" class="max-15">
    </div>
    <div class="rate-uncolored">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15 me-1">
      <img src="../assets/icons/star-unactive.png" alt="" class="max-15">
  </div>
</div>
</template>

<script>
export default {
	name: 'TvShowRate',
	props: ['rate']
		
	
}
</script>

<style scoped lang="scss">
.rate {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    display: inline-flex;
    
    &-colored {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      white-space: nowrap;
    }
  
    &-uncolored {
    }
  }
  .max-15{
    width: 15px;
  }

</style>


