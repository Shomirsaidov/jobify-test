<template>

    <div class="flex justify-center items-center w-full h-full">

        <div>
            <div class="p-4 rounded-xl shadow-xl">
                <h1 style="color: rgb(255, 255, 255);" class="text-2xl font-black">Jobify Tech Test</h1>
            </div>

            <div class="bg-white shadow-xl p-8 min-w-1/2 flex flex-col space-y-4 rounded-md" style="background-image: radial-gradient( circle 369px at -2.9% 12.9%,  rgba(247,234,163,1) 0%, rgba(236,180,238,0.56) 46.4%, rgba(163,203,247,1) 100.7% );">
                <h1 class="font-black text-xl">Пройдите тест и найдите <br> новые возможности</h1>
                <div class="shadow-xl p-2 rounded-xl border-2 cursor-pointer bg-white" @click="() => this.$router.push('/it')">
                    <h1 class="text-lg font-bold">Подобрать курсы по программированию</h1>
                </div>
                <div class="shadow-xl p-2 rounded-xl border-2 cursor-pointer bg-white" @click="() => this.$router.push('/lang')">
                    <h1 class="text-lg font-bold">Подобрать курсы языкознания</h1>
                </div>
                <div  class="flex justify-center p-4">
                    <img src="../assets/qr.png" width="140" alt="">
                </div>

                <h1 class="">Doleap Team & Abubakr Shomirsaidov</h1>

            </div>
        </div>

    </div>



    

</template>