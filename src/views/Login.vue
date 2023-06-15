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

            <form class="mt-4">
                <div class="form-outline mb-4 h5">
                    <label class="form-label" for="form2Example1">Usuário</label>
                    <input type="email" id="form2Example1" class="form-control rounded-pill" />
                </div>
              
                <div class="form-outline mb-4 h5">
                    <label class="form-label" for="form2Example2">Senha</label>
                    <input type="password" id="form2Example2" class="form-control rounded-pill" />
                </div>

                <div class="d-flex justify-content-center">
                    <input type="submit" class="btn rounded-pill btn-lg px-5" />
                </div>
            </form>
        </div>
    </div>   
</template>

<script>


</script>

<style lang="scss">

// @import '@/styles/ltd.scss';
@import '@/styles/login.scss';
// @import '@/styles/login.css'


</style>