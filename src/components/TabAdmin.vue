<template>
    <div id="events">
            <h3>Calendário de eventos</h3>

            <div id="calendar">
                <table>
                    <tbody>
                        <tr>
                            <th>Data</th>
                            <th>Evento</th>
                            <th>Horário inicio</th>
                            <!-- <th>Horário encerramento</th> -->
                            <th>Sala</th>
                            <th>Status</th>
                            <th>Opções</th>
                        </tr>
        
                         <tr v-for="evento in eventos" :key="evento.id">
                            <td>{{ evento.data }}</td>
                            <td>{{ evento.evento_nome }}</td>
                            <td>{{ evento.horario }}</td>
                            <!-- <td>{{ evento.horario_final }}</td> -->
                            <td>{{ evento.sala }}</td>
                            <td>{{ evento.status }}</td>
                            <td>
                                <button @click="openModalUpdFunc" id="updateModal" style="width: 100px!important; height: 30px!important; margin-top: 10px; color: white; border: none; border-radius: 100px; background-color: #4FA095; font-size: 12px; display:inline-block; margin-right: 10px;" class="btn btn-warning me-2" >atualizar</button>
                                <button @click="openModalDelFunc( evento.evento_nome )" id="deleteModal" style="width: 100px!important; height: 30px!important; margin-top: 10px; color: white; border: none; border-radius: 100px; background-color: #4FA095; font-size: 12px; display:inline-block; margin-right: 10px;" class="btn btn-danger">excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button @click="openModalCadFunc" id="openModal" style="width: 200px!important; height: 64px!important; margin-top: 35px; color: white; border: none; border-radius: 100px; background-color: #4FA095; font-size: 17px; cursor: pointer;">
                    Cadastrar Evento
                </button>
            </div>
        </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'TabAdmin',
    props: {
      eventos: Array,
      openModalCadFunc: {
                type: Function,
                required: true,
        },
      openModalUpdFunc: {
                type: Function,
                required: true,
      },
      openModalDelFunc: {
                type: Function,
                required: true,
      },
    },
    computed: {
        ...mapState(['idEventoState'])
    },
    methods: {
        openModalCadFunc() {
            this.openModalCadFunc(); // Chama a função passada como prop
        },
        openModalUpdFunc() {
            this.openModalUpdFunc(); // Chama a função passada como prop
        },
        openModalDelFunc(idEvento) {
            console.log(idEvento)
            this.atualizaEvento(idEvento)
            console.log(this.idEventoState)
            this.openModalDelFunc(idEvento); // Chama a função passada como prop
        },
        ...mapMutations(['atualizaEvento'])
        
    },
    }
</script>
