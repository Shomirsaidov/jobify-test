<template>
  <div class="flex justify-center items-center w-full h-full">

    <div class="space-y-4 md:w-1/3 w-full shadow-lg border-2 rounded-xl bg-white">

      <div class="p-8 rounded-xl rounded-b-none" style="background-image: radial-gradient( circle 369px at -2.9% 12.9%,  rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% );">
        <h1 class="font-black text-xl p-8">Jobify Tech Fest</h1>
        <input type="range" v-model="this.progressValue">
      </div>

      <div class="space-y-4 bg-white p-8 pt-2 rounded-xl">
        <p class="font-bold text-lg max-w-80">
          {{ questionData.title }}
        </p>
        <div class="flex flex-col space-y-4">
          <div class="flex space-x-2" v-for="(variant, key) in questionData.variants" :key="key">
            <input :id="`v${key}`" type="radio" name="variant" class="text-md font-bold">
            <label :for="`v${key}`" class="text-lg">{{ variant }}</label>
          </div>

         
        
        </div>
        <div class="flex justify-end">
          <button class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full" 
          @click="gotoNext">Далее</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: ['questionData'],
  name: 'Card',
  computed: {
    progressValue() {
      let oneP = this.$store.getters.questionsLang.length / 100
      let r = (this.$store.state.currentCardIndex) / oneP
      return r
    }
  },
  mounted() {
    console.log('Mounted !!!')
    console.log(this.questionData)
  },
  watch: {
    questionData() {
      document.getElementById('v0') ? document.getElementById('v0').checked = false : ''
      document.getElementById('v1') ? document.getElementById('v1').checked = false : ''
      document.getElementById('v2') ? document.getElementById('v2').checked = false : ''
      document.getElementById('v3') ? document.getElementById('v3').checked = false : ''
    }
  },
  methods: {
    gotoNext() {
      let answerIndex = null;
      if(document.getElementById('v0') && document.getElementById('v0').checked == true) {
        answerIndex = 0
      } 
      if(document.getElementById('v1') && document.getElementById('v1').checked == true) {
        answerIndex = 1
      }
      if(document.getElementById('v2') && document.getElementById('v2').checked == true) {
        answerIndex =  2
      }
      if(document.getElementById('v3') && document.getElementById('v3').checked == true) {
        answerIndex = 3
      }   

      console.log('answer index is ' + answerIndex)

      // if(answerIndex == null) {
      //   return
      // }
      if(this.$store.getters.questionsLang.length - 1 == this.$store.state.currentCardIndex) {
        console.log('Quiz finished')
        this.$router.push('/finish/' + 'schools')
      }
      else {
        this.$store.state.currentCardIndex += 1
        this.$store.commit('distributeLangScores', {answerIndex})
      }
      document.documentElement.requestFullscreen()
    }
  }
}
</script>







