<template>

    <div class="flex justify-center items-center w-full h-full py-8">

    <div class="lg:w-1/3 shadow-lg border-2 rounded-xl bg-white">

        <div class="p-8 rounded-xl rounded-b-none" style="background-image: radial-gradient( circle 369px at -2.9% 12.9%,  rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% );">
            <h1 class="font-black text-xl p-8">Наша подборка для вас</h1>
            <!-- <input type="range" v-model="this.progressValue"> -->
            <div class="flex justify-center" @click="refresh">
                <h1 class="font-semibold rounded-xl text-blue-700 p-2 cursor-pointer bg-gray-100">Начать заново</h1>
            </div>
        </div>

        <div class="flex flex-col space-y-2 rounded-xl rounded-t-none bg-gray-200">
            <div class="flex items-center space-x-4 rounded-xl bg-white p-4" v-for="reco in this.stats">
                <img :src="require('../assets/' + reco.name + '.png')" class="rounded-full" alt="" width="50">
                <div class="flex items-center space-x-4">
                    <h1 class="font-black text-lg text-start">{{ reco.name }}</h1>
                    <span class="bg-green-300 text-green-900 rounded-full p-2">{{ reco.scores }}</span>
                </div>
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
    methods: {
        refresh() {
            location.href = '/'
        }
    },
    mounted() {
        let data = this.$store.state[this.$route.params.quiz]
        data.sort((a, b) => (a.scores < b.scores) ? 1 : -1)
        this.stats = data
        setTimeout(() => location.href = '/',150000)
    }
}
</script>





