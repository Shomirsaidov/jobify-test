<template>
  <div>

    <div class="h-full">
      <Card  
        :questionData="this.$store.getters.questions[this.$store.state.currentCardIndex]"
      />
    </div>
    

  </div>
</template>

<script>
import Card from './Card.vue';

export default {
    components: { Card }
}
</script>

