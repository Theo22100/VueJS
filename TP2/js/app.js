let vm = new Vue({

    el: '#app',

    data: {
        message: 'Bonjour',

        link: "https://google.com",

        cls: 'success',

        persons: ['Alex', 'Barnabé', 'Comore', 'Billy'],

    },

    methods: {
        addPerson: function () {


            this.persons.push('Marion')


        },
    },

    mounted: function () { // N'existe pas avant le beforeCreate
        console.log(this.$el)
    }

})