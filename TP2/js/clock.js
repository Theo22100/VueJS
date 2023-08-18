let vm = new Vue({
    el: '#clock',
    data: {

        seconds: 0
    },

    mounted: function () {

        this.$interval= setInterval(() => {
            console.log('Time')
            
            this.seconds++
        },1000) // 1000ms

    },

    destroy: function (){

        clearInterval(this.$interval)
    }

})