<template>
    <div v-if="showModalDel" id="ModalDelete">
            <div id="content">
                <input @click="closeModalDelFunc" id="close_deleteModal" type="button" value="X" style=" display: flex; font-size: 20px; margin: auto 0 0 auto; background: none; border: none; cursor: pointer;" />
                <h1>Apagar Evento</h1>
                <form @submit.prevent="deleteEvento" class="deleteEvento" id="deleteEvento">
                    <div id="colunas">
                        <div id="coluna">
                            <div id="campo"> 
                                <label>Tem certeza que deseja excluir esse evento?</label>
                            </div>
                        </div>
                    </div>
                    
                    <div id="radioButtons">

                    </div>
                    <input type="submit" style="width: 128px!important; height: 36px!important; margin-top: 35px; color: white; border: none; border-radius: 100px; background-color: #4FA095; font-size: 12px;" />
                </form>
            </div>
        </div>
</template>

<style lang="scss">



</style>

<script>

import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'ModalDelete',
    props: {
            idEvento : {
                type: String,
                required: true
            },
            showModalDel: {
                type: Boolean,
                required: true
            },
            closeModalDelFunc: {
                type: Function,
                required: true
            },
        },
        computed: {
            ...mapState(['idEventoState'])
        },
    methods: {
        closeModalDelFunc() {
            this.closeModalDelFunc(); // Chama a função passada como prop
        },
        async deleteEvento(){

            const token = localStorage.getItem('token');

            try {

                console.log(this.idEventoState)
            const response = await axios.delete('https://ltd-nid-api.onrender.com/delete/eventos/' + this.idEventoState, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            
            //Execute qualquer ação necessária após o login, como redirecionar para outra página
            this.$router.push('/Admin');
            } catch (error) {
            console.error(error);
            }
        }
    }
    
    }
</script>
