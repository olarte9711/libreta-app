<template>
    <div id="UserAgregarGasto">
        <div class="continer_user_transaction">
            <h2> Agregar Gasto </h2>

            <form v-on:submit.prevent="processAgregarGasto" >
                <input type="text" v-model="name" placeholder="nombre del gasto">
                <br>
                <input type="text" v-model="value" placeholder="Valor">
                <br>
                
                <button type="submit">Insertar</button>
            </form>
        <button type="submit"> Ver todos los gastos</button>
        </div>
    
    </div>
</template>

<script>

import axios from 'axios';
export default {
    name: "UserAgregarGasto",
    data: function(){
        return{
            username: "none",
            name:"",
            date:"2020-12-23T01:08:45.259Z",
            value: ""
        }
    },

    methods:{
        processAgregarGasto: function(){
            var self = this
            let agregarGasto_in = {
                username: this.username,
                name: this.name,
                date: this.date,
                value: this.value
            }
            axios.put("https://libretapp-api.herokuapp.com/user/gastos/crearGasto/", agregarGasto_in,  {headers: {}})
                .then((result) => {
                    alert("Se ha agregado el gasto correctamente, Valor " + result.data.value);
                    
                })
                .catch((error) => {
                      alert("ERROR No se puedo agregar el gasto");
                });
        }
    },

    created: function(){
        this.username = this.$route.params.username
    }

}
</script>

<style>
    #UserAgregarGasto {
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .continer_user_transaction {
        border: 3px solid  #283747;
        border-radius: 10px;
        background: #000000;
        width: 25%;
        height: 60%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #UserAgregarGasto h2{
        color: #ffffff;

    }

    #UserAgregarGasto form{
        width: 50%;
        
    }

    #UserAgregarGasto input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #283747;
        
    }

    

    #UserAgregarGasto button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }

    #UserAgregarGasto button:hover{
        color: #E5E7E9;
        background: crimson;
        border: 1px solid #283747;
    }
</style>