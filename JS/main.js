const app = new Vue ({
    el: "#root",
    data: {
        todos: [
            {
                text: "Fare la spesa",
                done: false
            },
            {
                text: "Fare il bucato",
                done: true
            },
            {
                text: "portare a spasso il cane",
                done: false
            },
            {
                text: "Preparare il pranzo",
                done: true
            }
        ],
        testoInserito: ""
    },
    methods: {
       rimozione: function(index){
           this.todos.splice(index, 1)
       },
       
       aggiunta: function(){
           let nuovoOggetto = {text: this.testoInserito};
           this.todos.push(nuovoOggetto)
       },

       inversione: function(index){
           if(this.todos[index].done == false){
            this.todos[index].done = true;
           }else{
            this.todos[index].done = false;
           }
       }
    },
});