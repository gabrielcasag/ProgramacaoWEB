<template>
  <div id="container">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,85.3C384,85,480,139,576,186.7C672,235,768,277,864,261.3C960,245,1056,171,1152,144C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
  </div>  
</template>

<script>
export default {
  name: 'Background'
}
</script>

<style>
svg {
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
}
</style>