const AUTO_SAVE_DELAY=2000
const SERVER_CALL_DELAY=1000
let timer

const Counter={
    data(){
        return{
            counter:0,
            quantity:0,
            quantityOnServer:0,
            status:''
        }
    },
    mounted(){
        setInterval(()=>{
            this.counter++
        },1000)
    },
    methods:{
        onQuantityKeyUp(){
            //console.log(`hola ${this.quantity}`)
        },
        onNewQuantity(){
            console.log(`hola ${this.quantity}`)
            clearTimeout(timer)
            timer=setTimeout(this.saveQuantity,AUTO_SAVE_DELAY)
        },
        saveQuantity(){
            this.status='Auto-saving'
            this.simulatedServerCall()
        },
        simulatedServerCall(){
            setTimeout(this.onServerResponse,SERVER_CALL_DELAY)
        },
        onServerResponse(){
            this.status='Saved'
            this.quantityOnServer=this.quantity
        }
    }
}
Vue.createApp(Counter).mount('#app')
