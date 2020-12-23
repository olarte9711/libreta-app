<template>
    <div id="UserGastos">
        <h2>Datos personales</h2>
        <h3> Username: <span> {{username}} </span></h3>
        <h3>Contraseña: <span> {{password}}</span></h3>
        <h3>Email:  <span>{{email}} </span></h3>
        <h3>Total de gastos es : <span>  {{total_gastos}} COP </span> </h3>

    </div>
</template>

<script>
  import axios from 'axios';
  export default {
      name: 'UserMostrarDatos',
      data: function (){
          return {
              username: "",
              password:"",
              email:"",
              Gasto:"",
              total_gastos: 0
          }
      },
      created: function() {

          this.username = this.$route.params.username

          let self = this
          axios.get("https://libretapp-api.herokuapp.com/user/" + this.username)
              .then((result) => {
                  self.username = result.data.username
                  self.password = result.data.password
                  self.email = result.data.email
                  self.total_gastos=result.data.total_gastos
              })
              .catch((error) => {
                  alert("ERROR Servidor");
              });
      }
  }
</script>

<style>
    #UserGastos{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #UserGastos h2{
        font-size: 50px;
        color: #283747;
    }
    #UserGastos span{
        color: crimson;
        font-weight: bold;
    }
</style>
