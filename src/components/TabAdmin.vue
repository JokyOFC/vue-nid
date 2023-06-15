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
                            <th>Horário encerramento</th>
                            <th>Sala</th>
                            <th>Status</th>
                        </tr>
        
                        <tr v-for="evento in eventos" :key="evento.id">
                            <td>{{ evento.data }}</td>
                            <td>{{ evento.name }}</td>
                            <td>{{ evento.horario_inicio }}</td>
                            <td>{{ evento.horario_final }}</td>
                            <td>{{ evento.sala }}</td>
                            <td>{{ evento.status }}</td>
                            <td>
                                <button id="updateModal" style="width: 100px!important; height: 20px!important; margin-top: 10px; color: white; border: none; border-radius: 100px; background-color: #4FA095; font-size: 12px; display:inline-block; margin-right: 10px;" class="btn btn-warning me-2" >atualizar</button>
                                <button id="deleteModal" style="width: 100px!important; height: 20px!important; margin-top: 10px; color: white; border: none; border-radius: 100px; background-color: #4FA095; font-size: 12px; display:inline-block; margin-right: 10px;" class="btn btn-danger">excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button id="openModal" style="width: 200px!important; height: 64px!important; margin-top: 35px; color: white; border: none; border-radius: 100px; background-color: #4FA095; font-size: 17px; cursor: pointer;">
                    Cadastrar Evento
                </button>
            </div>
        </div>
</template>

<script>

export default {
    name: 'TabAdmin'
    // props: {
    //   evento: Array
    // }
    }
</script>
