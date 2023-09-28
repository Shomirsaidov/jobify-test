<template>

    <div class="flex justify-center items-center w-full h-full">

    <div class=" w-1/4 shadow-lg border-2 rounded-xl bg-white">

        <div class="p-8 rounded-xl rounded-b-none" style="background-image: radial-gradient( circle 369px at -2.9% 12.9%,  rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% );">
            <h1 class="font-black text-xl p-8">Наша подборка для вас</h1>
            <!-- <input type="range" v-model="this.progressValue"> -->
            <h1 class="">Спасибо !!!</h1>
        </div>

        <div class="flex flex-col space-y-2 rounded-xl rounded-t-none bg-gray-200">
            <div class="flex items-center space-x-4 rounded-xl bg-white p-4" v-for="reco in this.stats">
                <img :src="require('../assets/' + reco.name + '.png')" alt="" width="50">
                <h1 class="font-black text-lg">{{ reco.name }}</h1>
            </div>
        </div>

        

    </div>

    </div>

</template>

<script>
export default {
    // props: ['data'],
    data: () => ({
        stats: null
    }),
    mounted() {
        let data = this.$store.state[this.$route.params.quiz]
        data.sort((a, b) => (a.scores < b.scores) ? 1 : -1)
        this.stats = data
        setTimeout(() => location.href = '/',45000)
    }
}
</script>





