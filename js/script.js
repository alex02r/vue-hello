const { createApp } = Vue;

createApp({
    data(){
        return{
            text: 'Minecraft',
            img: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft_image1600w.jpg'
        }
    }
}).mount('#app');