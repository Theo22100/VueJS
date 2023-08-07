new Vue({

    el: '#app',

    data: {
        message: 'Bonjour',

        link: "https://google.com",

        succes: true,

        persons: ['Alex', 'Barnabé', 'Comore', 'Billy']
    },

    methods: {
        close: function () {
            this.message ="Fermé"

            this.succes=false

        }
    }

})
