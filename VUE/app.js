const app=Vue.createApp({
    data(){
        return{
            firstName:'Jhon',
            lastName: 'Doe',
            email: 'jhon@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
        getUser(){            
            this.firstName='Sam'
            this.lastName='Smith'
            this.email='sam@gmail.com'
            this.gender='female'
            this.picture= 'https://randomuser.me/api/portraits/men/10.jpg'
            console.log(this.firstName)
        }
    },
    
    methods:{

        async getUser(){

            const res = await fetch ('https://randomuser.me/api')
            const {results} = await re.json()

            this.firstName=results[0].name.first
            this.lastName=results[0].name.last
            this.email=results[0].email
            this.gender=results[0].gender
            this.picture= results[0].picture.large

            console.log(results)
        }
    }
})
app.mount('#app')