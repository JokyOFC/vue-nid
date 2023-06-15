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
            <button v-on:click="redirectToIndex" style="width: 64px!important; height: 64px!important;">
                <img src="../assets/exit.svg" alt="login" style="width: 32px!important; height: 32px!important;">
            </button>
        </div>
    </header>

    <section>
        <ModalCadastro :showModalCad="showModalCad" :closeModalCadFunc="closeModalCad"/>
        <ModalUpdate :showModalUpd="showModalUpd" :closeModalUpdFunc="closeModalUpd"/>
        <ModalDelete :showModalDel="showModalDel" :closeModalDelFunc="closeModalDel"/>
        <TabAdmin :eventos=eventos :openModalCadFunc="openModalCad" :openModalUpdFunc="openModalUpd" :openModalDelFunc="openModalDel" />
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

import axios from 'axios';
import TabAdmin from '../components/TabAdmin.vue';
import ModalCadastro from '@/components/ModalCadastro.vue';
import ModalUpdate from '@/components/ModalUpdate.vue';
import ModalDelete from '@/components/ModalDelete.vue';

export default {
    name: 'Admin',
    components: {
        TabAdmin,
        ModalCadastro,
        ModalUpdate,
        ModalDelete
    },
    mounted() {
        this.trazerEventos();
    }, 
    data() {
        return {
            eventos: [],
            showModalCad: false,
            showModalUpd: false,
            showModalDel: false,
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
        redirectToIndex() {
            this.$router.push('/');
        },
        openModalCad() {
            this.showModalCad = true;
            console.log(this.showModalCad)
        },
        closeModalCad() {
            this.showModalCad = false;
            console.log(this.showModalCad)
        },
        openModalUpd() {
            this.showModalUpd = true;
            console.log(this.showModalUpd)
        },
        closeModalUpd() {
            this.showModalUpd = false;
            console.log(this.showModalUpd)
        },
        openModalDel() {
            this.showModalDel = true;
            console.log(this.showModalUpd)
        },
        closeModalDel() {
            this.showModalDel = false;
            console.log(this.showModalUpd)
        }
    }
}

</script>

<style lang="scss">

@import '@/styles/ltd.scss';
@import '@/styles/ltd.css';

</style>
