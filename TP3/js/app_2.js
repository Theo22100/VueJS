let vm = new Vue({

    el: '#app',

    data: {

        firstname: 'Jean',

        lastname: 'Dupont'


    },
    computed: {

        fullname: {
            get: function() {
                return this.firstname + ' ' + this.lastname
            },

            set: function(value) {

                let parts = value.split(' ')

                this.firstname = parts[0]

                this.lastname = parts[1]
            }
        }
    },

    watch: {
        fullname: function (value) {
            console.log('watch ',value)
        }
    }
})