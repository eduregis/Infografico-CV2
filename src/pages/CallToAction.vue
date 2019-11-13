<template>
<div>
  Call To Action
  <router-link :to="{ name: 'Page1' }">    
    <button>Page1</button>
  </router-link> 
  <router-link :to="{ name: 'Page2' }">    
    <button>Page2</button>
  </router-link> 
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
