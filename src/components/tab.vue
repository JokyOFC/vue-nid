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
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      evento: Array
    }
  }
  </script>
  