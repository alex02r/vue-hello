const { createApp } = Vue;

createApp({
    data(){
        return{
            text: 'Messaggio da visualizzare'
        }
    }
}).mount('#app');