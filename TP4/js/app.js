// Propre directive

Vue.directive('salut',{
    bind: function (el, binding, vnode){
        el.value=binding.value
        console.log('bind')
    },
    update : function (el, binding, vnode, oldvnode){
        console.log('update')
    }
})

/* OU ON PEUT FAIRE CA 


Vue.directive('salut',function (el, binding){
        el.value=binding.value
        console.log('bind')
    })


*/

//Propre directive avec variable

let salut = function (el,binding){
    el.value=binding.value
    console.log('bind')
}


let vm = new Vue({

    el: '#app',

    directives: {
        salut: salut
    },

    data: {

        message: 'Jean',

    },

    methods: {
        demo: function (e){ //function (e) Recupère l'event
           // console.log('Test', e.preventDefault()) // @click.prevent dans index.html
        }

    }
})