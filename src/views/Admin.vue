<template>

    <header>
        <div id="logo">
            <img src="../assets/ltd-logo.png" alt="ltd-logo">
        </div>

        <div id="title">
            <h1>NID</h1>
            <h2>Nucleo de Inclusão Digital</h2>
        </div>

        <div id="login">
            <button onclick="gotoLink(this)" value="login.html" style="width: 64px!important; height: 64px!important;">
                <img src="../assets/exit.svg" alt="login" style="width: 32px!important; height: 32px!important;">
            </button>
        </div>
    </header>

    <section>
        <TabAdmin/>
    </section>

    <footer>
        <div id="infos">
            <div id="info">
                <p>Professora responsável: Talita Rocha Pinheiro</p>
            </div>

            <div id="info">
                <img src="../assets/whatsapp.svg" alt="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=5571991340502&text=Ol%C3%A1!" target="_blank" rel="external">
                    (71) 9 9134 - 0502
                </a>
            </div>

            <div id="info">
                <img src="../assets/pin.svg" alt="pin">
                <a href="https://goo.gl/maps/J8pV45ugD3wv1Hqy5" target="_blank" rel="external">
                    Av. Luís Viana Filho, 3172 - Paralela, Salvador - BA
                </a>
            </div>
        </div>
    </footer>
</template>

<script>

import TabAdmin from '../components/TabAdmin.vue';

export default {
    name: 'Admin',
    components: {
        TabAdmin
    }
}

</script>

<style lang="scss">

@import '@/styles/ltd.scss';

</style>
