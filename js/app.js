new Vue({

    el: '#app',

    data: {
        message: 'Bonjour',

        link: "https://google.com",

        // success: true,    A la place d'avoir cette propriété:
        cls: 'success',

        persons: ['Alex', 'Barnabé', 'Comore', 'Billy'],

        style: {background : '#000'}
    },

    methods: {
        close: function () {

            //this.message ="Fermé"

            this.success=false

        },

        style: function () {
            if (this.success){
                return {background: '#00FF00'}
            } else {
                return {background: '#FF0000'}
            }
        }
    }

})
