<template>
    <div v-if="showModalUpd" id="ModalUpdate">
            <div id="content">
                <input @click="closeModalUpdFunc" id="close_updateModal" type="button" value="X" style=" display: flex; font-size: 20px; margin: auto 0 0 auto; background: none; border: none; cursor: pointer;" />
                <h1>Alteração de evento</h1>
                <form class="updateEvento" id="updateEvento">
                    <div id="colunas">
                        <div id="coluna">
                            <div id="campo">
                                <label>Nome do Evento</label>
                                <div>
                                    <input id="input_modal"/>
                                </div>
                            </div>
                            <div id="campo">
                                <label>Data</label>
                                <div>
                                    <input id="input_modal" type="date"/>
                                </div>
                                
                            </div>
                            <div id="campo">
                                <label>Horário de início</label>
                                <div>
                                    <input id="input_modal" type="time"/>
                                </div>
                            </div>
                        </div>
                        <div id="coluna">
                            <div id="campo">
                                <label>Sala</label>
                                <div>
                                    <input id="input_modal"/>
                                </div>
                            </div>
                            <div id="campo">
                                <label>Horário de termino</label>
                                <div>
                                    <input id="input_modal" type="time"/>
                                </div>
                            </div>
                            <div id="campo">
                                <label>Status</label>
                                <div id="campo">
                                    <input type="checkbox" id="confirmado" name="confirmado" checked>
                                    <label for="confirmado">confirmado</label>
                                </div>

                                <div id="campo">
                                    <input type="checkbox" id="finalizado" name="finalizado">
                                    <label for="finalizado">finalizado</label>
                                </div>
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

export default {
    name: 'ModalUpdate',
    props: {
            showModalUpd: {
                type: Boolean,
                required: true
            },
            closeModalUpdFunc: {
                type: Function,
                required: true
            },
        },
    methods: {
        closeModalUpdFunc() {
            this.closeModalUpdFunc(); // Chama a função passada como prop
        },
    }
    
    }
</script>
