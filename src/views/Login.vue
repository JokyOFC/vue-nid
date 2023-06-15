<template>
    <div id="caixa">
        <header>
            <img src="../assets/NID-banner.png" alt="NID-banner">
            <hr>
        </header>

        <div id="formulario">
            <div class="mt-4">
                <p class="h1 text-center">LOGIN</p>  
            </div>

            <form class="mt-4" @submit.prevent="login">
                <div class="form-outline mb-4 h5">
                    <label class="form-label" for="form2Example1">Usuário</label>
                    <input type="email" id="form2Example1" class="form-control rounded-pill" v-model="username" />
                </div>
              
                <div class="form-outline mb-4 h5">
                    <label class="form-label" for="form2Example2">Senha</label>
                    <input type="password" id="form2Example2" class="form-control rounded-pill" v-model="password" />
                </div>

                <div class="d-flex justify-content-center">
                    <input type="submit" class="btn rounded-pill btn-lg px-5" />
                </div>
            </form>
        </div>
    </div>   
</template>

<script>

    import axios from 'axios';
    import { encode } from 'base-64';

    export default {
        name: 'login',
        methods: {
            async login() {
                try {

                    console.log(this.username+":"+this.password)
                    let credentials = encode(`${this.username}:${this.password}`);
                    const response = await axios.get('https://ltd-nid-api.onrender.com/login', {
                        headers: {
                            'Authorization': `Basic ${credentials}`
                        }
                    });
                    
                    const token = response.data.token;
                    
                    // Salve o token no armazenamento local (localStorage)
                    localStorage.setItem('token', token);
                    
                    // Execute qualquer ação necessária após o login, como redirecionar para outra página
                    this.$router.push('/Admin');
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }

</script>

<style lang="scss">

// @import '@/styles/ltd.scss';
@import '@/styles/login.scss';
// @import '@/styles/login.css'


</style>