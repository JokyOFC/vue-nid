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
            <button v-on:click="redirectToLogin">
                <img src="../assets/user.svg" alt="login">
            </button>
        </div>
    </header>
    <section>
        <div id="nid">
            <h3>O que é o NID?</h3>
            <p>
                O Núcleo de Inclusão Digital (NID) é uma iniciativa do Centro Universitário Uniruy em parceria com os estudantes dos cursos de Tecnologia da Informação que surgiu com o objetivo de auxiliar pessoas em situação de vulnerabilidade, fornecendo aulas e monitorias de ferramentas e habilidades básicas, tais como: utilizar o computador, acessar a internet e utilizar os softwares Word e Powerpoint, a fim de proporcionar aos participantes melhores chances no mercado de trabalho, através da inclusão digital.
            </p>
        </div>
        <Tab :eventos=eventos />

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

import Tab from '../components/Tab.vue'
import axios from 'axios';

export default {
    name: 'Index',
    components: {
        Tab
    },
    mounted(){
        this.trazerEventos();
    },
    data() {
        return {
            eventos: [],
        };
    },
    methods: {
        async trazerEventos() {
            await axios.get('https://ltd-nid-api.onrender.com/select/eventos')
                .then(response => {
                    // Manipule a resposta aqui
                    console.log(response.data);
                    this.eventos = response.data;
                })
                .catch(error => {
                    // Manipule o erro aqui
                    console.error(error);
                });
        },
        redirectToLogin() {
            this.$router.push('/login');
        }
    }

}

</script>

<style lang="scss">

@import '@/styles/ltd.scss';

</style>